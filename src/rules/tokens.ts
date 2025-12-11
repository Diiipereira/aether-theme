import { AetherPalette } from "../lib/types";

export const getSemanticRules = (palette: AetherPalette) => ({
  enumMember: { foreground: palette.syntax.constants }, // Classes/Consts
  "variable.constant": { foreground: palette.syntax.constants },
  "variable.defaultLibrary": { foreground: palette.syntax.constants }, // Classes/Tipos nativos
  class: { foreground: palette.syntax.constants }, // "Classes" no print
  interface: { foreground: palette.syntax.constants },
  type: { foreground: palette.syntax.constants },
  function: { foreground: palette.syntax.functions },
  method: { foreground: palette.syntax.functions }, // "Metods" no print
  property: { foreground: palette.syntax.variables }, // "Properties" no print
  parameter: { foreground: palette.syntax.variables },
});

export const getTokenRules = (palette: AetherPalette) => [
  {
    name: "unison punctuation",
    scope:
      "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "haskell variable generic-type",
    scope: "variable.other.generic-type.haskell",
    settings: { foreground: palette.syntax.constants }, // Classes logic
  },
  {
    name: "haskell storage type",
    scope: "storage.type.haskell",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "support.variable.magic.python",
    scope: "support.variable.magic.python",
    settings: { foreground: palette.syntax.operators }, // "special Functions" logic
  },
  {
    name: "punctuation.separator.parameters.python",
    scope:
      "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
    settings: { foreground: palette.syntax.variables }, // Properties/Base color
  },
  {
    name: "variable.parameter.function.language.special.self.python",
    scope: "variable.parameter.function.language.special.self.python",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "python parameter",
    scope: "variable.parameter.function.language.python",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "python type",
    scope: "support.type.python",
    settings: { foreground: palette.syntax.constants }, // Classes logic
  },
  {
    name: "python logical",
    scope: "keyword.operator.logical.python",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "pyCs",
    scope: "variable.parameter.function.python",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "python block",
    scope:
      "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "python function-call.generic",
    scope: "meta.function-call.generic.python",
    settings: { foreground: palette.syntax.functions }, // Metods/Functions
  },
  {
    name: "python placeholder reset to normal string",
    scope: "constant.character.format.placeholder.other.python",
    settings: { foreground: palette.syntax.numbers },
  },
  {
    name: "Python Keyword Control",
    scope: "keyword.control.import.python,keyword.control.flow.python",
    settings: { foreground: palette.syntax.keywords, fontStyle: "italic" },
  },
  {
    name: "python function decorator @",
    scope: "meta.function.decorator.python",
    settings: { foreground: palette.syntax.operators }, // "special Functions" logic
  },
  {
    name: "python function support",
    scope:
      "support.token.decorator.python,meta.function.decorator.identifier.python",
    settings: { foreground: palette.syntax.operators },
  },

  // --- RUST ---
  {
    name: "storage.modifier.lifetime.rust",
    scope: "storage.modifier.lifetime.rust",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "support.function.std.rust",
    scope: "support.function.std.rust",
    settings: { foreground: palette.syntax.functions },
  },
  {
    name: "entity.name.lifetime.rust",
    scope: "entity.name.lifetime.rust",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "variable.language.rust",
    scope: "variable.language.rust",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "keyword.operator.misc.rust",
    scope: "keyword.operator.misc.rust",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "keyword.operator.sigil.rust",
    scope: "keyword.operator.sigil.rust",
    settings: { foreground: palette.syntax.operators },
  },

  // --- REGEXP ---
  {
    name: "support.constant.edge",
    scope: "support.constant.edge",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "regexp constant character-class",
    scope: "constant.other.character-class.regexp",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "regexp operator.quantifier",
    scope: "keyword.operator.quantifier.regexp",
    settings: { foreground: palette.syntax.operators }, // Special
  },
  {
    name: "Regular Expressions",
    scope: "string.regexp",
    settings: { foreground: palette.syntax.strings },
  },

  // --- STRINGS & COMMENTS ---
  {
    name: "punctuation.definition",
    scope:
      "punctuation.definition.string.begin,punctuation.definition.string.end",
    settings: { foreground: palette.syntax.strings },
  },
  {
    name: "Strings",
    scope: "string",
    settings: { foreground: palette.syntax.strings },
  },
  {
    name: "Text",
    scope: "variable.parameter.function",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "Comments",
    scope: "comment, punctuation.definition.comment",
    settings: { foreground: palette.syntax.comments, fontStyle: "italic" },
  },
  {
    name: "Comment Markup Link",
    scope: "comment markup.link",
    settings: { foreground: palette.syntax.comments },
  },

  // --- DIFF ---
  {
    name: "markup diff",
    scope: "markup.changed.diff",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "diff",
    scope:
      "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
    settings: { foreground: palette.syntax.functions },
  },
  {
    name: "inserted.diff",
    scope: "markup.inserted.diff",
    settings: { foreground: palette.syntax.functions },
  },
  {
    name: "deleted.diff",
    scope: "markup.deleted.diff",
    settings: { foreground: palette.syntax.operators },
  },

  // --- C++ / C ---
  {
    name: "c++ function",
    scope: "meta.function.c,meta.function.cpp",
    settings: { foreground: palette.syntax.functions },
  },
  {
    name: "c++ block",
    scope:
      "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "C operator assignment",
    scope:
      "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "Other punctuation .c",
    scope: "punctuation.separator.c,punctuation.separator.cpp",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "C type posix-reserved",
    scope: "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "keyword.operator.sizeof.c",
    scope: "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "Variables C",
    scope: "variable.c",
    settings: { foreground: palette.syntax.variables },
  },

  // --- JS / TS ---
  {
    name: "js/ts punctuation separator key-value",
    scope: "punctuation.separator.key-value",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "js/ts import keyword",
    scope: "keyword.operator.expression.import",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "math js/ts",
    scope: "support.constant.math",
    settings: { foreground: palette.syntax.constants }, // Classes
  },
  {
    name: "math property js/ts",
    scope: "support.constant.property.math",
    settings: { foreground: palette.syntax.numbers },
  },
  {
    name: "js/ts variable.other.constant",
    scope: "variable.other.constant",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "js/ts module",
    scope: "support.module.node,support.type.object.module,support.module.node",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "entity.name.type.module",
    scope: "entity.name.type.module",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "js variable readwrite",
    scope:
      "variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
    settings: { foreground: palette.syntax.variables }, // Properties logic
  },
  {
    name: "js/ts json",
    scope: "support.constant.json",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "js/ts Keyword",
    scope:
      "keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.ternary,keyword.operator.optional,keyword.operator.expression.keyof",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "js/ts console",
    scope: "support.type.object.console",
    settings: { foreground: palette.syntax.constants }, // Class
  },
  {
    name: "js/ts support.variable.property.process",
    scope: "support.variable.property.process",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "js console function",
    scope: "entity.name.function,support.function.console",
    settings: { foreground: palette.syntax.functions }, // Metods
  },
  {
    name: "js dom",
    scope: "support.type.object.dom",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "js dom variable",
    scope: "support.variable.dom,support.variable.property.dom",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "parameter function js/ts",
    scope: "function.parameter",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "js class prop",
    scope: "meta.property.object",
    settings: { foreground: palette.syntax.variables }, // Properties
  },
  {
    name: "js func parameter",
    scope: "variable.parameter.function.js",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "js template literals",
    scope:
      "keyword.other.template.begin, keyword.other.template.end, keyword.other.substitution.begin, keyword.other.substitution.end",
    settings: { foreground: palette.syntax.strings },
  },
  {
    name: "js operator.assignment",
    scope: "keyword.operator.assignment",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "js Flowtype",
    scope: "support.type.type.flowtype",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "js Flow",
    scope: "support.type.primitive",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "js/ts italic",
    scope:
      "entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",
    settings: { fontStyle: "italic" },
  },

  // --- JAVA ---
  {
    name: "java type",
    scope: "storage.type.annotation.java,storage.type.object.array.java",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "java source",
    scope: "source.java",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "java modifier.import",
    scope:
      "punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "java modifier.import method",
    scope: "meta.method.java",
    settings: { foreground: palette.syntax.functions },
  },
  {
    name: "java modifier.import storage",
    scope:
      "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "java instanceof",
    scope: "keyword.operator.instanceof.java",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "java variable.name",
    scope: "meta.definition.variable.name.java",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "Java Variables",
    scope: "token.variable.parameter.java",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "Java Imports",
    scope: "import.storage.java",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "Java Storage",
    scope: "token.storage.type.java",
    settings: { foreground: palette.syntax.constants },
  },

  // --- CSS / SCSS / LESS ---
  {
    name: "support.constant.property-value.scss",
    scope:
      "support.constant.property-value.scss,support.constant.property-value.css",
    settings: { foreground: palette.syntax.strings },
  },
  {
    name: "CSS/SCSS/LESS Operators",
    scope: "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "css color standard name",
    scope:
      "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "css comma",
    scope: "punctuation.separator.list.comma.css",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "css attribute-name.id",
    scope: "support.constant.color.w3c-standard-color-name.css",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "css property-name",
    scope: "support.type.vendored.property-name.css",
    settings: { foreground: palette.syntax.variables }, // Properties
  },
  {
    name: "rgb-value",
    scope: "rgb-value, inline-color-decoration rgb-value, less rgb-value",
    settings: { foreground: palette.syntax.numbers },
  },
  {
    name: "sass selector",
    scope: "selector.sass",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "styling css pseudo-elements/classes",
    scope:
      "entity.other.attribute-name.pseudo-element,entity.other.attribute-name.pseudo-class",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "Attribute class",
    scope: "entity.other.attribute-name.class.css",
    settings: { foreground: palette.syntax.variables, fontStyle: "normal" }, // Attributes = Properties
  },
  {
    name: "Attribute IDs",
    scope: "entity.other.attribute-name.id",
    settings: { foreground: palette.syntax.functions, fontStyle: "normal" },
  },
  {
    name: "Selector",
    scope: "meta.selector",
    settings: { foreground: palette.syntax.keywords },
  },

  // --- PHP ---
  {
    name: "laravel blade tag",
    scope:
      "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "laravel blade @",
    scope:
      "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "use statement for other classes",
    scope:
      "support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php,meta.interface.php",
    settings: { foreground: palette.syntax.constants }, // Classes
  },
  {
    name: "error suppression",
    scope: "keyword.operator.error-control.php",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "php instanceof",
    scope: "keyword.operator.type.php",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "style double quoted array index normal begin",
    scope: "punctuation.section.array.begin.php",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "style double quoted array index normal end",
    scope: "punctuation.section.array.end.php",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "php illegal.non-null-typehinted",
    scope: "invalid.illegal.non-null-typehinted.php",
    settings: { foreground: palette.status.error_dark },
  },
  {
    name: "php types",
    scope:
      "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "php call-function",
    scope:
      "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
    settings: { foreground: palette.syntax.functions },
  },
  {
    name: "php function-resets",
    scope:
      "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "support php constants",
    scope:
      "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php,support.constant.core.rust",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "php goto",
    scope: "entity.name.goto-label.php,support.other.php",
    settings: { foreground: palette.syntax.functions },
  },
  {
    name: "php logical/bitwise operator",
    scope:
      "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "php regexp operator",
    scope: "keyword.operator.regexp.php",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "php comparison",
    scope: "keyword.operator.comparison.php",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "php heredoc/nowdoc",
    scope: "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "Class name php",
    scope: "variable.other.class.php",
    settings: { foreground: palette.syntax.constants },
  },

  // --- GO ---
  {
    name: "go operator",
    scope: "keyword.operator.assignment.go",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "go operator arithmetic",
    scope: "keyword.operator.arithmetic.go,keyword.operator.address.go",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "Go package name",
    scope: "entity.name.package.go",
    settings: { foreground: palette.syntax.constants },
  },

  // --- MARKDOWN ---
  {
    name: "Headings",
    scope: "markup.heading, entity.name.section.markdown",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "Headings Punctuation",
    scope:
      "markup.heading punctuation.definition.heading, entity.name.section, punctuation.definition.heading.markdown",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "Bold",
    scope: "markup.bold,todo.bold",
    settings: { foreground: palette.syntax.operators }, // special Functions color
  },
  {
    name: "Bold punctuation",
    scope: "punctuation.definition.bold, punctuation.definition.bold.markdown",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "markup Italic",
    scope:
      "markup.italic, punctuation.definition.italic,todo.emphasis, markup.italic.markdown",
    settings: { foreground: palette.syntax.numbers, fontStyle: "italic" },
  },
  {
    name: "Markdown Quote",
    scope: "markup.quote.markdown",
    settings: { foreground: palette.syntax.comments },
  },
  {
    name: "Markdown Code",
    scope: "markup.inline.raw.markdown, markup.inline.raw.string.markdown",
    settings: { foreground: palette.syntax.strings },
  },
  {
    name: "Markdown Link",
    scope:
      "markup.underline.link.markdown,markup.underline.link.image.markdown",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "Markdown Link Title",
    scope:
      "string.other.link.title.markdown,string.other.link.description.markdown",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "Markdown Punctuation",
    scope:
      "punctuation.definition.list.markdown, punctuation.definition.metadata.markdown, punctuation.definition.string.begin.markdown, punctuation.definition.string.end.markdown, beginning.punctuation.definition.list.markdown",
    settings: { foreground: palette.syntax.keywords },
  },

  // --- JSON ---
  {
    name: "Source Json Meta Structure Dictionary Json > String Quoted Json",
    scope: "source.json meta.structure.dictionary.json > string.quoted.json",
    settings: { foreground: palette.syntax.variables }, // Properties
  },
  {
    name: "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
    scope:
      "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
    scope:
      "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
    settings: { foreground: palette.syntax.strings },
  },
  {
    name: "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
    scope:
      "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "JSON Property Name",
    scope: "support.type.property-name.json",
    settings: { foreground: palette.syntax.variables }, // Properties
  },
  {
    name: "JSON Punctuation for Property Name",
    scope: "support.type.property-name.json punctuation",
    settings: { foreground: palette.syntax.variables },
  },

  // --- GENERAL SYNTAX ---
  {
    name: "Operator logical",
    scope:
      "keyword.operator.logical, keyword.operator.bitwise, keyword.operator.channel",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "Operators",
    scope: "keyword.operator",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "Compound Assignment Operators",
    scope: "keyword.operator.assignment.compound",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "Compound Assignment Operators js/ts",
    scope:
      "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "Keywords",
    scope: "keyword",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "Namespaces",
    scope: "entity.name.namespace",
    settings: { foreground: palette.syntax.constants }, // Classes
  },
  {
    name: "Variables",
    scope: "variable",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "Language variables",
    scope: "variable.language",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "Packages",
    scope: "token.package.keyword",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "Packages",
    scope: "token.package",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "Functions",
    scope:
      "entity.name.function,meta.require,support.function.any-method,variable.function",
    settings: { foreground: palette.syntax.functions },
  },
  {
    name: "Classes",
    scope:
      "entity.name.type.namespace,support.class, entity.name.type.class, entity.name.class.identifier.namespace.type, entity.name.class, variable.other.class.js, variable.other.class.ts",
    settings: { foreground: palette.syntax.constants }, // Classes
  },
  {
    name: "Type Name",
    scope: "entity.name.type",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "Keyword Control",
    scope: "keyword.control",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "Control Elements",
    scope: "control.elements, keyword.operator.less",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "Methods",
    scope: "keyword.other.special-method",
    settings: { foreground: palette.syntax.functions }, // Metods
  },
  {
    name: "Storage",
    scope: "storage",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "Storage JS TS",
    scope: "token.storage",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "Source Js Keyword Operator",
    scope:
      "keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "Support",
    scope: "support.function",
    settings: { foreground: palette.syntax.functions },
  },
  {
    name: "Support type",
    scope: "support.type.property-name, support.constant.property-value",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "Support type font",
    scope: "support.constant.font-name",
    settings: { foreground: palette.syntax.strings },
  },
  {
    name: "Meta tag",
    scope: "meta.tag",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "Inherited Class",
    scope: "entity.other.inherited-class",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "Constant other symbol",
    scope: "constant.other.symbol",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "Integers",
    scope: "constant.numeric",
    settings: { foreground: palette.syntax.numbers },
  },
  {
    name: "Constants",
    scope: "constant",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "Punctuation definition constant",
    scope: "punctuation.definition.constant",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "Tags",
    scope: "entity.name.tag",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "Attributes",
    scope: "entity.other.attribute-name",
    settings: { foreground: palette.syntax.variables }, // Attributes = Properties
  },
  {
    name: "Escape Characters",
    scope: "constant.character.escape",
    settings: { foreground: palette.syntax.operators },
  },
  {
    name: "Embedded",
    scope: "punctuation.section.embedded, variable.interpolation",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "Embedded Begin/End",
    scope:
      "punctuation.section.embedded.begin,punctuation.section.embedded.end",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "illegal",
    scope: "invalid.illegal, invalid.broken, invalid.unimplemented",
    settings: { foreground: palette.status.error_dark },
  },
  {
    name: "deprecated",
    scope: "invalid.deprecated",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "html/pug escaped characters",
    scope: "constant.character.entity",
    settings: { foreground: palette.syntax.operators },
  },

  // --- OTHERS ---
  {
    name: "Units",
    scope: "keyword.other.unit",
    settings: { foreground: palette.syntax.numbers },
  },
  {
    name: "Template literal",
    scope: "punctuation.quasi.element",
    settings: { foreground: palette.syntax.keywords },
  },
  {
    name: "Clojure globals",
    scope: "entity.global.clojure",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "Clojure symbols",
    scope: "meta.symbol.clojure",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "Clojure constants",
    scope: "constant.keyword.clojure",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "CoffeeScript Function Argument",
    scope: "meta.arguments.coffee, variable.parameter.function.coffee",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "Ini Default Text",
    scope: "source.ini",
    settings: { foreground: palette.syntax.strings },
  },
  {
    name: "Makefile prerequisities",
    scope: "meta.scope.prerequisites.makefile",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "Makefile text colour",
    scope: "source.makefile",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "Groovy import names",
    scope: "storage.modifier.import.groovy",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "Groovy Methods",
    scope: "meta.method.groovy",
    settings: { foreground: palette.syntax.functions },
  },
  {
    name: "Groovy Variables",
    scope: "meta.definition.variable.name.groovy",
    settings: { foreground: palette.syntax.variables },
  },
  {
    name: "Groovy Inheritance",
    scope: "meta.definition.class.inherited.classes.groovy",
    settings: { foreground: palette.syntax.constants },
  },
  {
    name: "SQL Variables",
    scope: "text.variable, text.bracketed",
    settings: { foreground: palette.syntax.variables },
  },
];
