import { AetherPalette } from "../types";

export const coffeeDarkPalette: AetherPalette = {
  core: {
    bg: "#120d09",
    fg: "#ddd0ba",
    iconFg: "#8d7c66",
    border: "#2b2117",
    overlay: "#000000",
  },

  surface: {
    bg: "#0a0705",
    fg: "#ddd0ba",
    border: "#3d2f1f",
  },

  activityBar: {
    bg: "#0a0705",
    fg: "#ddd0ba",
    activeBorder: "#c89050",
    activeBg: "#2f2214",
    badgeBg: "#6c4e2b",
    badgeFg: "#f0e6d6",
  },

  sideBar: {
    bg: "#0a0705",
    fg: "#9a8873",
    border: "#3d2f1f",
    titleFg: "#ddd0ba",
    sectionHeaderBg: "#0a0705",
  },

  statusBar: {
    bg: "#0a0705",
    fg: "#b3a189",
    border: "#3d2f1f",
    itemHover: "#1c150f",
    remoteBg: "#6c4e2b",
    itemActiveBg: "#261c12",
  },

  titleBar: {
    bg: "#0a0705",
    fg: "#b3a189",
    inactiveBg: "#070504",
  },

  panel: {
    bg: "#0a0705",
    headerFg: "#ddd0ba",
    border: "#3d2f1f",
  },

  editor: {
    bg: "#120d09",
    fg: "#ddd0ba",
    lineHighlight: "#191209",
    selection: "#3a2b18",
    findMatch: "#c89050",
    cursor: "#c89050",
    gutter: {
      bg: "#120d09",
      fg: "#6d5b41",
      activeFg: "#8d7c66",
    },
    indentGuide: {
      active: "#5a4020",
      inactive: "#241a11",
    },
    bracketMatch: {
      bg: "#3f2e1a",
      border: "#c89050",
    },
    brackets: {
      pair1: "#bd8a5c",
      pair2: "#b3a46e",
      pair3: "#96ac7d",
      pair4: "#c88080",
      pair5: "#84a2b5",
      pair6: "#7ba39d",
      unexpected: "#c88080",
    },
    whitespace: "#2b2117",
    ruler: "#241a11",
    link: "#84a2b5",
  },

  peekView: {
    border: "#c89050",
    headerBg: "#120d09",
    titleFg: "#ddd0ba",
    descFg: "#9a8873",
    editorBg: "#120d09",
    resultBg: "#0a0705",
    selectionBg: "#261c12",
    selectionFg: "#ddd0ba",
    matchHighlight: "#c89050",
  },

  button: {
    primary: {
      bg: "#6c4e2b",
      fg: "#f0e6d6",
      hover: "#7c5932",
    },
    secondary: {
      bg: "#241a11",
      fg: "#ddd0ba",
      hover: "#33261a",
    },
  },

  input: {
    bg: "#120d09",
    fg: "#ddd0ba",
    border: "#3d2f1f",
    placeholder: "#7a6851",
    focusBorder: "#c89050",
    validation: {
      errorBg: "#301414",
      errorBorder: "#c88080",
    },
  },

  list: {
    hoverBg: "#1c150f",
    focusBg: "#261c12",
    activeSelectionBg: "#33261a",
    activeSelectionFg: "#f0e6d6",
    inactiveSelectionBg: "#1c150f",
  },

  tabs: {
    activeBg: "#2f2214",
    activeFg: "#f0e6d6",
    activeBorderTop: "#c89050",
    inactiveBg: "#2f2214",
    inactiveFg: "#8a7862",
    border: "#3d2f1f",
  },

  scrollBar: {
    shadow: "#000000",
    sliderBg: "#33261a",
    sliderHover: "#453422",
    sliderActive: "#c89050",
  },

  syntax: {
    variables: "#cdbf9f",
    keywords: "#bd8a5c",
    functions: "#96ac7d",
    strings: "#b3a46e",
    numbers: "#b493c0",
    constants: "#84a2b5",
    types: "#7ba39d",
    classes: "#93aec4",
    operators: "#8d7c66",
    comments: "#786748",
    tags: "#bd8a5c",
  },

  status: {
    info: "#7ba39d",
    warning: "#b3a46e",
    error: "#c88080",
    success: "#96ac7d",
  },

  git: {
    added: "#96ac7d",
    modified: "#b3a46e",
    deleted: "#c88080",
    ignored: "#786748",
    conflict: "#b493c0",
  },

  merge: {
    currentHeader: "#22334a",
    currentContent: "#161f2e",
    incomingHeader: "#243522",
    incomingContent: "#182315",
    commonHeader: "#332618",
    commonContent: "#241a11",
  },

  testing: {
    passed: "#96ac7d",
    failed: "#c88080",
    errored: "#d29898",
    queued: "#b3a46e",
    unset: "#786748",
    skipped: "#9a8873",
    border: "#c89050",
  },

  terminal: {
    black: "#120d09",
    red: "#c88080",
    green: "#96ac7d",
    yellow: "#b3a46e",
    blue: "#84a2b5",
    magenta: "#b493c0",
    cyan: "#7ba39d",
    white: "#9a8873",
    brightBlack: "#5f4f39",
    brightRed: "#d29898",
    brightGreen: "#adc196",
    brightYellow: "#c9bb88",
    brightBlue: "#9db9c9",
    brightMagenta: "#c9acd3",
    brightCyan: "#95b8b3",
    brightWhite: "#ddd0ba",
  },
};
