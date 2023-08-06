---
layout: editorial
chapter: 14
pageNumber: 71
---

# Bölüm 14

# Regular Expression (Düzenli İfadeler)

Bir düzenli ifade, bir `RegEx` (Regular Expression) nesnesi olarak oluşturulabilir veya bir öntanımlı değer olarak bir `(/)`(forward slash) karakterleri ile bir desen içine yazılabilir. Düzenli ifade oluşturmak için kullanılan sözdizimleri aşağıda gösterilmiştir.

```javascript
// using regular expression constructor
new RegExp(pattern[, flags]);

// using literals
/pattern/modifiers
```

Literaller kullanarak düzenli ifade oluşturmak için bayraklar isteğe bağlıdır. Yukarıda bahsedilen yöntemi kullanarak aynı düzenli ifadeyi oluşturmak için bir örnek aşağıda gösterilmiştir.

```javascript
let re1 = new RegExp("xyz");
let re2 = /xyz/;
```

Her iki yol da bir regex nesnesi oluşturacak ve aynı yöntemlere ve özelliklere sahip olacaktır. Düzenli ifade oluşturmak için dinamik değerlere ihtiyaç duyabileceğimiz durumlar vardır, bu durumda literaller çalışmaz ve constructor'a gitmemiz gerekir.

{% hint style="info" %}
Düzenli ifadenin bir parçası olmak için bir forward slash (/) kullanmak istediğimiz durumlarda, forward slash `(/)` karakterini backslash `(\)` ile kaçırmamız gerekir.
{% endhint %}

Durumlara duyarlı aramalar yapmak için kullanılan farklı değiştiriciler aşağıda listelenmiştir:

- `g` - global arama (ilk eşleşmeden sonra durmaz, tüm eşleşmeleri bulur)
- `i` - duruma duyarlı arama
- `m` - çok satırlı eşleme

Bir düzenli ifadede, bir dizi karakteri bulmak için _Brackets_ (_Köşeli Parantezler_) kullanılır. Bazıları aşağıda listelenmiştir.

- `[abc]` - brackets arasında herhangi bir karakter bul
- `[^abc]` - brackets arasında olmayan bir karakter bul
- `[0-9]` - brackets arasında herhangi bir rakam bul
- `[^0-9]` - brackets arasında olmayan herhangi bir karakter bul (sayılar dışında)
- `(x|y)`- | ile ayrılmış alternatiflerden herhangi birini bul

Düzenli ifadede özel bir anlama sahip olan _Metacharacters_ (_özel karakterlerdir_). Bu karakterler aşağıda daha ayrıntılı olarak açıklanmıştır:

| Metacharacter | Description                                                             |
| ------------- | ----------------------------------------------------------------------- | --- |
| `.`           | Bir karakter hariç yeni satır veya bir sonlandırıcı eşleştirir          |
| `\w`          | Alfanumerik karakter (`[a-zA-Z0–9_]`) eşleştirir                        |
| `\W`          | `[^a-zA-Z0–9_]` ile aynı olan bir non word karakteri eşleştirir         |
| `\d`          | `[0-9]` ile aynı olan herhangi bir rakam karakterini eşleştirir         |
| `\D`          | Sayısal olmayan herhangi bir karakterle eşleşir                         |
| `\s`          | Bir boşluk karakteriyle eşleştirme (boşluklar, sekmeler vb.)            |
| `\S`          | Boşluk olmayan bir karakterle eşleştirme                                |
| `\b`          | Bir kelimenin başında / sonunda eşleştirir                              |
| `\B`          | Match but not at the begining / end of a word                           |
| `\0`          | `NULL` karakterini eşleştirir                                           |
| `\n`          | Yeni bir satır karakterini eşleştirir                                   |
| `\f`          | Form feed karakterini eşleştirir                                        |
| `\r`          | Carriage return karakterini eşleştirir                                  |
| `\t`          | Tab karakterini eşleştirir                                              |
| `\v`          | Tab vertical karakterini eşleştirir                                     |
| `\xxx`        | Bir octal sayı ile belirtilen karakteri eşleştirir (ex:`xxx`)           |
| `\xdd`        | Bir hexadecimal sayı ile belirtilen karakteri eşleştirir dd             |
| `\udddd`      | Bir hexadecimal sayı ile belirtilen Unicode karakterini eşleştirir dddd |     |

RegEx tarafından desteklenen özellikler ve yöntemler aşağıda listelenmiştir.

| Name          | Description                                                                  |
| ------------- | ---------------------------------------------------------------------------- |
| `constructor` | RegExp nesnesinin protipini oluşturan fonksiyonu döndürür                    |
| `global`      | `g` düzenleyicisinin ayarlı olup olmadığını kontrol eder                     |
| `ignoreCase`  | `i` düzenleyicisinin ayarlanıp ayarlanmadığını kontrol eder                  |
| `lastIndex`   | Bir sonraki eşleşmenin başlatılacağı dizini belirtir                         |
| `multiline`   | m düzenleyicisinin ayarlı olup olmadığını kontrol eder                       |
| `source`      | Dizenin metnini döndürür                                                     |
| `exec()`      | Eşleşmeyi test eder ve ilk eşleşmeyi döndürür, eşleşme yoksa `null` döndürür |
| `test()`      | Eşleşmeyi test eder ve `true` veya `false` döndürür                          |
| `toString()`  | Düzenli ifadenin dize değerini döndürür                                      |

{% hint style="warning" %}
Bir `complie()` yöntemi düzenli ifadeyi uyumlu hale getirir ve kullanımdan kaldırılmıştır.
{% endhint %}

Düzenli ifadelerin (_regular expressions _) bazı örnekleri burada gösterilmektedir.

```javascript
let text = "The best things in life are free";
let result = /e/.exec(text); // looks for a match  of e in a string
// result: e

let helloWorldText = "Hello world!";
// Look for "Hello"
let pattern1 = /Hello/g;
let result1 = pattern1.test(helloWorldText);
// result1: true

let pattern1String = pattern1.toString();
// pattern1String : '/Hello/g'
```
