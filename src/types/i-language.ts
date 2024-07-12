export interface ILanguageContext {
  lang: string;
  setLang: (lang: string) => void;
  t: (text: string, number?: number | any) => string;
}