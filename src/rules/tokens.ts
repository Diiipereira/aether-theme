import { AetherPalette } from "../lib/types";

export const getSemanticRules = (palette: AetherPalette) => ({
  // SEMANTIC HIGHLIGHTING

  // Classes e Tipos
  class: { foreground: palette.syntax.classes },
  interface: { foreground: palette.syntax.types },
  type: { foreground: palette.syntax.types },
  enum: { foreground: palette.syntax.classes },
  enumMember: { foreground: palette.syntax.constants },
  typeParameter: { foreground: palette.syntax.types },
  struct: { foreground: palette.syntax.classes },

  // Funções e Métodos
  function: { foreground: palette.syntax.functions },
  member: { foreground: palette.syntax.functions },
  macro: { foreground: palette.syntax.functions },
  method: { foreground: palette.syntax.functions },

  // Variáveis e Propriedades
  variable: { foreground: palette.syntax.variables },
  "variable.readonly": { foreground: palette.syntax.constants },
  "variable.constant": { foreground: palette.syntax.constants },
  property: { foreground: palette.syntax.variables },
  parameter: { foreground: palette.syntax.variables },

  // Primitivos
  string: { foreground: palette.syntax.strings },
  number: { foreground: palette.syntax.numbers },
  boolean: { foreground: palette.syntax.constants },
  keyword: { foreground: palette.syntax.keywords },
  operator: { foreground: palette.syntax.operators },
  comment: { foreground: palette.syntax.comments, fontStyle: "italic" },

  // JSX / React
  "jsx-tag": { foreground: palette.syntax.classes },
  "jsx-attribute": {
    foreground: palette.syntax.variables,
    fontStyle: "italic",
  },
});

export const getTokenRules = (palette: AetherPalette) => [
  // GLOBAL / GENERIC (O "Fallback" para todas as linguagens)
  {
    name: "Keywords (if, else, return, public)",
    scope: "keyword, storage.type, storage.modifier",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "Control Flow (try, catch, loop)",
    scope: "keyword.control",
    settings: { foreground: palette.syntax.keywords, fontStyle: "italic" },
  },
  {
    name: "Operators (=, +, -, >, ?)",
    scope: "keyword.operator, punctuation.separator, punctuation.terminator",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "Functions & Methods",
    scope: "entity.name.function, support.function",
    settings: { foreground: palette.syntax.functions },
  },
  {
    name: "Variables & Properties",
    scope: "variable, support.variable, meta.object-literal.key",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "Classes",
    scope: "entity.name.type, entity.name.class, support.class",
    settings: { foreground: palette.syntax.classes },
  },
  {
    name: "Types & Interfaces",
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
    name: "Constants, Booleans, Null",
    scope: "constant.language, constant.other",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "Comments",
    scope: "comment, punctuation.definition.comment",
    settings: { foreground: palette.syntax.comments, fontStyle: "italic" },
  },

  // JAVASCRIPT / TYPESCRIPT / REACT
  {
    name: "JS/TS Import/Export",
    scope:
      "keyword.control.import, keyword.control.export, keyword.control.from",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "JS/TS `this`, `super`",
    scope: "variable.language.this, variable.language.super",
    settings: { foreground: palette.syntax.constants, fontStyle: "italic" },
  },
  {
    name: "JS/TS Console",
    scope: "support.type.object.console",
    settings: { foreground: palette.syntax.classes },
  },
  {
    name: "JS/TS DOM Objects",
    scope: "support.type.object.dom",
    settings: { foreground: palette.syntax.classes },
  },
  {
    name: "JSX Component Tag",
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
    name: "Template Strings Punctuation ${}",
    scope: "punctuation.definition.template-expression",
    settings: { foreground: palette.syntax.operators },
  },

  // HTML / XML
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
    name: "HTML Brackets < >",
    scope: "punctuation.definition.tag",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "HTML Doctype",
    scope: "meta.tag.sgml.doctype",
    settings: { foreground: palette.syntax.comments },
  },

  // CSS / SCSS / LESS
  {
    name: "CSS Classes",
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
    name: "CSS Values & Units",
    scope: "support.constant.property-value, keyword.other.unit",
    settings: { foreground: palette.syntax.numbers },
  },
  {
    name: "CSS Punctuation",
    scope:
      "punctuation.separator.key-value.css, punctuation.terminator.rule.css",
    settings: { foreground: palette.syntax.operators },
  },

  // PYTHON
  {
    name: "Python Self/Cls",
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
    name: "Python Magic Methods (__init__)",
    scope: "support.function.magic.python",
    settings: { foreground: palette.syntax.operators },
  },

  // JAVA
  {
    name: "Java Annotations @",
    scope: "storage.type.annotation",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "Java Imports/Package",
    scope: "storage.modifier.import, storage.modifier.package",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "Java Primitives",
    scope: "storage.type.primitive.java",
    settings: { foreground: palette.syntax.types },
  },

  // PHP
  {
    name: "PHP Variables ($var)",
    scope: "variable.other.php, punctuation.definition.variable.php",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "PHP Classes",
    scope: "support.class.php, entity.name.type.class.php",
    settings: { foreground: palette.syntax.classes },
  },
  {
    name: "PHP Static/Const",
    scope: "constant.other.php",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "Laravel Blade Tags",
    scope: "entity.name.tag.laravel-blade, support.constant.laravel-blade",
    settings: { foreground: palette.syntax.tags },
  },

  // C / C++
  {
    name: "C++ Macros",
    scope: "entity.name.function.preprocessor",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "C++ Include/Pragma",
    scope: "keyword.control.directive",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "C++ Std Lib Types",
    scope: "support.type.std.cpp",
    settings: { foreground: palette.syntax.classes },
  },

  // GO
  {
    name: "Go Package Name",
    scope: "entity.name.package.go",
    settings: { foreground: palette.syntax.classes },
  },
  {
    name: "Go Functions",
    scope: "support.function.go",
    settings: { foreground: palette.syntax.functions },
  },

  // RUST
  {
    name: "Rust Lifetimes ('a)",
    scope: "entity.name.lifetime.rust, storage.modifier.lifetime.rust",
    settings: { foreground: palette.syntax.operators, fontStyle: "italic" },
  },
  {
    name: "Rust Macros (println!)",
    scope: "entity.name.function.macro.rust, support.function.macro.rust",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "Rust Primitives (u8, i32)",
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
    name: "Markdown Link Title",
    scope: "string.other.link.title.markdown",
    settings: { foreground: palette.syntax.strings },
  },
  {
    name: "Markdown Code Block",
    scope: "markup.raw.block, markup.inline.raw",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "Markdown Quote",
    scope: "markup.quote",
    settings: { foreground: palette.syntax.comments },
  },

  // JSON / YAML / TOML
  {
    name: "JSON Property Keys",
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

  // SQL
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

  // DIFF / GIT
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

  // SHELL / BASH / ENV
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

  // DOCKER
  {
    name: "Docker Keywords (FROM, RUN)",
    scope: "keyword.other.special-method.dockerfile",
    settings: { foreground: palette.syntax.keywords },
  },

  // GRAPHQL
  {
    name: "GraphQL Types",
    scope: "entity.name.type.graphql, support.type.graphql",
    settings: { foreground: palette.syntax.types },
  },
];
