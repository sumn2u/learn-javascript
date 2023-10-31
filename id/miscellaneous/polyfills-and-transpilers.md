---
bab: 19
nomor halaman: 96
keterangan: Polyfills dan transpilers adalah dua alat penting yang digunakan dalam pengembangan web untuk memastikan bahwa kode JavaScript modern dapat berjalan pada browser lama dan memanfaatkan fitur JavaScript terbaru sambil tetap kompatibel dengan lingkungan yang lebih lama.
---

# Polyfills dan Transpilers

JavaScript terus berkembang. Secara berkala, proposal bahasa baru diajukan, dianalisis, dan ditambahkan ke [https://tc39.github.io/ecma262/](https://tc39.github.io/ecma262/) dan kemudian diintegrasikan ke dalam spesifikasi. Mungkin ada perbedaan dalam cara implementasinya di mesin JavaScript tergantung pada browser. Beberapa mungkin mengimplementasikan proposal awal, sementara yang lain menunggu hingga seluruh spesifikasinya dirilis. Masalah kompatibilitas mundur muncul ketika hal-hal baru diperkenalkan.&#x20;

Untuk mendukung kode modern di browser lama, kita menggunakan dua alat: `transpiler` dan `polyfill`.

**Transpiler**

Ini adalah program yang menerjemahkan kode modern dan menulis ulangnya menggunakan konstruksi sintaks yang lebih lama sehingga mesin yang lebih lama dapat memahaminya. Misalnya, operator "nullish coalescing" `??` diperkenalkan pada tahun 2020, dan browser lama tidak dapat memahaminya.&#x20;

Sekarang, tugas transpiler adalah membuat operator "nullish coalescing" `??` menjadi dapat dimengerti oleh browser lama.&#x20;

```javascript
// sebelum menjalankan transpiler
height = height ?? 200;

// setelah menjalankan transpiler
height = (height !== undefined dan height !== null) ? height: 200;

```

{% hint style="info" %}
[Babel](https://babeljs.io/) adalah salah satu transpiler yang paling terkemuka. Dalam proses pengembangan, kita dapat menggunakan alat pembangunan seperti [webpack](https://webpack.js.org/) atau [parcel](https://parceljs.org/) untuk men-transpile kode.
{% endhint %}

**Polyfills**

Ada saat-saat ketika fungsionalitas baru tidak tersedia di mesin browser yang ketinggalan zaman. Dalam kasus ini, kode yang menggunakan fungsionalitas baru tidak akan berfungsi. Untuk mengisi celah, kita menambahkan fungsionalitas yang hilang yang disebut `polyfill`. Misalnya, metode `filter()` diperkenalkan dalam ES5 dan tidak didukung di beberapa browser lama. Metode ini menerima sebuah fungsi dan mengembalikan sebuah array yang hanya berisi nilai-nilai dari array asli yang fungsi tersebut mengembalikan `true`

```javascript
const arr = [1, 2, 3, 4, 5, 6];
const filtered = arr.filter((e) => e % 2 === 0); // menghapus angka genap
console.log(filtered);

// [2, 4, 6]
```

Polyfill untuk metode filter adalah.

```javascript
Array.prototype.filter = function (callback) {
  // Simpan array baru
  const result = [];
  for (let i = 0; i < this.length; i++) {
    // panggil callback dengan elemen saat ini, indeks, dan konteks.
    // jika lulus uji maka tambahkan elemen ke dalam array baru.
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  // kembalikan array
  return result;
};
```

{% hint style="info" %}
[caniuse](https://caniuse.com/) menunjukkan fungsionalitas dan sintaks yang diperbarui yang didukung oleh mesin browser yang berbeda.
{% endhint %}

---
