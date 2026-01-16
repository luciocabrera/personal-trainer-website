import type { PoolClient, QueryResult } from 'pg';
import { Pool } from 'pg';

// Database connection pool
let pool: Pool | null = null;

// Create database connection pool
export const getPool = (): Pool => {
  if (!pool) {
    pool = new Pool({
      connectionTimeoutMillis: 2000,
      database: process.env.POSTGRES_DB ?? 'personal_trainer',
      host: process.env.POSTGRES_HOST ?? 'localhost',
      idleTimeoutMillis: 30000,
      // Connection pool settings
      max: 20,

      password: process.env.POSTGRES_PASSWORD ?? 'admin123',

      port: parseInt(process.env.POSTGRES_PORT ?? '5432'),

      user: process.env.POSTGRES_USER ?? 'admin',
    });

    // Handle pool errors
    pool.on('error', (err) => {
      console.error('Unexpected error on idle client', err);
      process.exit(-1);
    });
  }

  return pool;
};

// Get a database client from the pool
export const getClient = async (): Promise<PoolClient> => {
  const pool = getPool();
  return await pool.connect();
};

// Execute a query with automatic client release
export const query = async (
  text: string,
  params?: unknown[]
): Promise<QueryResult> => {
  const client = await getClient();
  try {
    const result = await client.query(text, params);
    return result;
  } finally {
    client.release();
  }
};

// Close the database pool
export const closePool = async (): Promise<void> => {
  if (pool) {
    await pool.end();
    pool = null;
  }
};

// Test database connection
export const testConnection = async (): Promise<boolean> => {
  try {
    await query('SELECT NOW()');
    console.log('✅ Database connection successful');
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    return false;
  }
};
