import React, { useState } from "react";
import { fetchOrderById } from "../api";

const GetOrderById = () => {
    const [id, setId] = useState("");
    const [order, setOrder] = useState(null);
    const [error, setError] = useState("");

    const handleFetch = async () => {
        if (!id) return alert("Please enter an Order ID");
        try {
            setError("");
            const data = await fetchOrderById(id);
            setOrder(data);
        } catch (error) {
            setError("Order not found");
            setOrder(null);
        }
    };

    return (
        <div>
            <h2>Get Order by ID</h2>
            <input
                type="number"
                placeholder="Order ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
            />
            <button onClick={handleFetch}>Fetch</button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {order && (
                <div>
                    <h3>Order Details</h3>
                    <p><strong>ID:</strong> {order.id}</p>
                    <p><strong>Status:</strong> {order.status}</p>
                </div>
            )}
        </div>
    );
};

export default GetOrderById;
