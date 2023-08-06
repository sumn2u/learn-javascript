---
layout: editorial
chapter: 11
pageNumber: 66
---

# Bölüm 11
# JSON
**J**ava**S**cript **O**bject **N**otation (JSON), verileri depolamak ve taşımak için kullanılan metin tabanlı bir formattır. JavaScript nesneleri kolayca JSON'a dönüştürülebilir ve bunun tersi de mümkündür. Örneğin:

```javascript
//  Bir Javascript objesi
let myObj = { name:"Ahmet", age:30, city:"Ankara" };

// JSON'a dönüştürme
let myJSON = JSON.stringify(myObj);
console.log(myJSON);
// Result: '{"name":"Ahmet","age":30,"city":"Ankara"}'

// JSON'dan Javascript objesine dönüştürme
let originalJSON = JSON.parse(myJSON);
console.log(originalJSON);

// Result: {name: 'Ahmet', age: 30, city: 'Ankara'}
```



JSON tarafından desteklenen iki yöntem vardır: `stringify` ve `parse`.

| Method        | Description                                            |
| ------------- | ------------------------------------------------------ |
| `parse()`     | Parçalanmış JSON string'inden JavaScript objesini döndürür. |
| `stringify()` | JavaScript Objesinden JSON string döndürür.            |



JSON tarafından desteklenen veri tipleri şunlardır:


* string (dize)
* number (sayı)
* array (dizi)
* boolean (mantıksal değer)
* JSON değerleriyle geçerli olan obje
* null (boş değer)

Ancak `fonksiyon`, `date`(tarih) veya `undefined` (tanımsız) JSON formatında desteklenmez.

