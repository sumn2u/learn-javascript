---
bab: 9
nomor halaman: 59
keterangan: Referensi ke objek adalah nilai yang menunjuk ke lokasi memori tempat objek disimpan. Ketika sebuah objek dibuat, ruang memori dialokasikan untuk menyimpan properti dan nilai-nilainya. Ketika kita menugaskan objek ini ke variabel, variabel tersebut menyimpan referensi ke lokasi memori tempat objek disimpan.
---

# Referensi

Objek **tidak pernah disalin**. Mereka dilewatkan dengan referensi. Referensi objek adalah nilai yang merujuk pada objek. Ketika Anda membuat objek menggunakan operator `new` atau sintaksis objek literal, JavaScript membuat objek dan menetapkan referensi padanya.

Berikut contoh pembuatan objek menggunakan sintaksis objek literal:

```javascript
var objek = {
  foo: "bar",
};
```

Berikut contoh pembuatan objek menggunakan operator `new`:

```javascript
var objek = new Object();
objek.foo = "bar";
```

Ketika Anda menugaskan referensi objek ke sebuah variabel, variabel tersebut hanya menyimpan referensi ke objek, bukan objek itu sendiri. Ini berarti jika Anda menugaskan referensi objek ke variabel lain, kedua variabel akan menunjuk ke objek yang sama.

Contohnya:

```javascript
var objek1 = {
  foo: "bar",
};

var objek2 = objek1;

console.log(objek1 === objek2); // Output: true
```

Pada contoh di atas, baik `objek1` maupun `objek2` adalah variabel yang menyimpan referensi ke objek yang sama. Operator `===` digunakan untuk membandingkan referensi, bukan objek itu sendiri, dan mengembalikan `true` karena kedua variabel menunjuk ke objek yang sama.

{% hint style="info" %}
Anda dapat menggunakan metode `Object.assign()` untuk membuat objek baru yang merupakan salinan objek yang ada.&#x20;
{% endhint %}

Berikut adalah contoh pembuatan objek melalui referensi.

```javascript
// Bayangkan saya punya sepotong pizza
let pizzaSaya = { potongan: 5 };
// Dan saya membaginya dengan Anda
let pizzaAnda = pizzaSaya;
// Saya makan satu potong lagi
pizzaSaya.potongan = pizzaSaya.potongan - 1;
let jumlahPotonganTersisa = pizzaAnda.potongan;
// Sekarang kita memiliki 4 potong karena pizzaSaya dan pizzaAnda
// merujuk ke objek pizza yang sama.
let a = {},
  b = {},
  c = {};
// a, b, dan c masing-masing merujuk ke objek kosong yang berbeda
a = b = c = {};
// a, b, dan c semuanya merujuk ke
// objek kosong yang sama
```
