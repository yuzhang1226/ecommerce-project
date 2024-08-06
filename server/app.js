require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/Product');
const Order = require('./models/Order'); // Import the Order model
const Category = require('./models/Category'); // Import the Category model
const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Routes

// Admin Login Route
app.post('/api/admin/login', (req, res) => {
    const { username, password } = req.body;

    // Hard-coded admin credentials
    const adminCredentials = {
        username: 'admin',
        password: 'password'
    };

    if (username === adminCredentials.username && password === adminCredentials.password) {
        res.json({ isAdmin: true });
    } else {
        res.status(401).json({ isAdmin: false });
    }
});

// Read a single product by ID
app.get('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id).populate('category');
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Create a new product
app.post('/api/products', async (req, res) => {
    const { name, price, category, inStock } = req.body;
    try {
        const product = new Product({ name, price, category, inStock });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Error creating product' });
    }
});

// Fetch distinct product categories
app.get('/api/products/categories', async (req, res) => {
    try {
        const categories = await Category.find(); // Fetch categories from the Category model
        res.json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Error fetching categories' });
    }
});

// Read all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({}).populate('category');
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Error fetching products' });
    }
});

// Update a product
app.put('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    const updateFields = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, updateFields, { new: true }).populate('category');
        if (updatedProduct) {
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Error updating product' });
    }
});

// Delete a product
app.delete('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(204).end();
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Error deleting product' });
    }
});

// Create a new order
app.post('/api/orders', async (req, res) => {
    const { userDetails, products } = req.body;

    // Calculate total price
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

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
