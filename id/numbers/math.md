---
bab: 3
nomorHalaman: 17
deskripsi: Objek `Math` memungkinkan untuk melakukan operasi matematika dalam JavaScript. Objek ini statis dan tidak memiliki konstruktor. Seseorang dapat menggunakan metode dan properti dari objek `Math` tanpa membuat objek `Math` terlebih dahulu.
---

# Math

Objek `Math` memungkinkan untuk melakukan operasi matematika dalam JavaScript. Objek ini statis dan tidak memiliki konstruktor. Seseorang dapat menggunakan metode dan properti dari objek `Math` tanpa membuat objek `Math` terlebih dahulu. Untuk mengakses propertinya, seseorang dapat menggunakan _Math.property._ Beberapa properti matematika dijelaskan di bawah ini:

```javascript
Math.E; // mengembalikan angka Euler
Math.PI; // mengembalikan PI
Math.SQRT2; // mengembalikan akar kuadrat dari 2
Math.SQRT1_2; // mengembalikan akar kuadrat dari 1/2
Math.LN2; // mengembalikan logaritma natural dari 2
Math.LN10; // mengembalikan logaritma natural dari 10
Math.LOG2E; // mengembalikan logaritma basis 2 dari E
Math.LOG10E; // mengembalikan logaritma basis 10 dari E
```

Contoh beberapa metode matematika adalah:

```javascript
Math.pow(8, 2); // 64
Math.round(4.6); // 5
Math.ceil(4.9); // 5
Math.floor(4.9); // 4
Math.trunc(4.9); // 4
Math.sign(-4); // -1
Math.sqrt(64); // 8
Math.abs(-4.7); // 4.7
Math.sin((90 * Math.PI) / 180); // 1 (sudut sin 90 derajat)
Math.cos((0 * Math.PI) / 180); // 1 (kosinus sudut 0 derajat)
Math.min(0, 150, 30, 20, -8, -200); // -200
Math.max(0, 150, 30, 20, -8, -200); // 150
Math.random(); // 0.44763808380924375
Math.log(2); // 0.6931471805599453
Math.log2(8); // 3
Math.log10(1000); // 3
```

Untuk mengakses metode matematika, seseorang dapat memanggil metodenya langsung dengan argumen di mana diperlukan.

| Metode             | Deskripsi                                                                               |
| ------------------ | --------------------------------------------------------------------------------------- |
| `abs(x)`           | Mengembalikan nilai absolut dari `x`                                                    |
| `acos(x)`          | Mengembalikan arkkosinus dari `x`, dalam radian                                         |
| `acosh(x)`         | Mengembalikan arkkosinus hiperbolik dari `x`                                            |
| `asin(x)`          | Mengembalikan arksinus dari `x`, dalam radian                                           |
| `asinh(x)`         | Mengembalikan arksinus hiperbolik dari `x`                                              |
| `atan(x)`          | Mengembalikan arktangen dari `x` sebagai nilai numerik antara `-PI/2` dan `PI/2` radian |
| `atan2(y,x)`       | Mengembalikan arktangen dari hasil bagi argumennya                                      |
| `atanh(x)`         | Mengembalikan arktangen hiperbolik dari `x`                                             |
| `cbrt(x)`          | Mengembalikan akar kubik dari `x`                                                       |
| `ceil(x)`          | Mengembalikan pembulatan ke atas ke bilangan bulat terdekat dari `x`                    |
| `cos(x)`           | Mengembalikan kosinus dari `x`, dalam radian                                            |
| `cosh(x)`          | Mengembalikan kosinus hiperbolik dari `x`                                               |
| `exp(x)`           | Mengembalikan nilai eksponensial dari `x`                                               |
| `floor(x)`         | Mengembalikan pembulatan ke bawah ke bilangan bulat terdekat dari `x`                   |
| `log(x)`           | Mengembalikan logaritma alami dari `x`                                                  |
| `max(x,y,z,... n)` | Mengembalikan angka dengan nilai tertinggi                                              |
| `min(x,y,z,... n)` | Mengembalikan angka dengan nilai terendah                                               |
| `pow(x,y)`         | Mengembalikan nilai `x` pangkat `y`                                                     |
| `random()`         | Mengembalikan angka antara 0 dan 1                                                      |
| `round(x)`         | Membulatkan angka ke angka terdekat `x`                                                 |
| `sign(x)`          | Mengembalikan apakah `x` negatif, `null`, atau positif (-1, 0, 1)                       |
| `sin(x)`           | Mengembalikan sin dari `x`, dalam radian                                                |
| `sinh(x)`          | Mengembalikan sin hiperbolik dari `x`                                                   |
| `sqrt(x)`          | Mengembalikan akar kuadrat dari `x`                                                     |
| `tan(x)`           | Mengembalikan tangen dari suatu sudut                                                   |
| `tanh(x)`          | Mengembalikan tangen hiperbolik dari `x`                                                |
| `trunc(x)`         | Mengembalikan bagian bilangan bulat dari suatu angka (`x`)                              |
