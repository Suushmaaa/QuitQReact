import React, { useState } from "react";
import { updateCategory } from "../api";

const UpdateCategory = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleUpdate = async () => {
        if (!id || !name) return alert("Enter a valid ID and Name");
        try {
            await updateCategory(id, { id, name });
            setMessage("Category updated successfully!");
        } catch (error) {
            setMessage("Failed to update category.");
        }
    };

    return (
        <div>
            <h2>Update Category</h2>
            <input
                type="number"
                placeholder="Category ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="New Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <button onClick={handleUpdate}>Update</button>

            {message && <p>{message}</p>}
        </div>
    );
};

export default UpdateCategory;
