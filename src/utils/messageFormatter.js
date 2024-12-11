import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: false,
  breaks: true,
  linkify: true
});

export function formatMessage(text) {
  // Convert markdown to plain text with basic formatting
  // Use Telegram's supported markdown format
  return text
    .replace(/[_*[\]()~`>#+=|{}.!-]/g, '\\$&') // Escape special characters
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function truncateMessage(text, maxLength = 4096) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
}

export function sanitizeInput(text) {
  return text
    .replace(/[<>]/g, '') // Remove HTML tags
    .trim();
}