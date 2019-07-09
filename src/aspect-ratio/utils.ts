export const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

export const highestFirst = (a, b) => (a < b ? [b, a] : [a, b]);

export const formatAspectRatio = (h, w, divisor): [number, number] => [
  h / divisor,
  w / divisor
];
