# Venice Community - Deployment Instructions

## Quick Start (Netlify/Static Hosting)

1. **Upload `venice-community-static.html`**
2. **Rename to `index.html`**
3. **Your site is live!**

## Full-Stack Deployment (Vercel/Railway/Heroku)

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Set these in your hosting platform:
```
DATABASE_URL=your_postgresql_url
DISCORD_WEBHOOK_URL=your_discord_webhook (optional)
NODE_ENV=production
```

### 3. Build Commands
```bash
npm run build
npm start
```

## Free Hosting Platforms:

### Netlify (Static Only)
- Upload: `venice-community-static.html`
- Rename to: `index.html`
- Cost: Free

### Vercel (Full-Stack)
- Upload: Entire source code
- Build command: `npm run build`
- Start command: `npm start`
- Cost: Free tier available

### Railway (Full-Stack)
- Connect GitHub repository
- Auto-detects Node.js
- Cost: Free tier available

### Replit (Full-Stack)
- Import this code
- Click Deploy button
- Cost: Free tier available

## What Works Where:

| Feature | Static (Netlify) | Full-Stack (Vercel/Railway) |
|---------|------------------|----------------------------|
| Website Design | ✅ | ✅ |
| QR Code | ✅ | ✅ |
| Star Ratings | ✅ | ✅ |
| Form Submission | ✅ (local) | ✅ (database) |
| Discord Notifications | ❌ | ✅ |
| User Management | ❌ | ✅ |

Choose the option that fits your needs!