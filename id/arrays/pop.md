---
bab: 6
nomor halaman: 42
keterangan: Metode `pop` menghapus elemen terakhir dari sebuah array dan mengembalikan hasilnya. Metode ini mengubah panjang array.
---

# Pop

Metode `pop` menghapus elemen terakhir dari sebuah array dan mengembalikan elemen tersebut. Metode ini mengubah panjang array.

Berikut adalah sintaks penggunaan `pop`:

```c
array.pop();
```

Sebagai contoh:

```javascript
let arr = ["one", "two", "three", "four", "five"];
arr.pop();

console.log(arr);

// Result: ['one', 'two', 'three', 'four']
```

Anda juga dapat menggunakan metode `pop` bersama dengan sebuah perulangan untuk menghapus semua elemen dari sebuah array. Berikut adalah contoh bagaimana Anda dapat melakukannya:

```c
while (array.length > 0) {
  array.pop();
}

console.log(array); // Result: []
```

{% hint style="warning" %}
Metode `pop` hanya berfungsi pada array, dan tidak pada objek lain yang mirip dengan array, seperti objek arguments atau objek NodeList. Jika Anda perlu menghapus elemen dari salah satu jenis objek ini, Anda perlu mengonversinya menjadi array terlebih dahulu menggunakan metode `Array.prototype.slice()`.

{% endhint %}
