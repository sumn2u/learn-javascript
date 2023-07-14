---
chapter: 16
pageNumber: 84
description: History object manages the browser's history stack.
---

# Geçmiş

Bir web tarayıcısını açtığımızda ve bir web sayfasında gezindiğimizde, geçmiş belleğinde yeni bir girdi oluşturur. Farklı sayfalarda gezinmeye devam ettikçe yeni girdiler geçmiş belleğine eklenir.

Geçmiş objesine erişmek için şunları kullanabiliriz:

```javascript
window.history
// veya
history
```

Farklı geçmiş verileri arasında gezinmek için **history** objesinin `go()`, `foward()` ve `back()` fonksiyonlarını kullanabiliriz.  

1. **go\(\)**: Geçmiş belleğinin belirli URL'sinde gezinmek için kullanılır.

   ```javascript
   history.go(-1); // sayfayı geri taşır
   history.go(0);  // şu anki sayfayı yeniler
   history.go(); // şu anki sayfayı yeniler
   history.go(1) // sayfayı ileri taşır
   ```

   > _**Note:**_ geçmiş belleğindeki geçerli sayfa konumu **0**'dır.

2. **back\(\)** : Geriye gitmek için `back()` fonksiyonu kullanılır.

   ```javascript
   history.back();
   ```

3. **forward\(\)**: Tarayıcı geçmişindeki bir sonraki listeyi yükler. Tarayıcıdaki ileri düğmesine tıklamaya benzer.

   ```javascript
   history.forward();
   ```

