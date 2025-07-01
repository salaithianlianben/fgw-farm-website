export type Language = "en" | "zh";

export interface Translation {
  [key: string]: string | Translation;
}

export interface Translations {
  [key: string]: Translation;
}

export interface LanguageContextType {
  currentLanguage: Language;
  translations: Translation;
  changeLanguage: (language: Language) => void;
  t: (key: string, fallback?: string) => string;
  availableLanguages: { code: Language; name: string; flag: string }[];
}
