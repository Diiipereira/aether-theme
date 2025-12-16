import { AetherPalette } from "../types";

export const coffeeDarkPalette: AetherPalette = {
  core: {
    bg: "#0c0b0a",
    fg: "#e6dccb",
    border: "#12100e",
    overlay: "#000000",
  },

  activityBar: {
    bg: "#060504",
    fg: "#9e9285",
    activeBorder: "#d4a373",
    activeBg: "#0c0b0a",
    badgeBg: "#d4a373",
    badgeFg: "#0c0b0a",
  },

  sideBar: {
    bg: "#090807",
    fg: "#9e9285",
    border: "#12100e",
    titleFg: "#c7bcae",
    sectionHeaderBg: "#060504",
  },

  statusBar: {
    bg: "#060504",
    fg: "#e6dccb",
    border: "#12100e",
    itemHover: "#1f1a17",
    remoteBg: "#d4a373",
  },

  titleBar: {
    bg: "#060504",
    fg: "#9e9285",
    inactiveBg: "#050404",
  },

  panel: {
    bg: "#090807",
    headerFg: "#e6dccb",
    border: "#12100e",
  },

  editor: {
    bg: "#0c0b0a",
    fg: "#e6dccb",
    lineHighlight: "#161412",
    selection: "#302822",
    findMatch: "#d4a373",
    cursor: "#d4a373",
    gutter: {
      bg: "#0c0b0a",
      fg: "#5c5046",
      activeFg: "#e6dccb",
    },
    indentGuide: {
      active: "#d4a373",
      inactive: "#12100e",
    },
    bracketMatch: {
      bg: "#1f1a17",
      border: "#6b5d52",
    },
  },

  peekView: {
    border: "#d4a373",
    headerBg: "#090807",
    titleFg: "#e6dccb",
    descFg: "#9e9285",
    editorBg: "#0f0d0c",
    resultBg: "#090807",
    selectionBg: "#302822",
    selectionFg: "#e6dccb",
    matchHighlight: "#d4a373",
  },

  button: {
    primary: {
      bg: "#d4a373",
      fg: "#0c0b0a",
      hover: "#cfa986",
    },
    secondary: {
      bg: "#1f1a17",
      fg: "#e6dccb",
      hover: "#2a241f",
    },
  },

  input: {
    bg: "#090807",
    fg: "#e6dccb",
    border: "#12100e",
    placeholder: "#5c5046",
    focusBorder: "#d4a373",
    validation: {
      errorBg: "#331818",
      errorBorder: "#cc6666",
    },
  },

  list: {
    hoverBg: "#1f1a17",
    focusBg: "#1f1a17",
    activeSelectionBg: "#302822",
    activeSelectionFg: "#e6dccb",
    inactiveSelectionBg: "#0c0b0a",
  },

  tabs: {
    activeBg: "#0c0b0a",
    activeFg: "#e6dccb",
    activeBorderTop: "#d4a373",
    inactiveBg: "#090807",
    inactiveFg: "#5c5046",
    border: "#12100e",
  },

  scrollBar: {
    shadow: "#000000",
    sliderBg: "#1f1a17",
    sliderHover: "#2a241f",
    sliderActive: "#d4a373",
  },

  syntax: {
    variables: "#e6dccb",
    keywords: "#d8966c",
    functions: "#e0c080",
    strings: "#a7b886",
    numbers: "#b095ad",
    constants: "#d4a373",
    types: "#d4a373",
    classes: "#d4a373",
    operators: "#9e9285",
    comments: "#5c5046",
    tags: "#d8966c",
  },

  status: {
    info: "#8fa3a3",
    warning: "#e0c080",
    error: "#cc6666",
    success: "#a7b886",
  },

  git: {
    added: "#a7b886",
    modified: "#e0c080",
    deleted: "#cc6666",
    ignored: "#5c5046",
    conflict: "#b095ad",
  },

  terminal: {
    black: "#1f1a17",
    red: "#cc6666",
    green: "#a7b886",
    yellow: "#e0c080",
    blue: "#8fa3a3",
    magenta: "#b095ad",
    cyan: "#8abeb7",
    white: "#e6dccb",
    brightBlack: "#5c5046",
    brightRed: "#d46c6c",
    brightGreen: "#b8c997",
    brightYellow: "#ebd2a0",
    brightBlue: "#a0b5b5",
    brightMagenta: "#c2a8bf",
    brightCyan: "#9bd4cd",
    brightWhite: "#ffffff",
  },
};
