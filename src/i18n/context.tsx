import {createContext, useMemo, useState} from "react";
import type {ILanguageContext} from "../types/i-language";
import translate from "./translate";

interface IProvider {
  children: React.ReactNode;
}

export const I18nContext = createContext<ILanguageContext>({
  lang: 'ru',
  setLang: () => {},
  t: (text) => text,
});

export const I18nProvider: React.FC<IProvider> = ({ children }) => {
  const [lang, setLang] = useState<any>(localStorage.getItem('lang') || 'ru');
  localStorage.setItem('lang', lang);

  const i18n = useMemo((): ILanguageContext => ({
    lang,
    setLang,
    t: (text, number) => translate(lang, text, number),
  }), [lang]);

  return (
    <I18nContext.Provider value={i18n}>
      {children}
    </I18nContext.Provider>
  )
}