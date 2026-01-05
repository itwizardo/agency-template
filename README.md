# Agency Template - Next.js + WHMCS Integration

A modern agency/hosting website template built with **Next.js 15**, **TailwindCSS v4**, and optional **WHMCS integration** for domain registration and hosting businesses.

## Features

- **Multi-language support** (NL, EN, DE, FR, ES)
- **WHMCS Integration** (optional)
  - Dynamic domain pricing
  - Domain availability search
  - Hosting package pricing
  - Client dashboard (email lookup)
  - Contact form → Support tickets
- **Telegram notifications** for contact form
- **Responsive design** with dark theme
- **SEO optimized**

## Quick Start

```bash
# Install dependencies
pnpm install

# Copy environment file
cp .env.local.example .env.local

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

## WHMCS Integration Setup

### 1. Create API Credentials

In WHMCS Admin:
1. Go to **Setup → Staff Management → API Credentials**
2. Click **Generate New API Credential**
3. Set a description (e.g., "Website Integration")
4. Copy the **Identifier** and **Secret**

### 2. Set API Permissions

Enable these permissions for your API role:
- `GetTLDPricing` - Domain pricing
- `GetProducts` - Hosting pricing
- `DomainWhois` - Domain availability
- `GetClientsDetails` - Client lookup
- `GetClients` - Client search
- `GetClientsProducts` - Client services
- `GetInvoices` - Client invoices
- `GetTickets` - Support tickets
- `OpenTicket` - Create tickets from contact form

### 3. Configure Environment

Add to your `.env.local`:

```env
WHMCS_URL=https://billing.yourdomain.com
WHMCS_API_IDENTIFIER=your_identifier
WHMCS_API_SECRET=your_secret
```

### 4. Features Enabled

Once configured, these features work automatically:
- `/diensten/domeinregistratie` - Live domain pricing & search
- `/diensten/webhosting` - Live hosting pricing
- `/mijn-account` - Client dashboard (email lookup)
- `/contact` - Creates WHMCS support tickets

## Telegram Notifications (Optional)

For contact form notifications via Telegram:

```env
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
TELEGRAM_TOPIC_ID=optional_topic_id
```

### Setup:
1. Message [@BotFather](https://t.me/BotFather) to create a bot
2. Message [@userinfobot](https://t.me/userinfobot) to get your chat ID
3. Add the bot to your group/channel

## Project Structure

```
app/
├── (default)/
│   ├── diensten/
│   │   ├── domeinregistratie/  # Domain registration
│   │   ├── webhosting/         # Hosting packages
│   │   └── ...
│   ├── mijn-account/           # Client dashboard
│   └── ...
├── api/
│   ├── domain-check/           # Domain availability API
│   ├── domain-pricing/         # Domain pricing API
│   ├── hosting-pricing/        # Hosting pricing API
│   ├── client/lookup/          # Client lookup API
│   └── contact/                # Contact form API
components/
├── domain-search.tsx           # Domain search widget
└── ui/
locales/                        # Translations (nl, en, de, fr, es)
```

## Customization

### Pricing Fallbacks

If WHMCS is not configured, fallback prices are used. Edit these in:
- `app/api/domain-pricing/route.ts` - Domain prices
- `app/api/hosting-pricing/route.ts` - Hosting prices

### Adding Languages

1. Create new locale file in `locales/`
2. Add locale to `lib/i18n/LanguageContext.tsx`
3. Add translations to page components

## Deploy

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/itwizardo/agency-template)

Add environment variables in Vercel dashboard.

### Docker

```bash
docker build -t agency-template .
docker run -p 3000:3000 agency-template
```

## Credits

- Based on [Cruip's Tailwind Template](https://github.com/cruip/tailwind-landing-page-template)
- WHMCS integration by [GWC Web Design](https://gwcwebdesign.com)

## License

GPL-3.0 - See [LICENSE](LICENSE) for details.
