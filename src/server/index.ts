import http from 'node:http';
import { logger } from '@utils';
import app from '@/app';
import { initIO } from '@/socket/socket.service';

export const server = http.createServer(app);
export const io = initIO(server);

// Apply Middleware

// Handle events
io.on('connection', (socket) => {
  logger.info('New connection', socket.id);
});
