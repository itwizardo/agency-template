import { NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = '7984693529:AAFcLj_dKH39jnpwQg_Cc5clgTy0aWkkGXI';
const TELEGRAM_CHAT_ID = '-1003599781100';
const TELEGRAM_TOPIC_ID = 3;

// WHMCS API configuration
const WHMCS_URL = process.env.WHMCS_URL || 'https://billing.gwcwebdesign.com';
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
  if (!WHMCS_API_IDENTIFIER || !WHMCS_API_SECRET) {
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

async function sendToTelegram(message: string) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      message_thread_id: TELEGRAM_TOPIC_ID,
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

    // Create WHMCS ticket
    const ticketSubject = `Website Contact: ${name}`;
    const ticketMessage = `
Nieuw bericht via contactformulier

Naam: ${name}
E-mail: ${email}
Telefoon: ${phone || 'Niet opgegeven'}
WhatsApp: ${whatsapp}

Bericht:
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
