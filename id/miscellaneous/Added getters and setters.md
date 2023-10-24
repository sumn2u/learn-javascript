---
bab: 19
nomor halaman: 123
keterangan: Dalam bab ini, kita akan belajar tentang getter dan setter JavaScript. Getter dan setter JavaScript adalah metode khusus yang memberikan akses ke properti objek. Getter digunakan untuk membaca nilai properti, sedangkan setter digunakan untuk menulis nilai properti.
---

## Getter dan Setter

ECMAScript 5 (ES5 2009) memperkenalkan Getter dan Setter.

Dalam JavaScript, getter dan setter adalah metode yang digunakan untuk mendapatkan atau mengatur nilai properti. Dengan menggunakan getter dan setter, Anda dapat memastikan kualitas data yang lebih baik. Getter dan setter memberikan sintaksis yang disederhanakan untuk properti dan metode objek. Getter dan setter digunakan untuk Enkapsulasi Data.

Mengapa Menggunakan Getter dan Setter?

- Ini memberikan sintaksis yang lebih sederhana.
- Ini memungkinkan sintaksis yang sama untuk properti dan metode.
- Ini dapat mengamankan kualitas data yang lebih baik.
- Ini berguna untuk melakukan hal-hal di balik layar.

## Getter JavaScript (Kata Kunci get)

Contoh ini menggunakan properti lang untuk mendapatkan nilai properti bahasa.

```sh

// Membuat objek:
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
};

// Menampilkan data dari objek menggunakan getter:
document.getElementById("demo").innerHTML = person.lang;
```

## Setter JavaScript (Kata Kunci set)

Contoh ini menggunakan properti lang untuk mengatur nilai properti bahasa.

```sh
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  }
};

// Mengatur properti objek menggunakan setter:
person.lang = "en";

// Menampilkan data dari objek:
document.getElementById("demo").innerHTML = person.language;
```

## Kesimpulan

Getter dan setter dalam JavaScript adalah alat yang kuat yang memungkinkan kita mengendalikan akses ke properti objek dan memberikan fungsionalitas tambahan. Getter memungkinkan kita mengambil nilai properti dengan logika kustom, sementara setter memungkinkan kita memvalidasi dan memodifikasi nilai yang masuk. Dengan menggunakan getter dan setter, kita dapat menjaga enkapsulasi data, meningkatkan keamanan, dan memastikan integritas objek kita.
