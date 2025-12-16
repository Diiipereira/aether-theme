import { AetherPalette } from "../../lib/types";
import { alpha } from "../../lib/utils";

export const getLayoutColors = (p: AetherPalette) => {
  return {
    // Activity Bar
    "activityBar.background": p.activityBar.bg,
    "activityBar.foreground": p.activityBar.fg,
    "activityBar.border": p.sideBar.border,
    "activityBar.dropBackground": alpha(p.activityBar.fg, 10),
    "activityBar.activeBorder": p.activityBar.activeBorder,
    "activityBar.activeBackground": p.activityBar.activeBg,
    "activityBar.inactiveForeground": alpha(p.activityBar.fg, 50),
    "activityBarBadge.background": p.activityBar.badgeBg,
    "activityBarBadge.foreground": p.activityBar.badgeFg,

    // Side Bar
    "sideBar.background": alpha(p.sideBar.bg, 75),
    "sideBar.foreground": p.sideBar.fg,
    "sideBar.border": p.sideBar.border,
    "sideBar.dropBackground": alpha(p.sideBar.fg, 10),
    "sideBarTitle.foreground": p.sideBar.titleFg,
    "sideBarSectionHeader.background": p.sideBar.sectionHeaderBg,
    "sideBarSectionHeader.foreground": p.sideBar.titleFg,
    "sideBarSectionHeader.border": p.sideBar.border,

    // Status Bar
    "statusBar.foreground": p.statusBar.fg,
    "statusBar.background": p.statusBar.bg,
    "statusBar.border": p.statusBar.border,
    "statusBarItem.hoverBackground": p.statusBar.itemHover,
    "statusBarItem.remoteBackground": p.statusBar.remoteBg,
    "statusBarItem.remoteForeground": p.statusBar.fg,
    "statusBar.debuggingBackground": p.status.warning,
    "statusBar.debuggingForeground": p.core.bg,
    "statusBar.debuggingBorder": p.status.warning,
    "statusBar.noFolderBackground": p.statusBar.bg,
    "statusBar.noFolderForeground": alpha(p.core.fg, 65),

    // Title Bar
    "titleBar.activeBackground": p.titleBar.bg,
    "titleBar.activeForeground": p.titleBar.fg,
    "titleBar.inactiveBackground": p.titleBar.inactiveBg,
    "titleBar.inactiveForeground": alpha(p.titleBar.fg, 60),
    "titleBar.border": p.core.border,

    // Panel
    "panel.background": p.panel.bg,
    "panel.border": p.panel.border,
    "panelTitle.activeBorder": p.tabs.activeBorderTop,
    "panelTitle.activeForeground": p.panel.headerFg,
    "panelTitle.inactiveForeground": alpha(p.panel.headerFg, 60),
  };
};
