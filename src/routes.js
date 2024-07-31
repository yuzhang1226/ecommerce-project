const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // For token-based authentication
const User = require('./user');
const Product = require('./Products');
const Order = require('./Orders');
const OrderItem = require('./OrderItem');

const router = express.Router();

// Create a new user
router.post('/users', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).send(newUser);
});

// Get all users
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.status(200).send(users);
});

// Create a new product
router.post('/products', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.status(201).send(newProduct);
});

// Get all products
router.get('/products', async (req, res) => {
  const products = await Product.find();
  res.status(200).send(products);
});

// Get products by category
router.get('/products/category/:category', async (req, res) => {
  const category = req.params.category;
  try {
    const products = await Product.find({ category });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get product details by ID
router.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new order
router.post('/orders', async (req, res) => {
  const newOrder = new Order(req.body);
  await newOrder.save();
  res.status(201).send(newOrder);
});

// Get all orders
router.get('/orders', async (req, res) => {
  const orders = await Order.find().populate('user_id');
  res.status(200).send(orders);
});

// Create a new order item
router.post('/order-items', async (req, res) => {
  const newOrderItem = new OrderItem(req.body);
  await newOrderItem.save();
  res.status(201).send(newOrderItem);
});

// Get all order items
router.get('/order-items', async (req, res) => {
  const orderItems = await OrderItem.find().populate('order_id').populate('product_id');
  res.status(200).send(orderItems);
});

// User login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    // Generate a token
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
