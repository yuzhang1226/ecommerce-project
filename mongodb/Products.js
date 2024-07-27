const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  product_id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  price: { type: mongoose.Types.Decimal128, required: true },
  stock: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema);
