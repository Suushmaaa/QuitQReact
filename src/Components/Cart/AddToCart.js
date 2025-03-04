import React, { useState } from "react";
import { addToCart } from "../api";

const AddToCart = () => {
    const [cartItem, setCartItem] = useState({ productId: "", quantity: "", price: "" });
    const [message, setMessage] = useState("");
    const token = localStorage.getItem("token");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addToCart(cartItem, token);
            setMessage("Item added successfully!");
        } catch (error) {
            setMessage("Failed to add item.");
        }
    };

    return (
        <div>
            <h2>Add to Cart</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Product ID"
                    value={cartItem.productId}
                    onChange={(e) => setCartItem({ ...cartItem, productId: e.target.value })}
                    required
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={cartItem.quantity}
                    onChange={(e) => setCartItem({ ...cartItem, quantity: e.target.value })}
                    required
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={cartItem.price}
                    onChange={(e) => setCartItem({ ...cartItem, price: e.target.value })}
                    required
                />
                <button type="submit">Add Item</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
};

export default AddToCart;
