import { generateResponse } from '../services/openaiService.js';
import { checkRateLimit } from '../middleware/rateLimiter.js';
import { formatMessage, sanitizeInput } from '../utils/messageFormatter.js';
import logger from '../utils/logger.js';

export async function handleMessage(bot, msg) {
  const userId = msg.from.id;
  const chatId = msg.chat.id;

  try {
    // Check rate limit
    if (!(await checkRateLimit(userId))) {
      await bot.sendMessage(chatId, 'Please wait a moment before sending another message.');
      return;
    }

    // Check if the message is either a mention or a reply to the bot
    const botMention = `@${bot.options.username}`;
    const isReplyToBot = msg.reply_to_message && msg.reply_to_message.from.username === bot.options.username;
    const isMentioningBot = msg.text && msg.text.includes(botMention);

    if (!isMentioningBot && !isReplyToBot) {
      return;
    }

    // Get the user's message
    let userMessage;
    if (isMentioningBot) {
      userMessage = sanitizeInput(msg.text.replace(botMention, '').trim());
    } else {
      userMessage = sanitizeInput(msg.text.trim());
    }

    if (!userMessage) {
      await bot.sendMessage(chatId, 'Please provide a message along with the mention or reply.');
      return;
    }

    logger.info(`Processing message from user ${userId}: ${userMessage}`);

    // Send "typing" action
    await bot.sendChatAction(chatId, 'typing');

    // Generate and format response
    const response = await generateResponse(userMessage, userId);
    const formattedResponse = formatMessage(response);

    // Send the response
    await bot.sendMessage(chatId, formattedResponse, {
      reply_to_message_id: msg.message_id,
      parse_mode: 'MarkdownV2' // Using MarkdownV2 for better formatting support
    });

    logger.info(`Response sent to user ${userId}`);
  } catch (error) {
    logger.error(`Error handling message from user ${userId}:`, error);
    try {
      // Fallback to plain text if formatting fails
      await bot.sendMessage(chatId, 'Sorry, I encountered an error while formatting the response. Please try again.');
    } catch (sendError) {
      logger.error(`Error sending error message to user ${userId}:`, sendError);
    }
  }
}