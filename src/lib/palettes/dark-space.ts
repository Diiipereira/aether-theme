import { AetherPalette } from "../types";

export const darkSpacePalette: AetherPalette = {
  core: {
    bg: "#191322",
    fg: "#ddd4ee",
    iconFg: "#9d8fbc",
    border: "#2e2142",
    overlay: "#040206",
  },

  surface: {
    bg: "#130e1b",
    fg: "#ddd4ee",
    border: "#332545",
  },

  activityBar: {
    bg: "#130e1b",
    fg: "#ddd4ee",
    activeBorder: "#9d4dff",
    activeBg: "#2d1a4a",
    badgeBg: "#7137b8",
    badgeFg: "#eee8f8",
  },

  sideBar: {
    bg: "#130e1b",
    fg: "#9d90b3",
    border: "#332545",
    titleFg: "#ddd4ee",
    sectionHeaderBg: "#130e1b",
  },

  statusBar: {
    bg: "#130e1b",
    fg: "#b0a4c6",
    border: "#332545",
    itemHover: "#251a36",
    remoteBg: "#7137b8",
    itemActiveBg: "#2d1f42",
  },

  titleBar: {
    bg: "#130e1b",
    fg: "#b0a4c6",
    inactiveBg: "#0e0a14",
  },

  panel: {
    bg: "#130e1b",
    headerFg: "#ddd4ee",
    border: "#332545",
  },

  editor: {
    bg: "#191322",
    fg: "#e3e1e6",
    lineHighlight: "#211a2d",
    selection: "#38215a",
    findMatch: "#9d4dff",
    cursor: "#9d4dff",
    gutter: {
      bg: "#191322",
      fg: "#514166",
      activeFg: "#9d8fbc",
    },
    indentGuide: {
      active: "#5a3a85",
      inactive: "#241b30",
    },
    bracketMatch: {
      bg: "#33204d",
      border: "#9d4dff",
    },
    brackets: {
      pair1: "#ffcb6b",
      pair2: "#bd5eff",
      pair3: "#4fffd0",
      pair4: "#ff9ccc",
      pair5: "#7acfff",
      pair6: "#5ee6ff",
      unexpected: "#ff5f5f",
    },
    whitespace: "#2e2142",
    ruler: "#241b30",
    link: "#7acfff",
  },

  peekView: {
    border: "#9d4dff",
    headerBg: "#191322",
    titleFg: "#e3e1e6",
    descFg: "#9d90b3",
    editorBg: "#191322",
    resultBg: "#130e1b",
    selectionBg: "#2d1f42",
    selectionFg: "#e3e1e6",
    matchHighlight: "#9d4dff",
  },

  button: {
    primary: {
      bg: "#7137b8",
      fg: "#eee8f8",
      hover: "#8541d9",
    },
    secondary: {
      bg: "#2a1f3d",
      fg: "#e3e1e6",
      hover: "#372a4e",
    },
  },

  input: {
    bg: "#191322",
    fg: "#e3e1e6",
    border: "#332545",
    placeholder: "#7a6b91",
    focusBorder: "#9d4dff",
    validation: {
      errorBg: "#3d1117",
      errorBorder: "#ff5f5f",
    },
  },

  list: {
    hoverBg: "#251a36",
    focusBg: "#2d1f42",
    activeSelectionBg: "#3a2359",
    activeSelectionFg: "#f2ecfb",
    inactiveSelectionBg: "#251a36",
  },

  tabs: {
    activeBg: "#2d1a4a",
    activeFg: "#f2ecfb",
    activeBorderTop: "#9d4dff",
    inactiveBg: "#2d1a4a",
    inactiveFg: "#8d80a3",
    border: "#332545",
  },

  scrollBar: {
    shadow: "#000000",
    sliderBg: "#3a2a52",
    sliderHover: "#4d386b",
    sliderActive: "#9d4dff",
  },

  syntax: {
    variables: "#4fffd0",
    keywords: "#bd5eff",
    functions: "#ffcb6b",
    strings: "#ff9ccc",
    numbers: "#7acfff",
    constants: "#ff70d9",
    types: "#5ee6ff",
    classes: "#a3d4ff",
    operators: "#9184a6",
    comments: "#6b5a85",
    tags: "#bd5eff",
  },

  status: {
    info: "#7acfff",
    warning: "#ffcb6b",
    error: "#ff5f5f",
    success: "#4fffd0",
  },

  git: {
    added: "#4fffd0",
    modified: "#ffcb6b",
    deleted: "#ff5f5f",
    ignored: "#6b5a85",
    conflict: "#ff70d9",
  },

  merge: {
    currentHeader: "#26456b",
    currentContent: "#1a3049",
    incomingHeader: "#2f4a30",
    incomingContent: "#1f3320",
    commonHeader: "#302545",
    commonContent: "#231a33",
  },

  testing: {
    passed: "#4fffd0",
    failed: "#ff5f5f",
    errored: "#ff8080",
    queued: "#ffcb6b",
    unset: "#6b5a85",
    skipped: "#9d90b3",
    border: "#9d4dff",
  },

  terminal: {
    black: "#191322",
    red: "#ff5f5f",
    green: "#4fffd0",
    yellow: "#ffcb6b",
    blue: "#7acfff",
    magenta: "#bd5eff",
    cyan: "#5ee6ff",
    white: "#9d90b3",
    brightBlack: "#514166",
    brightRed: "#ff8080",
    brightGreen: "#8affde",
    brightYellow: "#ffe0a3",
    brightBlue: "#a3e4ff",
    brightMagenta: "#d699ff",
    brightCyan: "#99f2ff",
    brightWhite: "#e3e1e6",
  },
};
