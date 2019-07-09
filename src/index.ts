import { BBox, point } from "@turf/helpers";
import bboxPolygon from "@turf/bbox-polygon";
import distance from "@turf/distance";

import aspectRatio from "./aspect-ratio";

const bBoxAspectRatio = (bbox: BBox): [number, number] => {
  const _bboxPolygon = bboxPolygon(bbox);
  const _coordinates = _bboxPolygon.geometry.coordinates[0];

  var _height = distance(point(_coordinates[0]), point(_coordinates[3]));
  var _width = distance(point(_coordinates[0]), point(_coordinates[1]));

  return aspectRatio(Math.ceil(_width), Math.ceil(_height));
};

export const calculateSizeFromAspectRatio = (
  aspectRatio: [number, number],
  width: number
) => {
  return Math.ceil((aspectRatio[1] * width) / aspectRatio[0]);
};

export default bBoxAspectRatio;
