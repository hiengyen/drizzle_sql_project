import { pgTable, timestamp, uuid, text } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  user_id: uuid('user_id').primaryKey().defaultRandom(),
  name: text().notNull(),
  email: text().notNull(),
  phoneNumber: text().notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updateAt: timestamp('updateAt').defaultNow().notNull(),
})
