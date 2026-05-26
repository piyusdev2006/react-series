const rateFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 4,
});

export const currencyLabels = {
  usd: "US Dollar",
  eur: "Euro",
  gbp: "British Pound",
  inr: "Indian Rupee",
  jpy: "Japanese Yen",
  aud: "Australian Dollar",
  cad: "Canadian Dollar",
  cny: "Chinese Yuan",
  sgd: "Singapore Dollar",
};

export const popularCurrencies = [
  "usd",
  "eur",
  "gbp",
  "inr",
  "jpy",
  "aud",
  "cad",
];

export const formatRate = (value) => rateFormatter.format(value);
