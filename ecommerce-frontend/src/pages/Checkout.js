import React, { useState } from "react";
import axios from "axios";

const Checkout = () => {
    const [address, setAddress] = useState("");
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const handleCheckout = async () => {
        const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        await axios.post("/api/orders", { items: cartItems, totalAmount, address });
        localStorage.removeItem("cart");
        alert("Order placed successfully!");
    };

    return (
        <div>
            <h1>Checkout</h1>
            <textarea placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)} />
            <button onClick={handleCheckout}>Place Order</button>
        </div>
    );
};

export default Checkout;
