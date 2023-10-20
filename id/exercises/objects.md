---
bab: 20
halaman: 114
---

# Objek

Objek adalah kumpulan pasangan `kunci`, `nilai`, dan setiap pasangan kunci-nilai dikenal sebagai properti. Di sini, properti dari kunci dapat berupa `string` sedangkan nilainya dapat berupa nilai apa pun.

### 📝 Tugas:

Diberikan keluarga Doe yang terdiri dari dua anggota, di mana informasi setiap anggota disediakan dalam bentuk objek.&#x20;

```javascript
let orang = {
  nama: "John", //String
  namaBelakang: "Doe",
  usia: 35, //Number
  jenisKelamin: "laki-laki",
  nomorKeberuntungan: [7, 11, 13, 17], //Array
  pasangan: orang2, //Objek
};

let orang2 = {
  nama: "Jane",
  namaBelakang: "Doe",
  usia: 38,
  jenisKelamin: "perempuan",
  nomorKeberuntungan: [2, 4, 6, 8],
  pasangan: orang,
};

let keluarga = {
  namaBelakang: "Doe",
  anggota: [orang, orang2], //Array of objects
};
```

- [ ] Temukan cara untuk mencetak nama anggota pertama dari keluarga Doe di dalam `konsol`.
- [ ] Ubah nilai keempat `nomorKeberuntungan` dari anggota kedua keluarga Doe menjadi `33`.
- [ ] Tambahkan anggota baru ke keluarga dengan membuat anggota baru (`Jimmy` `Doe`, `13`, `laki-laki`, `[1, 2, 3, 4]`, `null`) dan perbarui daftar anggota.
- [ ] Cetak `JUMLAH` dari nomor keberuntungan keluarga Doe di dalam `konsol`.&#x20;

### 💡 Petunjuk:

- Kunjungi bab [objek](../objects/) untuk memahami cara kerja objek.
- Anda dapat mendapatkan `nomorKeberuntungan` dari setiap objek orang di dalam objek keluarga.
- Begitu Anda mendapatkan setiap array, cukup lakukan perulangan atasnya, menambahkan setiap elemen, dan kemudian tambahkan setiap hasil penjumlahan dari 3 anggota keluarga.
