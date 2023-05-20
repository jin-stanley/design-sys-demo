import React, { createContext, useState, ReactNode } from "react";

interface LanguageContextProps {
  language: string;
  changeLanguage: (newLanguage: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: "",
  changeLanguage: () => {},
});

interface LanguageProviderProps {
  defaultLanguage: string;
  children: ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({
  defaultLanguage,
  children,
}) => {
  const [language, setLanguage] = useState(defaultLanguage);

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  const languageContextValue: LanguageContextProps = {
    language,
    changeLanguage,
  };

  return (
    <LanguageContext.Provider value={languageContextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider };
