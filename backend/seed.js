require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/erp';

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Product = mongoose.model('Product', productSchema);
const User = mongoose.model('User', userSchema);

const products = Array.from({ length: 10 }).map((_, i) => ({
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 100) + 1,
  description: `Description for product ${i + 1}`,
}));

const users = Array.from({ length: 10 }).map((_, i) => ({
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
}));

async function seed() {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    await Product.deleteMany({});
    await User.deleteMany({});
    await Product.insertMany(products);
    await User.insertMany(users);
    console.log('Seed data inserted successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
}

seed();
