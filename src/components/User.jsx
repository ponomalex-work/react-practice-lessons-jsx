import { useUsers } from "../contexts";
import UserDetails from "./UserDetails";

export default function User({ userId }) {
  const { users } = useUsers();
  // console.log(users);

  const user = users.find((user) => user.id === userId);

  return (
    <div
      style={{ padding: "10px", border: "1px solid #ccc", marginBottom: "5px" }}
    >
      <h2>{user.name}</h2>
      <UserDetails userId={userId}></UserDetails>
    </div>
  );
}
