---
bab: 6
nomor halaman: 45
keterangan: The push method adds element in an array making the last index the newly added item. This method changes the array length and returns a new length.
---

# Push

Seseorang dapat menambahkan elemen tertentu ke dalam sebuah array, membuat indeks terakhir menjadi item yang baru ditambahkan. Ini mengubah panjang array dan mengembalikan panjang array yang baru.

Berikut adalah sintaks penggunaan `push`:

```c
array.push(element1[, ...[, elementN]]);
```

Argumen `element1, ..., elementN` mewakili elemen-elemen yang akan ditambahkan ke ujung array.

Sebagai contoh:

```javascript
let array = [1, 2, 3];
array.push(4);

console.log(array);

// Result: array = [1, 2, 3, 4]
```

Anda juga dapat menggunakan `push` untuk menambahkan elemen ke ujung objek mirip array (seperti objek arguments atau objek NodeList) dengan pertama-tama mengonversinya menjadi array menggunakan metode `Array.prototype.slice()`.

```javascript
function printArguments() {
  let args = Array.prototype.slice.call(arguments);
  args.push("d", "e", "f");
  console.log(args);
}

printArguments("a", "b", "c"); // Result: ["a", "b", "c", "d", "e", "f"]
```

> **Catatan**: Metode `push` mengubah array asli. Ia tidak membuat array baru.
