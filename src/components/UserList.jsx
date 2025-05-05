import User from "./User";
import SectionTitle from "./SectionTitle";
import Spinner from "./Spinner/Spinner";
import { useUsers } from "../contexts";

export default function UserList() {
  const { users, loading, error } = useUsers(); // Використовуємо наш хук для доступу до контексту
  console.log(users);

  return (
    <div>
      <SectionTitle>Users</SectionTitle>
      {/* <button onClick={() => setRefresh((prev) => prev + 1)}>
        Refresh Users
      </button> */}

      {loading ? (
        <Spinner />
      ) : (
        users.map((user) => <User key={user.id} userId={user.id} />)
      )}

      {error && "Something went wrong"}
    </div>
  );
}
