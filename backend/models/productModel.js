const db = require('mysql2/promise'); // Sử dụng promise để async/await

const pool = db.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

exports.getAllProducts = async () => {
  const [rows] = await pool.query('SELECT * FROM products');
  return rows;
};