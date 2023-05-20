import { useContext } from "react";
import { Theme } from "../types";
import { ThemeContext } from "../themeProvider";

export function useTheme(): Theme {
  return useContext(ThemeContext);
}
