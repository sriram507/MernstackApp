import React, { useState } from "react";
import API from "../services/api";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/users/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      alert("Login successful!");

      // Redirect based on role
      window.location.href = res.data.role === "admin" ? "/admin" : "/profile";
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br/><br/>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br/><br/>
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
