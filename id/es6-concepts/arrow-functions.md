---
bab: [nomor bab]
nomorHalaman: [nomor halaman]
deskripsi: Arrow function, diperkenalkan dalam ES6, memberikan sintaksis ringkas untuk mendefinisikan fungsi dalam JavaScript. Mereka ideal untuk fungsi-fungsi pendek dengan satu ekspresi, dan menawarkan kesederhanaan dan kejelasan, sering digunakan untuk mengulangi array dan mendefinisikan fungsi callback yang kompak. Arrow function dikenal karena efisiensinya dan kemudahan dibaca.
---

**Arrow Function dalam ES6**

Arrow function adalah cara ringkas untuk menulis fungsi anonim dalam JavaScript, diperkenalkan dalam ES6 (ECMAScript 2015). Mereka memberikan sintaksis yang lebih kompak dan mudah dibaca untuk mendefinisikan fungsi, terutama ketika Anda memiliki fungsi dengan ekspresi tunggal yang sederhana. Arrow function adalah fitur dasar JavaScript modern, dan mereka menawarkan beberapa keunggulan dibandingkan dengan ekspresi fungsi tradisional.

**Sintaksis:**

Sintaksis untuk arrow function sangat mudah:

```javascript
const namaFungsi = (parameter) => ekspresi;
```

- `const namaFungsi`: Di sinilah Anda menetapkan fungsi ke variabel. Anda dapat menghilangkan nama fungsi untuk fungsi anonim.

- `(parameter)`: Ini adalah parameter masukan (argumen) yang diterima fungsi. Jika hanya ada satu parameter, Anda dapat menghilangkan tanda kurung.

- `=>`: Tanda panah gemuk `=>` menunjukkan bahwa Anda sedang mendefinisikan arrow function.

- `ekspresi`: Ini adalah nilai yang dikembalikan oleh fungsi. Jika fungsi terdiri dari satu pernyataan, Anda dapat menghilangkan kurung kurawal dan kata kunci `return`.

**Contoh:**

Berikut adalah beberapa contoh untuk mengilustrasikan sintaksis arrow function:

1. Arrow function sederhana tanpa parameter:

```javascript
const katakanHalo = () => "Halo, Dunia!";
```

2. Arrow function dengan satu parameter:

```javascript
const kaliDua = (x) => x * 2;
```

3. Arrow function dengan beberapa parameter:

```javascript
const tambah = (a, b) => a + b;
```

**Penggunaan:**

Arrow function umumnya digunakan dalam skenario berikut:

1. **Fungsi Singkat dan Anonim:** Arrow function sempurna untuk fungsi satu baris yang pendek. Mereka mengurangi kebutuhan untuk menulis ekspresi fungsi lengkap.

2. **Mengulang Array:** Arrow function cocok dengan metode array seperti `map`, `filter`, dan `reduce` untuk menyederhanakan pengulangan array.

```javascript
const angka = [1, 2, 3, 4, 5];
const hasilDikaliDua = angka.map((x) => x * 2);
```

3. **Fungsi Callback:** Mereka sering digunakan sebagai fungsi callback untuk operasi asinkron seperti `setTimeout` dan `fetch`.

```javascript
setTimeout(() => {
  console.log("Waktu selesai");
}, 1000);
```

4. **Pengikatan Konteks `this`:** Arrow function mewarisi konteks `this` dari fungsi yang mengandungnya, membuat mereka berguna untuk mendefinisikan metode dalam objek tanpa perlu khawatir tentang perubahan `this`.

```javascript
const orang = {
  nama: "John",
  sapa: function () {
    setTimeout(() => {
      console.log(`Halo, nama saya ${this.nama}`);
    }, 1000);
  },
};

orang.sapa();
```

Penting untuk dicatat bahwa arrow function tidak cocok untuk setiap situasi. Mereka tidak memiliki konteks `this` mereka sendiri, tidak dapat digunakan sebagai konstruktor, dan mungkin tidak sesuai untuk fungsi dengan struktur yang lebih kompleks dan multi-baris. Untuk kasus-kasus seperti itu, ekspresi fungsi tradisional tetap menjadi pilihan yang disarankan. Arrow function paling efektif digunakan untuk fungsi yang sederhana, ringkas, dan satu baris.
