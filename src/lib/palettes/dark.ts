import { AetherPalette } from "../types";

export const darkPalette: AetherPalette = {
  core: {
    bg: "#16181c",
    fg: "#d6d9de",
    iconFg: "#8b9199",
    border: "#282b31",
    overlay: "#000000",
  },

  surface: {
    bg: "#111316",
    fg: "#d6d9de",
    border: "#2b2e35",
  },

  activityBar: {
    bg: "#111316",
    fg: "#d6d9de",
    activeBorder: "#4d9cf0",
    activeBg: "#213448",
    badgeBg: "#24559a",
    badgeFg: "#e4e7eb",
  },

  sideBar: {
    bg: "#111316",
    fg: "#a0a6ae",
    border: "#2b2e35",
    titleFg: "#d6d9de",
    sectionHeaderBg: "#111316",
  },

  statusBar: {
    bg: "#111316",
    fg: "#b0b6be",
    border: "#2b2e35",
    itemHover: "#242830",
    remoteBg: "#4d9cf0",
    itemActiveBg: "#2b303a",
  },

  titleBar: {
    bg: "#111316",
    fg: "#b0b6be",
    inactiveBg: "#0d0e10",
  },

  panel: {
    bg: "#111316",
    headerFg: "#d6d9de",
    border: "#2b2e35",
  },

  editor: {
    bg: "#16181c",
    fg: "#e4e7eb",
    lineHighlight: "#1e2126",
    selection: "#2c3f56",
    findMatch: "#4d9cf0",
    cursor: "#4d9cf0",
    gutter: {
      bg: "#16181c",
      fg: "#4c525b",
      activeFg: "#8b9199",
    },
    indentGuide: {
      active: "#414852",
      inactive: "#262a31",
    },
    bracketMatch: {
      bg: "#2c3644",
      border: "#4d9cf0",
    },
    brackets: {
      pair1: "#e5c07b",
      pair2: "#5eb0ef",
      pair3: "#4ec9b0",
      pair4: "#d19a66",
      pair5: "#98c379",
      pair6: "#56b6c2",
      unexpected: "#e5636e",
    },
    whitespace: "#2b2e35",
    ruler: "#262a31",
    link: "#5eb0ef",
  },

  peekView: {
    border: "#4d9cf0",
    headerBg: "#16181c",
    titleFg: "#e4e7eb",
    descFg: "#8b9199",
    editorBg: "#16181c",
    resultBg: "#111316",
    selectionBg: "#2b303a",
    selectionFg: "#e4e7eb",
    matchHighlight: "#4d9cf0",
  },

  button: {
    primary: {
      bg: "#24559a",
      fg: "#e4e7eb",
      hover: "#2a63b0",
    },
    secondary: {
      bg: "#242830",
      fg: "#e4e7eb",
      hover: "#2e333d",
    },
  },

  input: {
    bg: "#16181c",
    fg: "#e4e7eb",
    border: "#2b2e35",
    placeholder: "#727880",
    focusBorder: "#4d9cf0",
    validation: {
      errorBg: "#3a1a1c",
      errorBorder: "#e5636e",
    },
  },

  list: {
    hoverBg: "#242830",
    focusBg: "#213448",
    activeSelectionBg: "#274058",
    activeSelectionFg: "#eef1f5",
    inactiveSelectionBg: "#242830",
  },

  tabs: {
    activeBg: "#213448",
    activeFg: "#eef1f5",
    activeBorderTop: "#4d9cf0",
    inactiveBg: "#213448",
    inactiveFg: "#8b9199",
    border: "#2b2e35",
  },

  scrollBar: {
    shadow: "#000000",
    sliderBg: "#2e333d",
    sliderHover: "#3a4048",
    sliderActive: "#4d9cf0",
  },

  syntax: {
    variables: "#d4d9e0",
    keywords: "#5eb0ef",
    functions: "#e5c07b",
    strings: "#98c379",
    numbers: "#d19a66",
    constants: "#e88f7d",
    types: "#4ec9b0",
    classes: "#56b6c2",
    operators: "#8b9199",
    comments: "#5c646e",
    tags: "#5eb0ef",
  },

  status: {
    info: "#5eb0ef",
    warning: "#e5c07b",
    error: "#e5636e",
    success: "#98c379",
  },

  git: {
    added: "#98c379",
    modified: "#e5c07b",
    deleted: "#e5636e",
    ignored: "#5c646e",
    conflict: "#d19a66",
  },

  merge: {
    currentHeader: "#26456b",
    currentContent: "#1a3049",
    incomingHeader: "#2f4a30",
    incomingContent: "#1f3320",
    commonHeader: "#33383f",
    commonContent: "#24282e",
  },

  testing: {
    passed: "#98c379",
    failed: "#e5636e",
    errored: "#f0938c",
    queued: "#e5c07b",
    unset: "#5c646e",
    skipped: "#8b9199",
    border: "#4d9cf0",
  },

  terminal: {
    black: "#16181c",
    red: "#e5636e",
    green: "#98c379",
    yellow: "#e5c07b",
    blue: "#5eb0ef",
    magenta: "#d18fc0",
    cyan: "#56b6c2",
    white: "#a0a6ae",
    brightBlack: "#4c525b",
    brightRed: "#f0938c",
    brightGreen: "#b5d99c",
    brightYellow: "#f0d49a",
    brightBlue: "#8ac9f7",
    brightMagenta: "#e3adcf",
    brightCyan: "#7fd0d9",
    brightWhite: "#e4e7eb",
  },
};
