---
bab: 4
nomor halaman: 29
---

# Pecah

Metode `split()` membagi sebuah string menjadi daftar substring dan mengembalikannya sebagai array.

- menggunakan metode `split()`
- menggunakan template literal (diperkenalkan dalam ES6)

Metode split() membutuhkan:

separator (opsional) - Pola (string atau ekspresi reguler) yang menjelaskan di mana setiap pemecahan harus terjadi.
limit (opsional) - Bilangan bulat non-negatif yang membatasi jumlah potongan untuk memecah string yang diberikan.

```javascript
console.log("ABCDEF".split("")); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]

const text = "Java keren. Java seru.";

let pola = ".";
let teksBaru = text.split(pola);
console.log(teksBaru); // [ 'Java keren', ' Java seru', '' ]

let pola1 = ".";
// hanya memecah string hingga maksimum dua bagian
let teksBaru1 = text.split(pola1, 2);
console.log(teksBaru1); // [ 'Java keren', ' Java seru' ]

const text2 = "JavaScript ;  Python ;C;C++";
let pola2 = ";";
let teksBaru2 = text2.split(pola2);
console.log(teksBaru2); // [ 'JavaScript ', '  Python ', 'C', 'C++' ]

// menggunakan RegEx
let pola3 = /\s*(?:;|$)\s*/;
let teksBaru3 = text2.split(pola3);
console.log(teksBaru3); // [ 'JavaScript', 'Python', 'C', 'C++' ]

//Output
["A", "B", "C", "D", "E", "F"][("Java keren", " Java seru", "")][
  ("Java keren", " Java seru")
][("JavaScript ", "  Python ", "C", "C++")][
  ("JavaScript", "Python", "C", "C++")
];
```
