---
bab: 19
nomor halaman: 94
keterangan: Hoisting adalah perilaku default dalam JavaScript yang memindahkan deklarasi ke bagian atas. Saat menjalankan kode, itu menciptakan konteks eksekusi global: pembuatan dan eksekusi. Pada tahap penciptaan, JavaScript memindahkan deklarasi variabel dan fungsi ke bagian atas halaman, yang dikenal sebagai hoisting.
---

# Hoisting

Hoisting adalah perilaku default dalam JavaScript yang memindahkan deklarasi ke bagian atas. Saat menjalankan kode, itu menciptakan konteks eksekusi global: pembuatan dan eksekusi. Pada tahap penciptaan, JavaScript memindahkan deklarasi variabel dan fungsi ke bagian atas halaman, yang dikenal sebagai hoisting.

```javascript
// Hoisting variabel
console.log(counter);
let counter = 1; // menghasilkan ReferenceError: Cannot access 'counter' before initialization
```

Meskipun `counter` ada di dalam memori heap tetapi belum diinisialisasi, sehingga itu menghasilkan kesalahan. Ini terjadi karena hoisting, variabel `counter` diangkat ke sini.

```javascript
// Hoisting fungsi
const x = 20,
  y = 10;

let result = add(x, y); // ❌ Uncaught ReferenceError: add is not defined
console.log(result);

let add = (x, y) => x + y;
```

## Di sini, fungsi `add` diangkat dan diinisialisasi dengan `undefined` di dalam memori heap pada tahap penciptaan konteks eksekusi global. Oleh karena itu, menghasilkan kesalahan.
