import { Opacity } from "../../lib/opacity";
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
    "editor.foldBackground": alpha(p.editor.selection, Opacity.low),
    "editorCodeLens.foreground": alpha(p.core.fg, Opacity.medium),

    // Sticky Scroll
    "editorStickyScroll.background": p.editor.bg,
    "editorStickyScrollHover.background": p.editor.lineHighlight,

    // Inlay Hints
    "editorInlayHint.foreground": alpha(p.core.fg, Opacity.medium),
    "editorInlayHint.background": alpha(p.core.bg, Opacity.none),

    // Search & Highlights
    "editor.findMatchBackground": alpha(p.editor.findMatch, Opacity.highlight),
    "editor.findMatchHighlightBackground": alpha(
      p.editor.findMatch,
      Opacity.faint
    ),
    "editor.wordHighlightBackground": alpha(p.editor.findMatch, Opacity.faint),
    "editor.wordHighlightStrongBackground": alpha(
      p.editor.findMatch,
      Opacity.soft
    ),
    "editorBracketMatch.border": p.editor.bracketMatch.border,
    "editorBracketMatch.background": p.editor.bracketMatch.bg,
    "editor.rangeHighlightBackground": alpha(
      p.editor.findMatch,
      Opacity.subtle
    ),
    "editor.symbolHighlightBackground": alpha(p.editor.findMatch, Opacity.low),

    // Snippets & Linked Editing
    "editor.snippetTabstopHighlightBackground": alpha(
      p.editor.selection,
      Opacity.highlight
    ),
    "editor.snippetTabstopHighlightBorder": alpha(
      p.editor.selection,
      Opacity.none
    ),
    "editor.linkedEditingBackground": alpha(p.editor.findMatch, Opacity.low),

    // Gutter & Indent
    "editorGutter.background": p.editor.gutter.bg,
    "editorGutter.modifiedBackground": p.git.modified,
    "editorGutter.addedBackground": p.git.added,
    "editorGutter.deletedBackground": p.git.deleted,
    "editorIndentGuide.background": p.editor.indentGuide.inactive,
    "editorIndentGuide.activeBackground": p.editor.indentGuide.active,
    "editorLightBulb.foreground": p.status.warning,
    "editorLightBulbAutoFix.foreground": p.status.info,

    // Diff & Merge
    "diffEditor.insertedTextBackground": alpha(p.git.added, Opacity.faint),
    "diffEditor.removedTextBackground": alpha(p.git.deleted, Opacity.faint),
    "diffEditor.border": p.core.border,
    "merge.border": p.core.border,
    "merge.currentContentBackground": alpha(p.git.conflict, Opacity.subtle),
    "merge.incomingContentBackground": alpha(p.git.modified, Opacity.subtle),

    // Minimap
    "minimap.findMatchHighlight": p.editor.findMatch,
    "minimap.selectionHighlight": p.editor.selection,
    "minimap.errorHighlight": p.status.error,
    "minimap.warningHighlight": p.status.warning,
    "minimapSlider.background": alpha(p.scrollBar.sliderBg, Opacity.half),
    "minimapSlider.hoverBackground": alpha(
      p.scrollBar.sliderHover,
      Opacity.half
    ),
    "minimapSlider.activeBackground": alpha(
      p.scrollBar.sliderActive,
      Opacity.half
    ),
    "minimapGutter.addedBackground": p.git.added,
    "minimapGutter.modifiedBackground": p.git.modified,
    "minimapGutter.deletedBackground": p.git.deleted,

    // Overview Ruler
    "editorOverviewRuler.border": alpha(p.core.border, Opacity.none),
    "editorOverviewRuler.findMatchForeground": p.editor.findMatch,
    "editorOverviewRuler.rangeHighlightForeground": alpha(
      p.editor.findMatch,
      Opacity.none
    ),
    "editorOverviewRuler.selectionHighlightForeground": alpha(
      p.editor.selection,
      Opacity.none
    ),
    "editorOverviewRuler.wordHighlightForeground": alpha(
      p.editor.findMatch,
      Opacity.low
    ),
    "editorOverviewRuler.bracketMatchForeground": p.editor.bracketMatch.border,
    "editorOverviewRuler.errorForeground": p.status.error,
    "editorOverviewRuler.warningForeground": p.status.warning,
    "editorOverviewRuler.infoForeground": p.status.info,
    "editorOverviewRuler.addedForeground": alpha(p.git.added, Opacity.inactive),
    "editorOverviewRuler.modifiedForeground": alpha(
      p.git.modified,
      Opacity.inactive
    ),
    "editorOverviewRuler.deletedForeground": alpha(
      p.git.deleted,
      Opacity.inactive
    ),

    // Breadcrumbs
    "breadcrumb.background": p.editor.bg,
    "breadcrumb.foreground": alpha(p.core.fg, Opacity.muted),
    "breadcrumb.focusForeground": p.core.fg,
    "breadcrumb.activeSelectionForeground": p.core.fg,
    "breadcrumbPicker.background": p.input.bg,

    // Peek View
    "peekView.border": p.peekView.border,
    "peekViewTitle.background": p.peekView.headerBg,
    "peekViewTitleLabel.foreground": p.peekView.titleFg,
    "peekViewTitleDescription.foreground": p.peekView.descFg,
    "peekViewEditor.background": p.peekView.editorBg,
    "peekViewResult.background": p.peekView.resultBg,
    "peekViewResult.lineForeground": p.core.fg,
    "peekViewResult.fileForeground": p.peekView.descFg,
    "peekViewResult.selectionBackground": p.peekView.selectionBg,
    "peekViewResult.selectionForeground": p.peekView.selectionFg,
    "peekViewEditor.matchHighlightBackground": alpha(
      p.peekView.matchHighlight,
      Opacity.highlight
    ),
    "peekViewResult.matchHighlightBackground": alpha(
      p.peekView.matchHighlight,
      Opacity.highlight
    ),
  };
};
