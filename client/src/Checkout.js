// client/src/Checkout.js
import React, { useState, useEffect } from 'react';

function Checkout() {
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        address: ''
    });
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send order details to the backend
        const orderData = {
            userDetails,
            products: cart,
        };
        fetch('http://localhost:5000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Order placed:', data);
                // Clear cart after successful order
                localStorage.removeItem('cart');
                setCart([]);
            })
            .catch((error) => console.error('Error placing order:', error));
    };

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={userDetails.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={userDetails.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" name="address" value={userDetails.address} onChange={handleChange} required />
                </div>
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
}

export default Checkout;
