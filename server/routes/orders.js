// backend/routes/orders.js
const express = require('express');
const router = express.Router();
const Order = require('../models/order');

router.post('/orders', async (req, res) => {
    const { userDetails, products } = req.body;

    const total_price = products.reduce((sum, product) => sum + product.price * product.quantity, 0);

    const newOrder = new Order({
        userDetails,
        products,
        total_price
    });

    try {
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ message: 'Error creating order' });
    }
});

module.exports = router;
