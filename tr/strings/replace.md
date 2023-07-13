---
chapter: 4
pageNumber: 26
---

# Replace

`replace()` metodu, bir karakteri, kelimeyi veya cümleyi başka bir string ile değiştirmemize olanak tanır. Örneğin:

```javascript
let str = "Hello World!";
let new_str = str.replace("Hello", "Hi");

console.log(new_str);

// Sonuç: Hi World!
```

{% hint style="warning" %}
Bir [regular expression](../regular-expression.md) öğesinin tüm örneklerinde bir değeri `g` değiştiricisi ile değiştirmek için ayarlanır.{% endhint %}

Bir değer veya düzenli ifade için bir dize arar ve değer(ler)in değiştirildiği yeni bir dize döndürür. Orijinal dizeyi değiştirmez. Büyük/küçük harfe duyarsız global değiştirme örneğini görelim.

```javascript
let text = "Mr Blue has a blue house and a blue car";
let result = text.replace(/blue/gi, "red");

console.log(result);
//Sonuç: Mr red has a red house and a red car
```
