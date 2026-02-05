export function alpha(hex: string, opacity: number): string {
  const cleanHex = hex.replace("#", "");

  if (cleanHex.length !== 6) {
    throw new Error(
      `❌ Erro de Build: A cor "${hex}" é inválida. Use sempre 6 caracteres (ex: #000000).`
    );
  }

  const validOpacity = Math.max(0, Math.min(100, Math.round(opacity)));
  const alphaValue = Math.round((validOpacity / 100) * 255);
  const hexAlpha = alphaValue.toString(16).padStart(2, "0");

  return `#${cleanHex}${hexAlpha}`;
}
