const getContrastText = (color: string): string => {
  const hexToRgb = (hex: string): number[] => {
    const normalizedHex = hex.startsWith("#") ? hex.substring(1) : hex;
    const bigint = parseInt(normalizedHex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  };

  const calculateRelativeLuminance = (
    r: number,
    g: number,
    b: number
  ): number => {
    const normalizedR = r / 255;
    const normalizedG = g / 255;
    const normalizedB = b / 255;
    const sRGB = [normalizedR, normalizedG, normalizedB].map((c) =>
      c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    );
    return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
  };

  const normalizedColor = color.trim().toLowerCase();

  if (normalizedColor.startsWith("#")) {
    const [r, g, b] = hexToRgb(normalizedColor);
    const bgLuminance = calculateRelativeLuminance(r, g, b);
    const textColor = bgLuminance > 0.5 ? "#000000" : "#FFFFFF";
    return textColor;
  }

  if (normalizedColor.startsWith("rgb")) {
    const matches = normalizedColor.match(/\d+/g);
    if (matches) {
      const [r, g, b] = matches.map(Number);
      const bgLuminance = calculateRelativeLuminance(r, g, b);
      const textColor = bgLuminance > 0.5 ? "#000000" : "#FFFFFF";
      return textColor;
    }
  }

  return "#000000";
};
export { getContrastText };
