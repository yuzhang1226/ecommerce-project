require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/product');

const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Connected to MongoDB');
        await performCRUDOperations();
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error:', err);
    });

// Create
const createProduct = async (name, price, category, inStock) => {
    try {
        const product = new Product({ name, price, category, inStock });
        await product.save();
        console.log('Product created:', product);
        return product; // Return the created product object
    } catch (error) {
        console.error('Error creating product:', error);
        return null; // Return null if there's an error
    }
};

// Read
const readProducts = async () => {
    const products = await Product.find({});
    console.log('Products found:', products);
    return products;
};

// Update
const updateProduct = async (id, updateFields) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, updateFields, { new: true });
        return updatedProduct;
    } catch (error) {
        console.error('Error updating product:', error);
        return null;
    }
};

// Delete
const deleteProduct = async (id) => {
    try {
        await Product.findByIdAndDelete(id);
        console.log('Product deleted');
    } catch (error) {
        console.error('Error deleting product:', error);
    }
};

// Sequential CRUD Operations
const performCRUDOperations = async () => {
    // Create a new product
    const createdProduct = await createProduct('Big Dog Food', 29.99, 'Pet Supplies', true);

    if (createdProduct) {
        // Read all products
        const productsBeforeUpdate = await readProducts();

        // Update the created product's price
        const updatedProduct = await updateProduct(createdProduct._id, { price: 24.99 });

        if (updatedProduct) {
            console.log('Product updated:', updatedProduct);

            // Delete the updated product
            await deleteProduct(updatedProduct._id);

            // Read all products to confirm deletion
            const productsAfterDelete = await readProducts();
            console.log('Products after deletion:', productsAfterDelete);
        }
    }
};

performCRUDOperations();
