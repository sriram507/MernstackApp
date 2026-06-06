import React from "react";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <nav style={{ padding: "15px", background: "#eee" }}>
      <a href="/">Home</a> |{" "}
      {!token && <a href="/login">Login</a>}
      {token && <a href="/profile">Profile</a>}
      {role === "admin" && <a href="/admin">Admin</a>} |{" "}
      {token && <button onClick={logout}>Logout</button>}
    </nav>
  );
};

export default Navbar;
