import React, { useState } from "react";
import { addCategory } from "../api";

const AddCategory = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addCategory({ name });
            setMessage("Category added successfully!");
            setName("");
        } catch (error) {
            setMessage("Failed to add category.");
        }
    };

    return (
        <div>
            <h2>Add Category</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Category Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <button type="submit">Add</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
};

export default AddCategory;
