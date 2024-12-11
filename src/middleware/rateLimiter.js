import { RateLimiterMemory } from 'rate-limiter-flexible';
import { config } from '../config/variables.js';
import logger from '../utils/logger.js';

const limiter = new RateLimiterMemory({
  points: config.rateLimit.points,
  duration: config.rateLimit.duration
});

export async function checkRateLimit(userId) {
  try {
    await limiter.consume(userId.toString());
    return true;
  } catch (error) {
    logger.warn(`Rate limit exceeded for user ${userId}`);
    return false;
  }
}