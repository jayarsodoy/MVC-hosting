// models/db.js
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT
});

pool.connect()
  .then(() => console.log('✅ Connected to PostgreSQL'))
  .catch(err => console.error('❌ Database connection error:', err));

export default pool;
