---
bab: 3
nomorHalaman: 19
deskripsi: Operator adalah simbol atau kata kunci yang digunakan untuk melakukan operasi pada data, seperti variabel, nilai, atau ekspresi. Mereka merupakan bagian penting dari bahasa dan memungkinkan pengembang untuk melakukan operasi aritmatika, perbandingan, logika, penugasan, dan operasi lainnya.
---

# Operator Dasar

Dalam JavaScript, operator adalah simbol atau kata kunci yang digunakan untuk melakukan operasi pada operan (nilai dan variabel). Sebagai contoh,

```javascript
2 + 3; //5
```

Di sini `+` adalah operator yang melakukan penambahan, dan `2` dan `3` adalah operan.

## Jenis Operator

Ada berbagai operator yang didukung oleh JavaScript. Mereka adalah sebagai berikut:

- [Operator Aritmatika](#operator-aritmatika)
- [Operator Penugasan](#operator-penugasan)
- [Operator Perbandingan](#Operator-perbandingan)
- [Operator Logika](#operator-logika)
- [Operator Ternary](#operator-ternary)
- [Operator Bitwise](#operator-bitwise)
- [Operator `typeof`](#operator-typeof)

### Operator Aritmatika

Operator aritmatika digunakan untuk melakukan operasi matematika pada nilai. Mereka meliputi

- [Operator Penambahan (`+`)](#operator-penambahan)
- [Operator Pengurangan (`-`)](#operator-pengurangan)
- [Operator Perkalian (`*`)](#operator-perkalian)
- [Operator Pembagian (`/`)](#operator-pembagian)
- [Operator Sisa (`%`)](#operator-sisa)

#### Operator Penambahan (`+`)

Operator penambahan menambahkan dua angka. Sebagai contoh:

```javascript
console.log(1 + 2); // 3
console.log(1 + -2); // -1
```

#### Operator Pengurangan (`-`)

Operator pengurangan mengurangkan satu angka dari yang lain. Sebagai contoh:

```javascript
console.log(3 - 2); // 1
console.log(3 - -2); // 5
```

#### Operator Perkalian (`*`)

Operator perkalian mengalikan dua angka. Sebagai contoh:

```javascript
console.log(2 * 3); // 6
console.log(2 * -3); // -6
```

#### Operator Pembagian (`/`)

Operator pembagian membagi satu angka dengan yang lain. Sebagai contoh:

```javascript
console.log(6 / 2); // 3
console.log(6 / -2); // -3
```

#### Operator Sisa (`%`)

Operator sisa mengembalikan sisa dari operasi pembagian. Sebagai contoh:

```javascript
console.log(10 % 3); // 1
console.log(11 % 3); // 2
console.log(12 % 3); // 0
```

Penerjemah JavaScript bekerja dari kiri ke kanan. Seseorang dapat menggunakan tanda kurung seperti dalam matematika untuk memisahkan dan mengelompokkan ekspresi: `c = (a / b) + d`

{% hint style="warning" %}
JavaScript menggunakan operator `+` baik untuk penambahan maupun penggabungan (konkatenasi). Angka ditambahkan sementara string digabungkan.
{% endhint %}

Istilah `NaN` adalah kata yang dipesan yang menunjukkan bahwa sebuah angka bukan angka yang sah, ini muncul ketika kita melakukan operasi aritmatika dengan string yang bukan angka akan menghasilkan `NaN` (Not a Number).

```javascript
let x = 100 / "10";
```

Metode `parseInt` mem-parsing nilai sebagai string dan mengembalikan bilangan bulat pertama.

```javascript
parseInt("10"); // 10
parseInt("10.00"); // 10
parseInt("10.33"); // 10
parseInt("34 45 66"); // 34
parseInt(" 60 "); // 60
parseInt("40 years"); //40
parseInt("He was 40"); //NaN
```

Dalam JavaScript, jika kita menghitung angka di luar angka terbesar yang mungkin, ia akan mengembalikan `Infinity`.

```javascript
let x = 2 / 0; // Infinity
let y = -2 / 0; // -Infinity
```



{% exercise %}
Gunakan operator matematika +, -, \*, /, dan % untuk melakukan operasi berikut pada `num1` dan `num2`.

{% initial %}
let num1 = 10;
let num2 = 5;

// Tambahkan num1 dan num2.
let addResult =
// Kurangkan num2 dari num1.
let subtractResult =
// Kalikan num1 dan num2.
let multiplyResult =
// Bagi num1 oleh num2.
let divideResult =
// Temukan sisa num1 dibagi num2.
let reminderResult =

{% solution %}
let num1 = 10;
let num2 = 5;

// Tambahkan num1 dan num2.
let addResult = (num1 + num2);
// Kurangkan num2 dari num1.
let subtractResult = (num1 - num2);
// Kalikan num1 dan num2.
let multiplyResult = (num1 \* num2);
// Bagi num1 oleh num2.
let divideResult = (num1 / num2);
// Temukan sisa num1 dibagi num2.
let reminderResult = (num1 % num2);

{% validation %}
assert(addResult === 15 && subtractResult === 5 && multiplyResult === 50 && divideResult === 2 && reminderResult === 0 );

{% context %}
{% endexercise %}

### Operator Penugasan

Operator penugasan digunakan untuk memberi nilai ke variabel atau mengevaluasi nilai yang diberikan. _Penggabungan operator penugasan mungkin untuk memberikan satu nilai ke beberapa nilai._ Mereka mencakup operator penugasan (`=`) dan operator penugasan gabungan seperti `+=`, `-=`, `*=`, dan `/=`.

#### `=` (Operator Penugasan)

Operator ini digunakan untuk memberikan nilai di sebelah kanan ke variabel di sebelah kiri.
Contoh:

```javascript
let x = 10; //Memberikan nilai 10 ke variabel x.
```

#### Operator Penugasan Gabungan

Operator-operator ini menggabungkan operasi aritmatika dengan operasi penugasan. Mereka adalah pintasan untuk melakukan operasi dan kemudian memberikan hasilnya kembali ke variabel.
Sebagai contoh:

##### `+=` (Penugasan Penambahan)

Ini menambahkan nilai di sebelah kanan ke variabel dan memberikan hasilnya kembali ke variabel.

##### `-=` (Penugasan Pengurangan)

Ini mengurangkan nilai di sebelah kanan dari variabel dan memberikan hasilnya kembali ke variabel.

##### `*=-` (Penugasan Perkalian)

Ini mengalikan variabel dengan nilai di sebelah kanan dan memberikan hasilnya kembali ke variabel.

##### `/=` (Penugasan Pembagian)

Ini membagi variabel dengan nilai di sebelah kanan dan memberikan hasilnya kembali ke variabel.

##### `%=` (Penugasan Sisa)

Ini menghitung sisa ketika variabel dibagi dengan nilai di sebelah kanan dan memberikan hasilnya kembali ke variabel.

```javascript
let a = 10;
a += 5; // Setara dengan a = a + 5; (a menjadi 15)
a -= 3; // Setara dengan a = a - 3; (a menjadi 12)
a *= 2; // Setara dengan a = a * 2; (a menjadi 24)
a /= 4; // Setara dengan a = a / 4; (a menjadi 6)
a %= 5; // Setara dengan a = a % 5; (a menjadi 1)
```

### Operator Perbandingan

Operator perbandingan digunakan untuk membandingkan dua nilai atau ekspresi dan mengembalikan hasil `boolean`, yang bisa berupa `true` atau `false`. Operator-operator ini umumnya digunakan dalam pernyataan kondisional untuk membuat keputusan atau mengevaluasi kondisi.

#### Sama dengan (`==`)

Operator ini memeriksa apakah nilai di sebelah kiri dan kanan adalah sama. Jika mereka sama, ia mengembalikan `true`, jika tidak, ia mengembalikan `false`. Ini tidak mempertimbangkan tipe data.

```javascript
5 == 5; // true
"5" == 5; // true (konversi tipe data implisit)
```

#### Tidak sama dengan (`!=`)

Operator ini memeriksa apakah nilai di sebelah kiri dan kanan tidak sama. Jika mereka tidak sama, ia mengembalikan `true`, jika tidak, ia mengembalikan `false`.

```javascript
5 != 3; // true
"5" != 5; // false (konversi tipe data implisit)
```

#### Sama dengan secara ketat (`===`)

Operator ini memeriksa apakah nilai di sebelah kiri dan kanan sama dan memiliki tipe data yang sama. Jika nilai dan tipe data keduanya cocok, ia mengembalikan `true`, jika tidak, ia mengembalikan `false`.

```javascript
5 === 5; // true
"5" === 5; // false (tipe data yang berbeda)
```

#### Tidak sama dengan secara ketat (`!==`)

Operator ini memeriksa apakah nilai di sebelah kiri dan kanan tidak sama atau memiliki tipe data yang berbeda. Jika mereka tidak sama atau memiliki tipe data yang berbeda, ia mengembalikan `true`, jika tidak, ia mengembalikan `false`.

```javascript
5 !== "5"; // true (tipe data yang berbeda)
5 !== 5; // false
```

#### Lebih besar dari (`>`)

Operator ini memeriksa apakah nilai di sebelah kiri lebih besar dari nilai di sebelah kanan. Jika nilai di sebelah kiri lebih besar, ia mengembalikan `true`, jika tidak, ia mengembalikan `false`.

```javascript
8 > 5; // true
3 > 10; // false
```

#### Lebih kecil dari (`<`)

Operator ini memeriksa apakah nilai di sebelah kiri lebih kecil dari nilai di sebelah kanan. Jika nilai di sebelah kiri lebih kecil, ia mengembalikan `true`, jika tidak, ia mengembalikan `false`.

```javascript
3 < 5; // true
8 < 2; // false
```

#### Lebih besar dari atau sama dengan (`>=`)

Operator ini memeriksa apakah nilai di sebelah kiri lebih besar atau sama dengan nilai di sebelah kanan. Jika nilai di sebelah kiri lebih besar atau sama, ia mengembalikan `true`, jika tidak, ia mengembalikan `false`.

```javascript
8 >= 5; // true
3 >= 8; // false
```

#### Lebih kecil dari atau

 sama dengan (`<=`)

Operator ini memeriksa apakah nilai di sebelah kiri lebih kecil atau sama dengan nilai di sebelah kanan. Jika nilai di sebelah kiri lebih kecil atau sama, ia mengembalikan `true`, jika tidak, ia mengembalikan `false`.

```javascript
3 <= 5; // true
8 <= 2; // false
```

### Operator Logika

Operator logika digunakan untuk melakukan operasi logika pada nilai Boolean atau ekspresi Boolean. Operator-operator ini memungkinkan Anda untuk menggabungkan atau memanipulasi nilai Boolean untuk membuat keputusan atau mengevaluasi kondisi yang kompleks.

#### DAN Logika (`&&`)

Operator logika AND mengembalikan `true` jika kedua operan adalah `true`. Jika setidaknya salah satu dari operan adalah `false`, ia mengembalikan `false`.

```javascript
true && true; // true
true && false; // false
false && true; // false
false && false; // false
```

#### ATAU Logika (`||`)

Operator logika OR mengembalikan `true` jika setidaknya satu dari operan adalah `true`. Ia mengembalikan `false` hanya jika kedua operan adalah `false`.

```javascript
true || true; // true
true || false; // true
false || true; // true
false || false; // false
```

#### TIDAK Logika (`!`)

Operator logika NOT membalikkan nilai dari operan. Ia mengembalikan `true` jika operan adalah `false`, dan ia mengembalikan `false` jika operan adalah `true`.

```javascript
!true; // false
!false; // true
```

### Operator Ternary

Operator ternary memiliki tiga operan. Ini adalah bentuk singkat dari kondisi `if/else`.

Ini adalah bentuk singkat dari kondisi `if-else`.

**Sintaks**

```js
Y =  ? A : B
Jika kondisinya benar maka Y = A, jika tidak Y = B
```

```javascript
let isEven = 8 % 2 === 0 ? "Genap" : "Ganjil";
console.log(isEven); // "Genap"
```

### Operator Bitwise

Operator bitwise digunakan untuk memanipulasi bit individual dari angka biner. Mereka melakukan operasi pada level bit, yang sangat berguna dalam situasi di mana Anda perlu mengendalikan atau menganalisis data tingkat rendah.

#### Bitwise AND (`&`)

Operator ini membandingkan setiap bit dari dua angka dan mengembalikan 1 untuk setiap bit yang bernilai 1 pada kedua angka. Semua bit lainnya diatur ke 0.

```javascript
1010 & 1100; // 1000
```

#### Bitwise OR (`|`)

Operator ini membandingkan setiap bit dari dua angka dan mengembalikan 1 untuk setiap bit yang bernilai 1 pada setidaknya salah satu dari angka tersebut.

```javascript
1010 | 1100; // 1110
```

#### Bitwise XOR (`^`)

Operator ini membandingkan setiap bit dari dua angka dan mengembalikan 1 untuk setiap bit yang bernilai 1 pada salah satu angka tetapi tidak pada keduanya.

```javascript
1010 ^ 1100; // 0110
```

#### Bitwise NOT (`-`)

Operator ini membalikkan (membalik) semua bit dari sebuah angka. Ini mengubah setiap 0 menjadi 1 dan setiap 1 menjadi 0.

```javascript
~1010; // 0101
```

#### Pergeseran Kiri (`<<`)

Operator ini menggeser bit dari sebuah angka ke kiri sebanyak posisi tertentu, mengisi posisi yang digeser dengan 0.

```javascript
1010 << 2; // 101000 (dipindahkan ke kiri sebanyak 2 posisi)
```

#### Pergeseran Kanan (`>>`)

Operator ini menggeser bit dari sebuah angka ke kanan sebanyak posisi tertentu. Posisi yang digeser diisi berdasarkan bit terkiri (bit tanda).

```javascript
1010 >> 2; // 0010 (dipindahkan ke kanan sebanyak 2 posisi)
```

### Operator `typeof`

Ini mengembalikan tipe operan, Tipe yang mungkin ada dalam javascript adalah undefined, Object, boolean, number, string, symbol, dan function.

```javascript
let nilai1 = 42;
let nilai2 = "Halo, Dunia!";
let nilai3 = true;
let nilai4 = null;

console.log(typeof nilai1); // "number"
console.log(typeof nilai2); // "string"
console.log(typeof nilai3); // "boolean"
console.log(typeof nilai4); // "object" (Catatan: `typeof null` mengembalikan "object" karena alasan sejarah)
```
