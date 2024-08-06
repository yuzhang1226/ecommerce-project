// client/src/Cart.js
import React from 'react';

function Cart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    return (
        <div>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            <p>{item.name}</p>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;
