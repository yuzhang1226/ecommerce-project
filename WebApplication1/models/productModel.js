const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true }, // 'Food', 'Toy', 'Clothing'
    price: { type: Number, required: true },
    description: { type: String, required: true },
    stock: { type: Number, required: true },
    owner: { type: String, required: true }, // Store owner or brand
    available: { type: Boolean, default: true }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
