---
chapter: 16
pageNumber: 101
description: The screen object contains the information about the screen on which the current window is being rendered. It allows developers to access properties related to the user's screen size, resolution, color depth, and other display-related information.
---
# Screen

The `screen` object contains the information about the screen on which the current window is being rendered. To access `screen` object we can use the `screen` property of `window` object.

```javascript
window.screen
//or
screen
```

The `window.screen` object has different properties, some of them are listed here:

| Property       | Description                                                                       |
| -------------- | --------------------------------------------------------------------------------- |
| `availTop`     | A read-only property that returns the first pixel from the top that is not taken up by system elements. |
| `availWidth`   | A read-only property that returns the pixel width of the screen excluding system elements. |
| `colorDepth`   | A read-only property that returns the number of bits used to represent colors.    |
| `height`       | Represents the pixel height of the screen.                                         |
| `left`         | Represents the pixel distance of the current screen’s left side.                   |
| `orientation`  | Returns the screen orientation as specified in the Screen Orientation API.         |
| `pixelDepth`   | A read-only property that returns the bit depth of the screen.                     |
| `top`          | Represents the pixel distance of the current screen’s top.                         |
| `width`        | Represents the pixel width of the screen.                                          |




