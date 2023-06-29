// create USD formatter
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: 'USD', style: 'currency'
})
// create function to format input price
export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number);
}