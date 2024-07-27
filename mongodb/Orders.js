const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  order_id: { type: Number, required: true, unique: true },
  user_id: { type: Number, required: true, ref: 'User' },
  total_price: { type: mongoose.Types.Decimal128, required: true },
  status: { type: String, default: 'pending' },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);
