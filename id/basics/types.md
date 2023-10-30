---
bab: 2
nomor halaman: 13
keterangan: Tipe adalah jenis data yang dapat direpresentasikan dan dimanipulasi dalam suatu bahasa.
---

# Types

Komputer sangat canggih dan dapat menggunakan variabel yang lebih kompleks daripada hanya angka. Di sinilah tipe variabel masuk. Variabel ada dalam beberapa jenis, dan berbagai bahasa mendukung jenis yang berbeda.

Jenis yang paling umum adalah:

- **Number**: Angka bisa berupa bilangan bulat (contoh: `1`, `-5`, `100`) atau nilai pecahan (contoh: `3.14`, `-2.5`, `0.01`). JavaScript tidak memiliki tipe terpisah untuk bilangan bulat dan nilai pecahan; JavaScript menganggap keduanya sebagai angka.
- **String**: String adalah urutan karakter, dapat diwakili oleh tanda kutip tunggal (contoh: `'hello'`) atau tanda kutip ganda (contoh: `"world"`).
- **Boolean**: Boolean mewakili nilai benar atau salah. Ini dapat ditulis sebagai `true` atau `false` (tanpa tanda kutip).
- **Null**: Tipe null mewakili nilai null, yang berarti "tidak ada nilai." Ini dapat ditulis sebagai `null` (tanpa tanda kutip).
- **Undefined**: Tipe undefined mewakili nilai yang belum diatur. Jika sebuah variabel telah dideklarasikan tetapi belum diberi nilai, maka nilainya adalah `undefined`.
- **Object**: Objek adalah kumpulan properti, masing-masing memiliki nama dan nilai. Anda dapat membuat objek menggunakan tanda kurung kerawang (`{}`) dan memberikan properti-properti padanya menggunakan pasangan nama-nilai.
- **Array**: Array adalah jenis objek khusus yang dapat menyimpan koleksi item. Anda dapat membuat array menggunakan tanda kurung siku (`[]`) dan memberikan daftar nilai ke dalamnya.
- **Function**: Fungsi adalah blok kode yang dapat didefinisikan dan kemudian dipanggil dengan nama. Fungsi dapat menerima argumen (input) dan mengembalikan nilai (output). Anda dapat membuat fungsi menggunakan kata kunci `function`.

JavaScript adalah bahasa "_loosely typed_," yang berarti Anda tidak perlu secara eksplisit mendeklarasikan jenis data dari variabel. Anda hanya perlu menggunakan kata kunci `var` untuk menunjukkan bahwa Anda mendeklarasikan sebuah variabel, dan interpreter akan menentukan jenis data yang Anda gunakan dari konteks dan penggunaan tanda kutip.

{% exercise %}
Deklarasikan tiga variabel dan inisialisasi dengan nilai berikut: `usia` sebagai angka, `nama` sebagai string, dan `isMarried` sebagai boolean.

{% initial %}
let age =
let name =
let isMarried =
{% solution %}
let age = 30
let name = "Cecilia"
let isMarried = true

{% validation %}
assert(typeof age === "number" && typeof name === "string" && typeof isMarried === "boolean");

{% context %}
{% endexercise %}

Operator `typeof` digunakan untuk memeriksa tipe data suatu variabel.

```javascript
`typeof "John";` // Mengembalikan "string"
`typeof 3.14;` // Mengembalikan "number"
`typeof NaN;` // Mengembalikan "number"
`typeof false;` // Mengembalikan "boolean"
`typeof [1, 2, 3, 4];` // Mengembalikan "object"
`typeof { name: "John", age: 34 };` // Mengembalikan "object"
`typeof new Date();` // Mengembalikan "object"
`typeof function () {};` // Mengembalikan "function"
`typeof myCar;` // Mengembalikan "undefined" *
`typeof null;`; // Mengembalikan "object"
```

Tipe data yang digunakan dalam JavaScript dapat dibedakan menjadi dua kategori berdasarkan nilai yang dikandungnya.

Tipe data yang dapat berisi nilai:

- `string`
- `number`
- `boolean`
- `object`
- `function`

{% hint style="info" %}
`Objek`, `Tanggal`, `Array`, `String`, `Nomor`, dan `Boolean` adalah jenis objek yang tersedia dalam JavaScript.
{% endhint %}

Tipe data yang tidak dapat berisi nilai:

- `null`
- `undefined`
  Nilai data primitif adalah nilai data sederhana tanpa properti dan metode tambahan, dan bukan merupakan objek. Mereka tidak dapat diubah, artinya tidak dapat diubah. Ada 7 tipe data primitif:

- string
- number
- bigint
- boolean
- undefined
- symbol
- null

{% exercise %}
Deklarasikan variabel bernama `person` dan inisialisasi dengan objek yang berisi properti berikut: `age` sebagai angka, `name` sebagai string, dan `isMarried` sebagai boolean.

{% initial %}
let person =

{% solution %}
let person = {
name: "Mary",
age: 25,
isMarried: false
};

{% validation %}
assert(typeof person.age === "number" && typeof person.name === "string" && typeof person.isMarried === "boolean");

{% context %}
{% endexercise %}
