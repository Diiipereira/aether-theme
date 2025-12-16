import { AetherPalette } from "../types";
import { alpha } from "../utils";

export const darkSpacePalette: AetherPalette = {
  core: {
    bg: "#14091b",
    fg: "#f0f0f0",
    border: "#2b1836",
    overlay: alpha("#0a0412", 70),
  },

  activityBar: {
    bg: "#14091b",
    fg: "#c4cac0",
    activeBorder: "#8a3cff",
    activeBg: "#1e0d28",
    badgeBg: "#8a3cff",
    badgeFg: "#ffffff",
  },

  sideBar: {
    bg: "#14091b",
    fg: "#c3c0ca",
    border: "#2b1836",
    titleFg: "#8b8597",
    sectionHeaderBg: "#110817",
  },

  statusBar: {
    bg: "#14091b",
    fg: "#f0f0f0",
    border: "#2b1836",
    itemHover: "#3a2d4c",
    remoteBg: "#8a3cff",
  },

  titleBar: {
    bg: "#14091b",
    fg: "#c3c0ca",
    inactiveBg: "#0f0614",
  },

  panel: {
    bg: "#110817",
    headerFg: "#c3c0ca",
    border: "#2b1836",
  },

  editor: {
    bg: "#14091b",
    fg: "#f0f0f0",
    lineHighlight: "#2b1836",
    selection: "#4f1c9e",
    findMatch: "#8a3cff",
    cursor: "#32e6ff",
    gutter: {
      bg: "#14091b",
      fg: "#4b3e55",
      activeFg: "#f0f0f0",
    },
    indentGuide: {
      active: "#5f2ea0",
      inactive: "#2b1836",
    },
    bracketMatch: {
      bg: "#351747",
      border: "#8a3cff",
    },
  },

  peekView: {
    border: "#8a3cff",
    headerBg: "#110817",
    titleFg: "#f0f0f0",
    descFg: "#c3c0ca",
    editorBg: "#1a0e25",
    resultBg: "#14091b",
    selectionBg: "#4f1c9e",
    selectionFg: "#ffffff",
    matchHighlight: "#8a3cff",
  },

  button: {
    primary: {
      bg: "#8a3cff",
      fg: "#ffffff",
      hover: "#a765ff",
    },
    secondary: {
      bg: "#2b2238",
      fg: "#f0f0f0",
      hover: "#3a2d4c",
    },
  },

  input: {
    bg: "#1a0e25",
    fg: "#f0f0f0",
    border: "#351747",
    placeholder: "#6b5a75",
    focusBorder: "#8a3cff",
    validation: {
      errorBg: "#3d1117",
      errorBorder: "#ff5f5f",
    },
  },

  list: {
    hoverBg: "#2b1836",
    focusBg: "#351747",
    activeSelectionBg: "#4f1c9e",
    activeSelectionFg: "#ffffff",
    inactiveSelectionBg: "#2b1836",
  },

  tabs: {
    activeBg: "#14091b",
    activeFg: "#f0f0f0",
    activeBorderTop: "#8a3cff",
    inactiveBg: "#14091b",
    inactiveFg: "#6b5a75",
    border: "#2b1836",
  },

  scrollBar: {
    shadow: alpha("#000000", 70),
    sliderBg: "#351747",
    sliderHover: "#351747",
    sliderActive: "#8a3cff",
  },

  syntax: {
    variables: "#2cffb5",
    keywords: "#d066ff",
    functions: "#ffca5e",
    strings: "#f28fad",
    numbers: "#4bd7ff",
    constants: "#ff57d6",
    types: "#32e6ff",
    classes: "#32e6ff",
    operators: "#c64dff",
    comments: "#6b5a75",
    tags: "#d066ff",
  },

  status: {
    info: "#77bfff",
    warning: "#ffdf4f",
    error: "#ff5f5f",
    success: "#6ce6b3",
  },

  git: {
    added: "#3b7a4a",
    modified: "#e3c472",
    deleted: "#ff6d6d",
    ignored: "#554b60",
    conflict: "#ff57d6",
  },

  terminal: {
    black: "#110817",
    red: "#d44646",
    green: "#19c98f",
    yellow: "#e6e65c",
    blue: "#3b6ce6",
    magenta: "#8a3cff",
    cyan: "#23bae0",
    white: "#dedede",
    brightBlack: "#6d6d6d",
    brightRed: "#ff5c5c",
    brightGreen: "#23e6a0",
    brightYellow: "#f5f57c",
    brightBlue: "#5a8cff",
    brightMagenta: "#a76cff",
    brightCyan: "#48d5f2",
    brightWhite: "#ffffff",
  },
};
