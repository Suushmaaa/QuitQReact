import React, { useEffect, useState } from "react";
import { fetchCartItems } from "../api";

const GetCartItems = ({ onItemsLoaded }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        loadCartItems();
    }, []);

    const loadCartItems = async () => {
        const items = await fetchCartItems();
        setCartItems(items);
        if (onItemsLoaded) onItemsLoaded(items);
    };

    return (
        <div>
            <h2>Cart Items</h2>
            {cartItems.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <strong>Product ID:</strong> {item.productId} | 
                            <strong> Quantity:</strong> {item.quantity} | 
                            <strong> Price:</strong> ${item.price} 
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default GetCartItems;
