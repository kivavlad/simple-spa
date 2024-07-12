import {useContext} from "react";
import {I18nContext} from "../i18n/context";
import type {ILanguageContext} from "../types/i-language";

// Хук возвращает функцию для локализации текстов, код языка и функцию его смены
export default function useTranslate(): ILanguageContext {
  return useContext(I18nContext);
}