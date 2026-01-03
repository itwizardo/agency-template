import { NextResponse } from 'next/server';

const TLDS = ['.nl', '.com', '.eu', '.be', '.de', '.net'];

const PRICES: Record<string, string> = {
  '.nl': '9,99',
  '.com': '12,99',
  '.eu': '8,99',
  '.be': '10,99',
  '.de': '11,99',
  '.net': '14,99',
};

// FOSSBilling API configuration
const FOSSBILLING_URL = process.env.FOSSBILLING_URL || 'https://billing.gwcwebdesign.com';

interface DomainResult {
  tld: string;
  available: boolean;
  price: string | null;
}

async function checkDomainWithFossBilling(domain: string, tld: string): Promise<DomainResult> {
  try {
    // Attempt to call FOSSBilling API
    const response = await fetch(`${FOSSBILLING_URL}/api/guest/servicedomain/check`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sld: domain,
        tld: tld.replace('.', ''),
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return {
        tld,
        available: data.result?.available ?? false,
        price: data.result?.available ? PRICES[tld] : null,
      };
    }
  } catch {
    // FOSSBilling not available, fall back to mock
  }

  // Fallback: Mock response (simulates random availability)
  // Remove this when FOSSBilling is deployed and working
  const isAvailable = Math.random() > 0.3; // 70% chance of being available
  return {
    tld,
    available: isAvailable,
    price: isAvailable ? PRICES[tld] : null,
  };
}

export async function POST(request: Request) {
  try {
    const { domain } = await request.json();

    if (!domain || typeof domain !== 'string' || domain.length < 2) {
      return NextResponse.json(
        { error: 'Invalid domain name' },
        { status: 400 }
      );
    }

    // Clean the domain name
    const cleanDomain = domain.toLowerCase().replace(/[^a-z0-9-]/g, '');

    // Check all TLDs in parallel
    const results = await Promise.all(
      TLDS.map((tld) => checkDomainWithFossBilling(cleanDomain, tld))
    );

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
