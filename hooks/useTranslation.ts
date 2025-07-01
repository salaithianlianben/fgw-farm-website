import { useLanguage } from "@/contexts/LanguageContext";

export const useTranslation = () => {
  const { t, currentLanguage, changeLanguage, availableLanguages } =
    useLanguage();

  return {
    t,
    currentLanguage,
    changeLanguage,
    availableLanguages,
    // Helper functions
    // isRTL: currentLanguage === 'ar' || currentLanguage === 'he',
    formatMessage: (key: string, values?: Record<string, string | number>) => {
      let message = t(key);
      if (values) {
        Object.entries(values).forEach(([placeholder, value]) => {
          message = message.replace(`{${placeholder}}`, String(value));
        });
      }
      return message;
    },
  };
};
