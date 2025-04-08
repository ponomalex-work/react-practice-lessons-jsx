export default function User({ user }) {
  // console.log("User renders");
  return (
    <div
      style={{ padding: "10px", border: "1px solid #ccc", marginBottom: "5px" }}
    >
      <p>
        <strong>{user.name}</strong>
      </p>
      <p>Email: {user.email}</p>
    </div>
  );
}
