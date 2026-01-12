import { AetherPalette } from "../types";

export const lightPalette: AetherPalette = {
  core: {
    bg: "#f0ede9",
    fg: "#575252",
    border: "#dcd6d0",
    overlay: "#000000",
  },

  activityBar: {
    bg: "#e6e1dc",
    fg: "#9e9690",
    activeBorder: "#6e7996",
    activeBg: "#dcd6d0",
    badgeBg: "#6e7996",
    badgeFg: "#ffffff",
  },

  sideBar: {
    bg: "#ebe6e1",
    fg: "#9e9690",
    border: "#dcd6d0",
    titleFg: "#575252",
    sectionHeaderBg: "#e6e1dc",
  },

  statusBar: {
    bg: "#e6e1dc",
    fg: "#575252",
    border: "#dcd6d0",
    itemHover: "#dcd6d0",
    remoteBg: "#6e7996",
  },

  titleBar: {
    bg: "#e6e1dc",
    fg: "#9e9690",
    inactiveBg: "#ded8d3",
  },

  panel: {
    bg: "#ebe6e1",
    headerFg: "#575252",
    border: "#dcd6d0",
  },

  editor: {
    bg: "#f0ede9",
    fg: "#575252",
    lineHighlight: "#e6e1dc",
    selection: "#e0d8d1",
    findMatch: "#6e7996",
    cursor: "#6e7996",
    gutter: {
      bg: "#f0ede9",
      fg: "#b0aba6",
      activeFg: "#575252",
    },
    indentGuide: {
      active: "#6e7996",
      inactive: "#dcd6d0",
    },
    bracketMatch: {
      bg: "#e3ded9",
      border: "#8f857d",
    },
  },

  peekView: {
    border: "#6e7996",
    headerBg: "#ebe6e1",
    titleFg: "#575252",
    descFg: "#9e9690",
    editorBg: "#e6e1dc",
    resultBg: "#ebe6e1",
    selectionBg: "#e0d8d1",
    selectionFg: "#575252",
    matchHighlight: "#6e7996",
  },

  button: {
    primary: {
      bg: "#6e7996",
      fg: "#ffffff",
      hover: "#586380",
    },
    secondary: {
      bg: "#dcd6d0",
      fg: "#575252",
      hover: "#cfc8c1",
    },
  },

  input: {
    bg: "#e6e1dc",
    fg: "#575252",
    border: "#dcd6d0",
    placeholder: "#b0aba6",
    focusBorder: "#6e7996",
    validation: {
      errorBg: "#e6dcdc",
      errorBorder: "#c76b6b",
    },
  },

  list: {
    hoverBg: "#e6e1dc",
    focusBg: "#e6e1dc",
    activeSelectionBg: "#e0d8d1",
    activeSelectionFg: "#575252",
    inactiveSelectionBg: "#f0ede9",
  },

  tabs: {
    activeBg: "#f0ede9",
    activeFg: "#575252",
    activeBorderTop: "#6e7996",
    inactiveBg: "#ebe6e1",
    inactiveFg: "#9e9690",
    border: "#dcd6d0",
  },

  scrollBar: {
    shadow: "#000000",
    sliderBg: "#cfc8c1",
    sliderHover: "#9e9690",
    sliderActive: "#6e7996",
  },

  syntax: {
    variables: "#4f4742",
    keywords: "#9c6b94",
    functions: "#5a7699",
    strings: "#5c8c63",
    numbers: "#b07d62",
    constants: "#6e7996",
    types: "#508a8a",
    classes: "#508a8a",
    operators: "#8f857d",
    comments: "#8f857d",
    tags: "#9c6b94",
  },

  status: {
    info: "#508a8a",
    warning: "#b07d62",
    error: "#c76b6b",
    success: "#5c8c63",
  },

  git: {
    added: "#5c8c63",
    modified: "#b07d62",
    deleted: "#c76b6b",
    ignored: "#a69b91",
    conflict: "#9c6b94",
  },

  terminal: {
    black: "#575252",
    red: "#c76b6b",
    green: "#5c8c63",
    yellow: "#b07d62",
    blue: "#508a8a",
    magenta: "#9c6b94",
    cyan: "#5da3a3",
    white: "#f0ede9",
    brightBlack: "#9e9690",
    brightRed: "#db8ca1",
    brightGreen: "#8ccf70",
    brightYellow: "#e6a863",
    brightBlue: "#70b3b3",
    brightMagenta: "#c49ecf",
    brightCyan: "#85c7c7",
    brightWhite: "#ffffff",
  },
};
