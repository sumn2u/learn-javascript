## Peta (Maps)

Map adalah kumpulan item data yang memiliki kunci, mirip dengan `Object`. Namun, perbedaan utamanya adalah bahwa `Map` memungkinkan kunci dari jenis apa pun.

Metode dan properti yang dimiliki `Map` antara lain:

- `new Map()` – membuat peta (map).
- `map.set(key, value)` – menyimpan nilai dengan kunci tertentu.
- `map.get(key)` – mengembalikan nilai dengan kunci tertentu, atau `undefined` jika kunci tidak ada dalam peta.
- `map.has(key)` – mengembalikan `true` jika kunci ada, `false` jika tidak.
- `map.delete(key)` – menghapus elemen (pasangan kunci/nilai) berdasarkan kunci.
- `map.clear()` – menghapus semua elemen dari peta.
- `map.size` – mengembalikan jumlah elemen saat ini dalam peta.

Sebagai contoh:
```javascript
let map = new Map();

map.set('1', 'str1');   // kunci berupa string
map.set(1, 'num1');     // kunci berupa angka
map.set(true, 'bool1'); // kunci berupa boolean

// Ingat objek biasa? Itu akan mengonversi kunci menjadi string.
// Map menyimpan jenis kunci, jadi keduanya berbeda:
console.log(map.get(1));   // 'num1'
console.log(map.get('1')); // 'str1'

console.log(map.size); // 3
```

Perbedaannya dari `Object` biasa:

- Bisa menggunakan kunci berupa objek.
- Terdapat berbagai metode yang berguna, serta properti `size`.

## Kesimpulan
Peta (Maps) adalah struktur data yang serbaguna dan kuat yang menyediakan pasangan kunci-nilai untuk pengelolaan data yang efisien.
Peta seringkali menjadi pilihan yang lebih disukai daripada objek biasa untuk tugas-tugas yang melibatkan asosiasi kunci-nilai, karena mereka memberikan kendali dan kinerja yang lebih baik.