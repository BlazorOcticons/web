using System;
using System.Collections.Generic;
using System.Linq;
using BlazorOcticons.Octicons;
using Microsoft.AspNetCore.Components;

namespace WebApp.Shared
{
    public static class IconCatalog
    {
        public static readonly IReadOnlyDictionary<string, Type> Types = typeof(MarkGithub16).Assembly.GetTypes()
            .Where(t => t.Namespace == typeof(MarkGithub16).Namespace && !t.IsNested && typeof(IComponent).IsAssignableFrom(t))
            .ToDictionary(t => t.Name);

        public static readonly string[] Names = Types.Keys.ToArray();
    }
}
