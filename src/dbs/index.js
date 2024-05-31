// NEW
import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'
import { config } from 'dotenv'

config({ path: '.env' })

const sql = neon(process.env.DATABASE_URL)
export const db = drizzle(sql)

// OLD
// import { drizzle } from 'drizzle-orm/node-postgres'
// import { Pool } from 'pg'
// import { config } from 'dotenv'
// config({ path: '.env' })
//
// //create collection to neon serverless
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true,
// })
//
// export const db = drizzle(pool)
