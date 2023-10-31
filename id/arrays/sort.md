---
bab: 6
nomor halaman: 47
keterangan: Metode sort mengurutkan elemen-elemen dalam sebuah array dalam urutan tertentu. Secara default, itu mengurutkan elemen-elemen sebagai string dan menyusunnya dalam urutan naik berdasarkan nilai unit kode UTF-16 mereka.
---

# Sort

Metode `sort` mengurutkan elemen-elemen dalam array dalam urutan tertentu (menaik atau menurun). Secara default, metode `sort` mengurutkan elemen-elemen sebagai string dan menyusunnya dalam urutan naik berdasarkan nilai unit kode UTF-16 mereka. Berikut adalah sintaks penggunaan `sort`:

```c
array.sort([compareFunction]);
```

Argumen `compareFunction` bersifat opsional dan menentukan sebuah fungsi yang mendefinisikan urutan pengurutan. Jika diabaikan, elemen-elemen diurutkan dalam urutan naik berdasarkan representasi string mereka.

Sebagai contoh:

```javascript
let city = ["California", "Barcelona", "Paris", "Kathmandu"];
let sortedCity = city.sort();

console.log(sortedCity);

// Hasil: ['Barcelona', 'California', 'Kathmandu', 'Paris']
```

{% hint style="info" %}
Angka dapat diurutkan dengan tidak benar ketika diurutkan sebagai string. Sebagai contoh, "35" lebih besar dari "100" karena "3" lebih besar dari "1".
{% endhint %}
Untuk mengatasi masalah pengurutan dalam angka, fungsi perbandingan digunakan. Fungsi perbandingan mendefinisikan urutan pengurutan dan mengembalikan nilai **negatif**, **nol**, atau **positif** berdasarkan argumen, seperti ini:

- Nilai negatif jika `a` harus diurutkan sebelum `b`.
- Nilai positif jika `a` harus diurutkan setelah `b`.
- `0` jika `a` dan `b` sama dan urutan mereka tidak masalah.

```javascript
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => {
  return a - b;
});

// Hasil: [1, 5, 10, 25, 40, 100]
```

{% hint style="warning" %}
Metode `sort()` mengganti array asli.
{% endhint %}
