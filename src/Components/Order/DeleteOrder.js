import React, { useState } from "react";
import { deleteOrder } from "../api";

const DeleteOrder = () => {
    const [id, setId] = useState("");
    const [message, setMessage] = useState("");

    const handleDelete = async () => {
        if (!id) return alert("Enter a valid Order ID");
        try {
            await deleteOrder(id);
            setMessage("Order deleted successfully!");
        } catch (error) {
            setMessage("Failed to delete order.");
        }
    };

    return (
        <div>
            <h2>Delete Order</h2>
            <input
                type="number"
                placeholder="Order ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
            />
            <button onClick={handleDelete}>Delete</button>

            {message && <p>{message}</p>}
        </div>
    );
};

export default DeleteOrder;
