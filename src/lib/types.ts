export interface AetherPalette {
  // --- 1. CORE / BASE ---
  // Cores globais usadas como fallback ou base da aplicação
  core: {
    bg: string; // Fundo principal da janela
    fg: string; // Texto principal padrão
    border: string; // Borda padrão usada na maioria dos divisores
    overlay: string; // Fundo escurecido para modais/sombras
  };

  // --- 2. LAYOUT MODULES (Estrutura da Janela) ---
  // Controle individual de cada painel
  activityBar: {
    bg: string;
    fg: string; // Ícones inativos
    activeBorder: string; // Borda lateral do ícone ativo
    activeBg: string; // Fundo do ícone ativo (opcional)
    badgeBg: string; // Bolinha de notificação
    badgeFg: string; // Texto da bolinha
  };

  sideBar: {
    bg: string;
    fg: string;
    border: string; // Borda separando sidebar do editor
    titleFg: string; // "EXPLORER", "SEARCH"
    sectionHeaderBg: string; // Fundo do título das seções colapsáveis
  };

  statusBar: {
    bg: string;
    fg: string;
    border: string; // Borda superior
    itemHover: string; // Hover nos itens clicáveis
    remoteBg: string; // Botão de conexão remota (canto esquerdo)
  };

  titleBar: {
    bg: string; // Barra de título (onde ficam os menus no Windows/Linux)
    fg: string;
    inactiveBg: string; // Quando a janela perde o foco
  };

  panel: {
    // Painel inferior (Terminal, Output, Problems)
    bg: string;
    headerFg: string; // Títulos das abas do painel
    border: string;
  };

  // --- 3. EDITOR (Área de código) ---
  editor: {
    bg: string;
    fg: string;
    lineHighlight: string; // Fundo da linha onde o cursor está
    selection: string; // Cor da seleção de texto
    findMatch: string; // Cor do destaque da busca (Ctrl+F)
    cursor: string;
    gutter: {
      // Margem esquerda (números de linha)
      bg: string;
      fg: string; // Cor dos números
      activeFg: string; // Cor do número da linha ativa
    };
    indentGuide: {
      active: string; // Linha vertical de indentação ativa
      inactive: string; // Linha vertical de indentação normal
    };
    bracketMatch: {
      bg: string; // Fundo do parêntese correspondente
      border: string; // Borda do parêntese correspondente
    };
  };

  // --- 4. UI COMPONENTS (Elementos interativos) ---
  // Aqui resolvemos o problema de buttons e inputs usarem a mesma cor
  button: {
    primary: {
      // Botões de ação principal (azul, verde, etc)
      bg: string;
      fg: string;
      hover: string;
    };
    secondary: {
      // Botões cancel ou secundários (cinza, outline)
      bg: string;
      fg: string;
      hover: string;
    };
  };

  input: {
    // Caixas de texto e pesquisa
    bg: string;
    fg: string;
    border: string;
    placeholder: string; // Texto cinza "Search..."
    focusBorder: string; // Borda quando clicado
    validation: {
      // Erro de validação dentro do input
      errorBg: string;
      errorBorder: string;
    };
  };

  list: {
    // Árvore de arquivos, menus, sugestões
    hoverBg: string; // Mouse em cima
    focusBg: string; // Item focado (teclado)
    activeSelectionBg: string; // Item selecionado (clicado)
    activeSelectionFg: string;
    inactiveSelectionBg: string; // Selecionado mas janela sem foco
  };

  tabs: {
    // Abas dos arquivos abertos
    activeBg: string;
    activeFg: string;
    activeBorderTop: string; // Linha colorida no topo da aba ativa
    inactiveBg: string;
    inactiveFg: string;
    border: string; // Divisor entre abas
  };

  scrollBar: {
    shadow: string; // Sombra quando há scroll
    sliderBg: string; // A barra em si (normal)
    sliderHover: string; // A barra ao passar o mouse
    sliderActive: string; // A barra ao arrastar
  };

  // --- 5. SYNTAX HIGHLIGHTING (Coloração do código) ---
  syntax: {
    keywords: string; // if, else, export, return
    functions: string; // getUiColors, console.log
    variables: string; // const myVar
    constants: string; // MY_CONST, true, false
    strings: string; // "Hello"
    numbers: string; // 123, 0.5
    types: string; // interface AetherPalette, string, boolean
    classes: string; // class User
    operators: string; // Operadpres
    comments: string; // // Comentários
    tags: string; // <div>, <Component>
  };

  // --- 6. STATUS & GIT ---
  // Cores semânticas para feedback
  status: {
    info: string;
    warning: string;
    error: string;
    success: string; // Geralmente verde
  };

  git: {
    added: string; // Arquivo novo (verde)
    modified: string; // Arquivo alterado (amarelo/azul)
    deleted: string; // Arquivo deletado (vermelho)
    ignored: string; // Arquivo no .gitignore (cinza)
    conflict: string; // Conflito de merge
  };

  // --- 7. TERMINAL ---
  // Padrão ANSI (Mantenha como está, pois é padrão da indústria)
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
