import React, { useState } from "react";
import { updateUser } from "../api/userApi";

const UpdateUserPage = ({ userId }) => {
  const [username, setUsername] = useState("");
  
  const handleUpdate = async () => {
    await updateUser(userId, { username });
    alert("User updated successfully");
  };

  return (
    <div>
      <h2>Update User</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="New Username"
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};
