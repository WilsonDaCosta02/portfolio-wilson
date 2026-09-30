import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { translations } from "../data/translations";

type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations[Language];
}

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage === "id" || savedLanguage === "en") {
      return savedLanguage;
    }

    return "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((currentLanguage) =>
      currentLanguage === "en" ? "id" : "en"
    );
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}