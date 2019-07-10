import { calculateAspectRatio } from "./aspect-ratio";
import { absoluteDistance, normalizeBBox } from "./geo";

export enum SizeType {
  Width,
  Height
}

export const bBoxAspectRatio = (
  rawbbox: [number, number, number, number]
): [number, number] => {
  const bbox = normalizeBBox(rawbbox);

  const _width = absoluteDistance(bbox[0], bbox[2]);
  const _height = absoluteDistance(bbox[1], bbox[3]);

  return calculateAspectRatio(_width, _height);
};

export const calculateSize = (
  aspectRatio: [number, number],
  size: number,
  type: SizeType = SizeType.Width
) => {
  return Math.ceil(
    type === SizeType.Width
      ? (aspectRatio[1] * size) / aspectRatio[0]
      : (aspectRatio[0] * size) / aspectRatio[1]
  );
};
