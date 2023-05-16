# Length

Dizilerin `length` adında bir özelliği vardır ve adından da anlaşıldığı gibi, dizinin uzunluğunu belirtir.

```javascript
let array = [1, 2, 3];

let l = array.length;

// Sonuç: l = 3
```

`length` özelliği bir dizideki eleman sayısını da düzenler. Örneğin:

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length = 2;

console.log(fruits);
// Result: ['Banana', 'Orange']
```

Ayrıca `length` özelliğini, bir dizinin son elemanını bulmak için indeks olarak da kullanabilirsiniz. Örneğin:

```c
console.log(fruits[fruits.length - 1]); // Result: Orange
```

Bir dizinin sonuna eleman eklemek için de `length` özelliğini kullanabilirsiniz. Örneğin:

```c
fruits[fruits.length] = "Pineapple";
console.log(fruits); // Result: ['Banana', 'Orange', 'Pineapple']
```

{% hint style="info" %}
Diziye eleman eklendiğinde veya diziden eleman çıkarıldığında `length` özelliği otomatik olarak güncellenir.
{% endhint %}

Ayrıca `length` özelliğinin bir fonksiyon olmadığını, bu nedenle ona erişirken parantez kullanmanız gerekmediğini de belirtmek gerekir. Bu sadece dizi nesnesinin diğer nesne özellikleri gibi erişebileceğiniz bir özelliğidir.
