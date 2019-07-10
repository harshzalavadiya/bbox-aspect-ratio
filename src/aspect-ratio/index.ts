import { gcd, highestFirst, formatAspectRatio } from "./utils";

export const calculateAspectRatio = (height, width): [number, number] => {
  const [h, w] = highestFirst(height, width);
  const divisor = gcd(h, w);
  return formatAspectRatio(h, w, divisor);
};
