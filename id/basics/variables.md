---
bab: 2
nomor halaman: 11
keterangan: Variabel digunakan untuk menyimpan dan menyimpan data. Itu dapat menampung berbagai jenis nilai, seperti angka, string, boolean, objek, array, fungsi, dan banyak lagi.
---

# Variables

Langkah pertama untuk benar-benar memahami pemrograman adalah melihat kembali aljabar. Jika diingat-ingat di bangku sekolah, aljabar diawali dengan penulisan istilah-istilah seperti berikut ini.

```
3 + 5 = 8
```

Anda mulai melakukan perhitungan ketika Anda memasukkan sesuatu yang tidak diketahui, misalnya x di bawah ini:

```
3 + x = 8
```

Menggeser orang-orang di sekitar Anda dapat menentukan x:

```
x = 8 - 3
-> x = 5
```

Ketika Anda memperkenalkan lebih dari satu, Anda membuat istilah Anda lebih fleksibel - Anda menggunakan variabel:

```
x + y = 8
```

Anda dapat mengubah nilai x dan y dan rumusnya tetap benar:

```
x = 4
y = 4
```

or

```
x = 3
y = 5
```

Hal yang sama berlaku untuk bahasa pemrograman. Dalam pemrograman, variabel adalah wadah untuk nilai-nilai yang berubah. Variabel dapat menampung segala macam nilai dan juga hasil perhitungan. Variabel memiliki `nama` dan `nilai` yang dipisahkan dengan tanda sama dengan (=). Namun, penting untuk diingat bahwa bahasa pemrograman yang berbeda memiliki batasan dan batasannya sendiri mengenai apa yang dapat digunakan sebagai nama variabel. Hal ini karena kata-kata tertentu mungkin dicadangkan untuk fungsi atau operasi tertentu dalam bahasa tersebut.

Mari kita lihat cara kerjanya dalam Javascript. Kode berikut mendefinisikan dua variabel, menghitung hasil penjumlahan keduanya, dan mendefinisikan hasil ini sebagai nilai variabel ketiga.

```javascript
let x = 5;
let y = 6;
let result = x + y;
```

Ada pedoman tertentu yang perlu diikuti saat memberi nama variabel. Mereka

- Nama variabel harus diawali dengan huruf, garis bawah (\_), atau tanda dolar ($).
- Setelah karakter pertama, kita dapat menggunakan huruf, angka, garis bawah, atau tanda dolar.
- JavaScript membedakan antara huruf besar dan kecil (peka huruf besar-kecil), jadi myVariable, MyVariable, dan MYVARIABLE semuanya merupakan variabel terpisah.
- Agar kode Anda mudah dibaca dan dipelihara, disarankan untuk menggunakan nama variabel deskriptif yang mencerminkan tujuannya secara akurat.

{% exercise %}
Tentukan variabel `x` sama dengan 20.

{% initial %}
let x =

{% solution %}
let x = 20;

{% validation %}
assert(x == 20);

{% context %}
{% endexercise %}
**ES6 Version**

[ECMAScript 2015 atau ES2015](https://262.ecma-international.org/6.0/) juga dikenal sebagai E6 adalah pembaruan signifikan pada bahasa pemrograman JavaScript sejak 2009. Di ES6 kami memiliki tiga cara untuk mendeklarasikan variabel.&#x20;

```javascript
var x = 5;
const y = "Test";
let z = true;
```

Jenis deklarasi bergantung pada cakupannya. Berbeda dengan kata kunci `var`, yang mendefinisikan variabel secara global atau lokal ke seluruh fungsi terlepas dari cakupan bloknya, `let` memungkinkan Anda mendeklarasikan variabel yang cakupannya terbatas pada blok, pernyataan, atau ekspresi di mana variabel tersebut digunakan. Misalnya.

```javascript
function varTest() {
  var x = 1;
  if (true) {
    var x = 2; // variabel yang sama
    console.log(x); //2
  }
  console.log(x); //2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x); // 2
  }
  console.log(x); // 1
}
```

`const` variabel tidak dapat diubah artinya tidak boleh ditugaskan kembali.

```javascript
const x = "hi!";
x = "selamat tinggal"; // ini akan terjadi kesalahan
```
