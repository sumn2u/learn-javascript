---
chapter: 7
pageNumber: 50
---

# For

Bir döngünün en kolay biçimi for ifadesidir. Bunun if deyimine benzer bir sözdizimi vardır, ancak daha fazla seçeneği vardır:

```javascript
for (condition; end condition; change) {
    // do it, do it now
}
```

Bir `for` döngüsü kullanarak aynı kodu on kez nasıl çalıştıracağımızı görelim:

```javascript
for (let i = 0; i < 10; i = i + 1) {
  // bu işlemi 10 kere yap.
}
```

> _**Note**_: `i = i + 1`, `i++` olarak yazılabilir.

Bir objenin veya dizinin özellikleri arasında döngü yapmak için `for in` döngüsü de kullanılabilir.

```javascript
for (key in object) {
  // çalıştırılacak kod
}
```

Bir obje ve dizi için `for in` döngüsü örnekleri aşağıda gösterilmiştir:

```javascript
const person = { fname: "John", lname: "Doe", age: 25 };
let info = "";
for (let x in person) {
  info += person[x];
}

// Sonuç: info = "JohnDoe25"

const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}

// Sonuç: txt = '45491625'
```

`Arrays`, `Strings`, `Maps`, `NodeLists` gibi yinelenebilir objelerin değeri `for of` deyimi kullanılarak döngüye sokulabilir.&#x20;

```javascript
let language = "JavaScript";
let text = "";
for (let x of language) {
  text += x;
}
```
