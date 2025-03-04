import React, { useState } from "react";
import { deleteCartItem } from "../api";

const DeleteCartItem = () => {
    const [itemId, setItemId] = useState("");
    const [message, setMessage] = useState("");
    const token = localStorage.getItem("token");

    const handleDelete = async () => {
        if (!itemId) return alert("Enter a valid Item ID");
        try {
            await deleteCartItem(itemId, token);
            setMessage("Item deleted successfully!");
        } catch (error) {
            setMessage("Failed to delete item.");
        }
    };

    return (
        <div>
            <h2>Delete Cart Item</h2>
            <input
                type="number"
                placeholder="Item ID"
                value={itemId}
                onChange={(e) => setItemId(e.target.value)}
                required
            />
            <button onClick={handleDelete}>Delete</button>

            {message && <p>{message}</p>}
        </div>
    );
};

export default DeleteCartItem;
