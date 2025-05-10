export function abbreviateNumber(
  value: number,
  options: { system?: 'international' | 'indian' } = { system: 'international' }
): { abbreviated: number; symbol: string } {
  const system = options.system || 'international';

  if (system === 'indian') {
    if (value >= 1_00_00_000) {
      return { abbreviated: parseFloat((value / 1_00_00_000).toFixed(1)), symbol: 'Cr' };
    } else if (value >= 1_00_000) {
      return { abbreviated: parseFloat((value / 1_00_000).toFixed(1)), symbol: 'L' };
    } else if (value >= 1_000) {
      return { abbreviated: parseFloat((value / 1_000).toFixed(1)), symbol: 'K' };
    } else {
      return { abbreviated: value, symbol: '' };
    }
  } else {
    const suffixes = ['', 'K', 'M', 'B', 'T'];
    let index = 0;
    while (value >= 1000 && index < suffixes.length - 1) {
      value /= 1000;
      index++;
    }
    return { abbreviated: parseFloat(value.toFixed(1)), symbol: suffixes[index] };
  }
}
