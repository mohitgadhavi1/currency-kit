export { formatCurrency } from "./formatter";
import currencies from './currencies.json';


export function getCurrencyDetails(code: string) {
  return currencies.find(c => c.code === code.toUpperCase());
}
