---
layout: editorial
chapter: 7
pageNumber: 49
---

# Bölüm 7

# Loops

Döngüler, döngüdeki bir değişkenin değişmesiyle gerçekleşen tekrarlayan koşullardır. Aynı kodu her seferinde farklı bir değerle tekrar tekrar çalıştırmak istiyorsanız döngüler kullanışlıdır.

Bunu yapmak yerine:

```javascript
doThing(cars[0]);
doThing(cars[1]);
doThing(cars[2]);
doThing(cars[3]);
doThing(cars[4]);
```

Bunun gibi yapabilirsiniz.

```javascript
for (var i = 0; i < cars.length; i++) {
  doThing(cars[i]);
}
```
