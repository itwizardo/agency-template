import { NextResponse } from 'next/server';

// WHMCS API configuration (set in .env)
const WHMCS_URL = process.env.WHMCS_URL || '';
const WHMCS_API_IDENTIFIER = process.env.WHMCS_API_IDENTIFIER || '';
const WHMCS_API_SECRET = process.env.WHMCS_API_SECRET || '';

interface ClientInfo {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  companyname?: string;
}

interface Service {
  id: number;
  name: string;
  domain: string;
  status: string;
  nextDueDate: string;
  billingCycle: string;
  amount: string;
}

interface Invoice {
  id: number;
  invoiceNumber: string;
  date: string;
  dueDate: string;
  total: string;
  status: string;
  paymentUrl?: string;
}

interface Ticket {
  id: number;
  tid: string;
  subject: string;
  status: string;
  lastReply: string;
  department: string;
}

async function whmcsApiCall(action: string, params: Record<string, string>) {
  const allParams = new URLSearchParams({
    action,
    identifier: WHMCS_API_IDENTIFIER,
    secret: WHMCS_API_SECRET,
    responsetype: 'json',
    ...params,
  });

  const response = await fetch(`${WHMCS_URL}/includes/api.php`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: allParams.toString(),
  });

  if (!response.ok) {
    throw new Error('WHMCS API request failed');
  }

  return response.json();
}

async function getClientByEmail(email: string): Promise<ClientInfo | null> {
  try {
    // Try GetClientsDetails with email first (more direct)
    const detailsData = await whmcsApiCall('GetClientsDetails', { email: email });

    if (detailsData.result === 'success' && detailsData.id) {
      return {
        id: parseInt(detailsData.id),
        firstname: detailsData.firstname || '',
        lastname: detailsData.lastname || '',
        email: detailsData.email || email,
        companyname: detailsData.companyname || undefined,
      };
    }

    // Fallback: Try GetClients with search
    const searchData = await whmcsApiCall('GetClients', {
      search: email,
      limitnum: '100',
    });

    if (searchData.result === 'success' && searchData.clients?.client) {
      // Handle both array and single object response
      const clients = Array.isArray(searchData.clients.client)
        ? searchData.clients.client
        : [searchData.clients.client];

      // Find exact email match
      const client = clients.find(
        (c: { email: string }) => c.email.toLowerCase() === email.toLowerCase()
      );

      if (client) {
        return {
          id: parseInt(client.id),
          firstname: client.firstname,
          lastname: client.lastname,
          email: client.email,
          companyname: client.companyname || undefined,
        };
      }
    }
  } catch (error) {
    console.error('Failed to get client:', error);
  }

  return null;
}

async function getClientServices(clientId: number): Promise<Service[]> {
  try {
    const data = await whmcsApiCall('GetClientsProducts', {
      clientid: clientId.toString(),
      limitnum: '50',
    });

    if (data.result === 'success' && data.products?.product) {
      return data.products.product.map((p: {
        id: string;
        name: string;
        domain: string;
        status: string;
        nextduedate: string;
        billingcycle: string;
        recurringamount: string;
      }) => ({
        id: parseInt(p.id),
        name: p.name,
        domain: p.domain || '',
        status: p.status,
        nextDueDate: p.nextduedate,
        billingCycle: p.billingcycle,
        amount: p.recurringamount,
      }));
    }
  } catch (error) {
    console.error('Failed to get services:', error);
  }

  return [];
}

async function getClientInvoices(clientId: number): Promise<Invoice[]> {
  try {
    const data = await whmcsApiCall('GetInvoices', {
      userid: clientId.toString(),
      limitnum: '10',
      orderby: 'id',
      order: 'desc',
    });

    if (data.result === 'success' && data.invoices?.invoice) {
      return data.invoices.invoice.map((inv: {
        id: string;
        invoicenum: string;
        date: string;
        duedate: string;
        total: string;
        status: string;
      }) => ({
        id: parseInt(inv.id),
        invoiceNumber: inv.invoicenum || inv.id,
        date: inv.date,
        dueDate: inv.duedate,
        total: inv.total,
        status: inv.status,
        paymentUrl: inv.status === 'Unpaid'
          ? `${WHMCS_URL}/viewinvoice.php?id=${inv.id}`
          : undefined,
      }));
    }
  } catch (error) {
    console.error('Failed to get invoices:', error);
  }

  return [];
}

async function getClientTickets(clientId: number): Promise<Ticket[]> {
  try {
    const data = await whmcsApiCall('GetTickets', {
      clientid: clientId.toString(),
      limitnum: '5',
    });

    if (data.result === 'success' && data.tickets?.ticket) {
      return data.tickets.ticket.map((t: {
        id: string;
        tid: string;
        subject: string;
        status: string;
        lastreply: string;
        deptname: string;
      }) => ({
        id: parseInt(t.id),
        tid: t.tid,
        subject: t.subject,
        status: t.status,
        lastReply: t.lastreply,
        department: t.deptname,
      }));
    }
  } catch (error) {
    console.error('Failed to get tickets:', error);
  }

  return [];
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!WHMCS_API_IDENTIFIER || !WHMCS_API_SECRET) {
      return NextResponse.json(
        { error: 'API not configured' },
        { status: 500 }
      );
    }

    // Find client by email
    const client = await getClientByEmail(email.trim().toLowerCase());

    if (!client) {
      return NextResponse.json({
        found: false,
        message: 'No account found with this email address',
      });
    }

    // Fetch all client data in parallel
    const [services, invoices, tickets] = await Promise.all([
      getClientServices(client.id),
      getClientInvoices(client.id),
      getClientTickets(client.id),
    ]);

    return NextResponse.json({
      found: true,
      client: {
        name: `${client.firstname} ${client.lastname}`,
        company: client.companyname,
        email: client.email,
      },
      services,
      invoices,
      tickets,
      portalUrl: `${WHMCS_URL}/clientarea.php`,
    });
  } catch (error) {
    console.error('Client lookup error:', error);
    return NextResponse.json(
      { error: 'Failed to lookup client' },
      { status: 500 }
    );
  }
}
