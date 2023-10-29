---
layout: editorial
bab: 11
nomor halaman: 67
keterangan: JSON (JavaScript Object Notation) adalah format pertukaran data ringan yang digunakan untuk merepresentasikan dan bertukar data antara sistem dan platform yang berbeda. Ini banyak digunakan untuk transmisi dan penyimpanan data, terutama dalam pengembangan web.
---

# Bab 11

# JSON

**J**ava**S**cript **O**bject **N**otation (JSON) adalah format berbasis teks untuk menyimpan dan mengangkut data. Objek JavaScript dapat dengan mudah dikonversi menjadi JSON dan sebaliknya. Contohnya.

```javascript
// objek JavaScript
let myObj = { name: "Ryan", age: 30, city: "Austin" };

// dikonversi menjadi JSON:
let myJSON = JSON.stringify(myObj);
console.log(myJSON);
// Hasil: '{"name":"Ryan","age":30,"city":"Austin"}'

// dikonversi kembali menjadi objek JavaScript
let originalJSON = JSON.parse(myJSON);
console.log(originalJSON);

// Hasil: {name: 'Ryan', age: 30, city: 'Austin'}
```

`stringify` dan `parse` adalah dua metode yang didukung oleh JSON.

| Metode        | Deskripsi                                                   |
| ------------- | ----------------------------------------------------------- |
| `parse()`     | Mengembalikan objek JavaScript dari string JSON yang diurai |
| `stringify()` | Mengembalikan string JSON dari Objek JavaScript             |

Tipe data berikut didukung oleh JSON.

- string
- number
- array
- boolean
- objek dengan nilai JSON yang valid
- `null`

Ini tidak dapat berupa `function`, `date`, atau `undefined`.
