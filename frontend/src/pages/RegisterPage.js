import React, { useState } from "react";
import API from "../services/api";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/users/register", { name, email, password });
      alert("Registration successful!");
      window.location.href = "/login";
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} /><br/><br/>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br/><br/>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br/><br/>
        <button>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
