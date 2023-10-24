---
bab: 19
nomorHalaman: 93
deskripsi: Template literal adalah literal yang dibatasi dengan tanda kutip belakang ` ` dan digunakan dalam interpolasi variabel dan ekspresi ke dalam string.
---

# Template Literal

Template literal adalah literal yang dibatasi dengan tanda kutip belakang ` (``) ` dan digunakan dalam interpolasi variabel dan ekspresi ke dalam string.&#x20;

```javascript
let teks = `Halo Dunia!`;
// template literal dengan tanda kutip tunggal dan ganda dalam satu string
let teks = `Dia sering dipanggil "Johnny"`;
// template literal dengan string beberapa baris
let teks = `Rubah coklat
cepat
melompati
anjing malas`;

// template literal dengan interpolasi variabel
const namaDepan = "John";
const namaBelakang = "Doe";

const teksSelamatDatang = `Selamat datang ${namaDepan}, ${namaBelakang}!`;

// template literal dengan interpolasi ekspresi
const harga = 10;
const PPN = 0.25;

const total = `Total: ${(harga * (1 + PPN)).toFixed(2)}`;
```

&#x20;
