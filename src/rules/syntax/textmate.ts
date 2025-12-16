import { AetherPalette } from "../../lib/types";

export const getTextMateRules = (palette: AetherPalette) => [
  // GLOBAL
  {
    name: "Keywords",
    scope: "keyword, storage.type, storage.modifier",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "Control Flow",
    scope: "keyword.control",
    settings: { foreground: palette.syntax.keywords, fontStyle: "italic" },
  },
  {
    name: "Operators",
    scope: "keyword.operator, punctuation.separator, punctuation.terminator",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "Functions",
    scope: "entity.name.function, support.function",
    settings: { foreground: palette.syntax.functions },
  },
  {
    name: "Variables",
    scope: "variable, support.variable, meta.object-literal.key",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "Classes",
    scope: "entity.name.type, entity.name.class, support.class",
    settings: { foreground: palette.syntax.classes },
  },
  {
    name: "Types",
    scope: "entity.name.type.interface, support.type",
    settings: { foreground: palette.syntax.types },
  },
  {
    name: "Strings",
    scope: "string, constant.character.escape",
    settings: { foreground: palette.syntax.strings },
  },
  {
    name: "Numbers",
    scope: "constant.numeric",
    settings: { foreground: palette.syntax.numbers },
  },
  {
    name: "Constants",
    scope: "constant.language, constant.other",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "Comments",
    scope: "comment, punctuation.definition.comment",
    settings: { foreground: palette.syntax.comments, fontStyle: "italic" },
  },

  // JS/TS
  {
    name: "JS/TS Imports",
    scope:
      "keyword.control.import, keyword.control.export, keyword.control.from",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "JS/TS this/super",
    scope: "variable.language.this, variable.language.super",
    settings: { foreground: palette.syntax.constants, fontStyle: "italic" },
  },
  {
    name: "JS/TS Console/DOM",
    scope: "support.type.object.console, support.type.object.dom",
    settings: { foreground: palette.syntax.classes },
  },
  {
    name: "JSX Tags",
    scope:
      "support.class.component, entity.name.tag.tsx, entity.name.tag.js.jsx",
    settings: { foreground: palette.syntax.classes },
  },
  {
    name: "JSX Attributes",
    scope: "entity.other.attribute-name.jsx, entity.other.attribute-name.tsx",
    settings: { foreground: palette.syntax.variables, fontStyle: "italic" },
  },
  {
    name: "Template Strings",
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
    name: "HTML Doctype",
    scope: "meta.tag.sgml.doctype",
    settings: { foreground: palette.syntax.comments },
  },
  {
    name: "CSS Selectors",
    scope: "entity.other.attribute-name.class.css",
    settings: { foreground: palette.syntax.classes },
  },
  {
    name: "CSS IDs",
    scope: "entity.other.attribute-name.id.css",
    settings: { foreground: palette.syntax.functions },
  },
  {
    name: "CSS Tags",
    scope: "entity.name.tag.css",
    settings: { foreground: palette.syntax.tags },
  },
  {
    name: "CSS Properties",
    scope:
      "support.type.property-name.css, support.type.vendored.property-name",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "CSS Values",
    scope: "support.constant.property-value, keyword.other.unit",
    settings: { foreground: palette.syntax.numbers },
  },
  {
    name: "CSS Punctuation",
    scope:
      "punctuation.separator.key-value.css, punctuation.terminator.rule.css",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "Tailwind Classes",
    scope: "entity.other.attribute-name.class",
    settings: { foreground: palette.syntax.functions },
  },

  // FRAMEWORKS & LIBS (Prisma, GraphQL, Docker)
  {
    name: "Prisma Keywords",
    scope: "source.prisma keyword",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "Prisma Types",
    scope: "source.prisma support.type",
    settings: { foreground: palette.syntax.classes },
  },
  {
    name: "Prisma Attributes",
    scope: "source.prisma support.function.attribute",
    settings: { foreground: palette.syntax.functions },
  },
  {
    name: "GraphQL Types",
    scope: "entity.name.type.graphql, support.type.graphql",
    settings: { foreground: palette.syntax.types },
  },
  {
    name: "Docker Keywords",
    scope: "keyword.other.special-method.dockerfile",
    settings: { foreground: palette.syntax.keywords },
  },

  // PYTHON
  {
    name: "Python Self",
    scope:
      "variable.parameter.function.language.special.self.python, variable.parameter.function.language.special.cls.python",
    settings: { foreground: palette.syntax.constants, fontStyle: "italic" },
  },
  {
    name: "Python Decorators",
    scope: "meta.function.decorator.python, entity.name.function.decorator",
    settings: { foreground: palette.syntax.functions },
  },
  {
    name: "Python Magic",
    scope: "support.function.magic.python",
    settings: { foreground: palette.syntax.operators },
  },

  // JAVA/PHP/Go/Rust/C++
  {
    name: "Java Annotations",
    scope: "storage.type.annotation",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "Java Imports",
    scope: "storage.modifier.import, storage.modifier.package",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "Java Primitives",
    scope: "storage.type.primitive.java",
    settings: { foreground: palette.syntax.types },
  },
  {
    name: "PHP Variables",
    scope: "variable.other.php, punctuation.definition.variable.php",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "PHP Classes",
    scope: "support.class.php, entity.name.type.class.php",
    settings: { foreground: palette.syntax.classes },
  },
  {
    name: "PHP Static",
    scope: "constant.other.php",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "Blade Tags",
    scope: "entity.name.tag.laravel-blade, support.constant.laravel-blade",
    settings: { foreground: palette.syntax.tags },
  },
  {
    name: "C++ Macros",
    scope: "entity.name.function.preprocessor",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "C++ Include",
    scope: "keyword.control.directive",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "C++ Types",
    scope: "support.type.std.cpp",
    settings: { foreground: palette.syntax.classes },
  },
  {
    name: "Go Package",
    scope: "entity.name.package.go",
    settings: { foreground: palette.syntax.classes },
  },
  {
    name: "Go Functions",
    scope: "support.function.go",
    settings: { foreground: palette.syntax.functions },
  },
  {
    name: "Rust Lifetimes",
    scope: "entity.name.lifetime.rust, storage.modifier.lifetime.rust",
    settings: { foreground: palette.syntax.operators, fontStyle: "italic" },
  },
  {
    name: "Rust Macros",
    scope: "entity.name.function.macro.rust, support.function.macro.rust",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "Rust Primitives",
    scope: "storage.type.core.rust",
    settings: { foreground: palette.syntax.types },
  },

  // MARKDOWN
  {
    name: "Markdown Headings",
    scope: "markup.heading, entity.name.section.markdown",
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
    name: "Markdown Links",
    scope: "markup.underline.link",
    settings: { foreground: palette.syntax.functions },
  },
  {
    name: "Markdown Title",
    scope: "string.other.link.title.markdown",
    settings: { foreground: palette.syntax.strings },
  },
  {
    name: "Markdown Code",
    scope: "markup.raw.block, markup.inline.raw",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "Markdown Quote",
    scope: "markup.quote",
    settings: { foreground: palette.syntax.comments },
  },

  // DATA (JSON/YAML/SQL/TOML)
  {
    name: "JSON Keys",
    scope: "support.type.property-name.json",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "YAML Keys",
    scope: "entity.name.tag.yaml",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "YAML Anchors",
    scope: "entity.name.type.anchor.yaml",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "TOML Tables",
    scope: "entity.other.attribute-name.table.toml",
    settings: { foreground: palette.syntax.classes },
  },
  {
    name: "SQL Keywords",
    scope: "keyword.other.DML.sql, keyword.other.DDL.sql",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "SQL Functions",
    scope: "support.function.sql",
    settings: { foreground: palette.syntax.functions },
  },

  // TOOLS (Git/Shell)
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
    name: "Diff Headers",
    scope: "meta.diff.header",
    settings: { foreground: palette.syntax.comments },
  },
  {
    name: "Shell Variables",
    scope:
      "variable.other.normal.shell, variable.other.positional.shell, source.env variable",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "Shell Commands",
    scope: "support.function.builtin.shell, entity.name.command.shell",
    settings: { foreground: palette.syntax.functions },
  },
];
