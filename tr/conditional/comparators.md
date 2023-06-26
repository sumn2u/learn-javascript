---
chapter: 5
pageNumber: 34
---

# Comparators (Karşılaştırıcılar)

Şimdi koşul kısmına odaklanalım:

```javascript
if (country === "France") {
    ...
}
```

Yukarıdaki kodda koşullu kısım `country` değişkeni ve ardından gelen üç eşittir işaretinden (`===`) oluşuyor. Üç eşit işareti, `country` değişkeninin hem doğru değere (`France`) hem de doğru türe (`String`) sahip olup olmadığını test eder. Koşulları çift eşittir işaretiyle de test edebilirsiniz, ancak `if (x == 5)` gibi bir koşul, hem `var x = 5;` hem de `var x = "5";` için doğru sonucu döndürecektir. Programınızın yaptığı işe bağlı olarak, bu oldukça farklılık yaratabilir. Önerilen yaklaşım, eşitliği her zaman iki eşit işareti (`==` ve `!=`) yerine üç eşit işareti (`===` ve `!==`) ile karşılaştırmanızdır.

Diğer koşullu testler:

- `x > a`: x, a'dan büyük mü?
- `x < a`: x, a'dan küçük mü?
- `x <= a`: x, a'dan küçük veya a'ya eşit mi?
- `x >=a`: x, a'dan büyük veya a'ya eşit mi?
- `x != a`: x, a'ya eşit değil mi?
- `x`: x var mı?

## Logical Comparison (Mantıksal Karşılaştırma)

if-else karmaşasından kaçınmak için basit mantıksal karşılaştırmalar kullanılabilir.

```javascript
let topper = marks > 85 ? "YES" : "NO";
```

Yukarıdaki örnekte `?` mantıksal bir operatördür. Kod, marks değeri 85'ten büyükse, yani `marks > 85` ise `topper = YES`; aksi takdirde `topper = NO` olduğunu söyler. Temel olarak, karşılaştırma koşulunun doğru olduğu kanıtlanırsa, ilk argümana erişilir ve karşılaştırma koşulu yanlışsa, ikinci argümana erişilir. (bkz: [Ternary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator))
