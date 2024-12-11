import { initializeBot } from './services/telegramService.js';
import logger from './utils/logger.js';

logger.info('Starting Telegram AI Bot...');

const bot = initializeBot();

// Graceful shutdown
process.on('SIGINT', () => {
  logger.info('Shutting down bot...');
  bot.stopPolling();
  process.exit();
});

process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception:', error);
  bot.stopPolling();
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
});