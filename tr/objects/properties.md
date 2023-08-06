---
chapter: 9
pageNumber: 57
---

# Properties (Obje Özellikleri)

Obje özelliği, `propertyName`: `propertyValue` çiftidir, burada **özellik adı yalnızca bir dize olabilir**. Bir dize değilse, bir dizeye dönüştürülür. Özellikleri bir obje **oluştururken** veya **daha sonra** belirtebilirsiniz. Virgülle ayrılmış sıfır veya daha fazla özellik olabilir.

```javascript
let language = {
  name: "JavaScript",
  isSupportedByBrowsers: true,
  createdIn: 1995,
  author: {
    firstName: "Brendan",
    lastName: "Eich",
  },
  // Yes, objects can be nested!
  getAuthorFullName: function () {
    return this.author.firstName + " " + this.author.lastName;
  },
  // Yes, functions can be values too!
};
```

Aşağıdaki kod, bir özelliğin değerini nasıl elde edeceğinizi gösterir.

```javascript
let variable = language.name;
// variable şimdi "JavaScript" dizesini içeriyor.

variable = language["name"];
// Yukarıdaki satırlar aynı şeyi yapar. Fark, ikincisinin bir özellik adı olarak herhangi bir dize kullanmasına izin vermesidir, ancak okunması daha az kolaydır.

variable = language.newProperty;
// variable şimdi undefined, çünkü bu özelliği henüz atamamıştık.
```

Aşağıdaki örnek, yeni bir özellik **ekleme** veya **mevcut olanı değiştirme** işlemini nasıl yapacağınızı gösterir.

```javascript
language.newProperty = "new value";
// Artık objede yeni bir özellik var. Özellik zaten varsa, değeri değiştirilecektir.
language["newProperty"] = "changed value";
// Yine, özellikleri her iki şekilde de erişebilirsiniz. İlki (noktalama notasyonu) önerilir.
```
