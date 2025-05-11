# Currency-Kit

**`currency-kit`** is a powerful, lightweight JavaScript package for formatting and abbreviating currency values. It supports multiple currencies, locales, and also allows abbreviation of large numbers (e.g., 1M, 1B). It’s perfect for building applications that need currency formatting and exchange rate handling.

## Features

- **Currency Formatting**: Format numbers into currency values (e.g., `$1,234.56`).
- **Abbreviation Support**: Abbreviate large numbers into compact forms (e.g., `1M`, `1B`).
- **Locale Support**: Format values according to different locales and currencies.
- **Customizable Options**: Control the number of decimal places, currency type, and more.

### Usage

1. Formatting Currency

You can use the formatCurrency function to format a number into a currency string.

Example:
javascript
Copy
Edit
import { formatCurrency } from 'currency-kit';

const formattedValue = formatCurrency(1234.56);
console.log(formattedValue); // Output: "$1,234.56"
Parameters:
value (number): The value to format.

options (object, optional): Configuration options for currency formatting:

locale (string): The locale (default: 'en-US').

currency (string): The currency type (default: 'USD').

abbreviation (boolean): Whether to abbreviate large numbers (default: false).

minimumFractionDigits (number): The minimum number of decimal places (default: 1).

maximumFractionDigits (number): The maximum number of decimal places (default: 2).

Example with options:
javascript
Copy
Edit
const formattedValue = formatCurrency(1234567.89, { locale: 'en-IN', currency: 'INR' });
console.log(formattedValue); // Output: "₹12,34,567.89"

1. Abbreviating Large Numbers

The abbreviateNumber function can be used to shorten large numbers into more readable forms (e.g., 1M, 1B).

Example:
javascript
Copy
Edit
import { abbreviateNumber } from 'currency-kit';

const { abbreviated, symbol } = abbreviateNumber(1500000);
console.log(`${abbreviated}${symbol}`); // Output: "1.5M"
Parameters:
value (number): The value to abbreviate.

1. Customizing Abbreviation Symbols (for INR, etc.)

If you need abbreviations in formats like cr (crore), lacs, etc., you can customize the abbreviate function to include those suffixes. Modify the abbreviateNumber function to add your specific suffixes.

javascript
Copy
Edit
export function abbreviateNumber(value: number): { abbreviated: number, symbol: string } {
  const suffixes = ['', 'K', 'M', 'B', 'T', 'Lacs', 'Cr'];
  let index = 0;
  while (value >= 1000 && index < suffixes.length - 1) {
    value /= 1000;
    index++;
  }
  return { abbreviated: parseFloat(value.toFixed(1)), symbol: suffixes[index] };
}

Contributing

Contributions are welcome! If you'd like to contribute to currency-kit, please follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature/your-feature).

Commit your changes (git commit -am 'Add new feature').

Push to your branch (git push origin feature/your-feature).

Create a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Example Use Cases

1. Displaying Currency in E-Commerce

In e-commerce platforms, where prices need to be displayed in different currencies and locales, currency-kit can help format the prices dynamically based on the user's locale and currency settings.

javascript
Copy
Edit
const price = 1999.99;
const formattedPrice = formatCurrency(price, { locale: 'de-DE', currency: 'EUR' });
console.log(formattedPrice); // Output: "1.999,99 €"
2. Abbreviating Large Numbers in Dashboards
In financial dashboards, large numbers like revenue or profits can be abbreviated for better readability.

javascript
Copy
Support

If you have any issues or need help, please open an issue in the GitHub repository*.*
const { abbreviated, symbol } = abbreviateNumber(revenue);
console.log(`${abbreviated}${symbol}`); // Output: "5M"
Support
If you have any issues or need help, please open an issue in the GitHub repository*.*
