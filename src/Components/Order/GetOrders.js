import React, { useEffect, useState } from "react";
import { fetchOrders } from "../api";

const GetOrders = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchOrders();
                setOrders(data);
            } catch (error) {
                setError("Failed to fetch orders.");
            }
        };
        getData();
    }, []);

    return (
        <div>
            <h2>Orders</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        Order ID: {order.id} | Status: {order.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GetOrders;
