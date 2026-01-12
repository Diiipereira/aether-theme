import { AetherPalette } from "../types";

export const emeraldPalette: AetherPalette = {
  core: {
    bg: "#0c1210",
    fg: "#e2e8f0",
    border: "#141b18",
    overlay: "#000000",
  },

  activityBar: {
    bg: "#050807",
    fg: "#94a3b8",
    activeBorder: "#10b981",
    activeBg: "#0c1210",
    badgeBg: "#10b981",
    badgeFg: "#ffffff",
  },

  sideBar: {
    bg: "#090d0b",
    fg: "#94a3b8",
    border: "#141b18",
    titleFg: "#e2e8f0",
    sectionHeaderBg: "#050807",
  },

  statusBar: {
    bg: "#050807",
    fg: "#e2e8f0",
    border: "#141b18",
    itemHover: "#18211e",
    remoteBg: "#10b981",
  },

  titleBar: {
    bg: "#050807",
    fg: "#94a3b8",
    inactiveBg: "#040605",
  },

  panel: {
    bg: "#090d0b",
    headerFg: "#94a3b8",
    border: "#141b18",
  },

  editor: {
    bg: "#0c1210",
    fg: "#e2e8f0",
    lineHighlight: "#131a17",
    selection: "#14211d",
    findMatch: "#34d399",
    cursor: "#34d399",
    gutter: {
      bg: "#0c1210",
      fg: "#475569",
      activeFg: "#e2e8f0",
    },
    indentGuide: {
      active: "#10b981",
      inactive: "#141b18",
    },
    bracketMatch: {
      bg: "#1e2926",
      border: "#50665e",
    },
  },

  peekView: {
    border: "#10b981",
    headerBg: "#090d0b",
    titleFg: "#e2e8f0",
    descFg: "#94a3b8",
    editorBg: "#0f1613",
    resultBg: "#090d0b",
    selectionBg: "#14211d",
    selectionFg: "#e2e8f0",
    matchHighlight: "#34d399",
  },

  button: {
    primary: {
      bg: "#10b981",
      fg: "#ffffff",
      hover: "#059669",
    },
    secondary: {
      bg: "#18211e",
      fg: "#e2e8f0",
      hover: "#1e2926",
    },
  },

  input: {
    bg: "#090d0b",
    fg: "#e2e8f0",
    border: "#141b18",
    placeholder: "#475569",
    focusBorder: "#10b981",
    validation: {
      errorBg: "#3f1616",
      errorBorder: "#f87171",
    },
  },

  list: {
    hoverBg: "#18211e",
    focusBg: "#18211e",
    activeSelectionBg: "#14211d",
    activeSelectionFg: "#e2e8f0",
    inactiveSelectionBg: "#0c1210",
  },

  tabs: {
    activeBg: "#0c1210",
    activeFg: "#e2e8f0",
    activeBorderTop: "#10b981",
    inactiveBg: "#090d0b",
    inactiveFg: "#94a3b8",
    border: "#141b18",
  },

  scrollBar: {
    shadow: "#000000",
    sliderBg: "#1e2926",
    sliderHover: "#273632",
    sliderActive: "#10b981",
  },

  syntax: {
    variables: "#e2e8f0",
    keywords: "#34d399",
    functions: "#38bdf8",
    strings: "#a7f3d0",
    numbers: "#f472b6",
    constants: "#c084fc",
    types: "#fbbf24",
    classes: "#fbbf24",
    operators: "#94a3b8",
    comments: "#829c95",
    tags: "#34d399",
  },

  status: {
    info: "#38bdf8",
    warning: "#fbbf24",
    error: "#f87171",
    success: "#34d399",
  },

  git: {
    added: "#34d399",
    modified: "#fbbf24",
    deleted: "#f87171",
    ignored: "#475569",
    conflict: "#c084fc",
  },

  terminal: {
    black: "#1e293b",
    red: "#f87171",
    green: "#34d399",
    yellow: "#fbbf24",
    blue: "#38bdf8",
    magenta: "#c084fc",
    cyan: "#22d3ee",
    white: "#e2e8f0",
    brightBlack: "#475569",
    brightRed: "#fca5a5",
    brightGreen: "#6ee7b7",
    brightYellow: "#fcd34d",
    brightBlue: "#7dd3fc",
    brightMagenta: "#e879f9",
    brightCyan: "#67e8f9",
    brightWhite: "#ffffff",
  },
};
