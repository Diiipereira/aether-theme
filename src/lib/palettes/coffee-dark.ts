import { AetherPalette } from "../types";

export const coffeeDarkPalette: AetherPalette = {
  core: {
    bg: "#080706",
    fg: "#d8ccb8",
    border: "#0e0c0a",
    overlay: "#000000",
  },

  activityBar: {
    bg: "#040302",
    fg: "#6e6050",
    activeBorder: "#c89050",
    activeBg: "#080706",
    badgeBg: "#c89050",
    badgeFg: "#040302",
  },

  sideBar: {
    bg: "#060504",
    fg: "#6e6050",
    border: "#0e0c0a",
    titleFg: "#a89880",
    sectionHeaderBg: "#040302",
  },

  statusBar: {
    bg: "#040302",
    fg: "#d8ccb8",
    border: "#0e0c0a",
    itemHover: "#100e0c",
    remoteBg: "#c89050",
    itemActiveBg: "#100e0c",
  },

  titleBar: {
    bg: "#040302",
    fg: "#6e6050",
    inactiveBg: "#030201",
  },

  panel: {
    bg: "#060504",
    headerFg: "#a89880",
    border: "#0e0c0a",
  },

  editor: {
    bg: "#080706",
    fg: "#d8ccb8",
    lineHighlight: "#0e0c0a",
    selection: "#201810",
    findMatch: "#c89050",
    cursor: "#c89050",
    gutter: {
      bg: "#070605",
      fg: "#3a3020",
      activeFg: "#907060",
    },
    indentGuide: {
      active: "#5a4020",
      inactive: "#100e0a",
    },
    bracketMatch: {
      bg: "#201810",
      border: "#c89050",
    },
    brackets: {
      pair1: "#c89050",
      pair2: "#b07840",
      pair3: "#88a868",
      pair4: "#b86060",
      pair5: "#7898a8",
      pair6: "#6898a0",
      unexpected: "#b86060",
    },
    whitespace: "#0e0c0a",
    ruler: "#0e0c0a",
    link: "#7898a8",
  },

  peekView: {
    border: "#c89050",
    headerBg: "#060504",
    titleFg: "#d8ccb8",
    descFg: "#6e6050",
    editorBg: "#0c0a08",
    resultBg: "#060504",
    selectionBg: "#201810",
    selectionFg: "#d8ccb8",
    matchHighlight: "#c89050",
  },

  button: {
    primary: {
      bg: "#c89050",
      fg: "#080706",
      hover: "#a87840",
    },
    secondary: {
      bg: "#1a1510",
      fg: "#d8ccb8",
      hover: "#241e18",
    },
  },

  input: {
    bg: "#060504",
    fg: "#d8ccb8",
    border: "#0e0c0a",
    placeholder: "#3a3020",
    focusBorder: "#c89050",
    validation: {
      errorBg: "#281010",
      errorBorder: "#b86060",
    },
  },

  list: {
    hoverBg: "#100e0c",
    focusBg: "#181410",
    activeSelectionBg: "#201810",
    activeSelectionFg: "#d8ccb8",
    inactiveSelectionBg: "#080706",
  },

  tabs: {
    activeBg: "#080706",
    activeFg: "#d8ccb8",
    activeBorderTop: "#c89050",
    inactiveBg: "#060504",
    inactiveFg: "#3a3020",
    border: "#0e0c0a",
  },

  scrollBar: {
    shadow: "#000000",
    sliderBg: "#181410",
    sliderHover: "#241e18",
    sliderActive: "#c89050",
  },

  syntax: {
    variables: "#c8b890",
    keywords: "#c07840",
    functions: "#b8a840",
    strings: "#88a868",
    numbers: "#9880b0",
    constants: "#c89050",
    types: "#6898a8",
    classes: "#90a8c0",
    operators: "#5a4a38",
    comments: "#2e2418",
    tags: "#c07840",
  },

  status: {
    info: "#6898a8",
    warning: "#b8a840",
    error: "#b86060",
    success: "#88a868",
  },

  git: {
    added: "#88a868",
    modified: "#b8a840",
    deleted: "#b86060",
    ignored: "#3a3020",
    conflict: "#9880b0",
  },

  merge: {
    currentHeader: "#182840",
    currentContent: "#0e1c30",
    incomingHeader: "#1e3018",
    incomingContent: "#122010",
    commonHeader: "#1a1510",
    commonContent: "#0e0c0a",
  },

  testing: {
    passed: "#88a868",
    failed: "#b86060",
    errored: "#c07878",
    queued: "#b8a840",
    unset: "#3a3020",
    skipped: "#6e6050",
    border: "#c89050",
  },

  terminal: {
    black: "#080706",
    red: "#b86060",
    green: "#88a868",
    yellow: "#b8a840",
    blue: "#7898a8",
    magenta: "#9880b0",
    cyan: "#6898a0",
    white: "#6e6050",
    brightBlack: "#3a3020",
    brightRed: "#c87878",
    brightGreen: "#a8c888",
    brightYellow: "#d8c860",
    brightBlue: "#98b8c8",
    brightMagenta: "#b8a0c8",
    brightCyan: "#88b8b0",
    brightWhite: "#d8ccb8",
  },
};
