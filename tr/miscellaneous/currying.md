---
chapter: 19
pageNumber: 94
---

# Currying

`Currying` fonksiyonel programlamada birden fazla argümanı olan bir fonksiyonu iç içe geçmiş fonksiyonlar dizisine dönüştüren ileri bir tekniktir. Bir fonksiyonu `f(a,b,c)` şeklinde çağrılabilirken `f(a)(b)(c)` şeklinde çağrılabilir hale dönüştürür. Bir fonksiyonu çağırmaz, bunun yerine dönüştürür.

`currying` 'i daha iyi anlamak için üç argüman alan ve bunların toplamını döndüren basit bir `add` fonksiyonu oluşturalım. Ardından, tek bir girdi alan ve toplamıyla birlikte bir dizi fonksiyon döndüren bir `addCurry` fonksiyonu oluşturalım.

```javascript
// Currying olmadan yazılan versiyon
const add = (a, b, c) => {
  return a + b + c;
};
console.log(add(2, 3, 5)); // 10

// currying olan versiyon
const addCurry = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};
console.log(addCurry(2)(3)(5)); // 10
```

Burada, hem curried hem de curried olmayan versiyonların aynı sonucu verdiğini görebiliriz. Currying birçok nedenden dolayı faydalı olabilir, bunlardan bazıları aşağıda belirtilmiştir.

- Aynı değişkeni tekrar tekrar kullanmaktan kaçınmaya yardımcı olur.
- Fonksiyonu tek bir sorumlulukla daha küçük parçalara böler ve fonksiyonu daha az hataya eğilimli hale getirir.
- Fonksiyonel programlamada yüksek dereceli bir fonksiyon (_high order function_) oluşturmak için kullanılır.
