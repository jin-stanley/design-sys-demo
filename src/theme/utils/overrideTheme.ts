import { defaultTheme } from "../themeProvider";
import { Theme } from "../types";
import { deepMerge } from "./deepMerge";

export const overrideTheme = (theme: Theme) => {
  return deepMerge(theme, defaultTheme);
};
