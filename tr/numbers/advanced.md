---
chapter: 3
pageNumber: 21
---

# Advanced Operators (İleri Düzey Operatörler)

Operatörler parantez olmadan bir araya getirildiklerinde, uygulanma sıraları operatörlerin _önceliği_ tarafından belirlenir. Çarpma `(*)` ve bölme `(/)`, toplama `(+)` ve çıkarmadan `(-)` daha yüksek önceliğe sahiptir.

```javascript
// önce çarpma işlemi, daha sonra toplama işlemi yapılır
let x = 100 + 50 * 3; // 250
// parantez içindeki işlemler önce hesaplanır
let y = (100 + 50) * 3; // 450
// aynı önceliğe sahip işlemler soldan sağa doğru hesaplanır
let z = (100 / 50) * 3;
```

Kod yazarken çeşitli gelişmiş matematik operatörleri kullanılabilir. İşte bazı ileri düzey matematik operatörlerinin bir listesi:

- **Modulo (Kalan) operatörü (`%`)**: Modulo operatörü, bir bölme işleminin kalanını döndürür. Örneğin:

```javascript
console.log(10 % 3); // 1
console.log(11 % 3); // 2
console.log(12 % 3); // 0
```

- **Üs alma operatörü (\* \*)**: Üs alma operatörü bir sayıyı başka bir sayının kuvvetine yükseltir. Daha yeni bir operatördür ve tüm tarayıcılarda desteklenmez, bu nedenle bunun yerine `Math.pow` işlevini kullanmanız gerekebilir. Örneğin:

```javascript
console.log(2 ** 3); // 8
console.log(3 ** 2); // 9
console.log(4 ** 3); // 64
```

- **Arttırma operatörü (`++`)**: Arttırma operatörü bir sayıyı bir artırır. Kullanılacak elemanın önüne veya sonuna eklenebilir. Örneğin:

```javascript
let x = 1;
x++; // x is now 2
++x; // x is now 3
```

- **Azaltma operatörü (`--`)**: Azaltma operatörü bir sayıyı bir azaltır. Kullanılacak elemanın önüne veya sonuna eklenebilir. Örneğin:

```javascript
let y = 3;
y--; // y is now 2
--y; // y is now 1
```

- **Math objesi**: `Math` objesi, JavaScript'te matematiksel fonksiyonlar ve sabit değerler sağlayan hazır bir objedir. Bir sayının karekökünü bulmak, bir sayının sinüsünü hesaplamak veya rastgele bir sayı oluşturmak gibi ileri düzey matematik işlemleri gerçekleştirmek için `Math` objesinin fonksiyonlarını kullanabilirsiniz. Örneğin:

```javascript
console.log(Math.sqrt(9)); // 3
console.log(Math.sin(0)); // 0
console.log(Math.random()); //0 ile 1 arasında rastgele bir sayı
```

Bunlar JavaScript'te bulunan ileri düzey matematik operatörleri ve fonksiyonlarına sadece birkaç örnek. Program yazarken ileri düzey matematik işlemleri gerçekleştirmek için kullanabileceğiniz çok daha fazlası vardır.

{% exercise %}
`num1` ve `num2` üzerinde işlem yapmak için aşağıdaki ileri düzey operatörleri kullanın.

{% initial %}
let num1 = 10;
let num2 = 5;

// num1'in değerini artırmak için ++ operatörünü kullanın.
const result1 =
// num2'nin değerini azaltmak için -- operatörünü kullanın.
const result2 =
// num2'yi num1'e eklemek için += operatörünü kullanın.
const result3 =
// num2'yi num1'den çıkarmak için -= operatörünü kullanın.
const result4 =

{% solution %}
let num1 = 10;
let num2 = 5;

// ++ operator to increment the value of num1.

num1++;
const result1 = num1; // 11
// -- operator to decrement the value of num2.
num2--;
const result2 = num2; // 4
// += operator to add num2 to num1.
num1 += num2;
const result3 = num1 // 15
// -= operator to subtract num2 from num1.
num1 -= num2;
const result4 = num1 // 11

{% validation %}
assert(result1 === 11 && result2 === 4 && result3 === 15 && result4 === 11 );

{% context %}
{% endexercise %}

## Nullish coalescing operator '??'

`nullish coalescing operator`, `null/undefined` değilse ilk argümanı, `null/undefined` ise ikincisini döndürür. İki soru işareti `??` olarak yazılır. `x ?? y`'nin sonucu şudur:

- eğer `x` tanımlanmışsa, o zaman `x`,
- eğer `y` tanımlanmamışsa, o zaman `y`.

{% hint style="info" %}
Dile yeni eklenmiştir ve eski tarayıcıların desteklemesi için polyfills'e ihtiyaç duyabilir.
{% endhint %}
