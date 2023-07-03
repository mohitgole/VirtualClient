﻿// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

namespace VirtualClient
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net.NetworkInformation;
    using System.Runtime.CompilerServices;
    using System.Text.RegularExpressions;
    using System.Threading;
    using System.Threading.Tasks;
    using Microsoft.Extensions.DependencyInjection;
    using VirtualClient.Common.Extensions;
    using VirtualClient.Contracts;

    /// <summary>
    /// Provides methods for editing expressions associated with profile 
    /// components and parameters
    /// </summary>
    public static class ProfileExpressionEvaluator
    {
        // e.g.
        // {fn(512 / 16)]}
        // {fn(512 / {LogicalThreadCount})}
        private static readonly Regex CalculateExpression = new Regex(
            @"\{calculate\(([0-9\*\/\+\-\(\)\s]+)\)\}",
            RegexOptions.Compiled | RegexOptions.IgnoreCase);

        // e.g.
        // {Expression...}
        private static readonly Regex GeneralExpression = new Regex(
            @"\{([\x20-\x7A\x7c\x7E]+)\}+",
            RegexOptions.Compiled | RegexOptions.IgnoreCase);

        // e.g.
        // {PackagePath:redis}
        private static readonly Regex PackagePathExpression = new Regex(
            @"\{PackagePath\:([a-z0-9-_\. ]+)\}",
            RegexOptions.Compiled | RegexOptions.IgnoreCase);

        // e.g.
        // {PackagePath/Platform:fio}
        private static readonly Regex PackagePathForPlatformExpression = new Regex(
            @"\{PackagePath/Platform\:([a-z0-9-_\. ]+)\}",
            RegexOptions.Compiled | RegexOptions.IgnoreCase);

        // e.g.
        // {LogicalCoreCount}
        private static readonly Regex LogicalCoreCountExpression = new Regex(
            @"\{LogicalCoreCount\}",
            RegexOptions.Compiled | RegexOptions.IgnoreCase);

        // e.g.
        // {PhysicalCoreCount}
        private static readonly Regex PhysicalCoreCountExpression = new Regex(
            @"\{PhysicalCoreCount\}",
            RegexOptions.Compiled | RegexOptions.IgnoreCase);

        /// <summary>
        /// The set of expressions and evaluators supported by the editor. Additional expressions
        /// and evaluators can be added (e.g. {PackagePath/Special:redis}).
        /// </summary>
        private static readonly IList<Func<IServiceCollection, string, Task<EvaluationResult>>> Evaluators = new List<Func<IServiceCollection, string, Task<EvaluationResult>>>
        {
            // Expression: {PackagePath:xyz}
            // Resolves to the path to the package folder location (e.g. /home/users/virtualclient/packages/redis).
            new Func<IServiceCollection, string, Task<EvaluationResult>>(async (dependencies, expression) =>
            {
                bool isMatched = false;
                string evaluatedExpression = expression;
                MatchCollection matches = ProfileExpressionEvaluator.PackagePathExpression.Matches(expression);

                if (matches?.Any() == true)
                {
                    isMatched = true;
                    ISystemManagement systemManagement = dependencies.GetService<ISystemManagement>();
                    foreach (Match match in matches)
                    {
                        DependencyPath package = await systemManagement.PackageManager.GetPackageAsync(match.Groups[1].Value, CancellationToken.None);

                        if (package == null)
                        {
                            throw new DependencyException(
                                $"Cannot evaluate expression {{PackagePath:{match.Value}}}. A package with the name '{match.Value}' does not " +
                                $"exist on system or is not registered with Virtual Client.",
                                ErrorReason.DependencyNotFound);
                        }

                        evaluatedExpression = Regex.Replace(evaluatedExpression, match.Value, package.Path);
                    }
                }

                return new EvaluationResult
                {
                    IsMatched = isMatched,
                    Outcome = evaluatedExpression
                };
            }),
            // Expression: {PackagePath/Platform:xyz}
            // Resolves to the path to the package platform-specific folder location (e.g. /home/users/virtualclient/packages/fio/linux-x64).
            new Func<IServiceCollection, string, Task<EvaluationResult>>(async (dependencies, expression) =>
            {
                bool isMatched = false;
                string evaluatedExpression = expression;
                MatchCollection matches = ProfileExpressionEvaluator.PackagePathForPlatformExpression.Matches(expression);

                if (matches?.Any() == true)
                {
                    isMatched = true;
                    ISystemManagement systemManagement = dependencies.GetService<ISystemManagement>();
                    PlatformSpecifics platformSpecifics = systemManagement.PlatformSpecifics;

                    foreach (Match match in matches)
                    {
                        DependencyPath package = await systemManagement.PackageManager.GetPackageAsync(match.Groups[1].Value, CancellationToken.None);

                        if (package == null)
                        {
                            throw new DependencyException(
                                $"Cannot evaluate expression {{PackagePath/Platform:{match.Value}}}. A package with the name '{match.Value}' does not " +
                                $"exist on system or is not registered with Virtual Client.",
                                ErrorReason.DependencyNotFound);
                        }

                        evaluatedExpression = Regex.Replace(
                            evaluatedExpression,
                            match.Value,
                            platformSpecifics.ToPlatformSpecificPath(package, systemManagement.Platform, systemManagement.CpuArchitecture).Path);
                    }
                }

                return new EvaluationResult
                {
                    IsMatched = isMatched,
                    Outcome = evaluatedExpression
                };
            }),
            // Expression: {LogicalCoreCount}
            // Resolves to the count of logical cores on the system (e.g. Environment.ProcessorCount)
            new Func<IServiceCollection, string, Task<EvaluationResult>>(async (dependencies, expression) =>
            {
                bool isMatched = false;
                string evaluatedExpression = expression;
                MatchCollection matches = ProfileExpressionEvaluator.LogicalCoreCountExpression.Matches(expression);

                if (matches?.Any() == true)
                {
                    isMatched = true;
                    ISystemManagement systemManagement = dependencies.GetService<ISystemManagement>();
                    CpuInfo cpuInfo = await systemManagement.GetCpuInfoAsync(CancellationToken.None);

                    foreach (Match match in matches)
                    {
                        evaluatedExpression = Regex.Replace(evaluatedExpression, match.Value, cpuInfo.LogicalCoreCount.ToString());
                    }
                }

                return new EvaluationResult
                {
                    IsMatched = isMatched,
                    Outcome = evaluatedExpression
                };
            }),
            // Expression: {PhysicalCoreCount}
            // Resolves to the count of the physical cores on the system.
            new Func<IServiceCollection, string, Task<EvaluationResult>>(async (dependencies, expression) =>
            {
                bool isMatched = false;
                string evaluatedExpression = expression;
                MatchCollection matches = ProfileExpressionEvaluator.PhysicalCoreCountExpression.Matches(expression);

                if (matches?.Any() == true)
                {
                    isMatched = true;
                    ISystemInfo systemInfo = dependencies.GetService<ISystemInfo>();
                    CpuInfo cpuInfo = await systemInfo.GetCpuInfoAsync(CancellationToken.None);

                    foreach (Match match in matches)
                    {
                        evaluatedExpression = Regex.Replace(evaluatedExpression, match.Value, cpuInfo.PhysicalCoreCount.ToString());
                    }
                }

                return new EvaluationResult
                {
                    IsMatched = isMatched,
                    Outcome = evaluatedExpression
                };
            }),
            // Expression: {calculate(512 * 4)}
            // Expression: {calculate(512 / (4 / 2))}
            // Expression: {calculate(512 / {LogicalCoreCount})}
            //
            // **IMPORTANT**
            // This expression evaluation MUST come last after ALL other expression evaluators.
            new Func<IServiceCollection, string, Task<EvaluationResult>>(async (dependencies, expression) =>
            {
                bool isMatched = false;
                string evaluatedExpression = expression;
                MatchCollection matches = ProfileExpressionEvaluator.CalculateExpression.Matches(expression);

                if (matches?.Any() == true)
                {
                    isMatched = true;
                    foreach (Match match in matches)
                    {
                        string function = match.Groups[1].Value;
                        int result = await Microsoft.CodeAnalysis.CSharp.Scripting.CSharpScript.EvaluateAsync<int>(function);

                        evaluatedExpression = evaluatedExpression.Replace(match.Value, result.ToString());
                    }
                }

                return new EvaluationResult
                {
                    IsMatched = isMatched,
                    Outcome = evaluatedExpression
                };
            })
        };

        /// <summary>
        /// Returns true/false whether the text contains an expression reference (e.g. --port={Port} --threads={LogicalCoreCount}).
        /// </summary>
        /// <param name="text">The text to check for expressions.</param>
        /// <returns>True if the text contains expressions to evaluate.</returns>
        public static bool ContainsReference(string text)
        {
            return ProfileExpressionEvaluator.GeneralExpression.IsMatch(text);
        }

        /// <summary>
        /// Returns true/false whether the parameters contain expression references.
        /// </summary>
        /// <param name="parameters">A set of parameters to check for expression references.</param>
        /// <returns>True if the parameters contain at least 1 expression to evaluate.</returns>
        public static bool ContainsReferences(IDictionary<string, IConvertible> parameters)
        {
            bool containsReferences = false;
            if (parameters?.Any() == true)
            {
                foreach (var entry in parameters)
                {
                    if (entry.Value != null && entry.Value is string)
                    {
                        if (ProfileExpressionEvaluator.GeneralExpression.IsMatch(entry.Value.ToString()))
                        {
                            containsReferences = true;
                            break;
                        }
                    }
                }
            }

            return containsReferences;
        }

        /// <summary>
        /// Evaluates the expression and returns the results.
        /// </summary>
        /// <param name="dependencies">Provides dependencies required for evaluating expressions.</param>
        /// <param name="text">The text having expressions to evaluate.</param>
        /// <returns>Text having any expressions evaluated and replaced with values.</returns>
        public static string Evaluate(IServiceCollection dependencies, string text)
        {
            return ProfileExpressionEvaluator.EvaluateAsync(dependencies, text, CancellationToken.None)
                .GetAwaiter().GetResult();
        }

        /// <summary>
        /// Evaluates any expressions within the set of parameters provided.
        /// </summary>
        /// <param name="dependencies">Provides dependencies required for evaluating expressions.</param>
        /// <param name="parameters">A set of parameters that may have expressions to evaluate.</param>
        public static void Evaluate(IServiceCollection dependencies, IDictionary<string, IConvertible> parameters)
        {
            ProfileExpressionEvaluator.EvaluateAsync(dependencies, parameters, CancellationToken.None)
                .GetAwaiter().GetResult();
        }

        /// <summary>
        /// Evaluates the expression and returns the results.
        /// </summary>
        /// <param name="dependencies">Provides dependencies required for evaluating expressions.</param>
        /// <param name="text">The text having expressions to evaluate.</param>
        /// <param name="cancellationToken">A token that can be used to cancel the operations.</param>
        /// <returns>Text having any expressions evaluated and replaced with values.</returns>
        public static async Task<string> EvaluateAsync(IServiceCollection dependencies, string text, CancellationToken cancellationToken)
        {
            dependencies.ThrowIfNull(nameof(dependencies));

            EvaluationResult evaluation = await ProfileExpressionEvaluator.EvaluateExpressionAsync(dependencies, text, cancellationToken);
            return evaluation.Outcome;
        }

        /// <summary>
        /// Evaluates any expressions within the set of parameters provided.
        /// </summary>
        /// <param name="dependencies">Provides dependencies required for evaluating expressions.</param>
        /// <param name="parameters">A set of parameters that may have expressions to evaluate.</param>
        /// <param name="cancellationToken">A token that can be used to cancel the operations.</param>
        public static async Task EvaluateAsync(IServiceCollection dependencies, IDictionary<string, IConvertible> parameters, CancellationToken cancellationToken)
        {
            // Priority of Parameter evaluation
            // 1) Parameter replacements that are defined within the parameter set itself.
            //
            //    e.g.
            //    Parameters: {
            //        CommandLine: --port={Port},
            //       Port: 6379
            //    }
            //
            // 2) Parameter replacements for well-known expressions.
            //
            //    e.g.
            //    Parameters: {
            //       CommandLine: --port=6389 --threads={LogicalCoreCount}
            //    }
            //
            //    LogicalCoreCount = # of logical cores on system.

            int maxIterations = 5;
            int iterations = 0;
            while (ProfileExpressionEvaluator.ContainsReferences(parameters) && iterations < maxIterations)
            {
                iterations++;

                // We take as many passes through to ensure that all placeholders/expressions have been evaluated. This allows
                // placeholders that are themselves contained/nested within parent placeholders to be successfully resolved.
                ProfileExpressionEvaluator.EvaluateParameterSpecificExpressions(dependencies, parameters, cancellationToken);
                await ProfileExpressionEvaluator.EvaluateWellKnownExpressionsAsync(dependencies, parameters, cancellationToken);
            }
        }

        private static async Task<EvaluationResult> EvaluateExpressionAsync(IServiceCollection dependencies, string text, CancellationToken cancellationToken)
        {
            dependencies.ThrowIfNull(nameof(dependencies));

            bool isMatched = false;
            string evaluatedExpression = text;
            if (!string.IsNullOrWhiteSpace(text) && !cancellationToken.IsCancellationRequested)
            {
                if (ProfileExpressionEvaluator.GeneralExpression.IsMatch(text))
                {
                    foreach (var evaluator in ProfileExpressionEvaluator.Evaluators)
                    {
                        EvaluationResult evaluation = await evaluator.Invoke(dependencies, evaluatedExpression);
                        if (evaluation.IsMatched)
                        {
                            isMatched = true;
                            evaluatedExpression = evaluation.Outcome;
                        }
                    }
                }
            }

            return new EvaluationResult
            {
                IsMatched = isMatched,
                Outcome = evaluatedExpression
            };
        }

        private static bool EvaluateParameterSpecificExpressions(IServiceCollection dependencies, IDictionary<string, IConvertible> parameters, CancellationToken cancellationToken)
        {
            bool matchesFound = false;
            foreach (var parameter in parameters)
            {
                if (!cancellationToken.IsCancellationRequested)
                {
                    if (parameter.Value != null && parameter.Value is string)
                    {
                        MatchCollection expressionMatches = ProfileExpressionEvaluator.GeneralExpression.Matches(parameter.Value.ToString());

                        if (expressionMatches?.Any() == true)
                        {
                            foreach (Match match in expressionMatches)
                            {
                                if (!cancellationToken.IsCancellationRequested)
                                {
                                    // Groups[0] = the full matched text (e.g. {Port})
                                    // Groups]1] = the capture group (e.g. 1234).
                                    if (parameters.TryGetValue(match.Groups[1].Value, out IConvertible value))
                                    {
                                        matchesFound = true;
                                        string referencedParameterValue = value?.ToString();

                                        // Parameters:
                                        //    CommandLine: --port={Port} --threads={ThreadCount}
                                        //    Port: 1234
                                        //    Threads: 8
                                        //
                                        // Desired Outcome
                                        // Parameters:
                                        //    CommandLine: --port=1234 --threads=8
                                        //    Port: 1234
                                        //    Threads: 8

                                        parameters[parameter.Key] = parameters[parameter.Key].ToString().Replace(match.Groups[0].Value, referencedParameterValue.ToString());
                                    }
                                }
                            }
                        }
                    }
                }
            }

            return matchesFound;
        }

        private static async Task<bool> EvaluateWellKnownExpressionsAsync(IServiceCollection dependencies, IDictionary<string, IConvertible> parameters, CancellationToken cancellationToken)
        {
            bool expressionsFound = false;
            foreach (var parameter in parameters)
            {
                if (!cancellationToken.IsCancellationRequested)
                {
                    if (parameter.Value is string)
                    {
                        MatchCollection expressionMatches = ProfileExpressionEvaluator.GeneralExpression.Matches(parameter.Value.ToString());
                        if (expressionMatches?.Any() == true)
                        {
                            expressionsFound = true;

                            // Parameters:
                            //    CommandLine: --port={Port} --threads={LogicalCoreCount} --package={PackagePath}
                            //    Port: 1234
                            //
                            // And given logical core count = 8, a package path of /home/users/virtualclient/packages/anypackage
                            //
                            // Desired Outcome
                            // Parameters:
                            //    CommandLine: --port=1234 --threads=8 --package=/home/users/virtualclient/packages/anypackage
                            //    Port: 1234
                            EvaluationResult evaluation = await ProfileExpressionEvaluator.EvaluateExpressionAsync(dependencies, parameter.Value.ToString(), cancellationToken);
                            if (evaluation.IsMatched)
                            {
                                parameters[parameter.Key] = evaluation.Outcome;
                            }
                        }
                    }
                }
            }

            return expressionsFound;
        }

        private class EvaluationResult
        {
            public bool IsMatched { get; set; }

            public string Outcome { get; set; }
        }
    }
}