# Bounding Box Aspect Ratio

Calculate aspect ration from bounding box

## 🔧 Installation

```sh
npm i bbox-aspect-ratio
```

## 📦 Usage

```javascript
import { bBoxAspectRatio, calculateSize, SizeType } from "bbox-aspect-ratio";

// Get aspect ratio
const topRight = [76.20742, 11.59426];
const bottomLeft = [76.86794, 11.95073];
const aspectRatio = bBoxAspectRatio([...topRight, ...bottomLeft]);
console.log(aspectRatio); // [1321, 713]

// Calculate size by width
const sizeByWidth = calculateSize(aspectRatio, 50, SizeType.Width);
console.log(sizeByWidth); // 27 → w: 50, h: 27

// Calculate size by height
const sizeByHeight = calculateSize(aspectRatio, 50, SizeType.Height);
console.log(sizeByWidth); // 93 → w: 93, h: 50
```
