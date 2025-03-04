import React, { useState } from "react";
import { addOrder } from "../api";

const AddOrder = () => {
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addOrder({ status });
            setMessage("Order added successfully!");
            setStatus("");
        } catch (error) {
            setMessage("Failed to add order.");
        }
    };

    return (
        <div>
            <h2>Add Order</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Order Status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                />
                <button type="submit">Add</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
};

export default AddOrder;
