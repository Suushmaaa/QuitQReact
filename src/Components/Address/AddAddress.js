import React, { useState } from "react";
import { createAddress } from "../api";
import { useNavigate } from "react-router-dom";

const AddAddress = () => {
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createAddress({ street, city, state, zipCode });
            navigate("/");
        } catch (error) {
            console.error("Error adding address", error);
        }
    };

    return (
        <div>
            <h2>Add Address</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Street" value={street} onChange={(e) => setStreet(e.target.value)} required />
                <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required />
                <input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} required />
                <input type="text" placeholder="Zip Code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
                <button type="submit">Add Address</button>
            </form>
        </div>
    );
};

export default AddAddress;
