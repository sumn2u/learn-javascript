---
bab: [nomor bab]
nomorHalaman: [nomor halaman]
deskripsi: Destructuring, fitur ES6, menyederhanakan ekstraksi data dari array dan objek. Ini menyederhanakan proses dengan memungkinkan Anda untuk langsung mengassign nilai-nilai atau properti tertentu ke variabel, meningkatkan kejelasan dan efisiensi kode. Destructuring adalah alat penting untuk bekerja dengan struktur data kompleks dalam JavaScript.

---
**Destructuring dalam ES6: Membuka Array dan Objek**

Destructuring adalah fitur kuat yang diperkenalkan dalam ES6 (ECMAScript 2015) yang menyederhanakan proses ekstraksi nilai dari array dan properti dari objek. Ini memungkinkan Anda "membuka" nilai-nilai ke dalam variabel dengan sintaksis yang ringkas dan mudah dibaca.

**Destructuring Array:**

**Sintaksis:**

```javascript
const [variabel1, variabel2, ...sisa] = array;
```

- `variabel1`, `variabel2`: Ini adalah variabel di mana elemen dari array di-assign.
- `...sisa` (operator rest): Ini mengumpulkan elemen yang tersisa ke dalam variabel array baru.

**Contoh:**

```javascript
const warna = ["merah", "hijau", "biru"];
const [warnaPertama, warnaKedua] = warna;
console.log(warnaPertama); // Output: "merah"
console.log(warnaKedua); // Output: "hijau"
```

**Destructuring Objek:**

**Sintaksis:**

```javascript
const { properti1, properti2, ...sisa } = objek;
```

- `properti1`, `properti2`: Ini adalah variabel di mana properti objek di-assign.
- `...sisa` (operator rest): Ini mengumpulkan properti yang tersisa ke dalam variabel objek baru.

**Contoh:**

```javascript
const orang = { nama: "Alice", usia: 30, kota: "New York" };
const { nama, usia } = orang;
console.log(nama); // Output: "Alice"
console.log(usia); // Output: 30
```

**Penggunaan:**

Destructuring umumnya digunakan untuk berbagai tugas, termasuk:

1. **Mensederhanakan Assignment:** Cepat mengassign elemen-elemen array atau properti objek ke variabel.

2. **Menukar Variabel:** Mudah menukar nilai dua variabel tanpa variabel sementara.

3. **Parameter Fungsi:** Ekstrak properti tertentu dari objek yang dilewatkan sebagai parameter fungsi.

4. **Parameter Rest:** Mengumpulkan elemen atau properti yang tersisa ke dalam array atau objek.

Dengan menggunakan destructuring, Anda dapat membuat kode Anda lebih bersih, lebih ekspresif, dan lebih sedikit kesalahan saat bekerja dengan array dan objek dalam JavaScript.