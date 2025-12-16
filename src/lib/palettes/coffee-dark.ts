import { AetherPalette } from "../types";

export const coffeeDarkPalette: AetherPalette = {
  core: {
    bg: "#0c0b0a", // Espresso Profundo (Quase preto, muito elegante)
    fg: "#e6dccb", // Creme / Leite de Aveia
    border: "#26201b", // Marrom escuro para divisões sutis
    overlay: "#000000cc",
  },

  activityBar: {
    bg: "#0c0b0a",
    fg: "#9e9285", // Cinza quente
    activeBorder: "#d4a373", // Caramelo (Accent principal)
    activeBg: "#161412",
    badgeBg: "#d4a373",
    badgeFg: "#0c0b0a", // Texto escuro no badge para contraste
  },

  sideBar: {
    bg: "#0c0b0a",
    fg: "#9e9285",
    border: "#26201b",
    titleFg: "#c7bcae",
    sectionHeaderBg: "#161412",
  },

  statusBar: {
    bg: "#0c0b0a",
    fg: "#e6dccb",
    border: "#26201b",
    itemHover: "#26201b",
    remoteBg: "#d4a373",
  },

  titleBar: {
    bg: "#0c0b0a",
    fg: "#9e9285",
    inactiveBg: "#12100e",
  },

  panel: {
    bg: "#12100e",
    headerFg: "#e6dccb",
    border: "#26201b",
  },

  editor: {
    bg: "#0c0b0a",
    fg: "#e6dccb",
    lineHighlight: "#1a1714", // Destaque de linha sutil
    selection: "#302822", // Seleção marrom café
    findMatch: "#d4a373",
    cursor: "#e6dccb",
    gutter: {
      bg: "#0c0b0a",
      fg: "#5c5046",
      activeFg: "#e6dccb",
    },
    indentGuide: {
      active: "#5c5046",
      inactive: "#26201b",
    },
    bracketMatch: {
      bg: "#26201b",
      border: "#e0c080",
    },
  },

  peekView: {
    border: "#d4a373", // Caramelo
    headerBg: "#161412", // Levemente mais claro que o fundo
    titleFg: "#e6dccb",
    descFg: "#9e9285",
    editorBg: "#12100e", // Fundo do editor do peek
    resultBg: "#161412", // Fundo da lista de resultados
    selectionBg: "#302822",
    selectionFg: "#e6dccb",
    matchHighlight: "#d4a373",
  },

  button: {
    primary: {
      bg: "#d4a373", // Botão Caramelo
      fg: "#0c0b0a",
      hover: "#cfa986",
    },
    secondary: {
      bg: "#26201b",
      fg: "#e6dccb",
      hover: "#302822",
    },
  },

  input: {
    bg: "#12100e",
    fg: "#e6dccb",
    border: "#26201b",
    placeholder: "#5c5046",
    focusBorder: "#d4a373",
    validation: {
      errorBg: "#331818",
      errorBorder: "#cc6666",
    },
  },

  list: {
    hoverBg: "#1a1714",
    focusBg: "#1a1714",
    activeSelectionBg: "#302822",
    activeSelectionFg: "#e6dccb",
    inactiveSelectionBg: "#0c0b0a",
  },

  tabs: {
    activeBg: "#0c0b0a",
    activeFg: "#e6dccb",
    activeBorderTop: "#d4a373",
    inactiveBg: "#0c0b0a",
    inactiveFg: "#5c5046",
    border: "#26201b",
  },

  scrollBar: {
    shadow: "#000000",
    sliderBg: "#26201b",
    sliderHover: "#302822",
    sliderActive: "#d4a373",
  },

  syntax: {
    variables: "#e6dccb", // Creme (limpo)
    keywords: "#d8966c", // Canela (Laranja queimado)
    functions: "#e0c080", // Mel (Dourado suave)
    strings: "#a7b886", // Matcha (Verde orgânico)
    numbers: "#b095ad", // Figo (Roxo desaturado - ótimo contraste)
    constants: "#d4a373", // Caramelo
    types: "#d4a373", // Caramelo
    classes: "#d4a373", // Caramelo
    operators: "#9e9285", // Cinza Quente
    comments: "#5c5046", // Marrom Café com Leite escuro (bem sutil)
    tags: "#d8966c", // Canela
  },

  status: {
    info: "#8fa3a3", // Azul Petróleo suave
    warning: "#e0c080", // Mel
    error: "#cc6666", // Vermelho Tijolo suave
    success: "#a7b886", // Matcha
  },

  git: {
    added: "#a7b886",
    modified: "#e0c080",
    deleted: "#cc6666",
    ignored: "#5c5046",
    conflict: "#b095ad",
  },

  terminal: {
    black: "#161412",
    red: "#cc6666",
    green: "#a7b886",
    yellow: "#e0c080",
    blue: "#8fa3a3",
    magenta: "#b095ad",
    cyan: "#8abeb7",
    white: "#e6dccb",
    brightBlack: "#5c5046",
    brightRed: "#d46c6c",
    brightGreen: "#b8c997",
    brightYellow: "#ebd2a0",
    brightBlue: "#a0b5b5",
    brightMagenta: "#c2a8bf",
    brightCyan: "#9bd4cd",
    brightWhite: "#ffffff",
  },
};
