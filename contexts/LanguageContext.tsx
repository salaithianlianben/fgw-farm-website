"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Language, LanguageContextType } from "@/types/language";
import { translations } from "@/translations";

const LANGUAGE_STORAGE_KEY = "preferred-language";
const DEFAULT_LANGUAGE: Language = "en";

const availableLanguages = [
  { code: "en" as Language, name: "English", flag: "🇺🇸" },
  { code: "zh" as Language, name: "中文", flag: "🇨🇳" },
];

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: Language;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
  initialLanguage,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    initialLanguage || DEFAULT_LANGUAGE,
  );
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const savedLanguage = localStorage.getItem(
      LANGUAGE_STORAGE_KEY,
    ) as Language;
    if (
      savedLanguage &&
      availableLanguages.some((lang) => lang.code === savedLanguage)
    ) {
      setCurrentLanguage(savedLanguage);
    } else {
      const browserLanguage = navigator.language.split("-")[0] as Language;
      if (availableLanguages.some((lang) => lang.code === browserLanguage)) {
        setCurrentLanguage(browserLanguage);
      }
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
    }
  }, [currentLanguage, isClient]);

  const changeLanguage = (language: Language) => {
    if (availableLanguages.some((lang) => lang.code === language)) {
      setCurrentLanguage(language);
    }
  };

  const t = (key: string, fallback?: string): string => {
    const keys = key.split(".");
    let current: any = translations[currentLanguage];

    for (const k of keys) {
      if (current && typeof current === "object" && k in current) {
        current = current[k];
      } else {
        current = translations.en;
        for (const fallbackKey of keys) {
          if (
            current &&
            typeof current === "object" &&
            fallbackKey in current
          ) {
            current = current[fallbackKey];
          } else {
            return fallback || key;
          }
        }
        break;
      }
    }

    return typeof current === "string" ? current : fallback || key;
  };

  const value: LanguageContextType = {
    currentLanguage,
    translations: translations[currentLanguage],
    changeLanguage,
    t,
    availableLanguages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
