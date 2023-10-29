---
bab: 6
nomor halaman: 48
keterangan: Array adalah kumpulan elemen, dan setiap elemen diberikan posisi numerik yang disebut indeks. Indeks dimulai dari nol, yang berarti elemen pertama dalam array memiliki indeks 0, yang kedua memiliki indeks 1, dan seterusnya.
---

# Indices

Indeks
Jadi, Anda memiliki array elemen data, tetapi bagaimana jika Anda ingin mengakses elemen tertentu? Di situlah peran indeks masuk. Indeks merujuk pada posisi dalam array. Secara logis, indeks berkembang satu per satu, tetapi perlu diingat bahwa indeks pertama dalam sebuah array adalah 0, seperti halnya dalam kebanyakan bahasa pemrograman. Tanda kurung siku [] digunakan untuk menunjukkan bahwa Anda merujuk pada indeks dalam sebuah array.

```javascript
// Ini adalah array string
let fruits = ["apple", "banana", "pineapple", "strawberry"];

// Kami mengatur variabel banana dengan nilai dari elemen kedua dari
// array buah. Ingatlah bahwa indeks dimulai dari 0, jadi 1 adalah
// elemen kedua. Hasil: banana = "pisang"

let banana = fruits[1];
```

Anda juga dapat menggunakan indeks array untuk mengatur nilai dari elemen dalam array:

```javascript
let array = ["a", "b", "c", "d", "e"];
//  indices:  0    1    2    3    4
array[4] = "f";
console.log(array); // Hasil: ['a', 'b', 'c', 'd', 'f']
```

Perhatikan bahwa jika Anda mencoba mengakses atau mengatur elemen menggunakan indeks di luar batas array (misalnya, indeks yang kurang dari 0 atau lebih besar atau sama dengan panjang array), Anda akan mendapatkan nilai undefined.

```javascript
console.log(array[5]); // Output: undefined
array[5] = "g";
console.log(array); // Hasil: ['a', 'b', 'c', 'd', 'f', undefined, 'g']
```
