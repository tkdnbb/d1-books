import { sql } from "drizzle-orm";
import { sqliteTable, integer, real, text } from "drizzle-orm/sqlite-core"

export const transactions = sqliteTable('transactions', {
  id: integer().primaryKey(),
  sender: text(),
  recipient: text(),
  amount: real(),
  tx_hash: text(),
  network: text(),
  status: text(),
  block_number: integer(),
  gas_fee: real(),
  memo: text(),
  created_at: integer('created_at', { mode: 'timestamp_ms' }).default(sql`(strftime('%s', 'now') * 1000)`),
  completed_at: integer('completed_at', { mode: 'timestamp_ms' }),
});
