import { AetherPalette } from "../types";

export const lightPalette: AetherPalette = {
  core: {
    bg: "#f5f1ed",
    fg: "#3d3835",
    border: "#d8d0c8",
    overlay: "#000000",
  },

  activityBar: {
    bg: "#ddd7d0",
    fg: "#857d76",
    activeBorder: "#5a6680",
    activeBg: "#cfc8c0",
    badgeBg: "#5a6680",
    badgeFg: "#ffffff",
  },

  sideBar: {
    bg: "#e8e2db",
    fg: "#857d76",
    border: "#d8d0c8",
    titleFg: "#3d3835",
    sectionHeaderBg: "#ddd7d0",
  },

  statusBar: {
    bg: "#ddd7d0",
    fg: "#3d3835",
    border: "#d8d0c8",
    itemHover: "#cfc8c0",
    remoteBg: "#5a6680",
    itemActiveBg: "#cfc8c0",
  },

  titleBar: {
    bg: "#ddd7d0",
    fg: "#857d76",
    inactiveBg: "#d4cec6",
  },

  panel: {
    bg: "#e8e2db",
    headerFg: "#3d3835",
    border: "#d8d0c8",
  },

  editor: {
    bg: "#f5f1ed",
    fg: "#3d3835",
    lineHighlight: "#ece7e1",
    selection: "#d8d0c8",
    findMatch: "#5a6680",
    cursor: "#5a6680",
    gutter: {
      bg: "#f0ece7",
      fg: "#b8b0a8",
      activeFg: "#5a6680",
    },
    indentGuide: {
      active: "#5a6680",
      inactive: "#d8d0c8",
    },
    bracketMatch: {
      bg: "#ddd5cc",
      border: "#5a6680",
    },
    brackets: {
      pair1: "#b07d62",
      pair2: "#9c6b94",
      pair3: "#3d7a7a",
      pair4: "#c76b6b",
      pair5: "#4a6a8a",
      pair6: "#4a7a5c",
      unexpected: "#c76b6b",
    },
    whitespace: "#d0c8c0",
    ruler: "#d0c8c0",
    link: "#4a6a8a",
  },

  peekView: {
    border: "#5a6680",
    headerBg: "#e8e2db",
    titleFg: "#3d3835",
    descFg: "#857d76",
    editorBg: "#ddd7d0",
    resultBg: "#e8e2db",
    selectionBg: "#d0c8be",
    selectionFg: "#3d3835",
    matchHighlight: "#5a6680",
  },

  button: {
    primary: {
      bg: "#5a6680",
      fg: "#ffffff",
      hover: "#46526a",
    },
    secondary: {
      bg: "#d8d0c8",
      fg: "#3d3835",
      hover: "#cfc8bf",
    },
  },

  input: {
    bg: "#ece7e1",
    fg: "#3d3835",
    border: "#d8d0c8",
    placeholder: "#b0a8a0",
    focusBorder: "#5a6680",
    validation: {
      errorBg: "#f0e0e0",
      errorBorder: "#c76b6b",
    },
  },

  list: {
    hoverBg: "#ddd7d0",
    focusBg: "#ddd7d0",
    activeSelectionBg: "#d0c8be",
    activeSelectionFg: "#3d3835",
    inactiveSelectionBg: "#e8e2db",
  },

  tabs: {
    activeBg: "#f5f1ed",
    activeFg: "#3d3835",
    activeBorderTop: "#5a6680",
    inactiveBg: "#e8e2db",
    inactiveFg: "#857d76",
    border: "#d8d0c8",
  },

  scrollBar: {
    shadow: "#c0b8b0",
    sliderBg: "#cfc8c0",
    sliderHover: "#b8b0a8",
    sliderActive: "#5a6680",
  },

  syntax: {
    variables: "#4a3f3c",
    keywords: "#8b5e83",
    functions: "#4a6a8a",
    strings: "#4a7a5c",
    numbers: "#a06840",
    constants: "#5a6680",
    types: "#3d7a7a",
    classes: "#4a5e8a",
    operators: "#706560",
    comments: "#a09890",
    tags: "#8b5e83",
  },

  status: {
    info: "#3d7a7a",
    warning: "#a06840",
    error: "#c76b6b",
    success: "#4a7a5c",
  },

  git: {
    added: "#4a7a5c",
    modified: "#a06840",
    deleted: "#c76b6b",
    ignored: "#b0a8a0",
    conflict: "#8b5e83",
  },

  merge: {
    currentHeader: "#c8d8f0",
    currentContent: "#dce8f8",
    incomingHeader: "#c8e8cc",
    incomingContent: "#daf0da",
    commonHeader: "#e0dbd4",
    commonContent: "#ece7e1",
  },

  testing: {
    passed: "#4a7a5c",
    failed: "#c76b6b",
    errored: "#d08090",
    queued: "#a06840",
    unset: "#b0a8a0",
    skipped: "#9e9690",
    border: "#5a6680",
  },

  terminal: {
    black: "#2c2826",
    red: "#c76b6b",
    green: "#4a7a5c",
    yellow: "#a06840",
    blue: "#3d7a7a",
    magenta: "#8b5e83",
    cyan: "#4a8080",
    white: "#e8e2db",
    brightBlack: "#857d76",
    brightRed: "#d98888",
    brightGreen: "#6a9a7a",
    brightYellow: "#c08050",
    brightBlue: "#5a9898",
    brightMagenta: "#a87aa0",
    brightCyan: "#6aa0a0",
    brightWhite: "#f5f1ed",
  },
};
