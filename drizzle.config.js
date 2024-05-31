import { config } from 'dotenv'
config({ path: '.env' })

/** @type { import("drizzle-kit").Config } */
export default {
  dialect: 'postgresql',
  schema: './src/dbs/schema.js',
  out: './drizzle',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  migrations: {
    table: 'migrations',
    schema: 'public',
  },
}
