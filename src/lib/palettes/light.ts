import { AetherPalette } from "../types";

export const lightPalette: AetherPalette = {
  core: {
    bg: "#f4ede3",
    fg: "#413a33",
    iconFg: "#7a6f62",
    mutedFg: "#6a6055",
    hintFg: "#857e76",
    border: "#dcd0be",
    overlay: "#000000",
  },

  surface: {
    bg: "#ebe2d4",
    fg: "#413a33",
    border: "#d4c6b0",
  },

  scmGraph: {
    labelFg: "#fbf6f0",
  },

  activityBar: {
    bg: "#ebe2d4",
    fg: "#413a33",
    activeBorder: "#5a6680",
    activeBg: "#dcd0be",
    badgeBg: "#4c5670",
    badgeFg: "#f4ede3",
  },

  sideBar: {
    bg: "#ebe2d4",
    fg: "#6e6459",
    border: "#d4c6b0",
    titleFg: "#413a33",
    sectionHeaderBg: "#ebe2d4",
  },

  statusBar: {
    bg: "#ebe2d4",
    fg: "#5c5349",
    border: "#d4c6b0",
    itemHover: "#e0d5c4",
    remoteBg: "#4c5670",
    itemActiveBg: "#d8cbb8",
  },

  titleBar: {
    bg: "#ebe2d4",
    fg: "#403a33",
    inactiveBg: "#e5dbcb",
  },

  panel: {
    bg: "#ebe2d4",
    headerFg: "#413a33",
    border: "#d4c6b0",
  },

  editor: {
    bg: "#f4ede3",
    fg: "#413a33",
    lineHighlight: "#eee5d7",
    selection: "#dcd0b8",
    findMatch: "#5a6680",
    cursor: "#4c5670",
    gutter: {
      bg: "#f4ede3",
      fg: "#b3a692",
      activeFg: "#7a6f62",
    },
    indentGuide: {
      active: "#b9ab95",
      inactive: "#e3d9c9",
    },
    bracketMatch: {
      bg: "#ded5c2",
      border: "#5a6680",
    },
    brackets: {
      pair1: "#b07d62",
      pair2: "#9c6b94",
      pair3: "#387070",
      pair4: "#c76b6b",
      pair5: "#4a6a8a",
      pair6: "#457156",
      unexpected: "#c76b6b",
    },
    whitespace: "#dcd0be",
    ruler: "#e3d9c9",
    link: "#4a6a8a",
  },

  peekView: {
    border: "#5a6680",
    headerBg: "#f4ede3",
    titleFg: "#413a33",
    descFg: "#6e6459",
    editorBg: "#f4ede3",
    resultBg: "#ebe2d4",
    selectionBg: "#d8cbb8",
    selectionFg: "#413a33",
    matchHighlight: "#5a6680",
  },

  button: {
    primary: {
      bg: "#4c5670",
      fg: "#f4ede3",
      hover: "#5a6680",
    },
    secondary: {
      bg: "#e0d5c4",
      fg: "#413a33",
      hover: "#d8cbb8",
    },
  },

  input: {
    bg: "#f4ede3",
    fg: "#413a33",
    border: "#d4c6b0",
    placeholder: "#8f8271",
    focusBorder: "#5a6680",
    validation: {
      errorBg: "#f2dede",
      errorBorder: "#a84a49",
    },
  },

  list: {
    hoverBg: "#e5dbc9",
    focusBg: "#ddd2be",
    activeSelectionBg: "#d3c6ae",
    activeSelectionFg: "#332d27",
    inactiveSelectionBg: "#e5dbc9",
  },

  tabs: {
    activeBg: "#dcd0be",
    activeFg: "#332d27",
    activeBorderTop: "#5a6680",
    inactiveBg: "#dcd0be",
    inactiveFg: "#645a50",
    border: "#d4c6b0",
  },

  scrollBar: {
    shadow: "#c9bda9",
    sliderBg: "#d8cbb8",
    sliderHover: "#c6b69f",
    sliderActive: "#5a6680",
  },

  syntax: {
    variables: "#4a3f3c",
    keywords: "#855a7e",
    functions: "#4a6a8a",
    strings: "#457156",
    numbers: "#8e5c39",
    constants: "#7a5a9c",
    types: "#387070",
    classes: "#4a5e8a",
    operators: "#706560",
    comments: "#706659",
    tags: "#855a7e",
  },

  status: {
    info: "#387070",
    warning: "#8e5c39",
    error: "#a84a49",
    success: "#457156",
  },

  git: {
    added: "#457156",
    modified: "#8e5c39",
    deleted: "#a84a49",
    ignored: "#a1937f",
    conflict: "#855a7e",
  },

  merge: {
    currentHeader: "#c5d2e6",
    currentContent: "#dde5f0",
    incomingHeader: "#c8e0c8",
    incomingContent: "#dcecda",
    commonHeader: "#e0d5c4",
    commonContent: "#ebe2d4",
  },

  testing: {
    passed: "#457156",
    failed: "#a84a49",
    errored: "#c26b78",
    queued: "#8e5c39",
    unset: "#a1937f",
    skipped: "#8f8271",
    border: "#5a6680",
  },

  terminal: {
    black: "#413a33",
    red: "#a84a49",
    green: "#457156",
    yellow: "#8e5c39",
    blue: "#4a6a8a",
    magenta: "#855a7e",
    cyan: "#387070",
    white: "#ebe2d4",
    brightBlack: "#7a6f62",
    brightRed: "#c96b6a",
    brightGreen: "#639176",
    brightYellow: "#bd8352",
    brightBlue: "#6484a4",
    brightMagenta: "#a5789d",
    brightCyan: "#569494",
    brightWhite: "#f4ede3",
  },
};
