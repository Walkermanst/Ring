import dotenv from 'dotenv';
dotenv.config();

export const config = {
  telegram: {
    token: process.env.TELEGRAM_BOT_TOKEN,
    username: process.env.TELEGRAM_BOT_USERNAME
  },
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
    model: process.env.OPENAI_MODEL,
    systemPrompt: process.env.SYSTEM_PROMPT
  },
  rateLimit: {
    points: parseInt(process.env.RATE_LIMIT_POINTS, 10) || 5,
    duration: parseInt(process.env.RATE_LIMIT_DURATION, 10) || 60
  },
  logging: {
    level: process.env.LOG_LEVEL || 'info'
  }
};