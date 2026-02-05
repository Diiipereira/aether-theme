import { AetherPalette } from "../types";

export const darkPalette: AetherPalette = {
  core: {
    bg: "#0d0f13",
    fg: "#e2e8f0",
    border: "#0F1115",
    overlay: "#000000",
  },

  activityBar: {
    bg: "#090b0e",
    fg: "#94a3b8",
    activeBorder: "#797392",
    activeBg: "#0d0f13",
    badgeBg: "#797392",
    badgeFg: "#ffffff",
  },

  sideBar: {
    bg: "#0b0d10",
    fg: "#94a3b8",
    border: "#0F1115",
    titleFg: "#e2e8f0",
    sectionHeaderBg: "#090b0e",
  },

  statusBar: {
    bg: "#090b0e",
    fg: "#e2e8f0",
    border: "#0F1115",
    itemHover: "#1c1e26",
    remoteBg: "#0d0f13",
    itemActiveBg: "#1c1e26",
  },

  titleBar: {
    bg: "#090b0e",
    fg: "#94a3b8",
    inactiveBg: "#070809",
  },

  panel: {
    bg: "#0b0d10",
    headerFg: "#94a3b8",
    border: "#272a36",
  },

  editor: {
    bg: "#0d0f13",
    fg: "#e2e8f0",
    lineHighlight: "#1a1c24",
    selection: "#1b202e",
    findMatch: "#797392",
    cursor: "#b2c0f5",
    gutter: {
      bg: "#0d0f13",
      fg: "#475569",
      activeFg: "#e2e8f0",
    },
    indentGuide: {
      active: "#797392",
      inactive: "#272a36",
    },
    bracketMatch: {
      bg: "#2a2d38",
      border: "#b2c0f5",
    },
    brackets: {
      pair1: "#fde047",
      pair2: "#c4b5fd",
      pair3: "#5eead4",
      pair4: "#f87171",
      pair5: "#93c5fd",
      pair6: "#86efac",
      unexpected: "#f87171",
    },
    whitespace: "#272a36",
    ruler: "#272a36",
    link: "#93c5fd",
  },

  peekView: {
    border: "#797392",
    headerBg: "#0b0d10",
    titleFg: "#e2e8f0",
    descFg: "#94a3b8",
    editorBg: "#0f1116",
    resultBg: "#0b0d10",
    selectionBg: "#1b202e",
    selectionFg: "#e2e8f0",
    matchHighlight: "#797392",
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
    bg: "#0b0d10",
    fg: "#e2e8f0",
    border: "#0F1115",
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
    activeSelectionBg: "#1b202e",
    activeSelectionFg: "#e2e8f0",
    inactiveSelectionBg: "#0d0f13",
  },

  tabs: {
    activeBg: "#0d0f13",
    activeFg: "#e2e8f0",
    activeBorderTop: "#797392",
    inactiveBg: "#0b0d10",
    inactiveFg: "#94a3b8",
    border: "#0F1115",
  },

  scrollBar: {
    shadow: "#000000",
    sliderBg: "#2a2d38",
    sliderHover: "#353947",
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
    comments: "#94a3b8",
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

  merge: {
    currentHeader: "#1e3a5f",
    currentContent: "#0f2942",
    incomingHeader: "#2d4a2e",
    incomingContent: "#1a2f1b",
    commonHeader: "#3a3a3a",
    commonContent: "#2a2a2a",
  },

  testing: {
    passed: "#86efac",
    failed: "#f87171",
    errored: "#fca5a5",
    queued: "#fde047",
    unset: "#475569",
    skipped: "#94a3b8",
    border: "#797392",
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
