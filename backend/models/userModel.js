const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  // Thêm các trường khác nếu cần
});

const User = mongoose.model('User', userSchema);

exports.getAllUsers = async () => {
  return await User.find();
};