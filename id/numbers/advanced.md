---
bab: 3
nomorHalaman: 21
deskripsi: Ada beberapa operator canggih yang menyediakan fungsionalitas kuat dan memungkinkan kita melakukan berbagai operasi di luar operasi aritmatika dan logika dasar. Operator-operator canggih ini dapat sangat membantu dalam memanipulasi data, melakukan operasi bit, bekerja dengan objek, dan banyak lagi.
---

# Operator Canggih

Ketika operator-operator digabungkan tanpa tanda kurung, urutan di mana mereka diterapkan ditentukan oleh _precedence_ (kedahsyatan) operator. Perkalian `(*)` dan pembagian `(/)` memiliki prioritas yang lebih tinggi daripada penambahan `(+)` dan pengurangan `(-)`.

```javascript
// perkalian dilakukan terlebih dahulu, diikuti oleh penambahan
let x = 100 + 50 * 3; // 250
// dengan tanda kurung, operasi di dalam tanda kurung dihitung terlebih dahulu
let y = (100 + 50) * 3; // 450
// operasi dengan prioritas yang sama dihitung dari kiri ke kanan
let z = 100 / 50 * 3;
```

Ada beberapa operator matematika canggih yang dapat digunakan saat menulis program. Berikut adalah daftar beberapa operator matematika canggih utama:

* **Operator Modulo (`%`)**: Operator modulo mengembalikan sisa dari operasi pembagian. Sebagai contoh:

```javascript
console.log(10 % 3); // 1
console.log(11 % 3); // 2
console.log(12 % 3); // 0
```

* **Operator Pemangkatan (`**`)**: Operator pemangkatan mengangkat suatu angka ke pangkat angka lain. Ini adalah operator yang lebih baru dan tidak didukung di semua peramban, sehingga Anda mungkin perlu menggunakan fungsi `Math.pow` sebagai gantinya. Sebagai contoh:

```javascript
console.log(2 ** 3); // 8
console.log(3 ** 2); // 9
console.log(4 ** 3); // 64
```

* **Operator Peningkatan (`++`)**: Operator peningkatan menambahkan satu pada suatu angka. Ini dapat digunakan sebagai awalan (sebelum operand) atau akhiran (setelah operand). Sebagai contoh:

```javascript
let x = 1;
x++; // x sekarang 2
++x; // x sekarang 3
```

* **Operator Penurunan (`--`)**: Operator penurunan mengurangkan satu pada suatu angka. Ini dapat digunakan sebagai awalan (sebelum operand) atau akhiran (setelah operand). Sebagai contoh:

```javascript
let y = 3;
y--; // y sekarang 2
--y; // y sekarang 1
```

* **Objek Math**: Objek `Math` adalah objek bawaan dalam JavaScript yang menyediakan fungsi dan konstanta matematika. Anda dapat menggunakan metode objek `Math` untuk melakukan operasi matematika canggih, seperti mencari akar kuadrat suatu angka, menghitung sinus suatu angka, atau menghasilkan angka acak. Sebagai contoh:

```javascript
console.log(Math.sqrt(9)); // 3
console.log(Math.sin(0)); // 0
console.log(Math.random()); // angka acak antara 0 dan 1
```

Ini hanya beberapa contoh dari operator-operator matematika canggih dan fungsi-fungsi yang tersedia dalam JavaScript. Ada banyak lagi yang bisa Anda gunakan untuk melakukan operasi matematika canggih saat menulis program.

{% exercise %}
Gunakan operator-operator canggih berikut untuk melakukan operasi pada `num1` dan `num2`.

{% initial %}
let num1 = 10;
let num2 = 5;

// Operator ++ untuk menambahkan nilai num1.
const result1 =
// Operator -- untuk mengurangkan nilai num2.
const result2 =
// Operator += untuk menambahkan num2 ke num1.
const result3 =
// Operator -= untuk mengurangkan num2 dari num1.
const result4 =

{% solution %}
let num1 = 10;
let num2 = 5;

// Operator ++ untuk menambahkan nilai num1.
num1++;
const result1 = num1; // 11
// Operator -- untuk mengurangkan nilai num2.
num2--;
const result2 = num2; // 4
// Operator += untuk menambahkan num2 ke num1.
num1 += num2;
const result3 = num1 // 15
// Operator -= untuk mengurangkan num2 dari num1.
num1 -= num2;
const result4 = num1 // 11

{% validation %}
assert(result1 === 11 && result2 === 4 && result3 === 15 && result4 === 11 );

{% context %}
{% endexercise %}

## Operator Penggabungan Nullish '??'

Operator penggabungan `nullish` mengembalikan argumen pertama jika tidak `null/undefined`, jika tidak, maka argumen kedua. Ditulis dengan dua tanda tanya `??`. Hasil dari `x ?? y` adalah:

* Jika `x` terdefinisi, maka `x`,
* Jika `y` tidak terdefinisi, maka `y`.

{% hint style="info" %}
Ini adalah penambahan terbaru dalam bahasa ini dan mungkin memerlukan polyfill untuk mendukung peramban lama.
{% endhint %}