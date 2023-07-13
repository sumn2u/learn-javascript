---
layout: editorial
chapter: 4
pageNumber: 23
---

# Bölüm 4

# Strings (Dizeler)

JavaScript dizeleri, diğer üst düzey dillerden string implementasyonları ile birçok benzerlik paylaşır. Metin tabanlı mesajlar ve verileri temsil ederler. Bu kursta, temelleri ele alacağız. Yeni dizeler nasıl oluşturulur ve bunlar üzerinde ortak işlemler nasıl yapılır.

Bir dizenin örneği:

```javascript
"Hello World";
```

Dizi indeksleri sıfır tabanlı, yani ilk karakterin başlangıç ​​pozisyonu `0` ve diğerleri artımlı sırayla takip eder. Dizi tarafından desteklenen çeşitli yöntemler yeni bir değer döndürür. Bu yöntemler aşağıda açıklanmıştır.

| Name                 | Description                                                                        |
| -------------------- | ---------------------------------------------------------------------------------- |
| `charAt()`           | Belirtilen indeksteki karakteri döndürür                                           |
| `charCodeAt()`       | Belirtilen indeksteki Unicode karakteri döndürür                                   |
| `concat()`           | İki veya daha fazla birleştirilmiş dizeyi döndürür                                 |
| `constructor`        | Dizenin constructor (_yapıcı_) fonksiyonunu döndürür                               |
| `endsWith()`         | Belirtilen bir değerle biten bir dize olup olmadığını kontrol eder                 |
| `fromCharCode()`     | Unicode değerlerini karakterler olarak döndürür                                    |
| `includes()`         | Belirtilen bir değerle bir dize içerip içermediğini kontrol eder                   |
| `indexOf()`          | İlk bulunan elemanın indeksini döndürür                                            |
| `lastIndexOf()`      | Son bulunan indeksini döndürür                                                     |
| `length`             | Dizinin uzunluğunu döndürür                                                        |
| `localeCompare()`    | Yerel ayar ile iki dize karşılaştırır                                              |
| `match()`            | Bir dize, bir değer veya normal ifade ile eşleştirilir                             |
| `prototype`          | Nesnenin özelliklerini ve yöntemini eklemek için kullanılır                        |
| `repeat()`           | Belirtilen sayıda kopya ile yeni bir string döndürür                               |
| `replace()`          | Değerleri normal bir ifade veya bir string ile bir dize ile değiştirerek döndürür  |
| `search()`           | Bir dizenin bir değer veya normal ifade ile eşleşmesine dayalı bir indeks döndürür |
| `slice()`            | Bir dizenin bir kısmını içeren bir string döndürür                                 |
| `split()`            | Bir dizeyi alt dizeler dizisine böler                                              |
| `startsWith()`       | Belirtilen karaktere karşı başlayan dizeleri kontrol eder                          |
| `substr()`           | Başlangıç ​​indeksinden itibaren dizinin bir kısmını çıkarır                       |
| `substring()`        | İki indeks arasında dizinin bir kısmını çıkarır                                    |
| `toLocalLowerCase()` | Host'un yerel ayarı kullanılarak küçük harfler içeren bir string döndürür          |
| `toLocalUpperCase()` | Host'un yerel ayarı kullanılarak büyük harfler içeren bir string döndürür          |
| `toLowerCase()`      | Bütün dizeyi küçük harflere döndürülmüş halini döndürür                            |
| `toString()`         | Dizeyi veya string nesnesini string olarak döndürür                                |
| `toUpperCase()`      | Bütün dizeyi büyük harflere döndürülmüş halini döndürür                            |
| `trim()`             | Boşlukların kaldırıldığı bir string döndürür                                       |
| `trimEnd()`          | Sondaki boşlukların kaldırıldığı bir string döndürür                               |
| `trimStart()`        | Başlangıçtaki boşlukların kaldırıldığı bir string döndürür                         |
| `valueOf()`          | String veya string nesnesini ilkel değer olarak döndürür                           |
