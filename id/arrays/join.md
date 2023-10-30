---
bab: 6
nomor halaman: 43
keterangan: Metode join mengubah array menjadi sebuah string dan menggabungkannya tanpa memodifikasi array asli..
---

# Join

Metode `join` mengubah array menjadi sebuah string dan menggabungkannya. Ia tidak mengubah array asli. Berikut adalah sintaks untuk menggunakan `join`:

```c
array.join([separator]);
```

Argumen `separator` adalah opsional dan menentukan karakter yang akan digunakan untuk memisahkan elemen-elemen dalam string hasilnya. Jika diabaikan, elemen-elemen array dipisahkan dengan koma (`,`).

Sebagai contoh:

```javascript
let array = ["one", "two", "three", "four"];

console.log(array.join(" "));

// Hasil: satu dua tiga empat
```

{% hint style="warning" %}
Anda dapat menentukan pemisah apa pun, tetapi yang default adalah koma (`,`).
{% endhint %}

Pada contoh di atas, spasi digunakan sebagai pemisah. Anda juga dapat menggunakan `join` untuk mengkonversi objek mirip array (seperti objek arguments atau objek NodeList) menjadi sebuah string dengan pertama-tama mengonversinya menjadi array menggunakan metode `Array.prototype.slice()`:

```javascript
function printArguments() {
  console.log(Array.prototype.slice.call(arguments).join(", "));
}

printArguments("a", "b", "c"); // Hasil: "a, b, c"
```
