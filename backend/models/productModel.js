const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  // Thêm các trường khác nếu cần
});

const Product = mongoose.model('Product', productSchema);

exports.getAllProducts = async () => {
  return await Product.find();
};