import React from "react";

const Cart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const handleRemove = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        window.location.reload();
    };

    return (
        <div>
            <h1>Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ${item.price}</p>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
