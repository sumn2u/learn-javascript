---
Bab: 19
Halaman: 95
Deskripsi: Currying adalah teknik canggih dalam pemrograman fungsional yang terdiri dari mengubah fungsi dengan beberapa argumen menjadi urutan fungsi bersarang. Ini mengubah fungsi dari yang dapat dipanggil `f(a, b, c)` menjadi yang dapat dipanggil seperti `f(a)(b)(c)`. Ini tidak memanggil fungsi, melainkan mengubahnya.
---

# Currying

`Currying` adalah teknik canggih dalam pemrograman fungsional yang terdiri dari mengubah fungsi dengan beberapa argumen menjadi urutan fungsi bersarang. Ini mengubah fungsi dari yang dapat dipanggil `f(a, b, c)` menjadi yang dapat dipanggil seperti `f(a)(b)(c)`. Ini tidak memanggil fungsi, melainkan mengubahnya.

Untuk memahami currying lebih baik, mari buat fungsi `add` sederhana yang mengambil tiga argumen dan mengembalikan jumlah dari mereka. Kemudian, kita akan membuat fungsi `addCurry` yang mengambil satu input dan mengembalikan serangkaian fungsi dengan hasil penjumlahannya.

```javascript
// Versi non-curried
const add = (a, b, c) => {
  return a + b + c;
};
console.log(add(2, 3, 5)); // 10

// Versi curried
const addCurry = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};
console.log(addCurry(2)(3)(5)); // 10
```

Di sini, kita dapat melihat bahwa baik versi curried maupun versi non-curried mengembalikan hasil yang sama. Currying dapat bermanfaat dalam banyak hal, beberapa di antaranya disebutkan di sini.

- Ini membantu menghindari pengiriman ulang variabel yang sama berkali-kali.
- Ini membagi fungsi menjadi potongan-potongan kecil dengan satu tanggung jawab, menjadikan fungsi kurang rentan terhadap kesalahan.
- Ini digunakan dalam pemrograman fungsional untuk membuat fungsi berorde tinggi.

---
