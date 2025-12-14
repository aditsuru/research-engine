import { config } from '@config';
import { logger } from '@utils';
import app from '@/app';

app.listen(config.env.PORT, () => {
  logger.info(`\x1b[92m✔ server running at\x1b[0m http://localhost:${config.env.PORT}`);
});
