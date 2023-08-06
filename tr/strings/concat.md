---
chapter: 4
pageNumber: 28
---

# Concatenation (Birleştirme)

Birleştirme, iki veya daha fazla dizeyi (_string_) birbirine ekleme işlemidir. Bu, orijinal dizeler içerdiği verileri birleştiren daha büyük bir dize oluşturmak anlamına gelir. Bir dizenin birleştirme, bir dizene bir veya daha fazla dize eklemektir. JavaScript'te bunu aşağıdaki yollarla yapabilirsiniz:

- `+` operatörünü kullanarak
- `concat()` fonksiyonunu kullanarak
- Dizi `join()` fonksiyonunu kullanarak
- Şablon literalini (ES6'da tanıtıldı) kullanarak

Dize `concat()` yöntemi, parametre olarak bir dizi dize alır ve tüm dizeleri birleştirerek yeni bir dize döndürür. Dizi `join()` yöntemi ise, bir dizideki tüm öğeleri tek bir dizeye dönüştürerek ekler.&#x20;

Şablon literali, ters eğik çizgi (```)` kullanır ve çok satırlı dizeler oluşturmanın ve dize ara değişkenlerini kullanmanın kolay bir yoludur. Bir ifade, ters eğik çizginin içinde dolar işareti ve süslü parantezler `{expression}` kullanılarak kullanılabilir.

```javascript
const icon = "👋";
// Şablon Dizeleri kullanarak
`hi ${icon}`;

// join() Metodunu kullanarak
["hi", icon].join(" ");

// concat() Metodunu kullanarak
"".concat("hi ", icon);

// + operatörünü kullanarak
"hi " + icon;
// hi 👋
```
