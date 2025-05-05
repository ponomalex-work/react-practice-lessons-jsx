import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./contexts/UserProvider.jsx";
import { ThemeProvider } from "./contexts/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <UserProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </UserProvider>
  // </StrictMode>,
);
