export const normalizeBBox = (bbox: number[]) => bbox.map(n => Math.ceil(n * 10000));

export const absoluteDistance = (a, b) => (a > b ? a - b : b - a);
