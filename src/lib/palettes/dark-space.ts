import { AetherPalette } from "../types";

export const darkSpacePalette: AetherPalette = {
  core: {
    bg: "#13091c",
    fg: "#e3e1e6",
    border: "#1e1426",
    overlay: "#040206",
  },

  activityBar: {
    bg: "#09050e",
    fg: "#a69eb0",
    activeBorder: "#9d4dff",
    activeBg: "#13091c",
    badgeBg: "#9d4dff",
    badgeFg: "#ffffff",
  },

  sideBar: {
    bg: "#0b0612",
    fg: "#988f9e",
    border: "#1e1426",
    titleFg: "#e3e1e6",
    sectionHeaderBg: "#09050e",
  },

  statusBar: {
    bg: "#09050e",
    fg: "#e3e1e6",
    border: "#1e1426",
    itemHover: "#2a1636",
    remoteBg: "#9d4dff",
  },

  titleBar: {
    bg: "#09050e",
    fg: "#988f9e",
    inactiveBg: "#040206",
  },

  panel: {
    bg: "#0b0612",
    headerFg: "#e3e1e6",
    border: "#1e1426",
  },

  editor: {
    bg: "#13091c",
    fg: "#e3e1e6",
    lineHighlight: "#1f102e",
    selection: "#2d1645",
    findMatch: "#9d4dff",
    cursor: "#9d4dff",
    gutter: {
      bg: "#13091c",
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
  },

  peekView: {
    border: "#9d4dff",
    headerBg: "#0b0612",
    titleFg: "#e3e1e6",
    descFg: "#988f9e",
    editorBg: "#100817",
    resultBg: "#0b0612",
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
    bg: "#0b0612",
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
    inactiveSelectionBg: "#1f102e",
  },

  tabs: {
    activeBg: "#13091c",
    activeFg: "#e3e1e6",
    activeBorderTop: "#9d4dff",
    inactiveBg: "#0b0612",
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
