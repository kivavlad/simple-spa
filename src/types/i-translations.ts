export interface ITranslations {
  [language: string]: {
    [key: string]: string | { [key: string]: string };
  }
}