---
bab: 2
nomor halaman: 15
keterangan: Operator kesetaraan digunakan untuk perbandingan. Ini dapat digunakan untuk menentukan apakah dua variabel setara, bahkan jika mereka bukan tipe yang sama.
---

# Equality

Ketika menulis program, kita sering perlu menentukan kesetaraan variabel dalam hubungannya dengan variabel lain. Hal ini dilakukan menggunakan operator kesetaraan. Operator kesetaraan paling dasar adalah operator `==`. Operator ini berusaha sebisa mungkin untuk menentukan apakah dua variabel setara, bahkan jika mereka bukan tipe yang sama.

Sebagai contoh, anggap:

```javascript
let foo = 42;
let bar = 42;
let baz = "42";
let qux = "life";
```

`foo == bar` akan dievaluasi sebagai `true` dan `baz == qux` akan dievaluasi sebagai `false`, seperti yang diharapkan. Namun, `foo == baz` juga akan dievaluasi sebagai `true` meskipun `foo` dan `baz` memiliki tipe yang berbeda. Di balik layar, operator kesetaraan `==` berusaha memaksa operan-operannya memiliki tipe yang sama sebelum menentukan kesetaraan mereka. Ini berbeda dengan operator kesetaraan `===`.

Operator kesetaraan `===` menentukan bahwa dua variabel setara jika mereka memiliki tipe yang sama _dan_ memiliki nilai yang sama. Dengan asumsi yang sama seperti sebelumnya, ini berarti bahwa `foo === bar` masih akan dievaluasi sebagai `true`, tetapi `foo === baz` sekarang akan dievaluasi sebagai `false`. `baz === qux` masih akan dievaluasi sebagai `false`.

{% exercise %}
Gunakan operator `==` dan `===` untuk membandingkan nilai `str1` dan `str2`.

{% initial %}
let str1 = "halo";
let str2 = "HALLO";
let bool1 = true;
let bool2 = 1;
// membandingkan menggunakan ==
let stringResult1 =
let boolResult1 =
// membandingkan menggunakan ==
let stringResult1 =
let boolResult2 =
{% solution %}
let str1 = "hallo";
let str2 = "HALLO";
let bool1 = true;
let bool2 = 1;
// membandingkan menggunakan ==
let stringResult1 = str1 == str2 // false
let boolResult1 = bool1 == bool2 // true

// membandingkan menggunakan ==
let stringResult2 = str1 === str2 // false
let boolResult2 = bool1 === bool2 // false

{% validation %}
assert(stringResult1 === false && stringResult2 === false && boolResult1 ==true && boolResult2 === false );

{% context %}
{% endexercise %}
