---
chapter: 16
pageNumber: 85
description: History object manages the browser's history stack. As we navigate to pages new entries get pushed into the stack.
---

# History

When we open a web browser and surf a web page it creates a new entry in the history stack. As we keep navigating to different pages new entries get pushed into the stack. 

To access the history object we can use

```javascript
window.history
// or
history
```

To navigate  between the different history stack we can use   `go()` , `foward()` and  `back()`methods of **history** object.  

1. **go\(\)**: It is used to navigate the specific URL of the history stack.

   ```javascript
   history.go(-1); // moves page backward
   history.go(0);  // refreshes the current page
   history.go(); // refreshes the current page
   history.go(1) // moves page forward
   ```

   > _**Note:**_ the current  page position in history stack is  **0**.

2. **back\(\)** : To navigate page backward we use `back()` method.

   ```javascript
   history.back();
   ```

3. **forward\(\)**: It loads the next list in the browser history. It is similar to clicking the forward button in the browser.

   ```javascript
   history.forward();
   ```

