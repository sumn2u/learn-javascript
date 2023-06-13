---
layout: editorial
chapter: 6
pageNumber: 36
---

# Bölüm 6

# Diziler

Diziler, programlamanın temel bir parçasıdır. Bir dizi, verilerden oluşan bir listedir. Bir değişkende bir çok veriyi depolayabiliriz; bu da kodumuzu daha okunabilir ve anlaşılır kılar. Aynı zamanda ilgili veriler üzerinde işlem yapmayı da kolaylaştırır.

Dizilerdeki verilere **eleman** denir.

Basit bir dizi örneği:

```javascript
// 1, 1, 2, 3, 5, ve 8 dizinin elemanlarıdır.
let numbers = [1, 1, 2, 3, 5, 8];
```
Diziler `new` anahtar kelimesiyle veya dizi literalleri ile kolay bir şekilde oluşturulabilir.&#x20;

```javascript
const cars = ["Saab", "Volvo", "BMW"]; // dizi literalleri kullanarak
const cars = new Array("Saab", "Volvo", "BMW"); // `new` anahtar kelimesi kullanarak
```
Bir dizinin değerlerine erişmek için indeks numarası kullanılır. Bir dizideki ilk elemanın indeksi her zaman "0" ile başlar. İndeks numarası aynı zamanda bir dizideki elemanları değiştirmek için de kullanılır.

```javascript
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]); 
// Result: Saab

cars[0] = "Opel"; // dizinin ilk elemanını değiştirme
console.log(cars);
// Result: ['Opel', 'Volvo', 'BMW']
```

{% hint style="warning" %}
Diziler, özel bir nesne türüdür. Bir dizide [nesneler](../objects/) bulunabilir.
{% endhint %}

&#x20;Bir dizinin `length` özelliği, elemanlarının sayısını döndürür. Diziler tarafından desteklenen fonksiyonlar aşağıda sıralanmıştır:

| Name              | Description                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `concat()`        | İki veya daha fazla birleştirilmiş dizileri döndürür                                                                                              |
| `join()`          | Bir dizideki tüm elemanları bir *string*'e dönüştürüp, birleştirir                                                                                |
| `push()`          | Bir dizinin sonuna bir veya daha fazla eleman ekler ve uzunluğunu döndürür                                                                        |
| `pop()`           | Bir dizinin son elemanını kaldırır ve bu elemanı döndürür                                                                                         |
| `shift()`         | Bir dizinin ilk elemanını kaldırır ve bu elemanı döndürür                                                                                         |
| `unshift()`       | Bir dizinin başına bir veya daha fazla eleman ekler ve uzunluğunu döndürür                                                                        |
| `slice()`         | Bir dizinin bölümünü alır ve yeni bir dizi döndürür                                                                                               |
| `at()`            | Belirtilen indekste eleman varsa elemanı döndürür, yoksa `undefined` döndürür.                                                                    |
| `splice()`        | Bir diziden elemanları kaldırır, yerlerini değiştirir(opsiyonel) ve diziyi döndürür                                                               |
| `reverse()`       | Bir dizinin elemanlarını yerinde tersine çevirir ve dizinin referansını döndürür                                                                  |
| `flat()`          | Bir dizideki tüm alt dizilerin elemanlarını belirtilen bir derinliğe kadar birleştirerek yeni bir düz diziyi döndürür                             |
| `sort()`          | Bir dizinin elemanlarını yerinde sıralar ve diziye bir referans döndürür                                                                          |
| `indexOf()`       | Aranan elemanının ilk eşleştiği indeksini döndürür                                                                                                |
| `lastIndexOf()`   | Aranan elemanının son eşleştiği indeksi döndürür.                                                                                                 |
| `forEach()`       | Bir dizinin her elemanında bir *callback* işlevini yürütür ve `undefined` döndürür                                                                |
| `map()`           | Her dizi elemanı üzerinde `callback` çalıştırarak döndürülen değeri içeren yeni bir dizi döndürür.                                                |
| `flatMap()`       | Sırasıyla map() ve ardından 1 derinlikte flat() fonksiyonunu çalıştırır                                                                           |                          |
| `filter()`        | Verilen `callback` fonksiyonunda verilen şartı sağlayan elemanları bir dizi içerisinde döndürür                                                   |
| `find()`          | Verilen `callback` fonksiyonunda verilen şartı ilk sağlayan elemanı döndürür.                                                                     |
| `findLast()`      | Verilen `callback` fonksiyonunda verilen şartı son sağlayan elemanı döndürür.                                                                     |
| `findIndex()`     | Verilen `callback` fonksiyonunda verilen şartı ilk sağlayan elemanın indeksini döndürür.                                                          |
| `findLastIndex()` | Verilen `callback` fonksiyonunda verilen şartı son sağlayan elemanın indeksini döndürür.                                                          |
| `every()`         | Verilen `callback` fonksiyonunda verilen şartı dizinin tüm elemanları sağlıyorsa `true` döndürür.                                                 |                         |
| `some()`          | Verilen `callback` fonksiyonunda verilen şartı dizinin en az bir öğesi sağlıyorsa `true` döndürür.                                                |
| `reduce()`        | `reduce()` fonksiyonu, bir dizinin her bir elemanı üzerinde bir işlem yaparak diziyi tek bir değere dönüştürmek için kullanılan bir dizi yöntemidir.|
| `reduceRight()`   | `reduce()` fonksiyonu gibi çalışır fakat son elemandan başlar.                                                                                    |

