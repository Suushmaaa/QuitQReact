import React, { useState } from "react";
import { fetchCartByUserId } from "../api";

const GetCartByUserId = () => {
    const [userId, setUserId] = useState("");
    const [cart, setCart] = useState(null);
    const [error, setError] = useState("");
    const token = localStorage.getItem("token");

    const handleFetch = async () => {
        if (!userId) return alert("Please enter a User ID");
        try {
            setError("");
            const cartData = await fetchCartByUserId(userId, token);
            setCart(cartData);
        } catch (error) {
            setError("Cart not found");
            setCart(null);
        }
    };

    return (
        <div>
            <h2>Get Cart</h2>
            <input
                type="number"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
            />
            <button onClick={handleFetch}>Fetch</button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {cart && (
                <div>
                    <h3>Cart Details</h3>
                    <p><strong>ID:</strong> {cart.id}</p>
                    <p><strong>User ID:</strong> {cart.userId}</p>
                    <h4>Items:</h4>
                    <ul>
                        {cart.items.map((item) => (
                            <li key={item.id}>
                                <strong>Product ID:</strong> {item.productId} - 
                                <strong> Quantity:</strong> {item.quantity} - 
                                <strong> Price:</strong> ${item.price}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default GetCartByUserId;
