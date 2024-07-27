const express = require('express');
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

module.exports = router;
