import { AetherPalette } from "../../lib/types";

export const getTextMateRules = (palette: AetherPalette) => [
  // GLOBAL
  {
    name: "Keywords",
    scope: ["keyword", "storage.type", "storage.modifier", "variable.language"],
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "Decorators & Annotations",
    scope: [
      "meta.decorator",
      "punctuation.decorator",
      "entity.name.function.decorator",
      "meta.decorator variable.other.readwrite",
      "meta.decorator entity.name.function",
    ],
    settings: { foreground: palette.syntax.functions },
  },
  {
    name: "Control Flow",
    scope: "keyword.control",
    settings: { foreground: palette.syntax.keywords, fontStyle: "italic" },
  },
  {
    name: "Operators",
    scope: [
      "keyword.operator",
      "punctuation.separator",
      "punctuation.terminator",
      "punctuation.definition.tag",
    ],
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "Functions & Methods",
    scope: [
      "entity.name.function",
      "support.function",
      "meta.function-call.generic",
    ],
    settings: { foreground: palette.syntax.functions },
  },
  {
    name: "Variables & Properties",
    scope: [
      "variable",
      "support.variable",
      "meta.object-literal.key",
      "entity.name.variable",
    ],
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "Classes & Structs",
    scope: [
      "entity.name.type",
      "entity.name.class",
      "support.class",
      "storage.type.cs",
    ],
    settings: { foreground: palette.syntax.classes },
  },
  {
    name: "Types & Interfaces",
    scope: [
      "entity.name.type.interface",
      "support.type",
      "entity.name.type.ts",
    ],
    settings: { foreground: palette.syntax.types },
  },
  {
    name: "Strings",
    scope: ["string", "constant.character.escape"],
    settings: { foreground: palette.syntax.strings },
  },
  {
    name: "Numbers",
    scope: "constant.numeric",
    settings: { foreground: palette.syntax.numbers },
  },
  {
    name: "Constants",
    scope: ["constant.language", "constant.other"],
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "Comments",
    scope: [
      "comment",
      "punctuation.definition.comment",
      "string.quoted.docstring",
    ],
    settings: { foreground: palette.syntax.comments, fontStyle: "italic" },
  },

  // JS/TS
  {
    name: "JS/TS Imports & Exports",
    scope: [
      "keyword.control.import",
      "keyword.control.export",
      "keyword.control.from",
      "meta.import string",
    ],
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "JS/TS this/super",
    scope: ["variable.language.this", "variable.language.super"],
    settings: { foreground: palette.syntax.constants, fontStyle: "italic" },
  },
  {
    name: "JS/TS Console/DOM",
    scope: ["support.type.object.console", "support.type.object.dom"],
    settings: { foreground: palette.syntax.classes },
  },
  {
    name: "JSX/TSX Component Tags",
    scope: [
      "support.class.component",
      "entity.name.tag.tsx",
      "entity.name.tag.js.jsx",
    ],
    settings: { foreground: palette.syntax.classes },
  },
  {
    name: "JSX/TSX Attributes",
    scope: [
      "entity.other.attribute-name.jsx",
      "entity.other.attribute-name.tsx",
    ],
    settings: { foreground: palette.syntax.variables, fontStyle: "italic" },
  },
  {
    name: "Template Strings Punctuation",
    scope: "punctuation.definition.template-expression",
    settings: { foreground: palette.syntax.operators },
  },

  // HTML/CSS/Tailwind
  {
    name: "HTML Tags",
    scope: "entity.name.tag",
    settings: { foreground: palette.syntax.tags },
  },
  {
    name: "HTML Attributes",
    scope: "entity.other.attribute-name.html",
    settings: { foreground: palette.syntax.variables, fontStyle: "italic" },
  },
  {
    name: "HTML Brackets",
    scope: "punctuation.definition.tag",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "CSS Selectors (Class)",
    scope: "entity.other.attribute-name.class.css",
    settings: { foreground: palette.syntax.classes },
  },
  {
    name: "CSS Selectors (ID)",
    scope: "entity.other.attribute-name.id.css",
    settings: { foreground: palette.syntax.functions },
  },
  {
    name: "CSS Selectors (Tag)",
    scope: "entity.name.tag.css",
    settings: { foreground: palette.syntax.tags },
  },
  {
    name: "CSS Properties",
    scope: [
      "support.type.property-name.css",
      "support.type.vendored.property-name",
    ],
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "CSS Values & Units",
    scope: [
      "support.constant.property-value",
      "keyword.other.unit",
      "constant.numeric.css",
    ],
    settings: { foreground: palette.syntax.numbers },
  },
  {
    name: "Tailwind Classes",
    scope: "entity.other.attribute-name.class",
    settings: { foreground: palette.syntax.functions },
  },

  // C# / .NET
  {
    name: "C# Namespaces",
    scope: "entity.name.type.namespace.cs",
    settings: { foreground: palette.syntax.types },
  },
  {
    name: "C# Classes & Interfaces",
    scope: ["entity.name.type.class.cs", "entity.name.type.interface.cs"],
    settings: { foreground: palette.syntax.classes },
  },
  {
    name: "C# Methods",
    scope: "entity.name.function.cs",
    settings: { foreground: palette.syntax.functions },
  },
  {
    name: "C# Fields & Locals",
    scope: ["entity.name.variable.local.cs", "entity.name.variable.field.cs"],
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "C# Keywords (Safe)",
    scope: "keyword.other.using.cs",
    settings: { foreground: palette.syntax.keywords },
  },

  // PYTHON
  {
    name: "Python Self/Cls",
    scope: [
      "variable.parameter.function.language.special.self.python",
      "variable.parameter.function.language.special.cls.python",
    ],
    settings: { foreground: palette.syntax.constants, fontStyle: "italic" },
  },
  {
    name: "Python Decorators",
    scope: ["meta.function.decorator.python", "entity.name.function.decorator"],
    settings: { foreground: palette.syntax.functions },
  },

  // JAVA/PHP/GO/RUST
  {
    name: "Java/PHP Annotations",
    scope: ["storage.type.annotation", "meta.attribute.php"],
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "Java/Go Imports",
    scope: [
      "storage.modifier.import",
      "storage.modifier.package",
      "keyword.control.import",
    ],
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "PHP Classes & Static",
    scope: ["support.class.php", "constant.other.php"],
    settings: { foreground: palette.syntax.classes },
  },
  {
    name: "PHP Variables",
    scope: "variable.other.php",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "Go Functions",
    scope: "support.function.go",
    settings: { foreground: palette.syntax.functions },
  },
  {
    name: "Rust Lifetimes",
    scope: ["entity.name.lifetime.rust", "storage.modifier.lifetime.rust"],
    settings: { foreground: palette.syntax.operators, fontStyle: "italic" },
  },
  {
    name: "Rust Macros",
    scope: "support.function.macro.rust",
    settings: { foreground: palette.syntax.functions },
  },

  // MARKDOWN
  {
    name: "Markdown Headings",
    scope: [
      "markup.heading",
      "entity.name.section.markdown",
      "markup.heading.setext",
    ],
    settings: { foreground: palette.syntax.classes, fontStyle: "bold" },
  },
  {
    name: "Markdown Bold",
    scope: "markup.bold",
    settings: { foreground: palette.syntax.keywords, fontStyle: "bold" },
  },
  {
    name: "Markdown Italic",
    scope: "markup.italic",
    settings: { foreground: palette.syntax.variables, fontStyle: "italic" },
  },
  {
    name: "Markdown Links (Text)",
    scope: "string.other.link.title.markdown",
    settings: { foreground: palette.syntax.functions },
  },
  {
    name: "Markdown Links (Url)",
    scope: "markup.underline.link",
    settings: { foreground: palette.syntax.strings },
  },
  {
    name: "Markdown Code (Inline)",
    scope: "markup.inline.raw",
    settings: { foreground: palette.syntax.variables, fontStyle: "italic" },
  },
  {
    name: "Markdown Code (Block)",
    scope: "markup.raw.block",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "Markdown Quotes",
    scope: "markup.quote",
    settings: { foreground: palette.syntax.comments, fontStyle: "italic" },
  },
  {
    name: "Markdown Lists",
    scope: "punctuation.definition.list.begin.markdown",
    settings: { foreground: palette.syntax.operators },
  },

  // DATA (JSON/YAML/SQL)
  {
    name: "JSON/YAML Keys",
    scope: [
      "support.type.property-name.json",
      "entity.name.tag.yaml",
      "variable.other.key.toml",
    ],
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "JSON/YAML Values",
    scope: ["constant.language.json", "string.unquoted.plain.out.yaml"],
    settings: { foreground: palette.syntax.strings },
  },
  {
    name: "SQL Keywords",
    scope: ["keyword.other.DML.sql", "keyword.other.DDL.sql"],
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "SQL Functions",
    scope: "support.function.sql",
    settings: { foreground: palette.syntax.functions },
  },

  // TOOLS
  {
    name: "Diff Inserted",
    scope: "markup.inserted.diff",
    settings: { foreground: palette.status.success },
  },
  {
    name: "Diff Deleted",
    scope: "markup.deleted.diff",
    settings: { foreground: palette.status.error },
  },
  {
    name: "Diff Changed",
    scope: "markup.changed.diff",
    settings: { foreground: palette.status.warning },
  },
  {
    name: "Shell Variables",
    scope: [
      "variable.other.normal.shell",
      "variable.other.positional.shell",
      "source.env variable",
    ],
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "Shell Commands",
    scope: ["support.function.builtin.shell", "entity.name.command.shell"],
    settings: { foreground: palette.syntax.functions },
  },
  {
    name: "Docker Keywords",
    scope: "keyword.other.special-method.dockerfile",
    settings: { foreground: palette.syntax.keywords },
  },
];
