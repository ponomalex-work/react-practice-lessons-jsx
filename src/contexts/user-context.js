import React, { createContext, useContext } from "react";

// Створення контексту
export const UserContext = createContext();

// Споживач контексту
export const useUsersq = () => useContext(UserContext);
