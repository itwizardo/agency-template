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

// WHMCS API configuration
const WHMCS_URL = process.env.WHMCS_URL || 'https://billing.gwcwebdesign.com';
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

  if (!WHMCS_API_IDENTIFIER || !WHMCS_API_SECRET) {
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

export async function GET() {
  try {
    const prices = await fetchWHMCSPricing();

    // Convert to array format for the frontend
    const pricing = TLDS.map(tld => ({
      tld,
      price: prices[tld],
    }));

    return NextResponse.json({ pricing });
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch pricing' },
      { status: 500 }
    );
  }
}
