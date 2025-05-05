import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";

export const ThemeDisplay = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Отримуємо тему
  return (
    <div style={{ position: "absolute", top: 10, right: 10 }}>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
