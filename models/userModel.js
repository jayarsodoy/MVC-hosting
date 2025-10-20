// models/userModel.js
import pool from './db.js';

export const getAllUsers = async () => {
  const result = await pool.query('SELECT * FROM sample_mvc_tbl');
  return result.rows;
};
