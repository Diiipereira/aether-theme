import { AetherPalette } from "../types";
import { alpha } from "../utils";

export const darkPalette: AetherPalette = {
  core: {
    bg: "#0c0e12",
    fg: "#e2e8f0",
    border: "#272a36",
    overlay: alpha("#000000", 50),
  },

  activityBar: {
    bg: "#0c0e12",
    fg: "#94a3b8",
    activeBorder: "#797392",
    activeBg: "#13151a",
    badgeBg: "#797392",
    badgeFg: "#ffffff",
  },

  sideBar: {
    bg: "#0c0e12",
    fg: "#94a3b8",
    border: "#272a36",
    titleFg: "#475569",
    sectionHeaderBg: "#101014",
  },

  statusBar: {
    bg: "#0c0e12",
    fg: "#e2e8f0",
    border: "#272a36",
    itemHover: "#1c1e26",
    remoteBg: "#797392",
  },

  titleBar: {
    bg: "#0c0e12",
    fg: "#94a3b8",
    inactiveBg: "#0f1116",
  },

  panel: {
    bg: "#101014",
    headerFg: "#94a3b8",
    border: "#272a36",
  },

  editor: {
    bg: "#0c0e12",
    fg: "#e2e8f0",
    lineHighlight: "#1e222e",
    selection: "#232836",
    findMatch: "#5eead4",
    cursor: "#5eead4",
    gutter: {
      bg: "#0c0e12",
      fg: "#475569",
      activeFg: "#e2e8f0",
    },
    indentGuide: {
      active: "#797392",
      inactive: "#272a36",
    },
    bracketMatch: {
      bg: "#2a2d38",
      border: "#5eead4",
    },
  },

  peekView: {
    border: "#797392",
    headerBg: "#13151a",
    titleFg: "#e2e8f0",
    descFg: "#94a3b8",
    editorBg: "#0c0e12",
    resultBg: "#101014",
    selectionBg: "#232836",
    selectionFg: "#e2e8f0",
    matchHighlight: "#5eead4",
  },

  button: {
    primary: {
      bg: "#797392",
      fg: "#ffffff",
      hover: "#6c5d99",
    },
    secondary: {
      bg: "#1c1e26",
      fg: "#e2e8f0",
      hover: "#2a2d38",
    },
  },

  input: {
    bg: "#0f1116",
    fg: "#e2e8f0",
    border: "#272a36",
    placeholder: "#475569",
    focusBorder: "#797392",
    validation: {
      errorBg: "#3f1616",
      errorBorder: "#f87171",
    },
  },

  list: {
    hoverBg: "#1c1e26",
    focusBg: "#1c1e26",
    activeSelectionBg: "#232836",
    activeSelectionFg: "#e2e8f0",
    inactiveSelectionBg: "#0f1116",
  },

  tabs: {
    activeBg: "#0c0e12",
    activeFg: "#e2e8f0",
    activeBorderTop: "#797392",
    inactiveBg: "#0c0e12",
    inactiveFg: "#94a3b8",
    border: "#272a36",
  },

  scrollBar: {
    shadow: "#000000",
    sliderBg: "#2a2d38",
    sliderHover: "#2a2d38",
    sliderActive: "#797392",
  },

  syntax: {
    variables: "#ff9e8a",
    keywords: "#5eead4",
    functions: "#c4b5fd",
    strings: "#86efac",
    numbers: "#c2b9b9",
    constants: "#93c5fd",
    types: "#93c5fd",
    classes: "#93c5fd",
    operators: "#e2e8f0",
    comments: "#475569",
    tags: "#5eead4",
  },

  status: {
    info: "#7dd3fc",
    warning: "#fde047",
    error: "#f87171",
    success: "#86efac",
  },

  git: {
    added: "#86efac",
    modified: "#fde047",
    deleted: "#f87171",
    ignored: "#475569",
    conflict: "#d8b4fe",
  },

  terminal: {
    black: "#1e293b",
    red: "#f87171",
    green: "#86efac",
    yellow: "#fde047",
    blue: "#93c5fd",
    magenta: "#c4b5fd",
    cyan: "#5eead4",
    white: "#e2e8f0",
    brightBlack: "#475569",
    brightRed: "#fca5a5",
    brightGreen: "#bbf7d0",
    brightYellow: "#fef08a",
    brightBlue: "#bfdbfe",
    brightMagenta: "#ddd6fe",
    brightCyan: "#99f6e4",
    brightWhite: "#ffffff",
  },
};
