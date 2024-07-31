const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// User routes
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);

// Admin routes
router.post('/admin/products', productController.addProduct);
router.put('/admin/products/:id', productController.updateProduct);
router.delete('/admin/products/:id', productController.deleteProduct);

module.exports = router;
