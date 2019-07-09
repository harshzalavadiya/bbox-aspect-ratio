# Bounding Box Aspect Ratio

Calculate aspect ration from bounding box

## 🔧 Installation

```sh
npm i bbox-aspect-ratio
```

## 📦 Usage

```javascript
import { bBoxAspectRatio, calculateSize } from "bbox-aspect-ratio";

// Get aspect ratio
const aspectRatio = bBoxAspectRatio([73.91, 25.91, 83.8, 21.49]); // [989, 492]

// Determine height/width keeping aspect ratio
const aspectRatioHeight = calculateSize(aspectRatio, 80); // 40 → 80x40
```
