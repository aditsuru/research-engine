import * as z from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(3000),
  MAX_PAYLOAD_SIZE: z
    .string()
    .regex(
      /^[1-9]\d*(b|kb|mb)$/i,
      "Invalid format! Use a non-zero number followed by 'b' or 'kb' or 'mb'"
    )
    .default('10mb'),
  LOG_LEVEL: z.enum(['info', 'error', 'debug', 'warn']).default('info'),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(z.prettifyError(parsedEnv.error));
  process.exit(1);
}

export const env = parsedEnv.data;
