import React, { useState } from "react";
import { fetchCategoryById } from "../api";

const GetCategoryById = () => {
    const [id, setId] = useState("");
    const [category, setCategory] = useState(null);
    const [error, setError] = useState("");

    const handleFetch = async () => {
        if (!id) return alert("Please enter a Category ID");
        try {
            setError("");
            const data = await fetchCategoryById(id);
            setCategory(data);
        } catch (error) {
            setError("Category not found");
            setCategory(null);
        }
    };

    return (
        <div>
            <h2>Get Category by ID</h2>
            <input
                type="number"
                placeholder="Category ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
            />
            <button onClick={handleFetch}>Fetch</button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {category && (
                <div>
                    <h3>Category Details</h3>
                    <p><strong>ID:</strong> {category.id}</p>
                    <p><strong>Name:</strong> {category.name}</p>
                </div>
            )}
        </div>
    );
};

export default GetCategoryById;
