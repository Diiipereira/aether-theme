import { AetherPalette } from "../../lib/types";
import { alpha } from "../../lib/utils";

export const getEditorColors = (p: AetherPalette) => {
  return {
    // Editor Base
    "editor.background": p.editor.bg,
    "editor.foreground": p.editor.fg,
    "editorCursor.foreground": p.editor.cursor,
    "editorLineNumber.foreground": p.editor.gutter.fg,
    "editorLineNumber.activeForeground": p.editor.gutter.activeFg,
    "editor.selectionBackground": p.editor.selection,
    "editor.lineHighlightBackground": p.editor.lineHighlight,

    // Search & Highlights
    "editor.findMatchBackground": alpha(p.editor.findMatch, 30),
    "editor.findMatchHighlightBackground": alpha(p.editor.findMatch, 15),
    "editorBracketMatch.border": p.editor.bracketMatch.border,
    "editorBracketMatch.background": p.editor.bracketMatch.bg,

    // Gutter & Indent
    "editorGutter.background": p.editor.gutter.bg,
    "editorGutter.modifiedBackground": p.git.modified,
    "editorGutter.addedBackground": p.git.added,
    "editorGutter.deletedBackground": p.git.deleted,
    "editorIndentGuide.background": p.editor.indentGuide.inactive,
    "editorIndentGuide.activeBackground": p.editor.indentGuide.active,

    // Diff & Merge
    "diffEditor.insertedTextBackground": alpha(p.git.added, 15),
    "diffEditor.removedTextBackground": alpha(p.git.deleted, 15),
    "diffEditor.border": p.core.border,
    "merge.border": p.core.border,
    "merge.currentContentBackground": alpha(p.git.conflict, 10),
    "merge.incomingContentBackground": alpha(p.git.modified, 10),

    // Minimap
    "minimap.findMatchhighlight": p.editor.findMatch,
    "minimap.selectionHighlight": p.editor.selection,
    "minimap.errorhighlight": p.status.error,
    "minimap.warningHighlght": p.status.warning,
    "minimapSlider.background": alpha(p.scrollBar.sliderBg, 50),
    "minimapSlider.hoverBackground": alpha(p.scrollBar.sliderHover, 50),
    "minimapSlider.activeBackground": alpha(p.scrollBar.sliderActive, 50),

    // Overview Ruler
    "editorOverviewRuler.border": alpha(p.core.border, 0),
    "editorOverviewRuler.findMatchForeground": p.editor.findMatch,
    "editorOverviewRuler.rangeHighlightForeground": alpha(
      p.editor.findMatch,
      0
    ),
    "editorOverviewRuler.selectionHighlightForeground": alpha(
      p.editor.selection,
      0
    ),
    "editorOverviewRuler.wordHighlightForeground": alpha(
      p.editor.findMatch,
      20
    ),
    "editorOverviewRuler.bracketMatchForeground": p.editor.bracketMatch.border,
    "editorOverviewRuler.errorForeground": p.status.error,
    "editorOverviewRuler.warningForeground": p.status.warning,
    "editorOverviewRuler.infoForeground": p.status.info,

    // Breadcrumbs
    "breadcrumb.background": p.editor.bg,
    "breadcrumb.foreground": alpha(p.core.fg, 65),
    "breadcrumb.focusForeground": p.core.fg,
    "breadcrumb.activeSelectionForeground": p.core.fg,
  };
};
