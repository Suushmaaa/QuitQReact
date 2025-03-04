import React, { useState } from "react";
import { updateOrder } from "../api";

const UpdateOrder = () => {
    const [id, setId] = useState("");
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState("");

    const handleUpdate = async () => {
        if (!id || !status) return alert("Enter a valid ID and Status");
        try {
            await updateOrder(id, { id, status });
            setMessage("Order updated successfully!");
        } catch (error) {
            setMessage("Failed to update order.");
        }
    };

    return (
        <div>
            <h2>Update Order</h2>
            <input
                type="number"
                placeholder="Order ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="New Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
            />
            <button onClick={handleUpdate}>Update</button>

            {message && <p>{message}</p>}
        </div>
    );
};

export default UpdateOrder;
