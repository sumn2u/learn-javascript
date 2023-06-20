---
layout: editorial
chapter: 16
pageNumber: 79
---

# Bölüm 16
# Browser Object Model

Tarayıcı obje modeli (Browser Object Model), tarayıcı penceresi ile etkileşim kurmamızı sağlar. `window` objesi tarayıcının penceresini temsil eder ve tüm tarayıcılar tarafından desteklenir.

`window`, tarayıcı için varsayılan objedir, bu nedenle tüm fonksiyonları doğrudan çağırabiliriz.

```javascript
window.alert("Welcome to Learn JavaScript");  

alert("Welcome to Learn JavaScript")
```

Benzer bir şekilde, history, screen, navigator, location gibi diğer özellikleri de window objesinin altında çağırabiliriz.


