
// DeleteUserPage.jsx
import React from "react";
import { deleteUser } from "../api/userApi";

const DeleteUserPage = ({ userId }) => {
  const handleDelete = async () => {
    await deleteUser(userId);
    alert("User deleted successfully");
  };

  return (
    <div>
      <h2>Delete User</h2>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteUserPage;
