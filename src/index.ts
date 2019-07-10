import { calculateAspectRatio } from "./aspect-ratio";
import { absoluteDistance, normalizeBBox } from "./geo";

export const bBoxAspectRatio = (
  rawbbox: [number, number, number, number]
): [number, number] => {
  const bbox = normalizeBBox(rawbbox);

  const _width = absoluteDistance(bbox[0], bbox[2]);
  const _height = absoluteDistance(bbox[1], bbox[3]);

  return calculateAspectRatio(_width, _height);
};

export const calculateSize = (aspectRatio: [number, number], width: number) => {
  return Math.ceil((aspectRatio[1] * width) / aspectRatio[0]);
};
