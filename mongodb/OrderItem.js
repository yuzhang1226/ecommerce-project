const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
  order_item_id: { type: Number, required: true, unique: true },
  order_id: { type: Number, required: true, ref: 'Order' },
  product_id: { type: Number, required: true, ref: 'Product' },
  quantity: { type: Number, required: true },
  price: { type: mongoose.Types.Decimal128, required: true },
});

module.exports = mongoose.model('OrderItem', OrderItemSchema);
