require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// Kết nối MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://duchieu111004:FcpoaDqMjc6fWXq8@cluster0.h4i6v0e.mongodb.net';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });

// Routes
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
app.use('/api', productRoutes);
app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));