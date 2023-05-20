import { createContext } from "react";
import { Theme } from "../types";
import "../css/index.css";
import { defaultTheme } from "..";
import { overrideTheme } from "../utils/overrideTheme";

interface ThemeProviderProps {
  theme?: Partial<Theme>;
  children: React.ReactNode;
}

const ThemeContext = createContext<Theme>(defaultTheme);

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme = {},
  children,
}) => {
  const mergedTheme = overrideTheme(theme);

  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export { defaultTheme, ThemeContext, ThemeProvider };
