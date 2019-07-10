import { gcd, highestFirst, formatAspectRatio } from "./utils";

export const calculateAspectRatio = (width, height): [number, number] => {
  const [x, y] = highestFirst(width, height);
  const divisor = gcd(x, y);
  return formatAspectRatio(width, height, divisor);
};
