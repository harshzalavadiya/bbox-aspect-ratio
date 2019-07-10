export const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

export const highestFirst = (a, b) => (a < b ? [b, a] : [a, b]);

export const formatAspectRatio = (w, h, divisor): [number, number] => [
  w / divisor,
  h / divisor
];
