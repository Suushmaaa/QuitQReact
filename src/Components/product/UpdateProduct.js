import React, { useState } from "react";
import { updateProduct, fetchProductById } from "../../api";
import { useNavigate } from "react-router-dom";

const UpdateProduct = () => {
    const [productId, setProductId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stockQuantity, setStockQuantity] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleFetchProduct = async () => {
        try {
            const product = await fetchProductById(productId);
            setName(product.name);
            setDescription(product.description);
            setPrice(product.price);
            setStockQuantity(product.stockQuantity);
            setMessage("");
        } catch (error) {
            setMessage("Product not found");
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateProduct(productId, { name, description, price, stockQuantity });
            setMessage("Product updated successfully!");
            setTimeout(() => navigate("/"), 1500); // Redirect after 1.5s
        } catch (error) {
            setMessage("Error updating product");
            console.error("Error updating product:", error);
        }
    };

    return (
        <div>
            <h2>Update Product</h2>
            <input
                type="text"
                placeholder="Enter Product ID"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                required
            />
            <button onClick={handleFetchProduct}>Fetch Product</button>

            {name && (
                <form onSubmit={handleUpdate}>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                    <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                    <input type="number" placeholder="Stock Quantity" value={stockQuantity} onChange={(e) => setStockQuantity(e.target.value)} required />
                    <button type="submit">Update Product</button>
                </form>
            )}

            {message && <p>{message}</p>}
        </div>
    );
};

export default UpdateProduct;
