import { drizzle } from 'drizzle-orm/node-postgres'
import { InferModel, eq } from 'drizzle-orm'
import { pgTable, serial, text } from 'drizzle-orm/pg-core'
import { Pool } from 'pg'

export const users = pgTable('products', {})

export type Product = InferModel<typeof users>
export type NewProduct = InferModel<typeof users, 'insert'>

//create collection to neon serverless
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

const db = drizzle(pool)

export async function getProduct() {}
