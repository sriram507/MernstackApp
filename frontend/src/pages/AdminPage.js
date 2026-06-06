import React, { useEffect, useState } from "react";
import API from "../services/api";

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/users/all").then((res) => setUsers(res.data));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Admin Dashboard</h1>
      <h3>All Registered Users</h3>

      {users.map((u) => (
        <p key={u._id}>{u.name} ({u.email}) — role: {u.role}</p>
      ))}
    </div>
  );
};

export default AdminPage;
