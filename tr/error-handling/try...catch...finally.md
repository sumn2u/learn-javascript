---
chapter: 12
pageNumber: 69
---

# try...catch...finally

`try...catch` 'e `finally` adında bir yapı daha ekleyebiliriz, bu kod her durumda çalışır. Yani hata olmadığında `try`den sonra ve hata durumunda bir `catch`den sonra. `try...catch...finally` için sözdizimi (_syntax_) aşağıda gösterilmiştir.

```javascript
try {
  // kodu çalıştırmayı dene
} catch (err) {
  // hataları denetle
} finally {
  // her durumda çalıştır
}
```

Örnek bir kod örneği:

```javascript
try {
  alert("try");
} catch (err) {
  alert("catch");
} finally {
  alert("finally");
}
```

Yukarıdaki örnekte, önce `try` bloğu çalıştırılır ve ardından herhangi bir hata olmadığı için `finally` bloğu çalıştırılır.

{% exercise %}
Pay ve payda olmak üzere iki argüman alan ve aşağıdaki ayarları kullanarak payın paydaya bölünmesinin sonucunu döndüren bir `divideNumbers()` fonksiyonu yazın.

{% initial %}
function divideNumbers(numerator, denominator) {
try {
// pay ile paydayı bölmek için `try` kodu
} catch (error) {
// hata mesajı yazdırma
} finally {
// yazdırma işlemi tamamlandı
}
// return result
}
let answer = divideNumbers(10, 2);

{% solution %}
function divideNumbers(numerator, denominator) {
let result;
try {
result = numerator / denominator;
} catch (error) {
console.error(`Error: ${error}`);
} finally {
console.log('Function finished executing');
}
return result;
}
let answer = divideNumbers(10, 2);
{% validation %}
assert(answer == 5);

{% context %}
{% endexercise %}
