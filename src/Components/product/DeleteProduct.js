import React, { useState } from "react";
import { deleteProduct } from "../../api";
import { useNavigate } from "react-router-dom";

const DeleteProduct = () => {
    const [productId, setProductId] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await deleteProduct(productId);
            setMessage("Product deleted successfully!");
            setProductId(""); // Clear input field after deletion
            setTimeout(() => navigate("/"), 1500); // Redirect after 1.5s
        } catch (error) {
            setMessage("Error deleting product");
            console.error("Error deleting product:", error);
        }
    };

    return (
        <div>
            <h2>Delete Product</h2>
            <form onSubmit={handleDelete}>
                <input
                    type="text"
                    placeholder="Enter Product ID"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    required
                />
                <button type="submit">Delete Product</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default DeleteProduct;
