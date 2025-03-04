import React, { useState } from "react";
import { fetchCartItemById } from "../api";

const GetCartItemById = () => {
    const [itemId, setItemId] = useState("");
    const [cartItem, setCartItem] = useState(null);
    const [error, setError] = useState("");

    const handleFetch = async () => {
        if (!itemId) return alert("Please enter a valid Item ID");
        try {
            setError("");
            const item = await fetchCartItemById(itemId);
            setCartItem(item);
        } catch (error) {
            setError("Item not found");
            setCartItem(null);
        }
    };

    return (
        <div>
            <h2>Get Cart Item by ID</h2>
            <input
                type="number"
                placeholder="Enter Item ID"
                value={itemId}
                onChange={(e) => setItemId(e.target.value)}
                required
            />
            <button onClick={handleFetch}>Fetch Item</button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {cartItem && (
                <div>
                    <h3>Cart Item Details</h3>
                    <p><strong>ID:</strong> {cartItem.id}</p>
                    <p><strong>Product ID:</strong> {cartItem.productId}</p>
                    <p><strong>Quantity:</strong> {cartItem.quantity}</p>
                    <p><strong>Price:</strong> ${cartItem.price}</p>
                </div>
            )}
        </div>
    );
};

export default GetCartItemById;
