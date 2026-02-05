import { AetherPalette } from "../types";

export const coffeePalette: AetherPalette = {
  core: {
    bg: "#211b16",
    fg: "#fde9d4",
    border: "#2e241e",
    overlay: "#14100d",
  },

  activityBar: {
    bg: "#18120e",
    fg: "#b09e90",
    activeBorder: "#c9a57b",
    activeBg: "#211b16",
    badgeBg: "#c9a57b",
    badgeFg: "#211b16",
  },

  sideBar: {
    bg: "#1c1713",
    fg: "#b09e90",
    border: "#2e241e",
    titleFg: "#e8dccf",
    sectionHeaderBg: "#18120e",
  },

  statusBar: {
    bg: "#18120e",
    fg: "#fde9d4",
    border: "#2e241e",
    itemHover: "#3b3027",
    remoteBg: "#c9a57b",
  },

  titleBar: {
    bg: "#18120e",
    fg: "#b09e90",
    inactiveBg: "#14100d",
  },

  panel: {
    bg: "#1c1713",
    headerFg: "#e8dccf",
    border: "#2e241e",
  },

  editor: {
    bg: "#211b16",
    fg: "#fde9d4",
    lineHighlight: "#2a221c",
    selection: "#3d3128",
    findMatch: "#c9a57b",
    cursor: "#c9a57b",
    gutter: {
      bg: "#211b16",
      fg: "#6e6056",
      activeFg: "#fde9d4",
    },
    indentGuide: {
      active: "#c9a57b",
      inactive: "#2e241e",
    },
    bracketMatch: {
      bg: "#3b3027",
      border: "#6e6056",
    },
  },

  peekView: {
    border: "#c9a57b",
    headerBg: "#1c1713",
    titleFg: "#fde9d4",
    descFg: "#b09e90",
    editorBg: "#1f1915",
    resultBg: "#1c1713",
    selectionBg: "#3d3128",
    selectionFg: "#fde9d4",
    matchHighlight: "#c9a57b",
  },

  button: {
    primary: {
      bg: "#9c7955",
      fg: "#ffffff",
      hover: "#b58d63",
    },
    secondary: {
      bg: "#3b3027",
      fg: "#fde9d4",
      hover: "#4f4034",
    },
  },

  input: {
    bg: "#1c1713",
    fg: "#fde9d4",
    border: "#2e241e",
    placeholder: "#8a7968",
    focusBorder: "#9c7955",
    validation: {
      errorBg: "#422425",
      errorBorder: "#e67e80",
    },
  },

  list: {
    hoverBg: "#2a221c",
    focusBg: "#3b3027",
    activeSelectionBg: "#3d3128",
    activeSelectionFg: "#fde9d4",
    inactiveSelectionBg: "#2a221c",
  },

  tabs: {
    activeBg: "#211b16",
    activeFg: "#fde9d4",
    activeBorderTop: "#c9a57b",
    inactiveBg: "#1c1713",
    inactiveFg: "#8a7968",
    border: "#2e241e",
  },

  scrollBar: {
    shadow: "#000000",
    sliderBg: "#4f4034",
    sliderHover: "#5e4d3e",
    sliderActive: "#9c7955",
  },

  syntax: {
    variables: "#e8dccf",
    keywords: "#e6b88a",
    functions: "#a7c080",
    strings: "#dbbc7f",
    numbers: "#d699b6",
    constants: "#8ab4c9",
    types: "#8ab4c9",
    classes: "#8ab4c9",
    operators: "#7fbbb3",
    comments: "#998b82",
    tags: "#e6b88a",
  },

  status: {
    info: "#7fbbb3",
    warning: "#dbbc7f",
    error: "#e67e80",
    success: "#a7c080",
  },

  git: {
    added: "#a7c080",
    modified: "#dbbc7f",
    deleted: "#e67e80",
    ignored: "#6e6056",
    conflict: "#d699b6",
  },

  terminal: {
    black: "#1c1713",
    red: "#e67e80",
    green: "#a7c080",
    yellow: "#dbbc7f",
    blue: "#8ab4c9",
    magenta: "#d699b6",
    cyan: "#7fbbb3",
    white: "#fde9d4",
    brightBlack: "#8a7968",
    brightRed: "#f09fa1",
    brightGreen: "#c4dcb0",
    brightYellow: "#e8d3a5",
    brightBlue: "#a8d1e6",
    brightMagenta: "#eebad5",
    brightCyan: "#a3dcd7",
    brightWhite: "#ffffff",
  },
};
