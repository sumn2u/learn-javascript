---
chapter: 3
pageNumber: 17
---

# Math

`Math` objesi JavaScript'te matematiksel işlemlerin gerçekleştirilmesini sağlar. Statiktir ve bir yapıcısı (**constructor**) yoktur. Math objesi oluşturmadan Math objesinin fonksiyonlarını kullanılabilirsiniz. Bazı matematik özellikleri aşağıda açıklanmıştır:

```javascript
Math.E; // Euler sayısını döndürür
Math.PI; // PI değerini döndürür
Math.SQRT2; // 2'nin karekökünü döndürür
Math.SQRT1_2; // 1/2'nin karekökünü döndürür
Math.LN2; // 2'nin doğal logaritmasını döndürür
Math.LN10; // 10'un doğal logaritmasını döndürür
Math.LOG2E; // E'nin 2 tabanında logaritmasını döndürür
Math.LOG10E; // E'nin 10 tabanında logaritmasını döndürür
```

Bazı matematik yöntemlerine örnek olarak şunlar verilebilir:

```javascript
Math.pow(8, 2); // 64
Math.round(4.6); // 5
Math.ceil(4.9); // 5
Math.floor(4.9); // 4
Math.trunc(4.9); // 4
Math.sign(-4); // -1
Math.sqrt(64); // 8
Math.abs(-4.7); // 4.7
Math.sin((90 * Math.PI) / 180); // 1 (the sine of 90 degrees)
Math.cos((0 * Math.PI) / 180); // 1 (the cos of 0 degrees)
Math.min(0, 150, 30, 20, -8, -200); // -200
Math.max(0, 150, 30, 20, -8, -200); // 150
Math.random(); // 0.44763808380924375
Math.log(2); // 0.6931471805599453
Math.log2(8); // 3
Math.log10(1000); // 3
```

Matematik metoduna erişmek için, gerektiğinde argümanlarla doğrudan metotları çağrılabilir.

| Method             | Description                                                                        |
| ------------------ | ---------------------------------------------------------------------------------- |
| `abs(x)`           | `x`'in mutlak değerini döndürür                                                    |
| `acos(x)`          | `x`'in arkkosinüs değerini radyan cinsinden döndürür                               |
| `acosh(x)`         | `x`'in hiperbolik arkkosinüsünü döndürür                                           |
| `asin(x)`          | `x`'in radyan cinsinden arksinüsünü döndürür                                       |
| `asinh(x)`         | `x`'in hiperbolik arksinüsünü döndürür                                             |
| `atan(x)`          | `x`'in arktanjantını `-PI/2` ile `PI/2` arasında sayısal bir değer olarak döndürür |
| `atan2(y,x)`       | İki argümanın bölümünün arktanjantını döndürür                                     |
| `atanh(x)`         | `x`'in hiperbolik arktanjantını döndürür                                           |
| `crbt(x)`          | `x`'in küp kökünü döndürür                                                         |
| `ceil(x)`          | `x`'in en yakın üst tam sayıya yuvarlanmış hâlini döndürür                         |
| `cos(x)`           | `x`'in kosinüsünü radyan cinsinden döndürür                                        |
| `cosh(x)`          | `x`'in hiperbolik kosinüsünü döndürür                                              |
| `exp(x)`           | `x`'in üstel fonksiyonunu döndürür                                                 |
| `floor(x)`         | `x`'in en yakın alt tam sayıya yuvarlanmış hâlini döndürür                         |
| `log(x)`           | `x`'in doğal logaritmasını döndürür                                                |
| `max(x,y,z,... n)` | En yüksek değere sahip olan sayıyı döndürür                                        |
| `min(x,y,z,... n)` | En düşük değere sahip olan sayıyı döndürür                                         |
| `pow(x,y)`         | x'in y. kuvvetini döndürür                                                         |
| random()           | 0 ile 1 arasında bir sayı döndürür                                                 |
| round(x)           | Sayıyı en yakın tam sayıya yuvarlar                                                |
| sign(x)            | x negatifse -1, 0 ise null, pozitifse 1 döndürür                                   |
| sin(x)             | x'in sinüsünü radyan cinsinden döndürür                                            |
| sinh(x)            | x'in hiperbolik sinüsünü döndürür                                                  |
| sqrt(x)            | x'in karekökünü döndürür                                                           |
| tan(x)             | Bir açının tanjantını döndürür                                                     |
| tanh(x)            | x'in hiperbolik tanjantını döndürür                                                |
| trunc(x)           | Bir sayının tam kısmını döndürür                                                   |
