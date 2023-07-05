---
chapter: 7
pageNumber: 52
---

# Do...While

do...while ifadesi, test koşulu yanlış olarak değerlendirilene kadar belirtilen bir ifadeyi yürüten bir döngü oluşturur. İfade yürütüldükten sonra koşul değerlendirilir. do... while için syntax (_sözdizimi_) şöyledir:

```javascript
do {
  // ifade
} while (expression);
```

Örneğin `do...while` döngüsünü kullanarak 10'dan küçük sayıların nasıl yazdırılacağını görelim:

```javascript
var i = 0;
do {
  document.write(i + " ");
  i++;
} while (i < 10);
```

> _**Note**_: `i = i + 1`, `i++` olarak yazılabilir.
