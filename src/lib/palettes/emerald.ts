import { AetherPalette } from "../types";

export const emeraldPalette: AetherPalette = {
  core: {
    bg: "#18251C",
    fg: "#F3FFF9",
    border: "#233828",
    overlay: "#0D1510",
  },

  activityBar: {
    bg: "#0D1510",
    fg: "#7CA375",
    activeBorder: "#6CF6A4",
    activeBg: "#121C15",
    badgeBg: "#FFA25A",
    badgeFg: "#18251C",
  },

  sideBar: {
    bg: "#121C15",
    fg: "#C7E6D2",
    border: "#18251C",
    titleFg: "#F3FFF9",
    sectionHeaderBg: "#0D1510",
  },

  statusBar: {
    bg: "#0D1510",
    fg: "#7CA375",
    border: "#18251C",
    itemHover: "#18251C",
    remoteBg: "#6CF6A4",
  },

  titleBar: {
    bg: "#0D1510",
    fg: "#F3FFF9",
    inactiveBg: "#0D1510",
  },

  panel: {
    bg: "#121C15",
    headerFg: "#F3FFF9",
    border: "#18251C",
  },

  editor: {
    bg: "#18251C",
    fg: "#F3FFF9",
    lineHighlight: "#233828",
    selection: "#7CA37544",
    findMatch: "#6CF6A455",
    cursor: "#6CF6A4",
    gutter: {
      bg: "#18251C",
      fg: "#305939",
      activeFg: "#7CA375",
    },
    indentGuide: {
      active: "#305939",
      inactive: "#233828",
    },
    bracketMatch: {
      bg: "#30593955",
      border: "#497C4F",
    },
  },

  peekView: {
    border: "#305939",
    headerBg: "#121C15",
    titleFg: "#F3FFF9",
    descFg: "#C7E6D2",
    editorBg: "#18251C",
    resultBg: "#121C15",
    selectionBg: "#7CA37544",
    selectionFg: "#F3FFF9",
    matchHighlight: "#6CF6A444",
  },

  button: {
    primary: {
      bg: "#FFA25A",
      fg: "#18251C",
      hover: "#FFB370",
    },
    secondary: {
      bg: "#233828",
      fg: "#F3FFF9",
      hover: "#305939",
    },
  },

  input: {
    bg: "#121C15",
    fg: "#F3FFF9",
    border: "#233828",
    placeholder: "#7CA375",
    focusBorder: "#6CF6A4",
    validation: {
      errorBg: "#18251C",
      errorBorder: "#FFA25A",
    },
  },

  list: {
    hoverBg: "#233828",
    focusBg: "#233828",
    activeSelectionBg: "#305939",
    activeSelectionFg: "#F3FFF9",
    inactiveSelectionBg: "#23382866",
  },

  tabs: {
    activeBg: "#18251C",
    activeFg: "#F3FFF9",
    activeBorderTop: "#6CF6A4",
    inactiveBg: "#121C15",
    inactiveFg: "#7CA375",
    border: "#18251C",
  },

  scrollBar: {
    shadow: "#0D1510",
    sliderBg: "#30593966",
    sliderHover: "#497C4F99",
    sliderActive: "#6CF6A4",
  },

  syntax: {
    variables: "#F3FFF9",
    keywords: "#FFA25A",
    functions: "#6CF6A4",
    strings: "#C5F484",
    numbers: "#FFB370",
    constants: "#F3FFF9",
    types: "#FFA25A",
    classes: "#6CF6A4",
    operators: "#FFA25A",
    comments: "#9CB7A2",
    tags: "#FFA25A",
  },

  status: {
    info: "#6CF6A4",
    warning: "#FFB370",
    error: "#FFA25A",
    success: "#C5F484",
  },

  git: {
    added: "#C5F484",
    modified: "#6CF6A4",
    deleted: "#FFA25A",
    ignored: "#9CB7A266",
    conflict: "#FFB370",
  },

  terminal: {
    black: "#121C15",
    red: "#FFA25A",
    green: "#C5F484",
    yellow: "#FFB370",
    blue: "#6CF6A4",
    magenta: "#FFA25A",
    cyan: "#C5F484",
    white: "#F3FFF9",
    brightBlack: "#497C4F",
    brightRed: "#FFB370",
    brightGreen: "#C5F484",
    brightYellow: "#6CF6A4",
    brightBlue: "#6CF6A4",
    brightMagenta: "#FFA25A",
    brightCyan: "#C5F484",
    brightWhite: "#F3FFF9",
  },
};
