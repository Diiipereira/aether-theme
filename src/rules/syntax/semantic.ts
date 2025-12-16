import { AetherPalette } from "../../lib/types";

export const getSemanticRules = (palette: AetherPalette) => ({
  class: { foreground: palette.syntax.classes },
  interface: { foreground: palette.syntax.types },
  type: { foreground: palette.syntax.types },
  enum: { foreground: palette.syntax.classes },
  enumMember: { foreground: palette.syntax.constants },
  typeParameter: { foreground: palette.syntax.types },
  struct: { foreground: palette.syntax.classes },

  function: { foreground: palette.syntax.functions },
  member: { foreground: palette.syntax.functions },
  macro: { foreground: palette.syntax.functions },
  method: { foreground: palette.syntax.functions },

  variable: { foreground: palette.syntax.variables },
  "variable.readonly": { foreground: palette.syntax.constants },
  "variable.constant": { foreground: palette.syntax.constants },
  property: { foreground: palette.syntax.variables },
  parameter: { foreground: palette.syntax.variables },

  string: { foreground: palette.syntax.strings },
  number: { foreground: palette.syntax.numbers },
  boolean: { foreground: palette.syntax.constants },
  keyword: { foreground: palette.syntax.keywords },
  operator: { foreground: palette.syntax.operators },
  comment: { foreground: palette.syntax.comments, fontStyle: "italic" },

  "jsx-tag": { foreground: palette.syntax.classes },
  "jsx-attribute": {
    foreground: palette.syntax.variables,
    fontStyle: "italic",
  },
});
