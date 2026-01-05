import { NextResponse } from 'next/server';

const TLDS = ['.nl', '.com', '.eu', '.be', '.de', '.net'];

// Fallback prices (used when WHMCS API not available)
const FALLBACK_PRICES: Record<string, string> = {
  '.nl': '12,41',
  '.com': '14,99',
  '.eu': '11,99',
  '.be': '12,99',
  '.de': '12,99',
  '.net': '16,99',
};

// WHMCS API configuration (set in .env)
const WHMCS_URL = process.env.WHMCS_URL || '';
const WHMCS_API_IDENTIFIER = process.env.WHMCS_API_IDENTIFIER || '';
const WHMCS_API_SECRET = process.env.WHMCS_API_SECRET || '';

// Cache for TLD pricing (refreshed every hour)
let cachedPrices: Record<string, string> = {};
let pricesCacheTime = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

async function fetchWHMCSPricing(): Promise<Record<string, string>> {
  if (Date.now() - pricesCacheTime < CACHE_DURATION && Object.keys(cachedPrices).length > 0) {
    return cachedPrices;
  }

  if (!WHMCS_URL || !WHMCS_API_IDENTIFIER || !WHMCS_API_SECRET) {
    return FALLBACK_PRICES;
  }

  try {
    const params = new URLSearchParams({
      action: 'GetTLDPricing',
      identifier: WHMCS_API_IDENTIFIER,
      secret: WHMCS_API_SECRET,
      responsetype: 'json',
    });

    const response = await fetch(`${WHMCS_URL}/includes/api.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.result === 'success' && data.pricing) {
        const prices: Record<string, string> = {};

        for (const tld of TLDS) {
          const tldKey = tld.replace('.', '');
          if (data.pricing[tldKey]?.register?.[1]) {
            // Format price with comma as decimal separator
            const price = parseFloat(data.pricing[tldKey].register[1]).toFixed(2).replace('.', ',');
            prices[tld] = price;
          } else {
            prices[tld] = FALLBACK_PRICES[tld];
          }
        }

        cachedPrices = prices;
        pricesCacheTime = Date.now();
        return prices;
      }
    }
  } catch (error) {
    console.error('Failed to fetch WHMCS pricing:', error);
  }

  return FALLBACK_PRICES;
}

interface DomainResult {
  tld: string;
  available: boolean;
  price: string | null;
}

async function checkDomainWithWHMCS(domain: string, tld: string, prices: Record<string, string>): Promise<DomainResult> {
  // If WHMCS is configured, use the API
  if (WHMCS_URL && WHMCS_API_IDENTIFIER && WHMCS_API_SECRET) {
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
          price: isAvailable ? prices[tld] : null,
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
        price: !isTaken ? prices[tld] : null,
      };
    }
  } catch {
    // DNS check failed, assume available
  }

  // Final fallback: Mark as potentially available
  return {
    tld,
    available: true,
    price: prices[tld],
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

    // Fetch current pricing from WHMCS
    const prices = await fetchWHMCSPricing();

    // Check all TLDs in parallel
    const results = await Promise.all(
      TLDS.map((tld) => checkDomainWithWHMCS(cleanDomain, tld, prices))
    );

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
