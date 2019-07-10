import { bBoxAspectRatio, calculateSize, SizeType } from "..";

test("Test Case 1", () => {
  const aspectRatio = bBoxAspectRatio([76.20742, 11.59426, 76.86794, 11.95073]);
  expect(aspectRatio).toEqual([1321, 713]);

  const sizeByWidth = calculateSize(aspectRatio, 50, SizeType.Width);
  expect(sizeByWidth).toEqual(27);

  const sizeByHeight = calculateSize(aspectRatio, 50, SizeType.Height);
  expect(sizeByHeight).toEqual(93);
});

test("Test Case 2", () => {
  const aspectRatio = bBoxAspectRatio([
    74.619140625,
    28.149503211,
    80.463867187,
    17.476432197
  ]);
  expect(aspectRatio).toEqual([58447, 106731]);

  const sizeByWidth = calculateSize(aspectRatio, 50, SizeType.Width);
  expect(sizeByWidth).toEqual(92);

  const sizeByHeight = calculateSize(aspectRatio, 50, SizeType.Height);
  expect(sizeByHeight).toEqual(28);
});
