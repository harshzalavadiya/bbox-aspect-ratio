export const gcd = (a: number, b: number): number =>
  b === 0 ? a : gcd(b, a % b);

export const highestFirst = (a: number, b: number) => (a < b ? [b, a] : [a, b]);

export const formatAspectRatio = (
  w: number,
  h: number,
  divisor: number
): [number, number] => [w / divisor, h / divisor];
