import { AetherPalette } from "../types";

export const darkPalette: AetherPalette = {
  core: {
    bg: "#0d0f13",
    fg: "#e2e8f0",
    border: "#0F1115",
    overlay: "#000000",
  },

  activityBar: {
    bg: "#07090c",
    fg: "#7c8fa8",
    activeBorder: "#797392",
    activeBg: "#0d0f13",
    badgeBg: "#797392",
    badgeFg: "#ffffff",
  },

  sideBar: {
    bg: "#0a0c0f",
    fg: "#7c8fa8",
    border: "#0d1018",
    titleFg: "#c8d0de",
    sectionHeaderBg: "#07090c",
  },

  statusBar: {
    bg: "#07090c",
    fg: "#e2e8f0",
    border: "#0d1018",
    itemHover: "#1c1e26",
    remoteBg: "#797392",
    itemActiveBg: "#1c1e26",
  },

  titleBar: {
    bg: "#07090c",
    fg: "#7c8fa8",
    inactiveBg: "#050608",
  },

  panel: {
    bg: "#0a0c0f",
    headerFg: "#8899b0",
    border: "#1c1f2a",
  },

  editor: {
    bg: "#0d0f13",
    fg: "#e2e8f0",
    lineHighlight: "#131620",
    selection: "#1e2436",
    findMatch: "#797392",
    cursor: "#b2c0f5",
    gutter: {
      bg: "#0b0d11",
      fg: "#3d4a5c",
      activeFg: "#8899b0",
    },
    indentGuide: {
      active: "#4a4868",
      inactive: "#181b25",
    },
    bracketMatch: {
      bg: "#252838",
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
    whitespace: "#1c1f2a",
    ruler: "#1c1f2a",
    link: "#7dd3fc",
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
    numbers: "#fbbf24",
    constants: "#a5b4fc",
    types: "#7dd3fc",
    classes: "#93c5fd",
    operators: "#94a3b8",
    comments: "#4e5d73",
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
    black: "#0d0f13",
    red: "#f87171",
    green: "#86efac",
    yellow: "#fbbf24",
    blue: "#93c5fd",
    magenta: "#c4b5fd",
    cyan: "#5eead4",
    white: "#94a3b8",
    brightBlack: "#3d4a5c",
    brightRed: "#fca5a5",
    brightGreen: "#bbf7d0",
    brightYellow: "#fde047",
    brightBlue: "#bfdbfe",
    brightMagenta: "#ddd6fe",
    brightCyan: "#99f6e4",
    brightWhite: "#e2e8f0",
  },
};
