function luminance(hex: string): number {
  const c = [1, 3, 5].map((i) => {
    const v = parseInt(hex.substr(i, 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}

export function contrast(a: string, b: string): number {
  const l1 = luminance(a);
  const l2 = luminance(b);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

// Picks whichever of the theme's light/dark tones reads better on `bg`.
export function readableOn(bg: string, light: string, dark: string): string {
  return contrast(dark, bg) >= contrast(light, bg) ? dark : light;
}

export function alpha(hex: string, opacity: number): string {
  const cleanHex = hex.replace("#", "");

  if (cleanHex.length !== 6) {
    throw new Error(
      `❌ Build error: color "${hex}" is invalid. Always use 6 characters (e.g. #000000).`
    );
  }

  const validOpacity = Math.max(0, Math.min(100, Math.round(opacity)));
  const alphaValue = Math.round((validOpacity / 100) * 255);
  const hexAlpha = alphaValue.toString(16).padStart(2, "0");

  return `#${cleanHex}${hexAlpha}`;
}
