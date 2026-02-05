import { AetherPalette } from "../types";

export const darkSpacePalette: AetherPalette = {
  core: {
    bg: "#0f0b14",
    fg: "#e3e1e6",
    border: "#1e1426",
    overlay: "#040206",
  },

  activityBar: {
    bg: "#0b0710",
    fg: "#a69eb0",
    activeBorder: "#9d4dff",
    activeBg: "#0f0b14",
    badgeBg: "#9d4dff",
    badgeFg: "#ffffff",
  },

  sideBar: {
    bg: "#0d0912",
    fg: "#988f9e",
    border: "#1e1426",
    titleFg: "#e3e1e6",
    sectionHeaderBg: "#0b0710",
  },

  statusBar: {
    bg: "#0b0710",
    fg: "#e3e1e6",
    border: "#1e1426",
    itemHover: "#2a1636",
    remoteBg: "#0f0b14",
    itemActiveBg: "#1f102e",
  },

  titleBar: {
    bg: "#0b0710",
    fg: "#988f9e",
    inactiveBg: "#09050e",
  },

  panel: {
    bg: "#0d0912",
    headerFg: "#e3e1e6",
    border: "#1e1426",
  },

  editor: {
    bg: "#0f0b14",
    fg: "#e3e1e6",
    lineHighlight: "#1f102e",
    selection: "#2d1645",
    findMatch: "#9d4dff",
    cursor: "#9d4dff",
    gutter: {
      bg: "#0f0b14",
      fg: "#4e405e",
      activeFg: "#e3e1e6",
    },
    indentGuide: {
      active: "#542e7a",
      inactive: "#1e1426",
    },
    bracketMatch: {
      bg: "#361b4d",
      border: "#6c597a",
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
    whitespace: "#1e1426",
    ruler: "#1e1426",
    link: "#7acfff",
  },

  peekView: {
    border: "#9d4dff",
    headerBg: "#0d0912",
    titleFg: "#e3e1e6",
    descFg: "#988f9e",
    editorBg: "#100817",
    resultBg: "#0d0912",
    selectionBg: "#2d1645",
    selectionFg: "#ffffff",
    matchHighlight: "#9d4dff",
  },

  button: {
    primary: {
      bg: "#9d4dff",
      fg: "#ffffff",
      hover: "#b06bff",
    },
    secondary: {
      bg: "#2a1636",
      fg: "#e3e1e6",
      hover: "#39204a",
    },
  },

  input: {
    bg: "#0d0912",
    fg: "#e3e1e6",
    border: "#1e1426",
    placeholder: "#5a4b66",
    focusBorder: "#9d4dff",
    validation: {
      errorBg: "#3d1117",
      errorBorder: "#ff5f5f",
    },
  },

  list: {
    hoverBg: "#1f102e",
    focusBg: "#251438",
    activeSelectionBg: "#2d1645",
    activeSelectionFg: "#ffffff",
    inactiveSelectionBg: "#0f0b14",
  },

  tabs: {
    activeBg: "#0f0b14",
    activeFg: "#e3e1e6",
    activeBorderTop: "#9d4dff",
    inactiveBg: "#0d0912",
    inactiveFg: "#6e637a",
    border: "#1e1426",
  },

  scrollBar: {
    shadow: "#000000",
    sliderBg: "#36204d",
    sliderHover: "#482b66",
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
    classes: "#5ee6ff",
    operators: "#c9b8db",
    comments: "#a69eb0",
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
    ignored: "#5a4b66",
    conflict: "#ff70d9",
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
    passed: "#4fffd0",
    failed: "#ff5f5f",
    errored: "#ff8080",
    queued: "#ffcb6b",
    unset: "#5a4b66",
    skipped: "#a69eb0",
    border: "#9d4dff",
  },

  terminal: {
    black: "#0b0612",
    red: "#ff5f5f",
    green: "#4fffd0",
    yellow: "#ffcb6b",
    blue: "#7acfff",
    magenta: "#bd5eff",
    cyan: "#5ee6ff",
    white: "#e3e1e6",
    brightBlack: "#6c597a",
    brightRed: "#ff8080",
    brightGreen: "#8affde",
    brightYellow: "#ffe0a3",
    brightBlue: "#a3e4ff",
    brightMagenta: "#d699ff",
    brightCyan: "#99f2ff",
    brightWhite: "#ffffff",
  },
};
