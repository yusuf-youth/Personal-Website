import React, { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "EN";
  });

  useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = (isUA) => {
    setLanguage(isUA ? "UA" : "EN");
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
