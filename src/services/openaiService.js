import OpenAI from 'openai';
import { config } from '../config/variables.js';
import logger from '../utils/logger.js';
import { truncateMessage } from '../utils/messageFormatter.js';

const openai = new OpenAI({
  apiKey: config.openai.apiKey
});

export async function generateResponse(message, userId) {
  try {
    logger.info(`Generating response for user ${userId}`);
    
    const completion = await openai.chat.completions.create({
      model: config.openai.model,
      messages: [
        { role: 'system', content: config.openai.systemPrompt },
        { role: 'user', content: message }
      ]
    });

    const response = completion.choices[0].message.content;
    return truncateMessage(response);
  } catch (error) {
    logger.error('OpenAI API Error:', error);
    throw new Error('Failed to generate response');
  }
}