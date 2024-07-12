import translations from './translations';

// Перевод фразы из словаря
export default function translate(lang: string, text: string | any, plural: number) {
  let result = translations[lang] && (text in translations[lang])
    ? translations[lang][text]
    : text;

  if (typeof plural !== 'undefined') {
    const key = new Intl.PluralRules(lang).select(plural);
    if (key in result) {
      result = result[key];
    }
  }

  return result;
}