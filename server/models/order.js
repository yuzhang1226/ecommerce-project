// backend/models/order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userDetails: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        address: { type: String, required: true }
    },
    products: [{
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true }
    }],
    total_price: { type: Number, required: true },
    status: { type: String, default: 'pending' },
    created_at: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
