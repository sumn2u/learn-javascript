---
chapter: 19
pageNumber: 101
---

# Global footprint

Başka modüllerin de çalıştığı bir web sayfasında çalışabilecek bir modül geliştiriyorsanız, değişken adlarının çakışmasına dikkat etmeniz gerekir.

Bir sayaç modülü geliştirdiğimizi varsayalım:

```javascript
let myCounter = {
  number: 0,
  plusPlus: function () {
    this.number = this.number + 1;
  },
  isGreaterThanTen: function () {
    return this.number > 10;
  },
};
```

> _**Note:**_ Bu teknik, dahili durumu dışarıdan değişmez kılmak için genellikle closure'larla birlikte kullanılır.

Modül artık sadece bir değişken adı alıyor - `myCounter`. Eğer sayfadaki başka bir modül `number` veya `isGreaterThanTen` gibi isimler kullanıyorsa, bu tamamen güvenlidir çünkü birbirlerinin değerlerini geçersiz kılmayacaklardır.
