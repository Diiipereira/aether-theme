export interface AetherPalette {
  // 1. CORE / BASE
  core: {
    bg: string;
    fg: string;
    border: string;
    overlay: string;
  };

  // 2. LAYOUT MODULES (Estrutura da Janela)
  activityBar: {
    bg: string;
    fg: string;
    activeBorder: string;
    activeBg: string;
    badgeBg: string;
    badgeFg: string;
  };

  sideBar: {
    bg: string;
    fg: string;
    border: string;
    titleFg: string;
    sectionHeaderBg: string;
  };

  statusBar: {
    bg: string;
    fg: string;
    border: string;
    itemHover: string;
    remoteBg: string;
  };

  titleBar: {
    bg: string;
    fg: string;
    inactiveBg: string;
  };

  panel: {
    bg: string;
    headerFg: string;
    border: string;
  };

  // 3. EDITOR (Área de código)
  editor: {
    bg: string;
    fg: string;
    lineHighlight: string;
    selection: string;
    findMatch: string;
    cursor: string;
    gutter: {
      bg: string;
      fg: string;
      activeFg: string;
    };
    indentGuide: {
      active: string;
      inactive: string;
    };
    bracketMatch: {
      bg: string;
      border: string;
    };
  };

  peekView: {
    border: string;
    headerBg: string;
    titleFg: string;
    descFg: string;
    editorBg: string;
    resultBg: string;
    selectionBg: string;
    selectionFg: string;
    matchHighlight: string;
  };

  // 4. UI COMPONENTS (Elementos interativos)
  button: {
    primary: {
      bg: string;
      fg: string;
      hover: string;
    };
    secondary: {
      bg: string;
      fg: string;
      hover: string;
    };
  };

  input: {
    bg: string;
    fg: string;
    border: string;
    placeholder: string;
    focusBorder: string;
    validation: {
      errorBg: string;
      errorBorder: string;
    };
  };

  list: {
    hoverBg: string;
    focusBg: string;
    activeSelectionBg: string;
    activeSelectionFg: string;
    inactiveSelectionBg: string;
  };

  tabs: {
    activeBg: string;
    activeFg: string;
    activeBorderTop: string;
    inactiveBg: string;
    inactiveFg: string;
    border: string;
  };

  scrollBar: {
    shadow: string;
    sliderBg: string;
    sliderHover: string;
    sliderActive: string;
  };

  // 5. SYNTAX HIGHLIGHTING (Coloração do código)
  syntax: {
    keywords: string;
    functions: string;
    variables: string;
    constants: string;
    strings: string;
    numbers: string;
    types: string;
    classes: string;
    operators: string;
    comments: string;
    tags: string;
  };

  // 6. STATUS & GIT
  status: {
    info: string;
    warning: string;
    error: string;
    success: string;
  };

  git: {
    added: string;
    modified: string;
    deleted: string;
    ignored: string;
    conflict: string;
  };

  // 7. TERMINAL
  terminal: {
    black: string;
    red: string;
    green: string;
    yellow: string;
    blue: string;
    magenta: string;
    cyan: string;
    white: string;
    brightBlack: string;
    brightRed: string;
    brightGreen: string;
    brightYellow: string;
    brightBlue: string;
    brightMagenta: string;
    brightCyan: string;
    brightWhite: string;
  };
}
