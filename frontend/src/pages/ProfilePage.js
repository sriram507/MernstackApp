import React from "react";

const ProfilePage = () => {
  const name = localStorage.getItem("name");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>User Dashboard</h1>
      <p>Welcome user!</p>
    </div>
  );
};

export default ProfilePage;
