---
layout: editorial
chapter: 9
pageNumber: 56
---

# Bölüm 9

# Objects (Objeler)

JavaScript'te objeler **değişkendir**, çünkü referans objeye işaret eden değerleri değiştiririz. Bunun yerine, bir ilkel değeri değiştirirken, referansını değiştiriyoruz, bu da şimdi yeni değere işaret ediyor ve bu nedenle ilkel **değişmezdir**. JavaScript'in ilkel türleri `true`, `false`, `numbers`, `strings`, `null` ve `undefined`'dir. Herhangi bir diğer değer bir `obje`dir. Objeler, `propertyName`: `propertyValue` çiftleri içerir. JavaScript'te bir `obje` oluşturmanın üç yolu vardır:

1.  literal

    ```javascript
    let object = {};
    // Evet, sadece bir çift süslü parantez!
    ```

    > _**Not:**_ bu **önerilen** yoldur.

2.  nesne yönelimli

    ```javascript
    let object = new Object();
    ```

    > _**Not:**_ Java'ya çok benzer.

3.  ve `object.create` kullanarak

    ```javascript
    let object = Object.create(proto[, propertiesObject]);
    ```

    > _**Not:**_ bu, belirtilen prototip nesnesi ve özellikleriyle yeni bir obje oluşturur.
