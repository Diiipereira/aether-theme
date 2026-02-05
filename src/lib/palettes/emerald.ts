import { AetherPalette } from "../types";

export const emeraldPalette: AetherPalette = {
  core: {
    bg: "#0d1311",
    fg: "#e2e8f0",
    border: "#141b18",
    overlay: "#000000",
  },

  activityBar: {
    bg: "#0a0f0d",
    fg: "#94a3b8",
    activeBorder: "#10b981",
    activeBg: "#0d1311",
    badgeBg: "#10b981",
    badgeFg: "#ffffff",
  },

  sideBar: {
    bg: "#0b110f",
    fg: "#94a3b8",
    border: "#141b18",
    titleFg: "#e2e8f0",
    sectionHeaderBg: "#0a0f0d",
  },

  statusBar: {
    bg: "#0a0f0d",
    fg: "#e2e8f0",
    border: "#141b18",
    itemHover: "#18211e",
    remoteBg: "#0d1311",
    itemActiveBg: "#111715",
  },

  titleBar: {
    bg: "#0a0f0d",
    fg: "#94a3b8",
    inactiveBg: "#080c0a",
  },

  panel: {
    bg: "#0b110f",
    headerFg: "#94a3b8",
    border: "#141b18",
  },

  editor: {
    bg: "#0d1311",
    fg: "#e2e8f0",
    lineHighlight: "#111715",
    selection: "#16211d",
    findMatch: "#34d399",
    cursor: "#34d399",
    gutter: {
      bg: "#0d1311",
      fg: "#475569",
      activeFg: "#e2e8f0",
    },
    indentGuide: {
      active: "#10b981",
      inactive: "#141b18",
    },
    bracketMatch: {
      bg: "#1e2926",
      border: "#50665e",
    },
    brackets: {
      pair1: "#fbbf24",
      pair2: "#38bdf8",
      pair3: "#34d399",
      pair4: "#f472b6",
      pair5: "#c084fc",
      pair6: "#22d3ee",
      unexpected: "#f87171",
    },
    whitespace: "#141b18",
    ruler: "#141b18",
    link: "#38bdf8",
  },

  peekView: {
    border: "#10b981",
    headerBg: "#0b110f",
    titleFg: "#e2e8f0",
    descFg: "#94a3b8",
    editorBg: "#0d1311",
    resultBg: "#0b110f",
    selectionBg: "#16211d",
    selectionFg: "#e2e8f0",
    matchHighlight: "#34d399",
  },

  button: {
    primary: {
      bg: "#10b981",
      fg: "#ffffff",
      hover: "#059669",
    },
    secondary: {
      bg: "#111715",
      fg: "#e2e8f0",
      hover: "#16211d",
    },
  },

  input: {
    bg: "#0b110f",
    fg: "#e2e8f0",
    border: "#141b18",
    placeholder: "#475569",
    focusBorder: "#10b981",
    validation: {
      errorBg: "#3f1616",
      errorBorder: "#f87171",
    },
  },

  list: {
    hoverBg: "#111715",
    focusBg: "#111715",
    activeSelectionBg: "#16211d",
    activeSelectionFg: "#e2e8f0",
    inactiveSelectionBg: "#0d1311",
  },

  tabs: {
    activeBg: "#0d1311",
    activeFg: "#e2e8f0",
    activeBorderTop: "#10b981",
    inactiveBg: "#0b110f",
    inactiveFg: "#94a3b8",
    border: "#141b18",
  },

  scrollBar: {
    shadow: "#000000",
    sliderBg: "#1e2926",
    sliderHover: "#273632",
    sliderActive: "#10b981",
  },

  syntax: {
    variables: "#e2e8f0",
    keywords: "#34d399",
    functions: "#38bdf8",
    strings: "#a7f3d0",
    numbers: "#f472b6",
    constants: "#c084fc",
    types: "#fbbf24",
    classes: "#fbbf24",
    operators: "#94a3b8",
    comments: "#829c95",
    tags: "#34d399",
  },

  status: {
    info: "#38bdf8",
    warning: "#fbbf24",
    error: "#f87171",
    success: "#34d399",
  },

  git: {
    added: "#34d399",
    modified: "#fbbf24",
    deleted: "#f87171",
    ignored: "#475569",
    conflict: "#c084fc",
  },

  merge: {
    currentHeader: "#1e3a5f",
    currentContent: "#0f2942",
    incomingHeader: "#2d4a2e",
    incomingContent: "#1a2f1b",
    commonHeader: "#18211e",
    commonContent: "#131a17",
  },

  testing: {
    passed: "#34d399",
    failed: "#f87171",
    errored: "#fca5a5",
    queued: "#fbbf24",
    unset: "#475569",
    skipped: "#94a3b8",
    border: "#10b981",
  },

  terminal: {
    black: "#1e293b",
    red: "#f87171",
    green: "#34d399",
    yellow: "#fbbf24",
    blue: "#38bdf8",
    magenta: "#c084fc",
    cyan: "#22d3ee",
    white: "#e2e8f0",
    brightBlack: "#475569",
    brightRed: "#fca5a5",
    brightGreen: "#6ee7b7",
    brightYellow: "#fcd34d",
    brightBlue: "#7dd3fc",
    brightMagenta: "#e879f9",
    brightCyan: "#67e8f9",
    brightWhite: "#ffffff",
  },
};
