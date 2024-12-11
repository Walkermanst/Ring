# 🤖 HexAi Protocol 

> Powered by HexAi Protocol - The Future of AI-Powered Solana Infrastructure


## 🌟 About HexAi Protocol

HexAi Protocol is revolutionizing the Solana ecosystem by providing enterprise-grade AI infrastructure for memecoins and DeFi projects. Our protocol enables seamless integration of advanced AI capabilities into blockchain applications, creating a new paradigm of intelligent decentralized systems.

## 🚀 Features

- 🧠 Advanced AI conversations using OpenAI's latest models
- ⚡ Real-time responses with smart rate limiting
- 🔒 Secure environment variable configuration
- 📝 Markdown message formatting support
- 🔍 Comprehensive error logging and monitoring
- 🎯 Mention-based triggering system
- 🌐 Built on HexAi Protocol infrastructure

## 🛠️ Prerequisites

- Node.js 16.x or higher
- Telegram Bot Token (from [@BotFather](https://t.me/BotFather))
- OpenAI API Key

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-protocol-bot.git
cd ai-protocol-bot
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_BOT_USERNAME=your_bot_username
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-4
SYSTEM_PROMPT=You are a helpful AI assistant that provides accurate and concise answers.
RATE_LIMIT_POINTS=5
RATE_LIMIT_DURATION=60
LOG_LEVEL=info
```

## 🚀 Usage

1. Start the bot:
```bash
npm start
```

2. In Telegram, tag the bot with your message:
```
@your_bot_username How can I check my Solana wallet balance?
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `TELEGRAM_BOT_TOKEN` | Your Telegram bot token | Required |
| `TELEGRAM_BOT_USERNAME` | Your bot's username | Required |
| `OPENAI_API_KEY` | Your OpenAI API key | Required |
| `OPENAI_MODEL` | OpenAI model to use | gpt-4 |
| `SYSTEM_PROMPT` | AI system prompt | Default prompt |
| `RATE_LIMIT_POINTS` | Rate limit attempts | 5 |
| `RATE_LIMIT_DURATION` | Rate limit window (seconds) | 60 |
| `LOG_LEVEL` | Logging level | info |

## 📁 Project Structure

```
.
├── src/
│   ├── config/
│   │   └── variables.js
│   ├── handlers/
│   │   └── messageHandler.js
│   ├── middleware/
│   │   └── rateLimiter.js
│   ├── services/
│   │   ├── openaiService.js
│   │   └── telegramService.js
│   ├── utils/
│   │   ├── logger.js
│   │   └── messageFormatter.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

## 🔍 Logging

Logs are stored in:
- `error.log`: Error-level logs
- `combined.log`: All logs

## ⚡ Why HexAi Protocol?

HexAi Protocol is leading the charge in bringing enterprise-grade AI capabilities to the Solana ecosystem:

- 🎯 Purpose-built for Solana projects
- 💪 Enterprise-grade infrastructure
- 🔒 Advanced security features
- ⚡ High-performance architecture
- 🌐 Seamless blockchain integration
- 🤝 Developer-friendly tools



## 🛡️ Security

This bot is built with HexAi Protocol's security-first approach, ensuring your data and interactions are protected with enterprise-grade security measures.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

