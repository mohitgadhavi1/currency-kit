import { abbreviateNumber } from './abbreviate';

interface FormatOptions {
  locale?: string;
  currency?: string;
  abbreviation?: boolean;
  abbreviationSystem?: 'international' | 'indian'; // 🔧 New
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
}

export function formatCurrency(
  value: number,
  options: FormatOptions = {}
): string {
  const {
    locale = 'en-US',
    currency = 'USD',
    abbreviation = false,
    abbreviationSystem = 'international', // 🔧 New default
    minimumFractionDigits = 1,
    maximumFractionDigits = 2,
  } = options;

  let displayValue = value;
  let suffix = '';

  if (abbreviation) {
    const { abbreviated, symbol } = abbreviateNumber(value, { system: abbreviationSystem });
    displayValue = abbreviated;
    suffix = symbol;
  }

  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  });

  return formatter.format(displayValue) + suffix;
}
