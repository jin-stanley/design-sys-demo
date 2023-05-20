import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./theme/themeProvider";
import { LanguageProvider } from "./language/languageProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// We can store as more information as we want into theme and we can use it anytime using useTheme hooks.
const customTheme = {
  borderRadius: "32px",
  button: {
    width: {
      large: "300px",
      small: "120px",
    },
  },
  customElementsName: {
    text: { long: "48px", short: "36px" },
  },
};

root.render(
  <ThemeProvider theme={customTheme}>
    <LanguageProvider defaultLanguage={"en"}>
      <App />
    </LanguageProvider>
  </ThemeProvider>
);
