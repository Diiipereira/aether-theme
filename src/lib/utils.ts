export function alpha(hex: string, opacity: number): string {
  const cleanHex = hex.replace("#", "");

  const validOpacity = Math.max(0, Math.min(100, Math.round(opacity)));

  const alphaValue = Math.round((validOpacity / 100) * 255);
  const hexAlpha = alphaValue.toString(16).padStart(2, "0");

  return `#${cleanHex}${hexAlpha}`;
}
