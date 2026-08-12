import { Opacity } from "../../lib/opacity";
import { AetherPalette } from "../../lib/types";
import { alpha, readableOn } from "../../lib/utils";

export const getLayoutColors = (p: AetherPalette) => {
  const surfaceBg = p.surface?.bg ?? p.sideBar.bg;
  const surfaceFg = p.surface?.fg ?? p.sideBar.fg;
  const surfaceBorder = p.surface?.border ?? p.core.border;

  return {
    // Surface (Modern UI)
    "surface.background": surfaceBg,
    "surface.foreground": surfaceFg,
    "surface.border": surfaceBorder,
    "widget.border": surfaceBorder,

    // Activity Bar
    "activityBar.background": p.activityBar.bg,
    "activityBar.foreground": p.activityBar.fg,
    "activityBar.border": p.sideBar.border,
    "activityBar.activeBorder": p.activityBar.activeBorder,
    "activityBar.activeBackground": p.activityBar.activeBg,
    "activityBar.inactiveForeground": alpha(p.activityBar.fg, Opacity.half),
    "activityBarBadge.background": p.activityBar.badgeBg,
    "activityBarBadge.foreground": p.activityBar.badgeFg,
    "activityBar.dropBorder": p.activityBar.activeBorder,
    "activityBar.activeFocusBorder": p.activityBar.activeBorder,
    "activityBarTop.background": p.activityBar.bg,
    "activityBarTop.foreground": p.activityBar.fg,
    "activityBarTop.inactiveForeground": alpha(p.activityBar.fg, Opacity.half),
    "activityBarTop.activeBorder": p.activityBar.activeBorder,
    "activityBarTop.activeBackground": p.activityBar.activeBg,
    "activityBarTop.dropBorder": p.activityBar.activeBorder,
    "activityWarningBadge.background": p.status.warning,
    "activityWarningBadge.foreground": p.core.bg,
    "activityErrorBadge.background": p.status.error,
    "activityErrorBadge.foreground": p.core.bg,

    // Side Bar
    "sideBar.background": p.sideBar.bg,
    "sideBar.foreground": p.sideBar.fg,
    "sideBar.border": p.sideBar.border,
    "sideBar.dropBackground": alpha(p.sideBar.fg, Opacity.subtle),
    "sideBarTitle.foreground": p.sideBar.titleFg,
    "sideBarSectionHeader.background": p.sideBar.sectionHeaderBg,
    "sideBarSectionHeader.foreground": p.sideBar.titleFg,
    "sideBarSectionHeader.border": p.sideBar.border,
    "sideBarActivityBarTop.border": p.sideBar.border,
    "sideBarTitle.background": p.sideBar.bg,
    "sideBarTitle.border": p.sideBar.border,
    "sideBarStickyScroll.background": p.sideBar.bg,
    "sideBarStickyScroll.border": p.sideBar.border,
    "sideBarStickyScroll.shadow": alpha(p.core.overlay, Opacity.shadow),

    // Status Bar
    "statusBar.foreground": p.statusBar.fg,
    "statusBar.background": p.statusBar.bg,
    "statusBar.border": p.statusBar.border,
    "statusBarItem.hoverBackground": p.statusBar.itemHover,
    "statusBarItem.remoteBackground": p.statusBar.remoteBg,
    "statusBarItem.remoteForeground": readableOn(
      p.statusBar.remoteBg,
      p.button.primary.fg,
      p.core.bg
    ),
    "statusBar.debuggingBackground": p.status.warning,
    "statusBar.debuggingForeground": p.core.bg,
    "statusBar.debuggingBorder": p.status.warning,
    "statusBar.noFolderBackground": p.statusBar.bg,
    "statusBar.noFolderForeground":
      p.core.mutedFg ?? alpha(p.core.fg, Opacity.muted),
    "statusBarItem.activeBackground": p.statusBar.itemActiveBg,
    "statusBarItem.prominentBackground": p.button.primary.bg,
    "statusBarItem.prominentForeground": p.button.primary.fg,
    "statusBarItem.prominentHoverBackground": p.button.primary.hover,
    "statusBarItem.errorBackground": p.status.error,
    "statusBarItem.errorForeground": readableOn(
      p.status.error,
      p.button.primary.fg,
      p.core.bg
    ),
    "statusBarItem.warningBackground": p.status.warning,
    "statusBarItem.warningForeground": p.core.bg,
    "statusBar.focusBorder": p.statusBar.remoteBg,
    "statusBar.noFolderBorder": p.statusBar.border,
    "statusBarItem.focusBorder": p.statusBar.remoteBg,
    "statusBarItem.hoverForeground": p.statusBar.fg,
    "statusBarItem.compactHoverBackground": p.statusBar.itemActiveBg,
    "statusBarItem.prominentHoverForeground": p.button.primary.fg,
    "statusBarItem.remoteHoverBackground": p.button.primary.hover,
    "statusBarItem.remoteHoverForeground": p.button.primary.fg,
    "statusBarItem.errorHoverBackground": p.statusBar.itemHover,
    "statusBarItem.errorHoverForeground": p.status.error,
    "statusBarItem.warningHoverBackground": p.statusBar.itemHover,
    "statusBarItem.warningHoverForeground": p.status.warning,
    "statusBarItem.offlineBackground": p.status.error,
    "statusBarItem.offlineForeground": p.core.bg,
    "statusBarItem.offlineHoverBackground": p.statusBar.itemHover,
    "statusBarItem.offlineHoverForeground": p.status.error,

    // Title Bar
    "titleBar.activeBackground": p.titleBar.bg,
    "titleBar.activeForeground": p.titleBar.fg,
    "titleBar.inactiveBackground": p.titleBar.inactiveBg,
    "titleBar.inactiveForeground": alpha(p.titleBar.fg, Opacity.inactive),
    "titleBar.border": p.core.border,

    // Panel
    "panel.background": p.panel.bg,
    "panel.border": p.panel.border,
    "panelTitle.activeBorder": p.tabs.activeBorderTop,
    "panelTitle.activeForeground": p.panel.headerFg,
    "panelTitle.inactiveForeground": alpha(p.panel.headerFg, Opacity.inactive),
    "panelTitle.border": p.panel.border,
    "panel.dropBorder": p.tabs.activeBorderTop,
    "panelTitleBadge.background": p.activityBar.badgeBg,
    "panelTitleBadge.foreground": p.activityBar.badgeFg,
    "panelInput.border": p.input.border,
    "panelStickyScroll.background": p.panel.bg,
    "panelStickyScroll.border": p.panel.border,
    "panelStickyScroll.shadow": alpha(p.core.overlay, Opacity.shadow),
    "outputView.background": p.panel.bg,
    "outputViewStickyScroll.background": p.panel.bg,
    "panelSectionHeader.border": p.panel.border,
  };
};
