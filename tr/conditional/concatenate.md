---
chapter: 5
pageNumber: 35
---

# Concatenate (Birleştirme)

Bunların yanı sıra, farklı koşulları "`or`" veya "`and`" ifadeleriyle birleştirerek, sırasıyla ifadelerden birinin veya her ikisinin doğru olup olmadığını test edebilirsiniz.

JavaScript'te "or" `||` ve "and" `&&` olarak yazılır.

Diyelim ki x değerinin 10 ile 20 arasında olup olmadığını test etmek istiyorsunuz. Bunu aşağıdaki gibi yapabilirsiniz:

```javascript
if (x > 10 && x < 20) {
    ...
}
```

Eğer o ülkenin "İngiltere" ya da "Almanya" olduğundan emin olmak istiyorsanız:

```javascript
if (country === "England" || country === "Germany") {
    ...
}
```

> **Note**: Tıpkı sayılar üzerindeki işlemler gibi, koşullar da parantez kullanılarak gruplandırılabilir. Örneğin: `if ( (name === "John" || name === "Jennifer") && country === "France")`.
