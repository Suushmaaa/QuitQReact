import React, { useState } from "react";
import { deleteAddress } from "../api";
import { useNavigate } from "react-router-dom";

const DeleteAddress = () => {
    const [addressId, setAddressId] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await deleteAddress(addressId);
            setMessage("Address deleted successfully!");
            setAddressId("");
            setTimeout(() => navigate("/"), 1500);
        } catch (error) {
            setMessage("Error deleting address");
            console.error("Error deleting address:", error);
        }
    };

    return (
        <div>
            <h2>Delete Address</h2>
            <form onSubmit={handleDelete}>
                <input
                    type="text"
                    placeholder="Enter Address ID"
                    value={addressId}
                    onChange={(e) => setAddressId(e.target.value)}
                    required
                />
                <button type="submit">Delete Address</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default DeleteAddress;
