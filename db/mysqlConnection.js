import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
