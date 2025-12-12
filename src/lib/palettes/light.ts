import { AetherPalette } from "../types";

export const lightPalette: AetherPalette = {
  core: {
    bg: "#ffffff",
    fg: "#1e293b",
    border: "#e2e8f0",
    overlay: "#00000015",
  },

  activityBar: {
    bg: "#ffffff",
    fg: "#94a3b8",
    activeBorder: "#736ceb",
    activeBg: "#f1f5f9",
    badgeBg: "#736ceb",
    badgeFg: "#ffffff",
  },

  sideBar: {
    bg: "#f8fafc",
    fg: "#475569",
    border: "#e2e8f0",
    titleFg: "#94a3b8",
    sectionHeaderBg: "#f1f5f9",
  },

  statusBar: {
    bg: "#f8fafc",
    fg: "#1e293b",
    border: "#e2e8f0",
    itemHover: "#e2e8f0",
    remoteBg: "#736ceb",
  },

  titleBar: {
    bg: "#ffffff",
    fg: "#475569",
    inactiveBg: "#f8fafc",
  },

  panel: {
    bg: "#f8fafc",
    headerFg: "#475569",
    border: "#e2e8f0",
  },

  editor: {
    bg: "#ffffff",
    fg: "#1e293b",
    lineHighlight: "#f1f5f9",
    selection: "#e0e7ff",
    findMatch: "#0ea5e9",
    cursor: "#736ceb",
    gutter: {
      bg: "#ffffff",
      fg: "#94a3b8",
      activeFg: "#1e293b",
    },
    indentGuide: {
      active: "#736ceb",
      inactive: "#e2e8f0",
    },
    bracketMatch: {
      bg: "#f1f5f9",
      border: "#736ceb",
    },
  },

  button: {
    primary: {
      bg: "#736ceb",
      fg: "#ffffff",
      hover: "#7a71db",
    },
    secondary: {
      bg: "#f1f5f9",
      fg: "#1e293b",
      hover: "#e2e8f0",
    },
  },

  input: {
    bg: "#f1f5f9",
    fg: "#1e293b",
    border: "#e2e8f0",
    placeholder: "#94a3b8",
    focusBorder: "#736ceb",
    validation: {
      errorBg: "#fee2e2",
      errorBorder: "#dc2626",
    },
  },

  list: {
    hoverBg: "#f1f5f9",
    focusBg: "#f1f5f9",
    activeSelectionBg: "#e0e7ff",
    activeSelectionFg: "#1e293b",
    inactiveSelectionBg: "#f8fafc",
  },

  tabs: {
    activeBg: "#ffffff",
    activeFg: "#1e293b",
    activeBorderTop: "#736ceb",
    inactiveBg: "#f8fafc",
    inactiveFg: "#64748b",
    border: "#e2e8f0",
  },

  scrollBar: {
    shadow: "#00000010",
    sliderBg: "#94a3b840",
    sliderHover: "#94a3b880",
    sliderActive: "#736ceb",
  },

  syntax: {
    variables: "#7c3aed",
    keywords: "#059669",
    functions: "#db2777",
    strings: "#16a34a",
    numbers: "#ea580c",
    constants: "#0284c7",
    types: "#0284c7",
    classes: "#0284c7",
    operators: "#64748b",
    comments: "#94a3b8",
    tags: "#059669",
  },

  status: {
    info: "#0284c7",
    warning: "#d97706",
    error: "#dc2626",
    success: "#16a34a",
  },

  git: {
    added: "#16a34a",
    modified: "#d97706",
    deleted: "#dc2626",
    ignored: "#94a3b8",
    conflict: "#9333ea",
  },

  terminal: {
    black: "#e2e8f0",
    red: "#ef4444",
    green: "#10b981",
    yellow: "#f59e0b",
    blue: "#3b82f6",
    magenta: "#a855f7",
    cyan: "#06b6d4",
    white: "#1e293b",
    brightBlack: "#94a3b8",
    brightRed: "#f87171",
    brightGreen: "#4ade80",
    brightYellow: "#fbbf24",
    brightBlue: "#60a5fa",
    brightMagenta: "#c084fc",
    brightCyan: "#22d3ee",
    brightWhite: "#0f172a",
  },
};
