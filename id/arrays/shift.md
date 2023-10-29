---
bab: 6
nomor halaman: 41
keterangan: Metode shift menghapus elemen indeks pertama dari array dan menggeser semua indeks ke kiri. Ini mengubah array asli.
---

# Shift

Metode `shift` menghapus indeks pertama dari array tersebut dan menggeser semua indeks ke kiri. Ini mengubah array asli. Berikut adalah sintaks penggunaan `shift`:

```c
array.shift();
```

For example:&#x20;

```javascript
let array = [1, 2, 3];
array.shift();

// Result: array = [2,3]
```

Anda juga dapat menggunakan metode `shift` bersama dengan sebuah perulangan untuk menghapus semua elemen dari sebuah array. Berikut contoh cara melakukannya:

```c
while (array.length > 0) {
  array.shift();
}

console.log(array); // Result: []
```

{% hint style="warning" %}
Metode `shift` hanya berfungsi pada array, dan tidak pada objek lain yang mirip dengan array seperti objek arguments atau objek NodeList. Jika Anda perlu melakukan shift elemen dari salah satu jenis objek ini, Anda perlu mengonversinya menjadi array terlebih dahulu menggunakan metode `Array.prototype.slice()`.
{% endhint %}
