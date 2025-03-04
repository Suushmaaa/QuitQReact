import React, { useState } from "react";
import { deleteCategory } from "../api";

const DeleteCategory = () => {
    const [id, setId] = useState("");
    const [message, setMessage] = useState("");

    const handleDelete = async () => {
        if (!id) return alert("Enter a valid Category ID");
        try {
            await deleteCategory(id);
            setMessage("Category deleted successfully!");
        } catch (error) {
            setMessage("Failed to delete category.");
        }
    };

    return (
        <div>
            <h2>Delete Category</h2>
            <input
                type="number"
                placeholder="Category ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
            />
            <button onClick={handleDelete}>Delete</button>

            {message && <p>{message}</p>}
        </div>
    );
};

export default DeleteCategory;
