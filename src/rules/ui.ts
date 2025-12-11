import { AetherPalette } from "../lib/types";
import { alpha } from "../lib/utils";

export const getUiColors = (palette: AetherPalette) => {
  const p = palette;

  // --- BASE / CORE ---
  const base = {
    foreground: p.fg.primary,
    focusBorder: p.accent.primary,
    descriptionForeground: p.fg.muted,
    errorForeground: p.status.error,
    "icon.foreground": p.fg.secondary,
    "selection.background": alpha(p.misc.selection_weak, 16),
    "widget.shadow": alpha(p.accent.primary, 7),
    "scrollbar.shadow": alpha(p.accent.primary, 31),
    "scrollbarSlider.background": alpha(p.accent.primary, 40),
    "scrollbarSlider.hoverBackground": alpha(p.accent.primary, 55),
    "scrollbarSlider.activeBackground": alpha(p.accent.primary, 75),
    "window.activeBorder": p.bg.border,
    "window.inactiveBorder": p.bg.border,
  };

  // --- ACTIVITY BAR ---
  const activityBar = {
    "activityBar.background": p.bg.surface,
    "activityBar.foreground": p.fg.primary,
    "activityBar.border": p.bg.border,
    "activityBar.dropBackground": alpha(p.bg.border, 8),
    "activityBar.activeBorder": p.accent.primary_hover,
    "activityBar.activeBackground": p.bg.border,
    "activityBar.inactiveForeground": alpha(p.fg.secondary, 70),
    "activityBarBadge.background": p.accent.primary_hover,
    "activityBarBadge.foreground": p.fg.primary,
  };

  // --- SIDEBAR ---
  const sidebar = {
    "sideBar.background": p.bg.base,
    "sideBar.foreground": p.fg.primary,
    "sideBar.border": p.bg.border,
    "sideBar.dropBackground": alpha(p.bg.border, 6),
    "sideBarTitle.foreground": p.fg.secondary,
    "sideBarSectionHeader.background": p.bg.surface,
    "sideBarSectionHeader.foreground": p.fg.secondary,
    "sideBarSectionHeader.border": p.bg.border,
    "sideBarTitle.background": p.bg.base,
  };

  // --- STATUS BAR ---
  const statusBar = {
    "statusBar.foreground": p.fg.primary,
    "statusBar.background": p.bg.base,
    "statusBarItem.hoverBackground": p.accent.primary_hover,
    "statusBar.border": p.bg.command_border,
    "statusBar.debuggingBackground": p.status.submodule ?? p.status.submodule,
    "statusBar.debuggingForeground": p.fg.primary,
    "statusBar.debuggingBorder": p.accent.highlight,
    "statusBar.noFolderBackground": p.bg.border,
    "statusBar.noFolderForeground": p.fg.primary,
    "statusBar.noFolderBorder": p.bg.command_border,
    "statusBarItem.remoteBackground": alpha(p.accent.primary, 80),
    "statusBarItem.remoteForeground": p.fg.primary,
  };

  // --- TITLE BAR & MENUS ---
  const titleBar = {
    "titleBar.activeBackground": p.bg.surface,
    "titleBar.activeForeground": p.fg.primary,
    "titleBar.inactiveBackground": alpha(p.bg.surface, 85),
    "titleBar.inactiveForeground": p.fg.secondary,
    "titleBar.border": p.bg.border,
    "menu.background": p.bg.surface,
    "menu.foreground": p.fg.primary,
    "menu.border": p.bg.border,
    "menu.selectionBackground": alpha(p.accent.primary, 14),
    "menu.selectionForeground": p.fg.primary,
    "menu.separatorBackground": p.bg.border,
  };

  // --- BUTTONS / BADGES / TOOLBAR ---
  const buttons = {
    "button.background": p.accent.primary,
    "button.foreground": p.fg.primary,
    "button.hoverBackground": p.accent.primary_hover,
    "button.secondaryBackground": p.bg.surface,
    "button.secondaryForeground": p.fg.primary,
    "button.secondaryHoverBackground": p.bg.command_border,
    "button.border": alpha(p.accent.primary, 24),
    "badge.foreground": p.fg.primary,
    "badge.background": p.bg.badge,
    "toolbar.hoverBackground": alpha(p.bg.border, 6),
    "textLink.foreground": p.fg.link,
  };

  // --- INPUTS / DROPDOWNS / VALIDATION ---
  const inputs = {
    "input.background": p.bg.input,
    "input.border": p.bg.border,
    "input.foreground": p.fg.primary,
    "input.placeholderForeground": p.fg.muted,
    "inputOption.activeBackground": alpha(p.accent.primary, 10),
    "inputOption.activeBorder": p.bg.command_border,
    "inputOption.activeForeground": p.fg.primary,
    "inputValidation.errorBackground": alpha(p.status.error, 10),
    "inputValidation.errorForeground": p.status.error,
    "dropdown.background": p.bg.dropdown,
    "dropdown.foreground": p.fg.primary,
    "dropdown.border": p.bg.border,
  };

  // --- LISTS / TREES / EXPLORER ---
  const lists = {
    "list.hoverBackground": alpha(p.accent.primary, 20),
    "list.hoverForeground": p.fg.primary,
    "list.activeSelectionBackground": alpha(p.accent.primary, 30),
    "list.activeSelectionForeground": p.fg.primary,
    "list.inactiveSelectionBackground": alpha(p.accent.primary, 10),
    "list.inactiveSelectionForeground": p.fg.secondary,
    "listFilterWidget.background": p.bg.base,
    "listFilterWidget.outline": alpha(p.accent.primary, 30),
    "listFilterWidget.noMatchesOutline": alpha(p.accent.primary, 45),
    "list.focusBackground": alpha(p.accent.primary, 10),
    "list.focusForeground": p.fg.primary,
    "list.dropBackground": alpha(p.accent.primary, 30),
    "list.highlightForeground": p.accent.primary,
    "list.deemphasizedForeground": alpha(p.fg.secondary, 60),
    "tree.indentGuidesStroke": alpha(p.accent.primary, 35),
    "tree.tableOddRowsBackground": alpha(p.bg.surface, 3),
    "list.errorForeground": p.status.red,
    "list.warningForeground": p.status.yellow,
  };

  // --- TABS / EDITOR GROUPS ---
  const tabs = {
    "editorGroupHeader.tabsBorder": p.bg.border,
    "editorGroupHeader.tabsBackground": p.bg.surface,
    "editorGroup.border": p.bg.border,
    "tab.activeForeground": p.fg.primary,
    "tab.border": p.bg.border,
    "tab.activeBorder": p.accent.primary,
    "tab.inactiveBackground": p.bg.base,
    "tab.inactiveForeground": p.fg.secondary,
    "tab.hoverBackground": p.bg.border,
    "tab.hoverForeground": p.fg.primary,
    "tab.activeBackground": p.bg.surface,
    "tab.hoverBorder": alpha(p.accent.primary, 45),
    "tab.unfocusedHoverBackground": alpha(p.bg.border, 4),
  };

  // --- EDITOR (UI parts - not tokens) ---
  const editor = {
    "editor.background": p.bg.surface,
    "editor.foreground": p.fg.primary,
    "editorWidget.background": p.bg.base,
    "editorWidget.foreground": p.fg.secondary,
    "editorWidget.border": p.accent.primary,
    "editorGroup.border": p.bg.border,
    "editorError.foreground": p.status.error,
    "editorWarning.foreground": p.status.warning,
    "editorInfo.foreground": p.status.info,
    "editorLink.activeForeground": p.fg.link,
    "editorLineNumber.foreground": alpha(p.fg.secondary, 80),
    "editorLineNumber.activeForeground": p.fg.primary,
    "editorLineNumber.dimmedForeground": alpha(p.fg.secondary, 50),
    "editorCursor.foreground": p.accent.primary_hover,
    "editorWhitespace.foreground": alpha(p.fg.secondary, 18),
    "editorIndentGuide.background": alpha(p.accent.primary, 15),
    "editorIndentGuide.activeBackground": alpha(p.accent.primary, 60),
    "editor.selectionBackground": alpha(p.misc.selection_weak, 16),
    "editor.inactiveSelectionBackground": alpha(p.misc.selection_weak, 8),
    "editor.selectionHighlightBackground": alpha(p.accent.primary, 8),
    "editor.lineHighlightBackground": alpha(p.bg.border, 40),
    "editor.lineHighlightBorder": alpha(p.bg.command_border, 80),
    "editorOverviewRuler.border": p.bg.border,
    "editorOverviewRuler.findMatchForeground": p.accent.primary,
    "editorOverviewRuler.modifiedForeground":
      p.status.modified_gutter ?? p.status.modified_gutter,
    "editorOverviewRuler.addedForeground": p.status.added_gutter,
    "editorOverviewRuler.deletedForeground": p.status.deleted_gutter,
    "editorOverviewRuler.errorForeground": p.status.red,
    "editorOverviewRuler.warningForeground": p.status.yellow,
    "editorBracketMatch.border": alpha(p.accent.primary, 24),
    "editorBracketMatch.background": alpha(p.accent.primary, 6),
    "editorUnnecessaryCode.opacity": "0.6",
    "editorCodeLens.foreground": p.fg.secondary,
    "editorGutter.background": p.bg.surface,
    "editorGutter.foldingControlForeground": p.fg.secondary,
    "editorGutter.modifiedBackground": p.status.modified_gutter,
    "editorGutter.addedBackground": p.status.added_gutter,
    "editorGutter.deletedBackground": p.status.deleted_gutter,
    "editor.findMatchBackground": alpha(p.accent.primary, 18),
    "editor.findMatchHighlightBackground": alpha(p.accent.primary, 12),
    "editor.findRangeHighlightBackground": alpha(p.accent.primary, 8),
    "debugToolBar.background": p.bg.surface,
    "debugToolBar.border": p.accent.primary,
  };

  // --- DIFF EDITOR / MERGE CONFLICTS ---
  const diffAndMerge = {
    "diffEditor.insertedTextBackground": alpha(p.status.green, 12),
    "diffEditor.insertedTextBorder": alpha(p.status.green, 24),
    "diffEditor.removedTextBackground": alpha(p.status.red, 12),
    "diffEditor.removedTextBorder": alpha(p.status.red, 24),
    "diffEditor.border": p.bg.border,
    "merge.border": p.bg.border,
    "merge.commonContentBackground": alpha(p.misc.diff_common, 6),
    "merge.commonHeaderBackground": alpha(p.misc.diff_common, 8),
    "merge.incomingContentBackground": alpha(p.accent.primary, 6),
    "merge.currentContentBackground": alpha(p.bg.border, 8),
    "mergeEditor.changeBase.background": alpha(p.bg.border, 5),
    "mergeEditor.conflict.input1.background": alpha(
      p.status.modified_gutter,
      8
    ),
    "mergeEditor.conflict.input2.background": alpha(p.status.added_gutter, 8),
    "editorOverviewRuler.incomingContentForeground": p.accent.primary,
    "editorOverviewRuler.currentContentForeground": p.bg.border,
    "editorOverviewRuler.commonContentForeground": p.misc.diff_common,
  };

  // COMMAND CENTER
  const commandCenter = {
    "commandCenter.foreground": p.fg.secondary,
    "commandCenter.activeForeground": p.fg.primary,
    "commandCenter.background": p.bg.base,
    "commandCenter.activeBackground": p.bg.base,
    "commandCenter.border": alpha(p.bg.border, 60),
    "commandCenter.inactiveForeground": "#0000ff",
    "commandCenter.inactiveBorder": alpha(p.bg.border, 20),
    "commandCenter.activeBorder": p.bg.command_border,
    "commandCenter.debuggingBackground": "#00ff00",
  };

  // --- PANEL / OUTPUT / PROBLEMS / TERMINAL (panel background uses darker surface) ---
  const panel = {
    "panel.background": p.bg.surface,
    "panel.border": p.bg.border,
    "panelTitle.activeBorder": p.accent.primary,
    "panelTitle.activeForeground": p.fg.primary,
    "panelTitle.inactiveForeground": p.fg.secondary,
    "terminal.selectionBackground": p.bg.command_border,
    "terminalCursor.foreground": p.fg.primary,
    "terminalCursor.background": p.bg.command_border,
    "badge.background": p.accent.primary_hover,
    "badge.foreground": p.fg.primary,
    "terminal.border": p.bg.command_border,
    "panel.dropBorder": alpha(p.bg.border, 10),
    "panelInput.border": p.bg.border,
    "panelSectionHeader.background": p.bg.base,
    "panelSectionHeader.foreground": p.fg.secondary,
    "panelSection.border": p.bg.border,
    "outputView.background": p.bg.surface,
  };

  // --- TERMINAL ---
  const terminal = {
    "terminal.background": p.bg.surface,
    "terminal.foreground": p.fg.primary,
    "terminal.border": p.bg.border,
    "terminal.ansiBlack": p.terminal.black,
    "terminal.ansiRed": p.terminal.red,
    "terminal.ansiGreen": p.terminal.green,
    "terminal.ansiYellow": p.terminal.yellow,
    "terminal.ansiBlue": p.terminal.blue,
    "terminal.ansiMagenta": p.terminal.magenta,
    "terminal.ansiCyan": p.terminal.cyan,
    "terminal.ansiWhite": p.terminal.white,
    "terminal.ansiBrightBlack": p.terminal.brightBlack,
    "terminal.ansiBrightRed": p.terminal.brightRed,
    "terminal.ansiBrightGreen": p.terminal.brightGreen,
    "terminal.ansiBrightYellow": p.terminal.brightYellow,
    "terminal.ansiBrightBlue": p.terminal.brightBlue,
    "terminal.ansiBrightMagenta": p.terminal.brightMagenta,
    "terminal.ansiBrightCyan": p.terminal.brightCyan,
    "terminal.ansiBrightWhite": p.terminal.brightWhite,
    "terminal.selectionBackground": alpha(p.misc.selection_weak, 14),
    "terminalCursor.background": p.bg.surface,
    "terminalCursor.foreground": p.fg.primary,
  };

  // --- QUICK PICK / INPUTS / SUGGEST / HOVER / WIDGETS ---
  const quickAndWidgets = {
    "quickInput.background": p.bg.surface,
    "quickInput.foreground": p.fg.primary,
    "quickInputTitle.background": alpha(p.bg.border, 6),
    "quickInputList.focusBackground": alpha(p.accent.primary, 12),
    "quickInputList.focusForeground": p.fg.primary,
    "editorHoverWidget.background": p.bg.surface,
    "editorHoverWidget.foreground": p.fg.primary,
    "editorHoverWidget.border": p.bg.border,
    "editorSuggestWidget.background": p.bg.surface,
    "editorSuggestWidget.foreground": p.fg.primary,
    "editorSuggestWidget.border": p.bg.border,
    "editorSuggestWidget.selectedBackground": alpha(p.accent.primary, 12),
    "editorSuggestWidget.highlightForeground": p.accent.primary,
    "widget.background": p.bg.surface,
    "widget.border": p.bg.border,
    "widget.shadow": alpha(p.accent.primary, 7),
  };

  // --- HOVER / PEAK / FIND WIDGET / SNIPPETS ---
  const peekAndFind = {
    "peekViewEditor.background": p.bg.surface,
    "peekViewEditorGutter.background": alpha(p.bg.border, 6),
    "peekViewEditor.matchHighlightBackground": alpha(p.accent.primary, 14),
    "peekViewResult.background": p.bg.base,
    "peekViewTitle.background": p.bg.surface,
    "peekViewTitleLabel.foreground": p.fg.primary,
    "peekViewTitleDescription.foreground": p.fg.secondary,
    "findWidget.background": p.bg.surface,
    "findWidget.searchBackground": alpha(p.accent.primary, 10),
    "findWidget.replaceBackground": alpha(p.bg.border, 6),
    "editor.snippetTabstopHighlightBackground": alpha(p.accent.primary, 8),
    "editor.snippetTabstopHighlightBorder": alpha(p.accent.primary, 24),
  };

  // --- NOTIFICATIONS / TOASTS ---
  const notifications = {
    "notifications.foreground": p.fg.primary,
    "notifications.background": p.bg.surface,
    "notificationToast.border": p.bg.border,
    "notificationsErrorIcon.foreground": p.status.error,
    "notificationsWarninIcon.foreground": p.status.warning,
    "notificationsInfoIcon.foreground": p.status.info,
    "notificationCenterHeader.foreground": p.fg.secondary,
    "notificationCenterHeader.background": p.bg.base,
    "notification.border": p.bg.border,
    "notificationCenter.border": p.bg.command_border,
    "notificationLink.foreground": p.accent.primary,
    "notificationButton.background": alpha(p.accent.primary, 10),
    "notificationButton.foreground": p.fg.primary,
  };

  // --- GIT / SCM / DECORATIONS ---
  const git = {
    "gitDecoration.addedResourceForeground": p.status.added_gutter,
    "gitDecoration.modifiedResourceForeground": p.status.modified_gutter,
    "gitDecoration.deletedResourceForeground": p.status.deleted_gutter,
    "gitDecoration.renamedResourceForeground": p.status.info,
    "gitDecoration.untrackedResourceForeground": alpha(p.status.green, 70),
    "gitDecoration.ignoredResourceForeground": alpha(p.fg.secondary, 40),
    "gitDecoration.conflictingResourceForeground": p.status.red,
    "git.blame.editorDecorationForeground": alpha(p.fg.secondary, 60),
  };

  // --- BREADCRUMBS / NAVIGATION ---
  const breadcrumbs = {
    "breadcrumb.background": p.bg.surface,
    "breadcrumb.foreground": p.fg.secondary,
    "breadcrumb.focusForeground": p.fg.primary,
    "breadcrumb.activeSelectionForeground": p.fg.primary,
    "breadcrumbPicker.background": p.bg.surface,
    "editorGroupHeader.border": p.bg.command_border,
  };

  // --- SCHEMAS / SETTINGS / TABLES / CHARTS / NOTEBOOKS (basic UI tokens) ---
  const misc = {
    "settings.headerForeground": p.fg.primary,
    "settings.modifiedItemIndicator": p.accent.primary,
    "settings.dropdownBackground": p.bg.dropdown,
    "settings.rowHoverBackground": alpha(p.bg.border, 6),
    "keybindingLabel.background": alpha(p.bg.border, 6),
    "charts.foreground": p.fg.primary,
    "charts.lines": alpha(p.fg.secondary, 30),
    "notebook.editorBackground": p.bg.surface,
    "notebook.cellBorderColor": p.bg.border,
    "notebook.cellHoverBackground": alpha(p.bg.border, 6),
    "notebook.outputContainerBackgroundColor": alpha(p.bg.surface, 6),
    "ports.iconRunningProcessForeground": p.status.green,
  };

  // --- MINIMAP ---
  const minimap = {
    "minimap.background": p.bg.surface,
    "minimap.findMatchHighlight": alpha(p.accent.secondary, 80),
    "minimap.selectionHighlight": alpha(p.accent.primary, 60),
    "minimap.errorHighlight": alpha(p.status.error, 80),
    "minimap.warningHighlight": alpha(p.status.warning, 80),
    "minimap.selectionOccurrenceHighlight": alpha(p.accent.primary, 35),
    "minimap.cursorHighlight": alpha(p.fg.primary, 60),
    "minimapGutter.addedBackground": p.status.added_gutter,
    "minimapGutter.modifiedBackground": p.status.modified_gutter,
    "minimapGutter.deletedBackground": p.status.deleted_gutter,
    "minimap.foregroundOpacity": "0.6",
  };

  // --- RETURN (flattened by spreading sections) ---
  return {
    ...base,

    // major UI sections
    ...activityBar,
    ...sidebar,
    ...statusBar,
    ...titleBar,
    ...buttons,
    ...inputs,
    ...lists,
    ...tabs,
    ...editor,
    ...diffAndMerge,
    ...commandCenter,
    ...panel,
    ...terminal,
    ...quickAndWidgets,
    ...peekAndFind,
    ...notifications,
    ...git,
    ...breadcrumbs,
    ...misc,
    ...minimap,
  } as Record<string, string | undefined>;
};
