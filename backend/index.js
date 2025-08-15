require('dotenv').config();
if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASS || !process.env.DB_NAME) {
  console.error('Missing required environment variables. Please check your .env file.');
  process.exit(1);
}

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise'); // Sử dụng promise để async/await

const app = express();
app.use(cors());
app.use(express.json());

// Tạo pool kết nối
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
// Kiểm tra kết nối
async function checkDbConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to MySQL DB');
    connection.release();
  } catch (err) {
    console.error('Error connecting to DB:', err.message);
    console.error('Please check your database configuration in .env file.');
    throw err;
  }
}

// Routes
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
app.use('/api', productRoutes);
app.use('/api', userRoutes);

// Khởi động server sau khi kiểm tra DB
async function startServer() {
  try {
    await checkDbConnection();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
  } catch (err) {
    console.error('Failed to start server:', err.message);
    process.exit(1);
  }
}

startServer();