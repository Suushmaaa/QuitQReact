// UserProfilePage.jsx
import React, { useEffect, useState } from "react";
import { getUserProfile } from "../api/userApi";

const UserProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserProfile().then(setUser).catch(console.error);
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfilePage;