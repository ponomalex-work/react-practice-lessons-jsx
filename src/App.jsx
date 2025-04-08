import Spinner from "./components/Spinner/Spinner";
import "./App.css";
import UserList from "./components/UserList";
import { useState } from "react";

function App() {
  const [showUsers, setShowUsers] = useState(true);

  return (
    <>
      {/* <button onClick={() => setShowUsers((prev) => !prev)}>
        {showUsers ? "hide" : "show"} users
      </button> */}
      {showUsers && <UserList />}
    </>
  );
}

export default App;
