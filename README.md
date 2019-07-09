# Bounding Box Aspect Ratio

Calculate aspect ration from bounding box

## 🔧 Installation

```sh
npm i bbox-aspect-ratio
```

## 📦 Usage

```javascript
import bBoxAspectRatio, {
  calculateSizeFromAspectRatio
} from "bbox-aspect-ratio";

// Get aspect ratio
const aspectRatio = bBoxAspectRatio([73.91, 25.91, 83.8, 21.49]); // [989, 492]

const aspectRatioHeight = calculateSizeFromAspectRatio(aspectRatio, 80); // 40
```
