import { AetherPalette } from "../../lib/types";
import { getLayoutColors } from "./layout";
import { getEditorColors } from "./editor";
import { getComponentColors } from "./components";

export const getUiColors = (palette: AetherPalette) => ({
  ...getLayoutColors(palette),
  ...getEditorColors(palette),
  ...getComponentColors(palette),
});
