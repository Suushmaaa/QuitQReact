import React, { useEffect, useState } from "react";
import { fetchCategories } from "../api";

const GetCategories = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchCategories();
                setCategories(data);
            } catch (error) {
                setError("Failed to fetch categories.");
            }
        };
        getData();
    }, []);

    return (
        <div>
            <h2>Categories</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        {category.name} (ID: {category.id})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GetCategories;
