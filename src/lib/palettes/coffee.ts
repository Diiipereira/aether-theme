import { AetherPalette } from "../types";

export const coffeePalette: AetherPalette = {
  core: {
    bg: "#1e1810",
    fg: "#e8dcc6",
    iconFg: "#a3927a",
    border: "#33291d",
    overlay: "#100c08",
  },

  surface: {
    bg: "#181310",
    fg: "#e8dcc6",
    border: "#3a2f21",
  },

  activityBar: {
    bg: "#181310",
    fg: "#e8dcc6",
    activeBorder: "#d4914a",
    activeBg: "#3d2c1a",
    badgeBg: "#7a5228",
    badgeFg: "#f2e8d8",
  },

  sideBar: {
    bg: "#181310",
    fg: "#a3927a",
    border: "#3a2f21",
    titleFg: "#e8dcc6",
    sectionHeaderBg: "#181310",
  },

  statusBar: {
    bg: "#181310",
    fg: "#c2b096",
    border: "#3a2f21",
    itemHover: "#2b2116",
    remoteBg: "#7a5228",
    itemActiveBg: "#38291b",
  },

  titleBar: {
    bg: "#181310",
    fg: "#c2b096",
    inactiveBg: "#120e0a",
  },

  panel: {
    bg: "#181310",
    headerFg: "#e8dcc6",
    border: "#3a2f21",
  },

  editor: {
    bg: "#1e1810",
    fg: "#e8dcc6",
    lineHighlight: "#261f15",
    selection: "#45321d",
    findMatch: "#d4914a",
    cursor: "#d4914a",
    gutter: {
      bg: "#1e1810",
      fg: "#7d6749",
      activeFg: "#a3927a",
    },
    indentGuide: {
      active: "#7a5030",
      inactive: "#2b2116",
    },
    bracketMatch: {
      bg: "#4a3620",
      border: "#d4914a",
    },
    brackets: {
      pair1: "#c99566",
      pair2: "#bfae72",
      pair3: "#9cb883",
      pair4: "#d68a8a",
      pair5: "#8fadc2",
      pair6: "#82ada7",
      unexpected: "#d68a8a",
    },
    whitespace: "#33291d",
    ruler: "#2b2116",
    link: "#8fadc2",
  },

  peekView: {
    border: "#d4914a",
    headerBg: "#1e1810",
    titleFg: "#e8dcc6",
    descFg: "#a3927a",
    editorBg: "#1e1810",
    resultBg: "#181310",
    selectionBg: "#38291b",
    selectionFg: "#e8dcc6",
    matchHighlight: "#d4914a",
  },

  button: {
    primary: {
      bg: "#7a5228",
      fg: "#f2e8d8",
      hover: "#8a5d2e",
    },
    secondary: {
      bg: "#2f2418",
      fg: "#e8dcc6",
      hover: "#3d2f1f",
    },
  },

  input: {
    bg: "#1e1810",
    fg: "#e8dcc6",
    border: "#3a2f21",
    placeholder: "#8b7a61",
    focusBorder: "#d4914a",
    validation: {
      errorBg: "#3d2020",
      errorBorder: "#d68a8a",
    },
  },

  list: {
    hoverBg: "#2b2116",
    focusBg: "#38291b",
    activeSelectionBg: "#45321d",
    activeSelectionFg: "#f5ece0",
    inactiveSelectionBg: "#2b2116",
  },

  tabs: {
    activeBg: "#3d2c1a",
    activeFg: "#f5ece0",
    activeBorderTop: "#d4914a",
    inactiveBg: "#3d2c1a",
    inactiveFg: "#9e8c72",
    border: "#3a2f21",
  },

  scrollBar: {
    shadow: "#000000",
    sliderBg: "#43331f",
    sliderHover: "#57422a",
    sliderActive: "#d4914a",
  },

  syntax: {
    variables: "#e2cfae",
    keywords: "#c99566",
    functions: "#9cb883",
    strings: "#bfae72",
    numbers: "#c39bbb",
    constants: "#8fadc2",
    types: "#82ada7",
    classes: "#9bbccf",
    operators: "#a3927a",
    comments: "#7a6449",
    tags: "#c99566",
  },

  status: {
    info: "#82ada7",
    warning: "#bfae72",
    error: "#d68a8a",
    success: "#9cb883",
  },

  git: {
    added: "#9cb883",
    modified: "#bfae72",
    deleted: "#d68a8a",
    ignored: "#7a6449",
    conflict: "#c39bbb",
  },

  merge: {
    currentHeader: "#2a3a52",
    currentContent: "#1c2838",
    incomingHeader: "#2c4028",
    incomingContent: "#1e2c1c",
    commonHeader: "#3d2f1f",
    commonContent: "#2b2116",
  },

  testing: {
    passed: "#9cb883",
    failed: "#d68a8a",
    errored: "#dfa0a0",
    queued: "#bfae72",
    unset: "#7a6449",
    skipped: "#a3927a",
    border: "#d4914a",
  },

  terminal: {
    black: "#1e1810",
    red: "#d68a8a",
    green: "#9cb883",
    yellow: "#bfae72",
    blue: "#8fadc2",
    magenta: "#c39bbb",
    cyan: "#82ada7",
    white: "#a3927a",
    brightBlack: "#6b573c",
    brightRed: "#e0a3a3",
    brightGreen: "#b3cc9c",
    brightYellow: "#d4c48c",
    brightBlue: "#a8c3d6",
    brightMagenta: "#d6b5cf",
    brightCyan: "#9cc3bd",
    brightWhite: "#e8dcc6",
  },
};
