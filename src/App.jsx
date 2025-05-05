import Spinner from "./components/Spinner/Spinner";
import s from "./App.module.css";
import UserList from "./components/UserList";
import { useState } from "react";
import { useTheme } from "./contexts";
import { ThemeDisplay } from "./components/ThemeDisplay";

function App() {
  const [showUsers, setShowUsers] = useState(true);
  const { theme } = useTheme();

  return (
    <div
      style={{ width: "100%" }}
      className={theme === "dark" ? s.dark : s.light}
    >
      <ThemeDisplay />
      <div className={s.container}>
        <button onClick={() => setShowUsers((prev) => !prev)}>
          {showUsers ? "hide" : "show"} users
        </button>
        {showUsers && <UserList />}
      </div>
    </div>
  );
}

export default App;
