import React from "react";
import { useFetch } from "../hooks/useFetch";
import { UserContext } from "./user-context"; // шлях до файлу вище

// Створення провайдера для цього контексту
export const UserProvider = ({ children }) => {
  const {
    data: users,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users?_limit=10");

  console.log(users);

  return (
    <UserContext.Provider value={{ users, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
