const mongoose = require('mongoose');

// Define the schema for the Product model
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    inStock: { type: Boolean, required: true },
});

// Create the model using the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
