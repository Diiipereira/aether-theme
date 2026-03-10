import { AetherPalette } from "../types";

export const coffeePalette: AetherPalette = {
  core: {
    bg: "#1e1810",
    fg: "#f0dfc0",
    border: "#2c2318",
    overlay: "#100c08",
  },

  activityBar: {
    bg: "#151008",
    fg: "#9a8a72",
    activeBorder: "#d4914a",
    activeBg: "#1e1810",
    badgeBg: "#d4914a",
    badgeFg: "#151008",
  },

  sideBar: {
    bg: "#191410",
    fg: "#9a8a72",
    border: "#2c2318",
    titleFg: "#e8d0a8",
    sectionHeaderBg: "#151008",
  },

  statusBar: {
    bg: "#151008",
    fg: "#f0dfc0",
    border: "#2c2318",
    itemHover: "#38281a",
    remoteBg: "#d4914a",
    itemActiveBg: "#38281a",
  },

  titleBar: {
    bg: "#151008",
    fg: "#9a8a72",
    inactiveBg: "#110d08",
  },

  panel: {
    bg: "#191410",
    headerFg: "#c8b490",
    border: "#2c2318",
  },

  editor: {
    bg: "#1e1810",
    fg: "#f0dfc0",
    lineHighlight: "#271e14",
    selection: "#3a2c1c",
    findMatch: "#d4914a",
    cursor: "#d4914a",
    gutter: {
      bg: "#1a1510",
      fg: "#5a4830",
      activeFg: "#c8a070",
    },
    indentGuide: {
      active: "#7a5030",
      inactive: "#2c2318",
    },
    bracketMatch: {
      bg: "#3a2c1c",
      border: "#d4914a",
    },
    brackets: {
      pair1: "#d4914a",
      pair2: "#c8b040",
      pair3: "#90b870",
      pair4: "#e07878",
      pair5: "#7aa8c0",
      pair6: "#70a8a0",
      unexpected: "#e07878",
    },
    whitespace: "#2c2318",
    ruler: "#2c2318",
    link: "#7aa8c0",
  },

  peekView: {
    border: "#d4914a",
    headerBg: "#191410",
    titleFg: "#f0dfc0",
    descFg: "#9a8a72",
    editorBg: "#1c1610",
    resultBg: "#191410",
    selectionBg: "#3a2c1c",
    selectionFg: "#f0dfc0",
    matchHighlight: "#d4914a",
  },

  button: {
    primary: {
      bg: "#a86a30",
      fg: "#f0dfc0",
      hover: "#c07838",
    },
    secondary: {
      bg: "#38281a",
      fg: "#f0dfc0",
      hover: "#4a3828",
    },
  },

  input: {
    bg: "#191410",
    fg: "#f0dfc0",
    border: "#2c2318",
    placeholder: "#7a6850",
    focusBorder: "#a86a30",
    validation: {
      errorBg: "#3d2020",
      errorBorder: "#e07878",
    },
  },

  list: {
    hoverBg: "#271e14",
    focusBg: "#38281a",
    activeSelectionBg: "#3a2c1c",
    activeSelectionFg: "#f0dfc0",
    inactiveSelectionBg: "#271e14",
  },

  tabs: {
    activeBg: "#1e1810",
    activeFg: "#f0dfc0",
    activeBorderTop: "#d4914a",
    inactiveBg: "#191410",
    inactiveFg: "#7a6850",
    border: "#2c2318",
  },

  scrollBar: {
    shadow: "#000000",
    sliderBg: "#3a2c1c",
    sliderHover: "#4a3828",
    sliderActive: "#a86a30",
  },

  syntax: {
    variables: "#e8c898",
    keywords: "#d4914a",
    functions: "#90b870",
    strings: "#c8b040",
    numbers: "#c090b8",
    constants: "#7aa8c0",
    types: "#70a8a0",
    classes: "#8ab8d0",
    operators: "#9a8a72",
    comments: "#5a4830",
    tags: "#d4914a",
  },

  status: {
    info: "#70a8a0",
    warning: "#c8b040",
    error: "#e07878",
    success: "#90b870",
  },

  git: {
    added: "#90b870",
    modified: "#c8b040",
    deleted: "#e07878",
    ignored: "#5a4830",
    conflict: "#c090b8",
  },

  merge: {
    currentHeader: "#1e3050",
    currentContent: "#102040",
    incomingHeader: "#254020",
    incomingContent: "#183018",
    commonHeader: "#38281a",
    commonContent: "#271e14",
  },

  testing: {
    passed: "#90b870",
    failed: "#e07878",
    errored: "#e89898",
    queued: "#c8b040",
    unset: "#5a4830",
    skipped: "#9a8a72",
    border: "#d4914a",
  },

  terminal: {
    black: "#1e1810",
    red: "#e07878",
    green: "#90b870",
    yellow: "#c8b040",
    blue: "#7aa8c0",
    magenta: "#c090b8",
    cyan: "#70a8a0",
    white: "#9a8a72",
    brightBlack: "#5a4830",
    brightRed: "#e89898",
    brightGreen: "#b0d090",
    brightYellow: "#e0d060",
    brightBlue: "#a0c8e0",
    brightMagenta: "#e0b0d8",
    brightCyan: "#90c8c0",
    brightWhite: "#f0dfc0",
  },
};
