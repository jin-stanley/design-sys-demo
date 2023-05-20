import { Theme } from "./types";

export * as default from "./themeProvider";

export const defaultTheme: Theme = {
  fontFamily: "Arial",
  borderRadius: "8px",
  button: {
    height: {
      large: "48px",
      small: "36px",
    },
    fontSize: {
      large: "16px",
      small: "14px",
    },
    lineHeight: {
      large: "24px",
      small: "20px",
    },
    horizontalPadding: {
      large: "16px",
      small: "12px",
    },
    verticalPadding: {
      large: "16px",
      small: "8px",
    },
  },
};
