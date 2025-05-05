import React, { createContext, useContext } from "react";

// Створення контексту
export const ThemeContext = createContext();

// Споживач контексту
export const useTheme = () => useContext(ThemeContext);
