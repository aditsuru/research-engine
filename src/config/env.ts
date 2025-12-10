import * as z from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(3000),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  // TODO: replace with logger
  console.log(z.prettifyError(parsedEnv.error));
  process.exit(1);
}

export const env = parsedEnv.data;
