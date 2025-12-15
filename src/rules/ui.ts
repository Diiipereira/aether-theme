import { AetherPalette } from "../lib/types";
import { alpha } from "../lib/utils";

export const getUiColors = (palette: AetherPalette) => {
  const p = palette;

  const mutedFg = alpha(p.core.fg, 65);

  // --- BASE / CORE ---
  const base = {
    foreground: p.core.fg,
    focusBorder: p.input.focusBorder, // Foco global segue o padrão de input
    descriptionForeground: mutedFg,
    errorForeground: p.status.error,
    "icon.foreground": mutedFg,
    "widget.shadow": p.core.overlay,
    "selection.background": p.editor.selection,
    "scrollbar.shadow": p.scrollBar.shadow,
    "scrollbarSlider.background": p.scrollBar.sliderBg,
    "scrollbarSlider.hoverBackground": p.scrollBar.sliderHover,
    "scrollbarSlider.activeBackground": p.scrollBar.sliderActive,
    "window.activeBorder": p.core.border,
    "window.inactiveBorder": alpha(p.core.border, 60),
    "sash.hoverBorder": p.tabs.activeBorderTop, // Geralmente a cor de destaque
    "progressBar.background": p.tabs.activeBorderTop, // Barra de loading
  };

  // --- ACTIVITY BAR ---
  const activityBar = {
    "activityBar.background": p.activityBar.bg,
    "activityBar.foreground": p.activityBar.fg,
    "activityBar.border": p.sideBar.border,
    "activityBar.dropBackground": alpha(p.activityBar.fg, 10),
    "activityBar.activeBorder": p.activityBar.activeBorder,
    "activityBar.activeBackground": p.activityBar.activeBg,
    "activityBar.inactiveForeground": alpha(p.activityBar.fg, 50),
    "activityBarBadge.background": p.activityBar.badgeBg,
    "activityBarBadge.foreground": p.activityBar.badgeFg,
  };

  // --- SIDEBAR ---
  const sidebar = {
    "sideBar.background": p.sideBar.bg,
    "sideBar.foreground": p.sideBar.fg,
    "sideBar.border": p.sideBar.border,
    "sideBar.dropBackground": alpha(p.sideBar.fg, 10),
    "sideBarTitle.foreground": p.sideBar.titleFg,
    "sideBarSectionHeader.background": p.sideBar.sectionHeaderBg,
    "sideBarSectionHeader.foreground": p.sideBar.titleFg,
    "sideBarSectionHeader.border": p.sideBar.border,
  };

  // --- STATUS BAR ---
  const statusBar = {
    "statusBar.foreground": p.statusBar.fg,
    "statusBar.background": p.statusBar.bg,
    "statusBar.border": p.statusBar.border,
    "statusBarItem.hoverBackground": p.statusBar.itemHover,
    "statusBarItem.remoteBackground": p.statusBar.remoteBg,
    "statusBarItem.remoteForeground": p.statusBar.fg,
    // Debugging herda do status padrão ou usa warning/info se preferir destacar
    "statusBar.debuggingBackground": p.status.warning,
    "statusBar.debuggingForeground": p.core.bg,
    "statusBar.debuggingBorder": p.status.warning,
    "statusBar.noFolderBackground": p.statusBar.bg,
    "statusBar.noFolderForeground": mutedFg,
  };

  // --- TITLE BAR & MENUS ---
  const titleBar = {
    "titleBar.activeBackground": p.titleBar.bg,
    "titleBar.activeForeground": p.titleBar.fg,
    "titleBar.inactiveBackground": p.titleBar.inactiveBg,
    "titleBar.inactiveForeground": alpha(p.titleBar.fg, 60),
    "titleBar.border": p.core.border,
    // Menus (File, Edit...)
    "menu.background": p.input.bg, // Geralmente igual inputs ou dropdowns
    "menu.foreground": p.core.fg,
    "menu.border": p.core.border,
    "menu.selectionBackground": p.list.activeSelectionBg,
    "menu.selectionForeground": p.list.activeSelectionFg,
    "menu.separatorBackground": p.core.border,
  };

  // --- BUTTONS / BADGES / TOOLBAR ---
  const buttons = {
    "button.background": p.button.primary.bg,
    "button.foreground": p.button.primary.fg,
    "button.hoverBackground": p.button.primary.hover,
    "button.secondaryBackground": p.button.secondary.bg,
    "button.secondaryForeground": p.button.secondary.fg,
    "button.secondaryHoverBackground": p.button.secondary.hover,
    "badge.foreground": p.activityBar.badgeFg,
    "badge.background": p.activityBar.badgeBg,
    "toolbar.hoverBackground": alpha(p.core.fg, 10),
    "textLink.foreground": p.button.primary.bg, // Links geralmente usam cor primária
  };

  // --- INPUTS / DROPDOWNS / VALIDATION ---
  const inputs = {
    "input.background": p.input.bg,
    "input.border": p.input.border,
    "input.foreground": p.input.fg,
    "input.placeholderForeground": p.input.placeholder,
    "inputOption.activeBackground": alpha(p.input.focusBorder, 20),
    "inputOption.activeBorder": p.input.focusBorder,
    "inputOption.activeForeground": p.input.fg,
    "inputValidation.errorBackground": p.input.validation.errorBg,
    "inputValidation.errorForeground": p.input.fg,
    "inputValidation.errorBorder": p.input.validation.errorBorder,
    "dropdown.background": p.input.bg,
    "dropdown.foreground": p.input.fg,
    "dropdown.border": p.input.border,
    "dropdown.listBackground": p.input.bg,
  };

  // --- FORM CONTROLS (Checkboxes & Radios) ---
  const formControls = {
    "checkbox.background": p.input.bg,
    "checkbox.foreground": p.input.fg,
    "checkbox.border": p.input.border,
    "checkbox.selectBackground": p.input.focusBorder,
    "checkbox.selectBorder": p.input.focusBorder,
    "radio.activeForeground": p.input.fg,
    "radio.activeBackground": alpha(p.input.focusBorder, 20),
    "radio.activeBorder": p.input.focusBorder,
    "radio.inactiveForeground": mutedFg,
    "radio.inactiveBackground": alpha(p.input.bg, 50),
    "radio.inactiveBorder": alpha(p.input.border, 50),
  };

  // --- LISTS / TREES ---
  const lists = {
    "list.hoverBackground": p.list.hoverBg,
    "list.hoverForeground": p.core.fg,
    "list.activeSelectionBackground": p.list.activeSelectionBg,
    "list.activeSelectionForeground": p.list.activeSelectionFg,
    "list.inactiveSelectionBackground": p.list.inactiveSelectionBg,
    "list.inactiveSelectionForeground": p.core.fg,
    "list.focusBackground": p.list.focusBg,
    "list.focusForeground": p.core.fg,
    "list.dropBackground": alpha(p.list.activeSelectionBg, 40),
    "list.highlightForeground": p.editor.findMatch,
    "tree.indentGuidesStroke": alpha(p.core.fg, 15),
    "list.errorForeground": p.status.error,
    "list.warningForeground": p.status.warning,
  };

  // --- TABS / EDITOR GROUPS ---
  const tabs = {
    "editorGroupHeader.tabsBackground": p.titleBar.bg, // Fundo atrás das abas
    "editorGroupHeader.tabsBorder": p.tabs.border,
    "editorGroup.border": p.core.border,
    "tab.activeForeground": p.tabs.activeFg,
    "tab.border": p.tabs.border,
    "tab.activeBorderTop": p.tabs.activeBorderTop,
    "tab.activeBackground": p.tabs.activeBg,
    "tab.inactiveBackground": p.tabs.inactiveBg,
    "tab.inactiveForeground": p.tabs.inactiveFg,
    "tab.hoverBackground": alpha(p.tabs.activeBg, 50),
    "tab.hoverForeground": p.tabs.activeFg,
  };

  // --- EDITOR ---
  const editor = {
    "editor.background": p.editor.bg,
    "editor.foreground": p.editor.fg,
    "editorWidget.background": p.input.bg, // Widgets tipo Find/Replace
    "editorWidget.foreground": p.input.fg,
    "editorWidget.border": p.input.border,
    "editorError.foreground": p.status.error,
    "editorWarning.foreground": p.status.warning,
    "editorInfo.foreground": p.status.info,
    "editorLineNumber.foreground": p.editor.gutter.fg,
    "editorLineNumber.activeForeground": p.editor.gutter.activeFg,
    "editorCursor.foreground": p.editor.cursor,
    "editorIndentGuide.background": p.editor.indentGuide.inactive,
    "editorIndentGuide.activeBackground": p.editor.indentGuide.active,
    "editor.selectionBackground": p.editor.selection,
    "editor.lineHighlightBackground": p.editor.lineHighlight,
    "editor.findMatchBackground": alpha(p.editor.findMatch, 30),
    "editor.findMatchHighlightBackground": alpha(p.editor.findMatch, 15),
    "editorBracketMatch.border": p.editor.bracketMatch.border,
    "editorBracketMatch.background": p.editor.bracketMatch.bg,
    "editorGutter.background": p.editor.gutter.bg,
    "editorGutter.modifiedBackground": p.git.modified,
    "editorGutter.addedBackground": p.git.added,
    "editorGutter.deletedBackground": p.git.deleted,
  };

  // --- DIFF EDITOR ---
  const diffAndMerge = {
    "diffEditor.insertedTextBackground": alpha(p.git.added, 15),
    "diffEditor.removedTextBackground": alpha(p.git.deleted, 15),
    "diffEditor.border": p.core.border,
    "merge.border": p.core.border,
    "merge.currentContentBackground": alpha(p.git.conflict, 10),
    "merge.incomingContentBackground": alpha(p.git.modified, 10),
  };

  // --- PANEL / TERMINAL ---
  const panel = {
    "panel.background": p.panel.bg,
    "panel.border": p.panel.border,
    "panelTitle.activeBorder": p.tabs.activeBorderTop, // Linha abaixo da aba do painel
    "panelTitle.activeForeground": p.panel.headerFg,
    "panelTitle.inactiveForeground": alpha(p.panel.headerFg, 60),
    "terminal.background": p.panel.bg,
    "terminal.foreground": p.core.fg,
    "terminal.border": p.panel.border,
    "terminalCursor.foreground": p.editor.cursor,
    "terminalCursor.background": p.editor.bg,
    "terminal.selectionBackground": p.editor.selection,
  };

  // --- TERMINAL ANSI COLORS ---
  const terminal = {
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
  };

  // --- WIDGETS (Quick Pick, Suggest) ---
  const quickAndWidgets = {
    "quickInput.background": p.input.bg,
    "quickInput.foreground": p.input.fg,
    "quickInputList.focusBackground": p.list.activeSelectionBg,
    "quickInputList.focusForeground": p.list.activeSelectionFg,
    "editorSuggestWidget.background": p.input.bg,
    "editorSuggestWidget.foreground": p.input.fg,
    "editorSuggestWidget.border": p.input.border,
    "editorSuggestWidget.selectedBackground": p.list.activeSelectionBg,
    "editorSuggestWidget.highlightForeground": p.editor.findMatch,
  };

  // --- SYMBOL ICONS (Mapeados para cores de sintaxe para consistência) ---
  const symbolIcons = {
    "symbolIcon.classForeground": p.syntax.classes,
    "symbolIcon.constructorForeground": p.syntax.functions,
    "symbolIcon.enumeratorForeground": p.syntax.types,
    "symbolIcon.fieldForeground": p.syntax.variables,
    "symbolIcon.functionForeground": p.syntax.functions,
    "symbolIcon.interfaceForeground": p.syntax.types,
    "symbolIcon.methodForeground": p.syntax.functions,
    "symbolIcon.variableForeground": p.syntax.variables,
    "symbolIcon.constantForeground": p.syntax.constants,
    "symbolIcon.stringForeground": p.syntax.strings,
    "symbolIcon.keywordForeground": p.syntax.keywords,
    "symbolIcon.numberForeground": p.syntax.numbers,
    "symbolIcon.booleanForeground": p.syntax.constants,
    "symbolIcon.arrayForeground": p.syntax.types,
    "symbolIcon.operatorForeground": p.syntax.operators,
  };

  // --- DEBUG ICONS ---
  const debugIcons = {
    "debugIcon.breakpointForeground": p.status.error,
    "debugIcon.startForeground": p.status.success,
    "debugIcon.pauseForeground": p.status.warning,
    "debugIcon.stopForeground": p.status.error,
    "debugToolBar.background": p.panel.bg,
  };

  // --- GIT DECORATIONS ---
  const git = {
    "gitDecoration.addedResourceForeground": p.git.added,
    "gitDecoration.modifiedResourceForeground": p.git.modified,
    "gitDecoration.deletedResourceForeground": p.git.deleted,
    "gitDecoration.conflictingResourceForeground": p.git.conflict,
    "gitDecoration.ignoredResourceForeground": p.git.ignored,
  };

  // --- MISC / TEXT RICH ---
  const misc = {
    "textBlockQuote.background": alpha(p.sideBar.bg, 50),
    "textBlockQuote.border": p.tabs.activeBorderTop,
    "textCodeBlock.background": p.input.bg,
    "textLink.activeForeground": p.button.primary.hover,
    "keybindingLabel.background": p.input.bg,
    "keybindingLabel.foreground": p.core.fg,
    "keybindingLabel.border": p.core.border,
    "keybindingLabel.bottomBorder": p.core.border,
    "notifications.background": p.input.bg,
    "notifications.foreground": p.core.fg,
    "notificationToast.border": p.core.border,
  };

  // --- BREADCRUMBS ---
  const breadcrumbs = {
    "breadcrumb.background": p.editor.bg,
    "breadcrumb.foreground": mutedFg,
    "breadcrumb.focusForeground": p.core.fg,
    "breadcrumb.activeSelectionForeground": p.core.fg,
  };

  return {
    ...base,
    ...activityBar,
    ...sidebar,
    ...statusBar,
    ...titleBar,
    ...buttons,
    ...inputs,
    ...formControls,
    ...lists,
    ...tabs,
    ...editor,
    ...diffAndMerge,
    ...panel,
    ...terminal,
    ...quickAndWidgets,
    ...symbolIcons,
    ...debugIcons,
    ...git,
    ...misc,
    ...breadcrumbs,
  } as Record<string, string | undefined>;
};
