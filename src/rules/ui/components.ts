import { Opacity } from "../../lib/opacity";
import { AetherPalette } from "../../lib/types";
import { alpha } from "../../lib/utils";

export const getComponentColors = (p: AetherPalette) => {
  const mutedFg = alpha(p.core.fg, Opacity.muted);

  return {
    // Base Colors
    foreground: p.core.fg,
    focusBorder: p.input.focusBorder,
    descriptionForeground: mutedFg,
    errorForeground: p.status.error,
    "icon.foreground": mutedFg,
    "widget.shadow": alpha(p.core.overlay, Opacity.shadow),
    "selection.background": p.editor.selection,
    "sash.hoverBorder": p.tabs.activeBorderTop,
    "progressBar.background": p.tabs.activeBorderTop,
    "window.activeBorder": p.core.border,
    "window.inactiveBorder": alpha(p.core.border, Opacity.inactive),

    // Scrollbar
    "scrollbar.shadow": alpha(p.scrollBar.shadow, Opacity.shadow),
    "scrollbarSlider.background": p.scrollBar.sliderBg,
    "scrollbarSlider.hoverBackground": p.scrollBar.sliderHover,
    "scrollbarSlider.activeBackground": p.scrollBar.sliderActive,

    // Tabs
    "editorGroupHeader.tabsBackground": p.titleBar.bg,
    "editorGroupHeader.tabsBorder": p.tabs.border,
    "editorGroup.border": p.core.border,
    "tab.activeForeground": p.tabs.activeFg,
    "tab.border": p.tabs.border,
    "tab.activeBorderTop": p.tabs.activeBorderTop,
    "tab.activeBackground": p.tabs.activeBg,
    "tab.inactiveBackground": alpha(p.tabs.inactiveBg, Opacity.inactive),
    "tab.inactiveForeground": p.tabs.inactiveFg,
    "tab.hoverBackground": alpha(p.tabs.activeBg, Opacity.half),
    "tab.hoverForeground": p.tabs.activeFg,
    "tab.unfocusedActiveBackground": alpha(p.tabs.activeBg, Opacity.solid),
    "tab.unfocusedActiveForeground": alpha(p.tabs.activeFg, Opacity.muted),
    "tab.unfocusedInactiveBackground": alpha(p.tabs.inactiveBg, Opacity.soft),
    "tab.unfocusedInactiveForeground": alpha(p.tabs.inactiveFg, Opacity.muted),
    "tab.unfocusedHoverBackground": alpha(p.tabs.activeBg, Opacity.medium),
    "tab.unfocusedHoverForeground": alpha(p.tabs.activeFg, Opacity.muted),
    "tab.unfocusedActiveBorder": alpha(p.tabs.activeBorderTop, Opacity.muted),
    "tab.unfocusedActiveBorderTop": alpha(
      p.tabs.activeBorderTop,
      Opacity.muted
    ),
    "tab.unfocusedHoverBorder": alpha(p.tabs.activeBorderTop, Opacity.low),
    "tab.activeModifiedBorder": p.git.modified,
    "tab.inactiveModifiedBorder": alpha(p.git.modified, Opacity.muted),
    "tab.unfocusedActiveModifiedBorder": alpha(p.git.modified, Opacity.half),
    "tab.unfocusedInactiveModifiedBorder": alpha(
      p.git.modified,
      Opacity.medium
    ),
    "tab.lastPinnedBorder": p.core.border,

    // Buttons & Badges
    "button.background": p.button.primary.bg,
    "button.foreground": p.button.primary.fg,
    "button.hoverBackground": p.button.primary.hover,
    "button.secondaryBackground": p.button.secondary.bg,
    "button.secondaryForeground": p.button.secondary.fg,
    "button.secondaryHoverBackground": p.button.secondary.hover,
    "badge.foreground": p.activityBar.badgeFg,
    "badge.background": p.activityBar.badgeBg,
    "extensionButton.prominentBackground": p.button.primary.bg,
    "extensionButton.prominentForeground": p.button.primary.fg,
    "extensionButton.prominentHoverBackground": p.button.primary.hover,

    // Inputs & Forms
    "input.background": p.input.bg,
    "input.border": p.input.border,
    "input.foreground": p.input.fg,
    "input.placeholderForeground": p.input.placeholder,
    "inputOption.activeBackground": alpha(p.input.focusBorder, Opacity.low),
    "inputOption.activeBorder": p.input.focusBorder,
    "inputOption.activeForeground": p.input.fg,
    "inputValidation.errorBackground": p.input.validation.errorBg,
    "inputValidation.errorForeground": p.input.fg,
    "inputValidation.errorBorder": p.input.validation.errorBorder,
    "dropdown.background": p.input.bg,
    "dropdown.foreground": p.input.fg,
    "dropdown.border": p.input.border,
    "dropdown.listBackground": p.input.bg,
    "checkbox.background": p.input.bg,
    "checkbox.foreground": p.input.fg,
    "checkbox.border": p.input.border,
    "checkbox.selectBackground": p.input.focusBorder,
    "checkbox.selectBorder": p.input.focusBorder,
    "radio.activeForeground": p.input.fg,
    "radio.activeBackground": alpha(p.input.focusBorder, Opacity.low),
    "radio.activeBorder": p.input.focusBorder,
    "radio.inactiveForeground": mutedFg,
    "radio.inactiveBackground": alpha(p.input.bg, Opacity.half),
    "radio.inactiveBorder": alpha(p.input.border, Opacity.half),
    "pickerGroup.border": p.core.border,
    "pickerGroup.foreground": p.tabs.activeBorderTop,

    // Lists & Trees
    "list.hoverBackground": p.list.hoverBg,
    "list.hoverForeground": p.core.fg,
    "list.activeSelectionBackground": p.list.activeSelectionBg,
    "list.activeSelectionForeground": p.list.activeSelectionFg,
    "list.inactiveSelectionBackground": p.list.inactiveSelectionBg,
    "list.inactiveSelectionForeground": p.core.fg,
    "list.focusBackground": p.list.focusBg,
    "list.focusForeground": p.core.fg,
    "list.dropBackground": alpha(p.list.activeSelectionBg, Opacity.medium),
    "list.highlightForeground": p.editor.findMatch,
    "tree.indentGuidesStroke": alpha(p.core.fg, Opacity.faint),
    "list.errorForeground": p.status.error,
    "list.warningForeground": p.status.warning,

    // Terminal
    "terminal.background": p.panel.bg,
    "terminal.foreground": p.core.fg,
    "terminal.border": p.panel.border,
    "terminalCursor.foreground": p.editor.cursor,
    "terminalCursor.background": p.editor.bg,
    "terminal.selectionBackground": p.editor.selection,
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

    // Notebooks
    "notebook.cellBorderColor": alpha(p.core.border, Opacity.medium),
    "notebook.focusedCellBorder": p.tabs.activeBorderTop,
    "notebook.cellStatusBarItemHoverBackground": alpha(
      p.core.fg,
      Opacity.subtle
    ),
    "notebook.focusedCellBackground": alpha(p.core.bg, Opacity.none),
    "notebook.cellEditorBackground": p.input.bg,
    "notebookStatusErrorIcon.foreground": p.status.error,
    "notebookStatusRunningIcon.foreground": p.status.info,
    "notebookStatusSuccessIcon.foreground": p.status.success,

    // Command Center & Menus
    "commandCenter.foreground": p.core.fg,
    "commandCenter.activeForeground": p.tabs.activeFg,
    "commandCenter.background": p.input.bg,
    "commandCenter.border": p.core.border,
    "commandCenter.activeBackground": alpha(p.input.bg, Opacity.solid),
    "menu.background": p.input.bg,
    "menu.foreground": p.core.fg,
    "menu.border": p.core.border,
    "menu.selectionBackground": p.list.activeSelectionBg,
    "menu.selectionForeground": p.list.activeSelectionFg,
    "menu.separatorBackground": p.core.border,

    // Widgets & Extras
    "editorWidget.background": p.input.bg,
    "editorWidget.foreground": p.input.fg,
    "editorWidget.border": p.input.border,
    "editorSuggestWidget.background": p.input.bg,
    "editorSuggestWidget.foreground": p.input.fg,
    "editorSuggestWidget.border": p.input.border,
    "editorSuggestWidget.selectedBackground": p.list.activeSelectionBg,
    "editorSuggestWidget.highlightForeground": p.editor.findMatch,
    "quickInput.background": p.input.bg,
    "quickInput.foreground": p.input.fg,
    "quickInputList.focusBackground": p.list.activeSelectionBg,
    "quickInputList.focusForeground": p.list.activeSelectionFg,
    "keybindingLabel.background": p.input.bg,
    "keybindingLabel.foreground": p.core.fg,
    "keybindingLabel.border": p.core.border,
    "keybindingLabel.bottomBorder": p.core.border,
    "notifications.background": p.input.bg,
    "notifications.foreground": p.core.fg,
    "notificationToast.border": p.core.border,
    "textBlockQuote.background": alpha(p.sideBar.bg, Opacity.half),
    "textBlockQuote.border": p.tabs.activeBorderTop,
    "textCodeBlock.background": p.input.bg,
    "textLink.activeForeground": p.button.primary.hover,
    "textLink.foreground": p.button.primary.bg,
    "toolbar.hoverBackground": alpha(p.core.fg, Opacity.subtle),

    // Settings & Welcome Page
    "settings.headerForeground": p.core.fg,
    "settings.modifiedItemIndicator": p.git.modified,
    "settings.dropdownBackground": p.input.bg,
    "settings.dropdownForeground": p.input.fg,
    "settings.dropdownBorder": p.input.border,
    "settings.checkboxBackground": p.input.bg,
    "settings.checkboxForeground": p.input.fg,
    "settings.checkboxBorder": p.input.border,
    "settings.textInputBackground": p.input.bg,
    "settings.textInputForeground": p.input.fg,
    "settings.textInputBorder": p.input.border,
    "welcomePage.background": p.core.bg,
    "welcomePage.tileBackground": p.input.bg,
    "welcomePage.tileHoverBackground": p.list.hoverBg,
    "welcomePage.progress.foreground": p.tabs.activeBorderTop,
    "walkThrough.embeddedEditorBackground": p.input.bg,

    // Charts
    "charts.foreground": p.core.fg,
    "charts.lines": alpha(p.core.fg, Opacity.medium),
    "charts.red": p.status.error,
    "charts.blue": p.status.info,
    "charts.yellow": p.status.warning,
    "charts.green": p.status.success,
    "charts.orange": p.git.modified,
    "charts.purple": p.syntax.functions,

    // Icons & Git
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
    "debugIcon.breakpointForeground": p.status.error,
    "debugIcon.startForeground": p.status.success,
    "debugIcon.pauseForeground": p.status.warning,
    "debugIcon.stopForeground": p.status.error,
    "debugToolBar.background": p.panel.bg,
    "gitDecoration.addedResourceForeground": p.git.added,
    "gitDecoration.modifiedResourceForeground": p.git.modified,
    "gitDecoration.deletedResourceForeground": p.git.deleted,
    "gitDecoration.renamedResourceForeground": p.status.info,
    "gitDecoration.untrackedResourceForeground": p.git.added,
    "gitDecoration.stageModifiedResourceForeground": alpha(
      p.git.modified,
      Opacity.solid
    ),
    "gitDecoration.stageDeletedResourceForeground": alpha(
      p.git.deleted,
      Opacity.solid
    ),
    "gitDecoration.submoduleResourceForeground": p.status.info,
    "gitDecoration.conflictingResourceForeground": p.git.conflict,
    "gitDecoration.ignoredResourceForeground": p.git.ignored,
    "editorError.foreground": p.status.error,
    "editorWarning.foreground": p.status.warning,
    "editorInfo.foreground": p.status.info,
    "problemsErrorIcon.foreground": p.status.error,
    "problemsWarningIcon.foreground": p.status.warning,
    "problemsInfoIcon.foreground": p.status.info,

    "testing.iconFailed": p.testing.failed,
    "testing.iconErrored": p.testing.errored,
    "testing.iconPassed": p.testing.passed,
    "testing.runAction": p.testing.passed,
    "testing.iconQueued": p.testing.queued,
    "testing.iconUnset": p.testing.unset,
    "testing.iconSkipped": p.testing.skipped,
    "testing.peekBorder": p.testing.border,
    "testing.peekHeaderBackground": p.panel.bg,
    "testing.message.error.decorationForeground": p.testing.failed,
    "testing.message.error.lineBackground": alpha(
      p.testing.failed,
      Opacity.subtle
    ),

    // Debug Console
    "debugConsole.infoForeground": p.status.info,
    "debugConsole.warningForeground": p.status.warning,
    "debugConsole.errorForeground": p.status.error,
    "debugConsole.sourceForeground": p.syntax.variables,
    "debugTokenExpression.name": p.syntax.variables,
    "debugTokenExpression.value": p.core.fg,
    "debugTokenExpression.string": p.syntax.strings,
    "debugTokenExpression.boolean": p.syntax.constants,
    "debugTokenExpression.number": p.syntax.numbers,
    "debugTokenExpression.error": p.status.error,

    // Notification Center
    "notificationCenterHeader.background": alpha(p.input.bg, Opacity.solid),
    "notificationCenterHeader.foreground": p.core.fg,
    "notificationLink.foreground": p.button.primary.bg,

    // Panel Sections
    "panelSection.border": p.panel.border,
    "panelSection.dropBackground": alpha(p.panel.headerFg, Opacity.subtle),
    "panelSectionHeader.background": alpha(p.core.bg, Opacity.none),
    "panelSectionHeader.foreground": p.panel.headerFg,

    // Tab drag-and-drop
    "tab.dragAndDropBorder": p.tabs.activeBorderTop,

    // Keybinding Table
    "keybindingTable.headerBackground": alpha(p.input.bg, Opacity.solid),
    "keybindingTable.rowsBackground": alpha(p.input.bg, Opacity.half),

    // Terminal extras
    "terminal.tab.activeBorder": p.tabs.activeBorderTop,
    "terminal.findMatchBackground": alpha(p.editor.findMatch, Opacity.highlight),
    "terminal.findMatchHighlightBackground": alpha(
      p.editor.findMatch,
      Opacity.faint
    ),
    "terminal.inactiveSelectionBackground": alpha(
      p.editor.selection,
      Opacity.half
    ),

    // SCM
    "scm.providerBorder": p.core.border,

    // Inline Chat & AI features
    "inlineChat.background": p.input.bg,
    "inlineChat.border": p.input.border,
    "inlineChat.foreground": p.input.fg,
    "inlineChat.shadow": alpha(p.core.overlay, Opacity.shadow),
    "chat.requestBackground": alpha(p.input.bg, Opacity.half),
    "chat.requestBorder": p.core.border,
    "chat.slashCommandBackground": alpha(p.tabs.activeBorderTop, Opacity.low),
    "chat.slashCommandForeground": p.tabs.activeFg,

    // Profile Badge
    "profileBadge.background": p.activityBar.badgeBg,
    "profileBadge.foreground": p.activityBar.badgeFg,

    // Ports
    "ports.iconRunningProcessForeground": p.status.success,

    // Multi Diff Editor
    "multiDiffEditor.headerBackground": p.panel.bg,
    "multiDiffEditor.border": p.core.border,

    // Comments View
    "commentsView.resolvedIcon": p.status.success,
    "commentsView.unresolvedIcon": p.status.warning,

    "banner.background": p.statusBar.bg,
    "banner.foreground": p.statusBar.fg,
    "banner.iconForeground": p.tabs.activeBorderTop,

    "extensionBadge.remoteBackground": p.statusBar.remoteBg,
    "extensionBadge.remoteForeground": p.core.fg,
    "extensionIcon.starForeground": p.status.warning,
    "extensionIcon.verifiedForeground": p.status.success,
    "extensionIcon.preReleaseForeground": p.status.warning,
    "extensionIcon.sponsorForeground": p.git.conflict,
  };
};
