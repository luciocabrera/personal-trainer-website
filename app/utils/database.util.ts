import type { PoolClient, QueryResult } from 'pg';

import { Pool } from 'pg';

// Database connection pool
let pool: null | Pool = null;

// Create database connection pool
const getPool = (): Pool => {
  if (!pool) {
    pool = new Pool({
      connectionTimeoutMillis: 2000,
      database: process.env.POSTGRES_DB ?? 'personal_trainer',
      host: process.env.POSTGRES_HOST ?? 'localhost',
      idleTimeoutMillis: 30_000,
      // Connection pool settings
      max: 20,

      password: process.env.POSTGRES_PASSWORD ?? 'admin123',

      port: Number.parseInt(process.env.POSTGRES_PORT ?? '5432'),

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
const getClient = async (): Promise<PoolClient> => {
  const pool = getPool();
  return await pool.connect();
};

// Execute a query with automatic client release
export const query = async (
  text: string,
  params?: unknown[],
): Promise<QueryResult> => {
  const client = await getClient();
  try {
    const result = await client.query(text, params);
    return result;
  } finally {
    client.release();
  }
};
