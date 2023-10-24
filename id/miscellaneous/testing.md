---
bab: 19
nomorHalaman: 120
deskripsi: Dalam bab ini, kita akan merambah aspek kritis pengujian dalam pengembangan web. Keterampilan ini sangat penting untuk memastikan keandalan dan fungsionalitas aplikasi web. Mari menjelajahi dunia pengujian unit menggunakan berbagai alat dan kerangka kerja.
---

## Pengujian Unit

Pengujian unit adalah praktik dasar dalam pengembangan web. Ini melibatkan pengujian komponen atau fungsi individu untuk memastikan bahwa mereka berfungsi seperti yang diharapkan. Praktik ini dapat mendeteksi bug lebih awal, meningkatkan kualitas kode, dan membuat refaktoring lebih aman. Pengujian unit penting dengan alasan berikut:

- Ini memverifikasi bahwa bagian-bagian individu dalam kode Anda berfungsi dengan benar.
- Ini menyediakan jaringan keamanan saat melakukan refaktoring atau membuat perubahan.
- Ini membantu mendokumentasikan perilaku yang diharapkan dari fungsi dan komponen.

## Kerangka Kerja Pengujian

Kerangka kerja pengujian menyederhanakan proses penulisan dan pelaksanaan pengujian. Dua kerangka kerja yang populer adalah Jest dan Mocha.

## Jest

Jest adalah kerangka kerja pengujian populer yang tidak memerlukan konfigurasi awal. Cocok untuk pengujian unit dan integrasi. Mari kita lihat cara memulai dengan Jest.

Instalasi Jest menggunakan npm atau yarn:

```sh
npm install --save-dev jest
```

Buat file pengujian (misalnya, `myFunction.test.js`) untuk fungsi yang ingin Anda uji.

Tulis kasus pengujian menggunakan fungsi pengujian Jest:

```javascript
const myFunction = require("./myFunction");

test("seharusnya mengembalikan hasil penjumlahan dua angka", () => {
  expect(myFunction(2, 3)).toBe(5);
});
```

Jalankan pengujian menggunakan perintah jest:

```sh
npx jest
```

### Mocha

Mocha adalah kerangka kerja pengujian yang fleksibel. Ini menyediakan struktur untuk menjalankan pengujian tetapi memerlukan perpustakaan tambahan untuk asersi dan pembuatan tiruan (mocking).

Memulai dengan Mocha

Instalasi Mocha dan perpustakaan asersi seperti Chai:

```sh
npm install --save-dev mocha chai
```

Buat direktori `test` dan tambahkan file pengujian Anda.

Tulis kasus pengujian menggunakan fungsi describe dan it dari Mocha dan fungsi asersi Chai.

```javascript
const chai = require("chai");
const expect = chai.expect;
const myFunction = require("./myFunction");

describe("myFunction", () => {
  it("seharusnya mengembalikan hasil penjumlahan dua angka", () => {
    expect(myFunction(2, 3)).to.equal(5);
  });
});
```

## Kesimpulan

Dalam bab ini, kita telah menjelajahi dasar-dasar pengujian dalam pengembangan web dan membahas pentingnya pengujian unit serta kerangka kerja dan alat pengujian lain yang sangat penting bagi pengembang web mana pun. Dengan praktik yang konsisten dan akses ke seperangkat alat yang tepat, seseorang dapat menulis kode yang dapat diandalkan dan memastikan bahwa aplikasi berjalan dengan optimal.
