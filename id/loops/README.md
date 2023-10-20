---
layout: editorial
bab: 7
nomor halaman: 49
keterangan: Perulangan adalah struktur kontrol yang memungkinkan Anda mengeksekusi blok kode secara berulang hingga kondisi yang ditentukan terpenuhi. Mereka sangat penting untuk mengotomatisasi tugas-tugas berulang dan mengulang struktur data seperti array dan string.
---

# Bab 7

# Perulangan

Perulangan adalah instruksi berulang di mana satu variabel dalam perulangan berubah. Perulangan sangat berguna jika Anda ingin menjalankan kode yang sama berulang kali, setiap kali dengan nilai yang berbeda.

Daripada menulis:

```javascript
lakukanHal(cars[0]);
lakukanHal(cars[1]);
lakukanHal(cars[2]);
lakukanHal(cars[3]);
lakukanHal(cars[4]);
```

Anda dapat menulis:

```javascript
for (var i = 0; i < cars.length; i++) {
  lakukanHal(cars[i]);
}
```
