import { useTheme, useUsers } from "../../contexts";
import s from "./UserDisplay.module.css";

export default function UserDisplay({ userId }) {
  const { users } = useUsers();
  const { theme } = useTheme();
  const user = users.find((user) => user.id === userId);

  return (
    <div className={theme === "dark" ? s.dark : s.light}>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}
