import { type Response, Router } from 'express';

// Route imports
//

const router = Router();

// Health endpoint
router.get('/health', (_req, res: Response) => {
  res.success({ status: 'OK', uptime: process.uptime() });
});

// Routes
//

export default router;
