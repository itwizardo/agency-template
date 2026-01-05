import { NextResponse } from 'next/server';

// Telegram configuration (set in .env)
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '';
const TELEGRAM_TOPIC_ID = process.env.TELEGRAM_TOPIC_ID ? parseInt(process.env.TELEGRAM_TOPIC_ID) : undefined;

// WHMCS API configuration (set in .env)
const WHMCS_URL = process.env.WHMCS_URL || '';
const WHMCS_API_IDENTIFIER = process.env.WHMCS_API_IDENTIFIER || '';
const WHMCS_API_SECRET = process.env.WHMCS_API_SECRET || '';

interface TicketResult {
  success: boolean;
  ticketNumber?: string;
  ticketId?: number;
}

async function createWHMCSTicket(
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<TicketResult> {
  if (!WHMCS_URL || !WHMCS_API_IDENTIFIER || !WHMCS_API_SECRET) {
    return { success: false };
  }

  try {
    const params = new URLSearchParams({
      action: 'OpenTicket',
      identifier: WHMCS_API_IDENTIFIER,
      secret: WHMCS_API_SECRET,
      responsetype: 'json',
      deptid: '1', // General/Support department (usually ID 1)
      subject: subject,
      message: message,
      name: name,
      email: email,
      priority: 'Medium',
    });

    const response = await fetch(`${WHMCS_URL}/includes/api.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.result === 'success') {
        return {
          success: true,
          ticketNumber: data.tid,
          ticketId: data.id,
        };
      }
    }
  } catch (error) {
    console.error('Failed to create WHMCS ticket:', error);
  }

  return { success: false };
}

async function sendToTelegram(message: string): Promise<boolean> {
  // Skip if Telegram not configured
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.log('Telegram not configured, skipping notification');
    return false;
  }

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  const body: Record<string, unknown> = {
    chat_id: TELEGRAM_CHAT_ID,
    text: message,
    parse_mode: 'HTML',
  };

  // Only add topic ID if configured (for forum/group topics)
  if (TELEGRAM_TOPIC_ID) {
    body.message_thread_id = TELEGRAM_TOPIC_ID;
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('Telegram API error:', error);
    return false;
  }

  return true;
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

    // Create WHMCS ticket (if configured)
    const ticketSubject = `Website Contact: ${name}`;
    const ticketMessage = `
New message via contact form

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
WhatsApp: ${whatsapp || 'Not provided'}

Message:
${message}
`.trim();

    const ticketResult = await createWHMCSTicket(name, email, ticketSubject, ticketMessage);

    // Send to Telegram (always, as backup notification)
    await sendToTelegram(telegramMessage);

    return NextResponse.json({
      success: true,
      ticketNumber: ticketResult.ticketNumber || null,
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
