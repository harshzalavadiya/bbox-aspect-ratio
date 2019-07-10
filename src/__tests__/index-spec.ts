import { bBoxAspectRatio, calculateSize } from "..";

test("Bounding Box Aspect Ratio", () => {
  const aspectRatio = bBoxAspectRatio([73.91, 25.91, 83.8, 21.49]);
  expect(aspectRatio).toEqual([989, 442]);
});

test("Bounding Box Aspect Ratio", () => {
  const aspectRatio = bBoxAspectRatio([
    74.619140625,
    28.149503211,
    80.463867187,
    17.476432197
  ]);
  expect(aspectRatio).toEqual([106731, 58447]);
});

test("Height from Aspect Ratio", () => {
  const aspectRatio = bBoxAspectRatio([73.91, 25.91, 83.8, 21.49]);
  const aspectRatioHeight = calculateSize(aspectRatio, 80);
  expect(aspectRatioHeight).toBe(36);
});

test("Height from Aspect Ratio", () => {
  const aspectRatio = bBoxAspectRatio([
    74.619140625,
    28.149503211,
    80.463867187,
    17.476432197
  ]);
  const aspectRatioHeight = calculateSize(aspectRatio, 50);
  expect(aspectRatioHeight).toEqual(28);
});
