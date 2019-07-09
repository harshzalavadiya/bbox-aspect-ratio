import { gcd, highestFirst, formatAspectRatio } from "./utils";

const calculateAspectRatio = (height, width): [number, number] => {
  const [h, w] = highestFirst(height, width);
  const divisor = gcd(h, w);
  return formatAspectRatio(h, w, divisor);
};

export default calculateAspectRatio;
