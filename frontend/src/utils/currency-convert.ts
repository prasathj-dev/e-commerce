export const formatCurrency = (amount: number): string =>
  `€${(amount / 100).toFixed(2)}`;
