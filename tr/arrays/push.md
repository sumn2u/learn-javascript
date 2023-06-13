---
chapter: 6
pageNumber: 45  
---

# Push

Bir dizinin sonuna yeni bir eleman eklemek için kullanılır. Bu fonksiyon kullanıldığında dizinin uzunluğunu değiştirir ve yeni uzunluğu döndürür.

`push` kullanımına bir örnek:

```c
array.push(element1[, ...[, elementN]]);
```

`element1, ..., elementN` argümanları dizinin sonuna eklenecek elemanları temsil eder.

Örneğin:

```javascript
let array = [1, 2, 3];
array.push(4);

console.log(array);

// Sonuç: array = [1, 2, 3, 4]
```

Ayrıca `push` öğesini, dizi benzeri bir nesnenin (arguments nesnesi veya NodeList nesnesi gibi) sonuna öğe eklemek için, önce `Array.prototype.slice()` fonksiyonunu kullanarak bir diziye dönüştürerek de kullanabilirsiniz:

```javascript
function printArguments() {
  let args = Array.prototype.slice.call(arguments);
  args.push("d", "e", "f");
  console.log(args);
}

printArguments("a", "b", "c"); // Sonuç: ["a", "b", "c", "d", "e", "f"]
```

Şunu unutmamak lazım, `push` fonksiyonu orijinal diziyi değiştirir. Yeni bir dizi oluşturmaz.
