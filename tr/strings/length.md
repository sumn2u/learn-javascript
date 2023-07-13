---
chapter: 4
pageNumber: 27
---

# Length (Uzunluk)

JavaScript'te bir dizenin içindeki karakter sayısını `.length` özelliğini kullanarak bilmek kolaydır. `length` özelliği, boşluklar ve özel karakterler dahil olmak üzere dizedeki karakter sayısını döndürür.

```javascript
let size = "Our lovely string".length;
console.log(size);
// size: 17

let emptyStringSize = "".length;
console.log(emptyStringSize);
// emptyStringSize: 0
```

Boş bir dizenin length özelliği `0`'dır.&#x20;

{% hint style="warning" %}
`length` özelliği salt okunur bir özelliktir, bu nedenle ona yeni bir değer atayamazsınız.
{% endhint %}
