---
bab: 5
nomor halaman: 35
keterangan: Menggabungkan kondisi merujuk pada menggabungkan beberapa kondisi menggunakan operator logika untuk membuat kondisional yang lebih kompleks dan canggih.
---

# Concatenate

Selain itu, Anda dapat menggabungkan kondisi yang berbeda dengan pernyataan "atau" atau "dan" untuk menguji apakah salah satu pernyataan benar, atau keduanya benar, secara berturut-turut.

Dalam JavaScript, "atau" ditulis sebagai `||` dan "dan" ditulis sebagai `&&`.

Misalkan Anda ingin menguji apakah nilai x berada di antara 10 dan 20. Anda dapat melakukannya dengan pernyataan berikut:

```javascript
if (x > 10 && x < 20) {
    ...
}
```

Jika Anda ingin memastikan bahwa nilai `country` adalah "England" atau "Germany," Anda dapat menggunakan:

```javascript
if (country === "England" || country === "Germany") {
    ...
}
```

> **Catatan**: Seperti operasi pada angka, kondisi dapat dikelompokkan dengan menggunakan tanda kurung, misalnya: `if ((name === "John" || name === "Jennifer") && country === "France")`.
