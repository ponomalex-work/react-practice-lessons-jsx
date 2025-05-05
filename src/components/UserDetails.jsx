import UserDisplay from "./UserDisplay/UserDisplay";

export default function UserDetails({ userId }) {
  return (
    <div>
      <strong>User Details</strong>
      <UserDisplay userId={userId} />
    </div>
  );
}
