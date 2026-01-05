import { NextResponse } from 'next/server';

// WHMCS API configuration
const WHMCS_URL = process.env.WHMCS_URL || 'https://billing.gwcwebdesign.com';
const WHMCS_API_IDENTIFIER = process.env.WHMCS_API_IDENTIFIER || '';
const WHMCS_API_SECRET = process.env.WHMCS_API_SECRET || '';

// Cache for product pricing (refreshed every hour)
let cachedProducts: ProductPricing[] = [];
let productsCacheTime = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

interface ProductPricing {
  pid: number;
  name: string;
  priceMonthly: string;
  priceYearly: string;
  originalYearly: string; // Monthly * 12 for comparison
}

// Fallback prices if WHMCS unavailable
const FALLBACK_PRODUCTS: ProductPricing[] = [
  { pid: 1, name: 'Starter', priceMonthly: '4,99', priceYearly: '49,90', originalYearly: '59,88' },
  { pid: 2, name: 'Business', priceMonthly: '9,99', priceYearly: '99,90', originalYearly: '119,88' },
  { pid: 3, name: 'Premium', priceMonthly: '19,99', priceYearly: '199,90', originalYearly: '239,88' },
];

function formatPrice(price: number): string {
  return price.toFixed(2).replace('.', ',');
}

async function fetchWHMCSProducts(): Promise<ProductPricing[]> {
  // Return cached data if still valid
  if (Date.now() - productsCacheTime < CACHE_DURATION && cachedProducts.length > 0) {
    return cachedProducts;
  }

  if (!WHMCS_API_IDENTIFIER || !WHMCS_API_SECRET) {
    return FALLBACK_PRODUCTS;
  }

  try {
    const params = new URLSearchParams({
      action: 'GetProducts',
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

      if (data.result === 'success' && data.products?.product) {
        const products: ProductPricing[] = [];

        for (const product of data.products.product) {
          const pid = parseInt(product.pid);

          // Only include our hosting products (pids 1, 2, 3)
          if (pid >= 1 && pid <= 3) {
            // Get monthly price
            let monthlyPrice = 0;
            let yearlyPrice = 0;

            // Parse pricing from WHMCS response
            if (product.pricing?.EUR) {
              const eurPricing = product.pricing.EUR;

              // Monthly price
              if (eurPricing.monthly) {
                monthlyPrice = parseFloat(eurPricing.monthly) || 0;
              }

              // Yearly price
              if (eurPricing.annually) {
                yearlyPrice = parseFloat(eurPricing.annually) || 0;
              }
            }

            // Calculate original yearly (monthly * 12)
            const originalYearly = monthlyPrice * 12;

            products.push({
              pid,
              name: product.name || `Package ${pid}`,
              priceMonthly: formatPrice(monthlyPrice),
              priceYearly: formatPrice(yearlyPrice),
              originalYearly: formatPrice(originalYearly),
            });
          }
        }

        // Sort by pid
        products.sort((a, b) => a.pid - b.pid);

        if (products.length > 0) {
          cachedProducts = products;
          productsCacheTime = Date.now();
          return products;
        }
      }
    }
  } catch (error) {
    console.error('Failed to fetch WHMCS products:', error);
  }

  return FALLBACK_PRODUCTS;
}

export async function GET() {
  try {
    const products = await fetchWHMCSProducts();
    return NextResponse.json({ products });
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch pricing' },
      { status: 500 }
    );
  }
}
