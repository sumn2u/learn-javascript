# Sort

`sort` fonksiyonu, bir dizinin öğelerini belirli bir sıraya göre (artan veya azalan) sıralar.

`sort` kullanımı:

```c
array.sort([karşılaştırmaFonksiyonu]);
```

`karşılaştırmaFonksiyonu` argümanı isteğe bağlıdır ve sıralama düzenini tanımlayan bir fonksiyon belirtir. Atlanırsa, öğeler _string_ gösterimlerine göre artan sırada sıralanır.

Örneğin:

```javascript
let city = ["California", "Barcelona", "Paris", "Kathmandu"];
let sortedCity = city.sort();

console.log(sortedCity);

// Sonuç: ['Barcelona', 'California', 'Kathmandu', 'Paris']
```

{% hint style="info" %}
Sayılar sıralandığında yanlış sıralanabilirler. Örneğin, "35", "100"'den daha büyüktür, çünkü "3", "1"'den daha büyüktür.
{% endhint %}

Sayılardaki sıralama sorununu çözmek için karşılaştırma fonksiyonları kullanılır. Karşılaştırma fonksiyonları sıralama düzenlerini tanımlar. Değişkenlere göre **negatif**, **sıfır** veya **pozitif** bir değer döndürür:

- a, b'den önce sıralanmalı ise negatif bir değer
- a, b'den sonra sıralanmalı ise pozitif bir değer
- a ve b eşitse ve sıralamalarının bir önemi yoksa 0

```javascript
const puanlar = [40, 100, 1, 5, 25, 10];
puanlar.sort((a, b) => {
  return a - b;
});

// Sonuç: [1, 5, 10, 25, 40, 100]
```

{% hint style="warning" %}
`sort()` yöntemi, orijinal diziyi değiştirir.
{% endhint %}
