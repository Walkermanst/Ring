import TelegramBot from 'node-telegram-bot-api';
import { config } from '../config/variables.js';
import { handleMessage } from '../handlers/messageHandler.js';
import logger from '../utils/logger.js';

export function initializeBot() {
  const bot = new TelegramBot(config.telegram.token, { 
    polling: true,
    username: config.telegram.username
  });

  bot.on('message', async (msg) => {
    await handleMessage(bot, msg);
  });

  bot.on('polling_error', (error) => {
    logger.error('Telegram polling error:', error);
  });

  bot.on('error', (error) => {
    logger.error('Telegram bot error:', error);
  });

  return bot;
}