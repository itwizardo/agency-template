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

// WHMCS API configuration
const WHMCS_URL = process.env.WHMCS_URL || 'https://billing.gwcwebdesign.com';
const WHMCS_API_IDENTIFIER = process.env.WHMCS_API_IDENTIFIER || '';
const WHMCS_API_SECRET = process.env.WHMCS_API_SECRET || '';

interface DomainResult {
  tld: string;
  available: boolean;
  price: string | null;
}

async function checkDomainWithWHMCS(domain: string, tld: string): Promise<DomainResult> {
  // If WHMCS credentials are configured, use the API
  if (WHMCS_API_IDENTIFIER && WHMCS_API_SECRET) {
    try {
      const fullDomain = `${domain}${tld}`;

      const params = new URLSearchParams({
        action: 'DomainWhois',
        identifier: WHMCS_API_IDENTIFIER,
        secret: WHMCS_API_SECRET,
        domain: fullDomain,
        responsetype: 'json',
      });

      const response = await fetch(`${WHMCS_URL}/includes/api.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      if (response.ok) {
        const data = await response.json();
        // WHMCS returns status: "available" or "unavailable"
        const isAvailable = data.status === 'available';
        return {
          tld,
          available: isAvailable,
          price: isAvailable ? PRICES[tld] : null,
        };
      }
    } catch (error) {
      console.error(`WHMCS API error for ${domain}${tld}:`, error);
    }
  }

  // Fallback: Use DNS lookup to check if domain exists
  try {
    const fullDomain = `${domain}${tld}`;
    const dnsResponse = await fetch(
      `https://dns.google/resolve?name=${fullDomain}&type=A`,
      { next: { revalidate: 60 } }
    );

    if (dnsResponse.ok) {
      const dnsData = await dnsResponse.json();
      // If domain has DNS records, it's likely taken
      const isTaken = dnsData.Status === 0 && dnsData.Answer && dnsData.Answer.length > 0;
      return {
        tld,
        available: !isTaken,
        price: !isTaken ? PRICES[tld] : null,
      };
    }
  } catch {
    // DNS check failed, assume available
  }

  // Final fallback: Mark as potentially available
  return {
    tld,
    available: true,
    price: PRICES[tld],
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
      TLDS.map((tld) => checkDomainWithWHMCS(cleanDomain, tld))
    );

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
