import { Button } from "./components/button";
import useKeyPress from "./hooks/useKeyPress";

import useLanguage from "./language/hooks/useLanguage";
import { getTextByLang } from "./language/utils/getTextByLang";
import EnJson from "./language/mockJson/en.json";
import EsJson from "./language/mockJson/es.json";

import { useTheme } from "./theme/hooks/useTheme";
import { getContrastText } from "./theme/utils/getContrastText";
import useDarkMode from "./hooks/useDarkMode";
import { useLocalStorage } from "./hooks/useLocalStorage";
import useMedia from "./hooks/useMedia";

function App() {
  const { language, changeLanguage } = useLanguage();
  const theme = useTheme();
  const { darkState, setDarkState } = useDarkMode();

  const columnCount = useMedia<number>(
    // Media queries
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
    // Column counts (relates to above media queries by array index)
    [5, 4, 3],
    // Default column count
    2
  );
  console.log('🌟 ----> columnCount:', columnCount)

  // test getContrastText
  const bgColor = "#899eb6";
  const textColor = getContrastText(bgColor);
  // console.log(
  //   `%c Text color you got from ${bgColor}! `,
  //   `background: ${bgColor}; color: ${textColor}`
  // );

  const buttonOverrides = {
    color: textColor,
    backgroundColor: bgColor,
    fontWeight: 900,
  };

  // test useKeyPress
  // const spaceKeyPressed = useKeyPress(" ");
  // console.log("🌟 ----> spaceKeyPressed:", spaceKeyPressed);

  const langFile = language === "en" ? EnJson : EsJson;
  console.log(getTextByLang(langFile, "lang.english"));

  return (
    <div>
      <div>current global language: {language}</div>
      <br />
      <br />
      <Button
        onClick={() => setDarkState(true)}
        brand="woolworths"
        size="large"
        overrides={{ marginRight: "24px", background: "pink" }}
      >
        Mode on
      </Button>
      <Button
        onClick={() => setDarkState(false)}
        brand="woolworths"
        size="large"
        overrides={{ marginRight: "24px", background: "pink" }}
      >
        Mode off
      </Button>
      <Button
        onClick={() => changeLanguage("en")}
        brand="woolworths"
        size="large"
        overrides={{ marginRight: "24px", background: "pink" }}
      >
        {getTextByLang(langFile, "lang.english", "English")}
      </Button>
      <Button
        onClick={() => changeLanguage("es")}
        brand="woolworths"
        size="large"
      >
        {getTextByLang(langFile, "lang.spanish", "Spanish")}
      </Button>
      <br />
      <br />
      <Button
        onClick={() => console.log("🌟 ----> 0:")}
        brand="woolworths"
        size="large"
      >
        woolworths large
      </Button>

      <br />
      <br />

      <Button
        onClick={() => console.log("🌟 ----> 1")}
        fullWidth
        brand="woolworths"
        size="large"
      >
        woolworths large
      </Button>

      <br />
      <br />

      <Button
        onClick={() => console.log("🌟 ----> 2")}
        brand="woolworths"
        size="small"
      >
        woolworths small
      </Button>

      <br />
      <br />

      <Button
        onClick={() => console.log("🌟 ----> 3")}
        brand="everyday-rewards"
        size="large"
      >
        everydayRewards large
      </Button>

      <br />
      <br />

      <Button
        onClick={() => console.log("🌟 ----> 4")}
        brand="everyday-rewards"
        size="small"
      >
        everydayRewards small
      </Button>

      <br />
      <br />

      <Button
        onClick={() => console.log("🌟 ----> 4")}
        brand="everyday-rewards"
        size="small"
        disabled
      >
        Disabled everydayRewards small
      </Button>

      <br />
      <br />

      <Button
        onClick={() => console.log("🌟 ----> 5")}
        overrides={buttonOverrides}
      >
        Customize Button
      </Button>

      <br />
      <br />

      <Button
        disabled
        onClick={() => console.log("🌟 ----> 5")}
        overrides={buttonOverrides}
      >
        Disabled Customize Button
      </Button>
    </div>
  );
}

export default App;
