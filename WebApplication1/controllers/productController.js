const Product = require('../models/productModel');

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.render('user/productListing', { products });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Server error');
    }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.render('user/productDetails', { product });
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).send('Server error');
    }
};

// Add a new product (Admin)
exports.addProduct = async (req, res) => {
    try {
        const { name, category, price, description, stock, owner, available } = req.body;
        const newProduct = new Product({ name, category, price, description, stock, owner, available });
        await newProduct.save();
        res.redirect('/admin/products');
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).send('Server error');
    }
};

// Update a product (Admin)
exports.updateProduct = async (req, res) => {
    try {
        const { name, category, price, description, stock, owner, available } = req.body;
        await Product.findByIdAndUpdate(req.params.id, { name, category, price, description, stock, owner, available });
        res.redirect('/admin/products');
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).send('Server error');
    }
};

// Delete a product (Admin)
exports.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.redirect('/admin/products');
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).send('Server error');
    }
};
