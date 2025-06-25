import { drizzle } from 'drizzle-orm/d1';
import { Hono } from 'hono';
import { transactions } from './db/schema/transactions';

interface BindingsFace extends CloudflareEnv {
    R2_ACCESS_KEY_ID: string;
    R2_SECRET_ACCESS_KEY: string;
    R2_BUCKET_NAME: string;
    R2_ENDPOINT: string;
}

const app = new Hono<{
  Bindings: BindingsFace;
}>();
app.get('/transactions', async (c) => {
  const env = c.env;
  const db = drizzle(env.DB);
  const result = await db.select().from(transactions).all();
  return c.json(result);
});

export default app;
