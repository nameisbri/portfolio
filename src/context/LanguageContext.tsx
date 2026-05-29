import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Lang, Translations, translations } from "../i18n/translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const detectLang = (): Lang => {
  const saved = localStorage.getItem("lang");
  if (saved === "en" || saved === "pt") {
    return saved;
  }
  return navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export const useLang = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [lang, setLang] = useState<Lang>(detectLang);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.title = translations[lang].docTitle;
  }, [lang]);

  const value = {
    lang,
    setLang,
    t: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
