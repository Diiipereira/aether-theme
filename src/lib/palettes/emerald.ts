import { AetherPalette } from "../types";

export const emeraldPalette: AetherPalette = {
  core: {
    bg: "#0d1110",
    fg: "#e2e8f0",
    border: "#1f2925",
    overlay: "#00000080",
  },

  activityBar: {
    bg: "#0d1110",
    fg: "#5c756a",
    activeBorder: "#10b981",
    activeBg: "#141c19",
    badgeBg: "#10b981",
    badgeFg: "#ffffff",
  },

  sideBar: {
    bg: "#0d1110",
    fg: "#94a3b8",
    border: "#1f2925",
    titleFg: "#e2e8f0",
    sectionHeaderBg: "#111614",
  },

  statusBar: {
    bg: "#111614",
    fg: "#e2e8f0",
    border: "#1f2925",
    itemHover: "#1f2925",
    remoteBg: "#10b981",
  },

  titleBar: {
    bg: "#0d1110",
    fg: "#94a3b8",
    inactiveBg: "#090c0b",
  },

  panel: {
    bg: "#111614",
    headerFg: "#e2e8f0",
    border: "#1f2925",
  },

  editor: {
    bg: "#0d1110",
    fg: "#e2e8f0",
    lineHighlight: "#16201d",
    selection: "#10b98133",
    findMatch: "#10b981",
    cursor: "#10b981",
    gutter: {
      bg: "#0d1110",
      fg: "#4b5563",
      activeFg: "#e2e8f0",
    },
    indentGuide: {
      active: "#10b981",
      inactive: "#1f2925",
    },
    bracketMatch: {
      bg: "#1f2925",
      border: "#10b981",
    },
  },

  button: {
    primary: {
      bg: "#10b981",
      fg: "#ffffff",
      hover: "#059669",
    },
    secondary: {
      bg: "#1f2925",
      fg: "#e2e8f0",
      hover: "#2d3b35",
    },
  },

  input: {
    bg: "#111614",
    fg: "#e2e8f0",
    border: "#1f2925",
    placeholder: "#5c756a",
    focusBorder: "#10b981",
    validation: {
      errorBg: "#451e1e",
      errorBorder: "#f87171",
    },
  },

  list: {
    hoverBg: "#1f2925",
    focusBg: "#1f2925",
    activeSelectionBg: "#10b98133",
    activeSelectionFg: "#ffffff",
    inactiveSelectionBg: "#111614",
  },

  tabs: {
    activeBg: "#0d1110",
    activeFg: "#10b981",
    activeBorderTop: "#10b981",
    inactiveBg: "#111614",
    inactiveFg: "#64748b",
    border: "#1f2925",
  },

  scrollBar: {
    shadow: "#000000",
    sliderBg: "#1f2925",
    sliderHover: "#1f2925",
    sliderActive: "#10b981",
  },

  syntax: {
    variables: "#e2e8f0",
    keywords: "#c084fc",
    functions: "#60a5fa",
    strings: "#34d399",
    numbers: "#fcd34d",
    constants: "#22d3ee",
    types: "#22d3ee",
    classes: "#22d3ee",
    operators: "#94a3b8",
    comments: "#5c756a",
    tags: "#c084fc",
  },

  status: {
    info: "#60a5fa",
    warning: "#fcd34d",
    error: "#f87171",
    success: "#34d399",
  },

  git: {
    added: "#34d399",
    modified: "#fcd34d",
    deleted: "#f87171",
    ignored: "#5c756a",
    conflict: "#c084fc",
  },

  terminal: {
    black: "#0d1110",
    red: "#f87171",
    green: "#34d399",
    yellow: "#fcd34d",
    blue: "#60a5fa",
    magenta: "#c084fc",
    cyan: "#22d3ee",
    white: "#e2e8f0",
    brightBlack: "#64748b",
    brightRed: "#fca5a5",
    brightGreen: "#6ee7b7",
    brightYellow: "#fde68a",
    brightBlue: "#93c5fd",
    brightMagenta: "#d8b4fe",
    brightCyan: "#67e8f9",
    brightWhite: "#ffffff",
  },
};
