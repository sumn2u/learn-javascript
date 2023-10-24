---
bab: 5
nomor halaman: 30
keterangan: Kondisi if mengevaluasi kondisi tersebut, dan jika kondisinya benar, blok kode yang mengikuti pernyataan if akan dieksekusi; jika tidak, itu akan dilewati.
---

# If

Kondisi termudah adalah pernyataan if dan sintaksnya adalah `if(kondisi){ lakukan ini … }`. Kondisi tersebut harus benar agar kode di dalam kurung kurawal dapat dieksekusi. Misalnya, Anda dapat menguji sebuah string dan menetapkan nilai string lain bergantung pada nilainya seperti dijelaskan di bawah.

```javascript
let country = "France";
let weather;
let food;
let currency;

if (country === "England") {
  weather = "mengerikan";
  food = "memuaskan";
  currency = "pound sterling";
}

if (country === "France") {
  weather = "bagus";
  food = "Menakjubkan, tetapi jarang sekali vegetarian";
  currency = "lucu, kecil, dan berwarna-warni";
}

if (country === "Germany") {
  weather = "rata-rata";
  food = "hal terburuk yang pernah ada";
  currency = "lucu, kecil, dan berwarna-warni";
}

let message =
  "Ini adalah " +
  country +
  ", Cuacanya adalah " +
  weather +
  ", Makanannya adalah " +
  food +
  " dan " +
  "mata uangnya adalah " +
  currency;

console.log(message);
// 'Ini adalah France, Cuacanya adalah bagus, makanannya adalah Menakjubkan, tetapi jarang sekali vegetarian dan mata uangnya adalah lucu, kecil, dan berwarna-warni'
```

## Nested If-Else

Di JavaScript, Anda dapat menggunakan pernyataan `if-else` bersarang untuk membuat logika kondisional yang lebih kompleks.

### Basic Syntax

```javascript
if (condition1) {
  // Kode yang akan dijalankan ketika condition1 adalah benar
} else {
  if (condition2) {
    // Kode yang akan dijalankan ketika condition1 adalah salah dan condition2 adalah benar
  } else {
    // Kode yang akan dijalankan ketika baik condition1 maupun condition2 adalah salah
  }
}
```

Program berikut menentukan status seorang siswa berdasarkan usia mereka dan mencetak pesan yang sesuai.

```JavaScript
let age = 20;
let isStudent = true;

if (age >= 18) {
  if (isStudent) {
 console.log("Anda adalah siswa dewasa.");

  } else {
console.log("Anda adalah seorang dewasa, tetapi bukan seorang siswa.");

  }
} else {
console.log("Anda bukan seorang dewasa.");

}

// Output: Anda adalah seorang siswa dewasa.

```

Program ini memeriksa hujan, suhu, dan salju untuk memberikan saran cuaca.

```JavaScript
let temperature = 25;
let isRaining = true;
let isSnowing = false;

if (isRaining) {
  console.log("Sedang hujan. Jangan lupa bawa payung.");

  if (temperature < 10) {
    console.log("Dan cuacanya dingin. Anda mungkin perlu membawa jaket juga.");
  }
} else if (isSnowing) {
  console.log("Sedang bersalju. Bersiaplah untuk jalan yang licin.");
} else {
  console.log("Tidak ada hujan atau salju. Nikmati cuacanya!");
}

// Output: Sedang hujan. Jangan lupa bawa payung.

```

Program ini memeriksa usia seseorang, pengalaman berkendara sebelumnya, dan status ujian tulis untuk menentukan kelayakan mendapatkan izin mengemudi.

```JavaScript
let age = 19;
let hasPriorExperience = true;
let hasPassedWrittenTest = true;

if (age >= 18) {
  if (hasPriorExperience) {
    console.log("Selamat! Anda memenuhi syarat untuk mendapatkan izin mengemudi.");
  } else {
    console.log("Maaf, Anda memerlukan pengalaman berkendara sebelumnya untuk mendapatkan izin mengemudi.");
  }
} else {
  console.log("Maaf, Anda harus berusia 18 tahun atau lebih untuk mengajukan izin mengemudi.");

  if (hasPassedWrittenTest) {
    console.log("Anda telah lulus ujian tulis, tetapi Anda harus menunggu hingga berusia 18 tahun untuk mengajukan izin.");
  } else {
    console.log("Anda perlu lulus ujian tulis terlebih dahulu dan menunggu hingga berusia 18 tahun untuk mengajukan izin.");
  }
}

// Output: Selamat! Anda memenuhi syarat untuk mendapatkan izin mengemudi.

```
