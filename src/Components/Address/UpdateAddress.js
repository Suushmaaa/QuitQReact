import React, { useState } from "react";
import { updateAddress, fetchAddressById } from "../api";
import { useNavigate } from "react-router-dom";

const UpdateAddress = () => {
    const [addressId, setAddressId] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleFetchAddress = async () => {
        try {
            const address = await fetchAddressById(addressId);
            setStreet(address.street);
            setCity(address.city);
            setState(address.state);
            setZipCode(address.zipCode);
            setMessage("");
        } catch (error) {
            setMessage("Address not found");
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateAddress(addressId, { street, city, state, zipCode });
            setMessage("Address updated successfully!");
            setTimeout(() => navigate("/"), 1500);
        } catch (error) {
            setMessage("Error updating address");
            console.error("Error updating address:", error);
        }
    };

    return (
        <div>
            <h2>Update Address</h2>
            <input
                type="text"
                placeholder="Enter Address ID"
                value={addressId}
                onChange={(e) => setAddressId(e.target.value)}
                required
            />
            <button onClick={handleFetchAddress}>Fetch Address</button>

            {street && (
                <form onSubmit={handleUpdate}>
                    <input type="text" placeholder="Street" value={street} onChange={(e) => setStreet(e.target.value)} required />
                    <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required />
                    <input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} required />
                    <input type="text" placeholder="Zip Code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
                    <button type="submit">Update Address</button>
                </form>
            )}

            {message && <p>{message}</p>}
        </div>
    );
};

export default UpdateAddress;
