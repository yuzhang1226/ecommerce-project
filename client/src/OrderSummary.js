// client/src/OrderSummary.js
import React, { useState, useEffect } from 'react';

function OrderSummary() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div>
            <h2>Order Summary</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        <p>{item.name} x {item.quantity}</p>
                        <p>Price: ${item.price}</p>
                    </li>
                ))}
            </ul>
            <h3>Total: ${calculateTotal()}</h3>
        </div>
    );
}

export default OrderSummary;
