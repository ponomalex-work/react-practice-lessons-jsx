// useState
// Лінива ініціалізація стейту
// useEffect з пустим масивом залежностей = componentDidMount
// map для рендера списку
// чому потрібен key={user.id}
// як useEffect реагує на зміни залежностей.
// componentWillUnmount
// Винесення логіки запиту в кастомний хук

import { useState, useEffect } from "react";
import User from "./User";
import SectionTitle from "./SectionTitle";
import { useFetch } from "../hooks/useFetch";
import Spinner from "./Spinner/Spinner";

// function getInitialValue(label = "🧠") {
//   console.log(`${label} Heavy calculation...`);
//   const start = performance.now();
//   while (performance.now() - start < 2500) {
//     // блокуємо потік приблизно на 2.5 секунди
//   }

//   console.log("🔁 Heavy calculation ended");
//   return 0;
// }

export default function UserList() {
  const [users, setUsers] = useState([]);
  //   const [refresh, setRefresh] = useState(0);
  //   const [count, setCount] = useState(getInitialValue("🔁 Eager")); // ❗️Це не колбек, а виклик
  //   const [count, setCount] = useState(() => getInitialValue("✅ Lazy")); // ❗️варіант з обгорткою для більш складної логіки
  //   const [count, setCount] = useState(getInitialValue); // ❗️лінива ініціалізація (передано колбек, параметри не потрібні)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=10")
      .then((res) => res.json())
      .then((data) => setUsers(data));
    // console.log("component renders");
  }, []); // componentDidMount

  //   useEffect(() => {
  //     return () => {
  //       console.log("component unmount");
  //     };
  //   }, []);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       console.log("Ping from interval ", Date.now());
  //     }, 1000);

  //     return () => {
  //       console.log("Component unmounted, clearing interval");
  //       clearInterval(interval);
  //     };
  //   }, []);

  return (
    <div>
      <SectionTitle>Users</SectionTitle>
      {/* <button onClick={() => setRefresh((prev) => prev + 1)}>
        Refresh Users
      </button> */}

      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}
