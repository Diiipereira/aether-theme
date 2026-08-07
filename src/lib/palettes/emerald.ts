import { AetherPalette } from "../types";

export const emeraldPalette: AetherPalette = {
  core: {
    bg: "#081a15",
    fg: "#a7f3d0",
    iconFg: "#7fc9ae",
    border: "#1c4034",
    overlay: "#000000",
  },

  surface: {
    bg: "#06120f",
    fg: "#a7f3d0",
    border: "#20493a",
  },

  activityBar: {
    bg: "#06130f",
    fg: "#c6efdc",
    activeBorder: "#10b981",
    activeBg: "#123c2e",
    badgeBg: "#0a6b4e",
    badgeFg: "#eafaf2",
  },

  sideBar: {
    bg: "#06120f",
    fg: "#9fd3bd",
    border: "#20493a",
    titleFg: "#c6efdc",
    sectionHeaderBg: "#06120f",
  },

  statusBar: {
    bg: "#06130f",
    fg: "#a8d8c5",
    border: "#20493a",
    itemHover: "#14332a",
    remoteBg: "#10b981",
    itemActiveBg: "#1a4335",
  },

  titleBar: {
    bg: "#06130f",
    fg: "#a8d8c5",
    inactiveBg: "#040d0a",
  },

  panel: {
    bg: "#06120f",
    headerFg: "#c6efdc",
    border: "#20493a",
  },

  editor: {
    bg: "#081a15",
    fg: "#e9f3ed",
    lineHighlight: "#102a22",
    selection: "#1a4736",
    findMatch: "#34d399",
    cursor: "#34d399",
    gutter: {
      bg: "#081a15",
      fg: "#3a5f54",
      activeFg: "#7fc9ae",
    },
    indentGuide: {
      active: "#2a5c48",
      inactive: "#163027",
    },
    bracketMatch: {
      bg: "#1a4030",
      border: "#34d399",
    },
    brackets: {
      pair1: "#34d399",
      pair2: "#5ac8e6",
      pair3: "#e6c07d",
      pair4: "#c9a9f0",
      pair5: "#7fe0c6",
      pair6: "#f0a0ae",
      unexpected: "#f4888c",
    },
    whitespace: "#1e362d",
    ruler: "#163027",
    link: "#5ac8e6",
  },

  peekView: {
    border: "#10b981",
    headerBg: "#081a15",
    titleFg: "#e9f3ed",
    descFg: "#6f9d8f",
    editorBg: "#081a15",
    resultBg: "#06120f",
    selectionBg: "#1a4335",
    selectionFg: "#e9f3ed",
    matchHighlight: "#34d399",
  },

  button: {
    primary: {
      bg: "#0a6b4e",
      fg: "#eafaf2",
      hover: "#0d7f5c",
    },
    secondary: {
      bg: "#143329",
      fg: "#e9f3ed",
      hover: "#1c4636",
    },
  },

  input: {
    bg: "#081a15",
    fg: "#e9f3ed",
    border: "#1e4437",
    placeholder: "#66907f",
    focusBorder: "#10b981",
    validation: {
      errorBg: "#3a1618",
      errorBorder: "#f4888c",
    },
  },

  list: {
    hoverBg: "#14332a",
    focusBg: "#1a4335",
    activeSelectionBg: "#1e5240",
    activeSelectionFg: "#eafaf2",
    inactiveSelectionBg: "#143329",
  },

  tabs: {
    activeBg: "#12352a",
    activeFg: "#eafaf2",
    activeBorderTop: "#10b981",
    inactiveBg: "#12352a",
    inactiveFg: "#7aa899",
    border: "#20493a",
  },

  scrollBar: {
    shadow: "#000000",
    sliderBg: "#1e4436",
    sliderHover: "#2a5c48",
    sliderActive: "#10b981",
  },

  syntax: {
    variables: "#cfe8dd",
    keywords: "#34d399",
    functions: "#5ac8e6",
    strings: "#a7f3d0",
    numbers: "#f0a0ae",
    constants: "#c9a9f0",
    types: "#7fe0c6",
    classes: "#e6c07d",
    operators: "#6fb8a2",
    comments: "#527e6e",
    tags: "#34d399",
  },

  status: {
    info: "#5ac8e6",
    warning: "#f0c96a",
    error: "#f4888c",
    success: "#34d399",
  },

  git: {
    added: "#34d399",
    modified: "#f0c96a",
    deleted: "#f4888c",
    ignored: "#4a6b60",
    conflict: "#c9a9f0",
  },

  merge: {
    currentHeader: "#1e4a3a",
    currentContent: "#143327",
    incomingHeader: "#1e3a52",
    incomingContent: "#132838",
    commonHeader: "#2a3a35",
    commonContent: "#1a2a25",
  },

  testing: {
    passed: "#34d399",
    failed: "#f4888c",
    errored: "#f0a0ae",
    queued: "#f0c96a",
    unset: "#4a6b60",
    skipped: "#6f9d8f",
    border: "#10b981",
  },

  terminal: {
    black: "#081a15",
    red: "#f4888c",
    green: "#34d399",
    yellow: "#f0c96a",
    blue: "#5ac8e6",
    magenta: "#c9a9f0",
    cyan: "#7fe0c6",
    white: "#93c6b1",
    brightBlack: "#3a5f54",
    brightRed: "#f7a5a8",
    brightGreen: "#6ee7b7",
    brightYellow: "#f7d98a",
    brightBlue: "#8dd6ef",
    brightMagenta: "#dbc0f7",
    brightCyan: "#a3ecd8",
    brightWhite: "#e9f3ed",
  },
};
