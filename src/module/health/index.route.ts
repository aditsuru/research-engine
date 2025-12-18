import { connections } from '@redis';
import { error } from '@utils';
import type { Request, Response } from 'express';
import router from '@/routes';

// TODO: re-write with simpler implementation
router.get('/health', async (_req: Request, res: Response, next) => {
  try {
    const redisStatus = getRedisStatus();
    const isRedisHealthy = Object.values(redisStatus).every((status) => status === 'healthy');

    const healthStatus = {
      status: isRedisHealthy ? 'UP' : 'DOWN',
      timestamp: new Date().toISOString(),
      services: {
        redis: redisStatus,
        server: 'healthy',
      },
    };

    if (!isRedisHealthy) {
      return next(
        new error.core.AppError(
          'Redis connection unhealthy',
          503,
          'SERVICE_UNAVAILABLE',
          healthStatus
        )
      );
    }

    res.status(200).json(healthStatus);
  } catch (err) {
    next(err);
  }
});

// Helper function
function getRedisStatus() {
  return Object.fromEntries(
    Object.entries(connections).map(([key, value]) => [
      key,
      value.status === 'ready' ? 'healthy' : 'unhealthy',
    ])
  ) as Record<keyof typeof connections, 'healthy' | 'unhealthy'>;
}
