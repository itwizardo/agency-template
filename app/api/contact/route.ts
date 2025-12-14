import { NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = '7984693529:AAFcLj_dKH39jnpwQg_Cc5clgTy0aWkkGXI';
const TELEGRAM_CHAT_ID = '648599174';

async function sendToTelegram(message: string) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'HTML',
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('Telegram API error:', error);
    throw new Error('Failed to send Telegram message');
  }

  return response.json();
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, whatsapp, message } = await request.json();

    // Validate required fields
    if (!name || !email || !whatsapp || !message) {
      return NextResponse.json(
        { error: 'Name, email, WhatsApp, and message are required' },
        { status: 400 }
      );
    }

    // Format the message for Telegram
    const telegramMessage = `
<b>📬 Nieuw contactformulier bericht</b>

<b>Naam:</b> ${name}
<b>E-mail:</b> ${email}
<b>Telefoon:</b> ${phone || 'Niet opgegeven'}
<b>WhatsApp:</b> ${whatsapp}

<b>Bericht:</b>
${message}
`.trim();

    // Send to Telegram
    await sendToTelegram(telegramMessage);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
