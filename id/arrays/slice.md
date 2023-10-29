---
bab: 6
nomor halaman: 48
keterangan: Metode `arr.slice()` dalam JavaScript mengembalikan array baru yang berisi sebagian dari array di mana metode ini diimplementasikan. Array aslinya tetap tidak berubah.
---

# Slice

Metode `slice` menerima dua parameter, yaitu `begin` dan `end`.

- `begin`: Parameter ini menentukan indeks awal dari mana bagian akan diekstraksi. Jika argumen ini tidak ada, metode akan menggunakan 0 sebagai nilai awal default.
- `end`: Parameter ini adalah indeks hingga mana bagian akan diekstraksi (tidak termasuk indeks akhir). Jika argumen ini tidak didefinisikan, maka array hingga akhir akan diekstraksi karena itu adalah nilai akhir default. Jika nilai akhir lebih besar dari panjang array, maka nilai akhir akan berubah menjadi panjang array.

```javascript
function func() {
  // Array Asli
  let arr = [23, 56, 87, 32, 75, 13];
  // Array yang Diekstrak
  let new_arr = arr.slice();
  console.log(arr);
  console.log(new_arr);
}
func();

// HASIL:
[23, 56, 87, 32, 75, 13][(23, 56, 87, 32, 75, 13)];
```

Metode `slice()` menyalin referensi objek ke array baru. (Misalnya, array bersarang) Jadi jika objek yang dirujuk dimodifikasi, perubahan tersebut terlihat dalam array baru yang dikembalikan.

```javascript
let human = {
  name: "David",
  age: 23,
};

let arr = [human, "Nepal", "Manager"];
let new_arr = arr.slice();

// objek asli
console.log(arr[0]); // { name: 'David', age: 23 }

// membuat perubahan pada objek dalam array baru
new_arr[0].name = "Levy";

// perubahan terlihat
console.log(arr[0]); // { name: 'Levy', age: 23 }
```
