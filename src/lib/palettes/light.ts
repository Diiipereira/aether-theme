import { AetherPalette } from "../types";

export const lightPalette: AetherPalette = {
  core: {
    bg: "#f8f9fc",
    fg: "#334155",
    border: "#e2e8f0",
    overlay: "#0f172a15",
  },

  activityBar: {
    bg: "#f1f5f9",
    fg: "#64748b",
    activeBorder: "#6366f1",
    activeBg: "#e2e8f0",
    badgeBg: "#6366f1",
    badgeFg: "#ffffff",
  },

  sideBar: {
    bg: "#f1f5f9",
    fg: "#475569",
    border: "#e2e8f0",
    titleFg: "#334155",
    sectionHeaderBg: "#e2e8f0",
  },

  statusBar: {
    bg: "#f1f5f9",
    fg: "#334155",
    border: "#e2e8f0",
    itemHover: "#e2e8f0",
    remoteBg: "#6366f1",
  },

  titleBar: {
    bg: "#f1f5f9",
    fg: "#475569",
    inactiveBg: "#f8f9fc",
  },

  panel: {
    bg: "#f1f5f9",
    headerFg: "#334155",
    border: "#e2e8f0",
  },

  editor: {
    bg: "#f8f9fc",
    fg: "#334155",
    lineHighlight: "#f1f5f9",
    selection: "#c7d2fe4d",
    findMatch: "#818cf8",
    cursor: "#6366f1",
    gutter: {
      bg: "#f8f9fc",
      fg: "#94a3b8",
      activeFg: "#334155",
    },
    indentGuide: {
      active: "#6366f1",
      inactive: "#e2e8f0",
    },
    bracketMatch: {
      bg: "#e0e7ff",
      border: "#6366f1",
    },
  },

  button: {
    primary: {
      bg: "#6366f1",
      fg: "#ffffff",
      hover: "#4f46e5",
    },
    secondary: {
      bg: "#e2e8f0",
      fg: "#334155",
      hover: "#cbd5e1",
    },
  },

  input: {
    bg: "#ffffff",
    fg: "#334155",
    border: "#cbd5e1",
    placeholder: "#94a3b8",
    focusBorder: "#6366f1",
    validation: {
      errorBg: "#fee2e2",
      errorBorder: "#ef4444",
    },
  },

  list: {
    hoverBg: "#f1f5f9",
    focusBg: "#e0e7ff",
    activeSelectionBg: "#c7d2fe",
    activeSelectionFg: "#1e293b",
    inactiveSelectionBg: "#e2e8f0",
  },

  tabs: {
    activeBg: "#f8f9fc",
    activeFg: "#334155",
    activeBorderTop: "#6366f1",
    inactiveBg: "#f1f5f9",
    inactiveFg: "#94a3b8",
    border: "#e2e8f0",
  },

  scrollBar: {
    shadow: "#0000000d",
    sliderBg: "#94a3b840",
    sliderHover: "#94a3b880",
    sliderActive: "#6366f1",
  },

  syntax: {
    variables: "#334155",
    keywords: "#7c3aed",
    functions: "#0284c7",
    strings: "#059669",
    numbers: "#d97706",
    constants: "#9333ea",
    types: "#0891b2",
    classes: "#0891b2",
    operators: "#64748b",
    comments: "#94a3b8",
    tags: "#7c3aed",
  },

  status: {
    info: "#0ea5e9",
    warning: "#f59e0b",
    error: "#ef4444",
    success: "#10b981",
  },

  git: {
    added: "#10b981",
    modified: "#f59e0b",
    deleted: "#ef4444",
    ignored: "#94a3b8",
    conflict: "#8b5cf6",
  },

  terminal: {
    black: "#334155",
    red: "#ef4444",
    green: "#10b981",
    yellow: "#f59e0b",
    blue: "#3b82f6",
    magenta: "#8b5cf6",
    cyan: "#06b6d4",
    white: "#f8fafc",
    brightBlack: "#64748b",
    brightRed: "#f87171",
    brightGreen: "#4ade80",
    brightYellow: "#fbbf24",
    brightBlue: "#60a5fa",
    brightMagenta: "#a78bfa",
    brightCyan: "#22d3ee",
    brightWhite: "#ffffff",
  },
};
