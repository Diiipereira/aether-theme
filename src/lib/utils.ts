export function alpha(hex: string, opacity: number): string {
  const cleanHex = hex.replace("#", "");

  const validOpacity = Math.max(0, Math.min(100, Math.round(opacity)));

  const value = Math.round((validOpacity / 100) * 255)
    .toString(16)
    .padStart(2, "0");

  return `#${cleanHex}${value}`;
}
