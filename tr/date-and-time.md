---
layout: editorial
chapter: 10
pageNumber: 64
---

# Bölüm 10

# Date and Time (Tarih ve Saat)

`date` nesnesi tarih ve saati depolar ve onu yönetmek için yöntemler sağlar. Tarih nesneleri statiktir ve varsayılan bir tarayıcı zaman dilimini kullanarak tam metinli bir dize olarak tarihi görüntüler.
`date` oluşturmak için `new Date()` yapıcısını kullanırız ve aşağıdaki şekillerde oluşturulabilir:

```javascript
new Date()
new Date(date string)
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds)
```

{% hint style="warning" %}
Aylar `0` ile `11` arasında belirtilebilir, daha fazlası bir sonraki yıla akacaktır.
{% endhint %}

`date` tarafından desteklenen yöntemler ve özellikleri aşağıda açıklanmaktadır:

| Name                   | Description                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------- |
| `constructor`          | `Date` nesnesinin prototipini oluşturan işlevi döndürür                                        |
| `getDate()`            | Bir ayın 1-31. gününü döndürür                                                                 |
| `getDay()`             | Bir haftanın 0-6. gününü döndürür                                                              |
| `getFullYear()`        | 4 basamaklı yılı döndürür                                                                      |
| `getHours()`           | 0-23 saatini döndürür                                                                          |
| `getMilliseconds()`    | 0-999 milisaniyeyi döndürür                                                                    |
| `getMinutes()`         | 0-59 dakikaları döndürür                                                                       |
| `getMonth()`           | 0-11 ayı döndürür                                                                              |
| `getSeconds()`         | 0-59 saniyeleri döndürür                                                                       |
| `getTime()`            | 1970 Ocak 1'den beri milisaniye cinsinden belirli bir tarihin sayısal değerini döndürür        |
| `getTimezoneOffset()`  | Dakika cinsinden zaman dilimi ofsetini döndürür                                                |
| `getUTCDate()`         | Evrensel zamana göre bir ayın 1-31. gününü döndürür                                            |
| `getUTCDay()`          | Evrensel zamana göre 0-6. günü döndürür                                                        |
| `getUTCFullYear()`     | Evrensel zamana göre 4 basamaklı yılı döndürür                                                 |
| `getUTCHours()`        | Evrensel zamana göre 0-23 saatini döndürür                                                     |
| `getUTCMilliseconds()` | Evrensel zamana göre 0-999 milisaniyeyi döndürür                                               |
| `getUTCMinutes()`      | Evrensel zamana göre 0-59 dakikaları döndürür                                                  |
| `getUTCMonth()`        | Evrensel zamana göre 0-11 ayı döndürür                                                         |
| `getUTCSeconds()`      | Evrensel zamana göre 0-59 saniyeleri döndürür                                                  |
| `now()`                | 1970 Ocak 1'den beri milisaniye cinsinden sayısal değeri döndürür                              |
| `parse()`              | Tarih dizesini ayrıştırır ve 1970 Ocak 1'den beri milisaniye cinsinden sayısal değeri döndürür |
| `prototype`            | Özellikler eklemek için izin verir                                                             |
| `setDate()`            | Bir ayın gününü ayarlar                                                                        |
| `setFullYear()`        | Yılı ayarlar                                                                                   |
| `setHours()`           | Saati ayarlar                                                                                  |
| `setMilliseconds()`    | Milisaniyeleri ayarlar                                                                         |
| `setMinutes()`         | Dakikaları ayarlar                                                                             |
| `setMonth()`           | Ayı ayarlar                                                                                    |
| `setSeconds()`         | Saniyeleri ayarlar                                                                             |
| `setTime()`            | Zamanı ayarlar                                                                                 |
| `setUTCDate()`         | Evrensel zamana göre ayın gününü ayarlar                                                       |
| `setUTCFullYear()`     | Evrensel zamana göre yılı ayarlar                                                              |
| `setUTCHours()`        | Evrensel zamana göre saati ayarlar                                                             |
| `setUTCMilliseconds()` | Evrensel zamana göre milisaniyeleri ayarlar                                                    |
| `setUTCMinutes()`      | Evrensel zamana göre dakikaları ayarlar                                                        |
| `setUTCMonth()`        | Evrensel zamana göre ayı ayarlar                                                               |
| `setUTCSeconds()`      | Evrensel zamana göre saniyeleri ayarlar                                                        |
| `toDateString()`       | İnsan tarafından okunabilir formatta tarihi döndürür                                           |
| `toISOString()`        | Tarihi ISO formatına göre döndürür                                                             |
| `toJSON()`             | JSON tarihi olarak biçimlendirilmiş bir dize döndürür                                          |
| `toLocaleDateString()` | Yerel ayar kurallarına göre tarih içeren bir dize döndürür                                     |
| `toLocaleTimeString()` | Yerel ayar kurallarına göre zaman içeren bir dize döndürür                                     |
| `toLocaleString()`     | Yerel ayar kurallarına göre tarih ve saat içeren bir dize döndürür                             |
| `toString()`           | Belirtilen tarihi string temsilini döndürür                                                    |
| `toTimeString()`       | _time_ kısmını insan tarafından okunabilir bir formatta döndürür                               |
| `toUTCString()`        | Tarihi evrensel formata göre bir dizeye dönüştürür                                             |
| `toUTC()`              | 1970 Ocak 1'den beri UTC formatında milisaniye cinsinden değeri döndürür                       |
| `valueOf()`            | `Date`'nin ilkel değerini döndürür                                                             |
