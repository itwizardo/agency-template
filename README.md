# Agency Website Template

![Agency Template Preview](https://i.imgur.com/F4IFn07.png)

A modern, multilingual web agency template built with Next.js 15, React 19, and Tailwind CSS v4.

## Features

- 5 languages (NL, EN, DE, FR, ES) with automatic browser detection
- Dark glass morphism design
- 3D interactive logo dome (Three.js)
- Animated dithered wave backgrounds
- Fully responsive on all devices
- Contact form with Resend API integration
- Botpress chatbot widget ready
- SEO optimized
- 15+ pages included

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/itwizardo/agency-template)

## Demo

[View Live Demo](https://gwcwebdesign.com)

## Quick Start

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/agency-template.git
cd agency-template

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## Customization Guide

### 1. Update Branding

Edit the locale files in `/locales/` folder:
- `nl.json` - Dutch
- `en.json` - English
- `de.json` - German
- `fr.json` - French
- `es.json` - Spanish

Replace `YourBrand` with your company name in all files.

### 2. Update Logo

Edit `/components/ui/logo.tsx` to change:
- The SVG icon
- The brand text

### 3. Update Footer

Edit `/components/ui/footer.tsx` to update:
- Company name
- Registration number
- VAT number

### 4. Contact Form

1. Create a [Resend](https://resend.com) account
2. Get your API key
3. Create `.env.local` file:
   ```
   RESEND_API_KEY=your_api_key_here
   ```
4. Update email in `/app/api/contact/route.ts`

### 5. Chatbot (Optional)

1. Create a [Botpress](https://botpress.com) account
2. Get your bot ID and client ID
3. Update in `/app/layout.tsx`:
   ```js
   botId: "YOUR_BOT_ID",
   clientId: "YOUR_CLIENT_ID",
   ```

### 6. Deploy

Deploy easily on [Vercel](https://vercel.com), [Netlify](https://netlify.com), or any Node.js hosting.

```bash
pnpm build
pnpm start
```

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** React 19 + TypeScript
- **Styling:** Tailwind CSS v4
- **3D Graphics:** Three.js + React Three Fiber
- **UI Components:** Headless UI
- **Animations:** AOS (Animate on Scroll)
- **Email:** Resend API
- **Chatbot:** Botpress

## Pages Included

- Home (with animated hero)
- Portfolio
- About Us
- Contact
- Blog
- Careers
- 6 Service pages
- Privacy Policy
- Terms & Conditions
- E-commerce Guide

## License

MIT - Free for personal and commercial use.

## Credits

- Original template by [Cruip](https://cruip.com/)
- Enhanced and customized by [GWC Web Design](https://gwcwebdesign.com)

---

Template by [GWC Web Design](https://gwcwebdesign.com)
