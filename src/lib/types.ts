export interface AetherPalette {
  bg: {
    base: string;
    surface: string;
    border: string;
    command_border: string;
    input: string;
    overlay: string;
    badge: string;
    dropdown: string;
    button_muted: string;
    button_muted_hover: string;
  };
  accent: {
    primary: string;
    primary_hover: string;
    secondary: string;
    tertiary: string;
    selection: string;
    highlight: string;
  };
  fg: {
    primary: string;
    secondary: string;
    code: string;
    muted: string;
    link: string;
    active: string;
  };
  status: {
    green: string;
    yellow: string;
    red: string;
    error: string;
    error_bg: string;
    error_dark: string;
    warning: string;
    warning_bg: string;
    info: string;
    info_bg: string;
    added_gutter: string;
    modified_gutter: string;
    deleted_gutter: string;
    submodule: string;
  };
  diff: {
    removed_bg: string;
    marker_info: string;
  };
  syntax: {
    variables: string;
    keywords: string;
    numbers: string;
    constants: string;
    functions: string;
    strings: string;
    operators: string;
    comments: string;
  };
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
  misc: {
    selection_weak: string;
    debug_border: string;
    special_border: string;
    diff_common: string;
  };
}
