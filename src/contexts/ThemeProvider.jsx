import { useState } from "react";
import { ThemeContext } from "./theme-context";

// Створення провайдера для теми
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // за замовчуванням світла тема

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
