import { gcd, highestFirst, formatAspectRatio } from "./utils";

export const calculateAspectRatio = (
  width: number,
  height: number
): [number, number] => {
  const [x, y] = highestFirst(width, height);
  const divisor = gcd(x, y);
  return formatAspectRatio(width, height, divisor);
};
