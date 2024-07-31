import React, { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item._id !== id));
  };

  const adjustQuantity = (id, quantity) => {
    setCart(cart.map(item => 
      item._id === id ? { ...item, quantity } : item
    ));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item._id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => removeFromCart(item._id)}>Remove</button>
            <button onClick={() => adjustQuantity(item._id, item.quantity + 1)}>Increase Quantity</button>
            <button onClick={() => adjustQuantity(item._id, item.quantity - 1)}>Decrease Quantity</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
