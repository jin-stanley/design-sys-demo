import { useContext } from "react";
import { LanguageContext } from "../languageProvider";

const useLanguage = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return { language, changeLanguage };
};

export default useLanguage;
