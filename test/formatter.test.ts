import { formatCurrency } from '../src/formatter';

describe('formatCurrency', () => {
  it('formats USD correctly', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56');
  });

  it('abbreviates large numbers in international system', () => {
    expect(formatCurrency(1500000, { abbreviation: true })).toBe('$1.5M');
  });

  it('supports different locale and currency', () => {
    expect(formatCurrency(1234.56, { locale: 'en-IN', currency: 'INR' })).toBe('₹1,234.56');
  });

  it('abbreviates large INR numbers in Indian system as Lakh', () => {
    expect(formatCurrency(1500000, {
      locale: 'en-IN',
      currency: 'INR',
      abbreviation: true,
      abbreviationSystem: 'indian'
    })).toBe('₹15.0L');
  });

  it('abbreviates very large INR numbers in Indian system as Crore', () => {
    expect(formatCurrency(25000000, {
      locale: 'en-IN',
      currency: 'INR',
      abbreviation: true,
      abbreviationSystem: 'indian'
    })).toBe('₹2.5Cr');
  });

  it('uses custom fraction digits', () => {
    expect(formatCurrency(999.999, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })).toBe('$1,000.00');
  });

  it('returns full number when abbreviation is false', () => {
    expect(formatCurrency(1000000, {
      abbreviation: false
    })).toBe('$1,000,000.00');
  });
});
