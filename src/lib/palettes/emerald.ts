import { AetherPalette } from "../types";
import { alpha } from "../utils";

export const emeraldPalette: AetherPalette = {
  core: {
    bg: "#0c1210",
    fg: "#e2e8f0",
    border: "#1e2926",
    overlay: alpha("#000000", 50),
  },

  activityBar: {
    bg: "#0c1210",
    fg: "#94a3b8",
    activeBorder: "#10b981",
    activeBg: "#121a17",
    badgeBg: "#10b981",
    badgeFg: "#ffffff",
  },

  sideBar: {
    bg: "#0c1210",
    fg: "#94a3b8",
    border: "#1e2926",
    titleFg: "#475569",
    sectionHeaderBg: "#0f1714",
  },

  statusBar: {
    bg: "#0c1210",
    fg: "#e2e8f0",
    border: "#1e2926",
    itemHover: "#18211e",
    remoteBg: "#10b981",
  },

  titleBar: {
    bg: "#0c1210",
    fg: "#94a3b8",
    inactiveBg: "#0f1714",
  },

  panel: {
    bg: "#0f1714",
    headerFg: "#94a3b8",
    border: "#1e2926",
  },

  editor: {
    bg: "#0c1210",
    fg: "#e2e8f0",
    lineHighlight: "#18211e",
    selection: "#1e2926",
    findMatch: "#34d399",
    cursor: "#34d399",
    gutter: {
      bg: "#0c1210",
      fg: "#475569",
      activeFg: "#e2e8f0",
    },
    indentGuide: {
      active: "#10b981",
      inactive: "#1e2926",
    },
    bracketMatch: {
      bg: "#1e2926",
      border: "#34d399",
    },
  },

  peekView: {
    border: "#10b981",
    headerBg: "#121a17",
    titleFg: "#e2e8f0",
    descFg: "#94a3b8",
    editorBg: "#0c1210",
    resultBg: "#0f1714",
    selectionBg: "#1e2926",
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
    bg: "#0f1714",
    fg: "#e2e8f0",
    border: "#1e2926",
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
    activeSelectionBg: "#1e2926",
    activeSelectionFg: "#e2e8f0",
    inactiveSelectionBg: "#0f1714",
  },

  tabs: {
    activeBg: "#0c1210",
    activeFg: "#e2e8f0",
    activeBorderTop: "#10b981",
    inactiveBg: "#0c1210",
    inactiveFg: "#94a3b8",
    border: "#1e2926",
  },

  scrollBar: {
    shadow: "#000000",
    sliderBg: "#1e2926",
    sliderHover: "#1e2926",
    sliderActive: "#10b981",
  },

  syntax: {
    variables: "#fca5a5",
    keywords: "#34d399",
    functions: "#c4b5fd",
    strings: "#6ee7b7",
    numbers: "#c2b9b9",
    constants: "#93c5fd",
    types: "#93c5fd",
    classes: "#93c5fd",
    operators: "#e2e8f0",
    comments: "#475569",
    tags: "#34d399",
  },

  status: {
    info: "#7dd3fc",
    warning: "#fde047",
    error: "#f87171",
    success: "#6ee7b7",
  },

  git: {
    added: "#6ee7b7",
    modified: "#fde047",
    deleted: "#f87171",
    ignored: "#475569",
    conflict: "#d8b4fe",
  },

  terminal: {
    black: "#1e293b",
    red: "#f87171",
    green: "#6ee7b7",
    yellow: "#fde047",
    blue: "#93c5fd",
    magenta: "#c4b5fd",
    cyan: "#34d399",
    white: "#e2e8f0",
    brightBlack: "#475569",
    brightRed: "#fca5a5",
    brightGreen: "#a7f3d0",
    brightYellow: "#fef08a",
    brightBlue: "#bfdbfe",
    brightMagenta: "#ddd6fe",
    brightCyan: "#6ee7b7",
    brightWhite: "#ffffff",
  },
};
