import { AetherPalette } from "../types";
import { alpha } from "../utils";

export const lightPalette: AetherPalette = {
  core: {
    bg: "#fcfcfc",
    fg: "#4a5568",
    border: "#e2e8f0",
    overlay: alpha("#000000", 20),
  },

  activityBar: {
    bg: "#fcfcfc",
    fg: "#a0aec0",
    activeBorder: "#667eea",
    activeBg: "#f7fafc",
    badgeBg: "#667eea",
    badgeFg: "#ffffff",
  },

  sideBar: {
    bg: "#fcfcfc",
    fg: "#a0aec0",
    border: "#e2e8f0",
    titleFg: "#718096",
    sectionHeaderBg: "#f8fafc",
  },

  statusBar: {
    bg: "#fcfcfc",
    fg: "#4a5568",
    border: "#e2e8f0",
    itemHover: "#edf2f7",
    remoteBg: "#667eea",
  },

  titleBar: {
    bg: "#fcfcfc",
    fg: "#a0aec0",
    inactiveBg: "#f8fafc",
  },

  panel: {
    bg: "#f8fafc",
    headerFg: "#a0aec0",
    border: "#e2e8f0",
  },

  editor: {
    bg: "#fcfcfc",
    fg: "#4a5568",
    lineHighlight: "#edf2f7",
    selection: "#e2e8f0",
    findMatch: "#319795",
    cursor: "#319795",
    gutter: {
      bg: "#fcfcfc",
      fg: "#cbd5e0",
      activeFg: "#4a5568",
    },
    indentGuide: {
      active: "#667eea",
      inactive: "#e2e8f0",
    },
    bracketMatch: {
      bg: "#e2e8f0",
      border: "#319795",
    },
  },

  peekView: {
    border: "#667eea",
    headerBg: "#f7fafc",
    titleFg: "#4a5568",
    descFg: "#a0aec0",
    editorBg: "#fcfcfc",
    resultBg: "#f8fafc",
    selectionBg: "#e2e8f0",
    selectionFg: "#4a5568",
    matchHighlight: "#319795",
  },

  button: {
    primary: {
      bg: "#667eea",
      fg: "#ffffff",
      hover: "#5a67d8",
    },
    secondary: {
      bg: "#edf2f7",
      fg: "#4a5568",
      hover: "#e2e8f0",
    },
  },

  input: {
    bg: "#f8fafc",
    fg: "#4a5568",
    border: "#e2e8f0",
    placeholder: "#a0aec0",
    focusBorder: "#667eea",
    validation: {
      errorBg: "#fff5f5",
      errorBorder: "#fc8181",
    },
  },

  list: {
    hoverBg: "#edf2f7",
    focusBg: "#edf2f7",
    activeSelectionBg: "#e2e8f0",
    activeSelectionFg: "#4a5568",
    inactiveSelectionBg: "#f8fafc",
  },

  tabs: {
    activeBg: "#fcfcfc",
    activeFg: "#4a5568",
    activeBorderTop: "#667eea",
    inactiveBg: "#fcfcfc",
    inactiveFg: "#a0aec0",
    border: "#e2e8f0",
  },

  scrollBar: {
    shadow: "#000000",
    sliderBg: "#cbd5e0",
    sliderHover: "#a0aec0",
    sliderActive: "#667eea",
  },

  syntax: {
    variables: "#e53e3e",
    keywords: "#319795",
    functions: "#805ad5",
    strings: "#38a169",
    numbers: "#718096",
    constants: "#3182ce",
    types: "#3182ce",
    classes: "#3182ce",
    operators: "#4a5568",
    comments: "#a0aec0",
    tags: "#319795",
  },

  status: {
    info: "#3182ce",
    warning: "#d69e2e",
    error: "#e53e3e",
    success: "#38a169",
  },

  git: {
    added: "#38a169",
    modified: "#d69e2e",
    deleted: "#e53e3e",
    ignored: "#a0aec0",
    conflict: "#805ad5",
  },

  terminal: {
    black: "#2d3748",
    red: "#e53e3e",
    green: "#38a169",
    yellow: "#d69e2e",
    blue: "#3182ce",
    magenta: "#805ad5",
    cyan: "#319795",
    white: "#4a5568",
    brightBlack: "#a0aec0",
    brightRed: "#fc8181",
    brightGreen: "#68d391",
    brightYellow: "#f6e05e",
    brightBlue: "#63b3ed",
    brightMagenta: "#b794f4",
    brightCyan: "#4fd1c5",
    brightWhite: "#1a202c",
  },
};
