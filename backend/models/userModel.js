const db = require('mysql2/promise');

const pool = db.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

exports.getAllUsers = async () => {
  const [rows] = await pool.query('SELECT * FROM users');
  return rows;
};