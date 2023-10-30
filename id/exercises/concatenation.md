---
bab: 20
halaman: 111
---

# Penggabungan

Dalam bahasa pemrograman apa pun, penggabungan string hanya berarti menambahkan satu atau lebih string ke string lain. Misalnya, ketika string "_World_" dan "_Good Afternoon_" digabungkan dengan string "_Hello_", mereka membentuk string "_Hello World, Good Afternoon_". Kita dapat menggabungkan string dengan beberapa cara di JavaScript.

### Contoh:

```javascript
const icon = "👋";

// menggunakan Template Strings
`hi ${icon}`;

// menggunakan Metode join()
["hi", icon].join(" ");

// menggunakan Metode concat()
"".concat("hi ", icon);

// menggunakan operator +
"hi " + icon;

// HASIL
// hi 👋
```

### 📝 Tugas:

- [ ] Tulis program untuk mengatur nilai `str1` dan `str2` sehingga kode mencetak '_Hello World_' ke konsol.

- [ ] Tulis program yang meminta pengguna untuk memasukkan nama depan mereka (`first_name`) dan nama belakang (`last_name`). Kemudian, gunakan penggabungan string untuk membuat dan menampilkan nama lengkap mereka (`full_name`).

- [ ] Tulis program yang meminta pengguna untuk memasukkan nama mereka. Kemudian, gunakan penggabungan string untuk membuat pesan sambutan yang mencakup nama mereka. Contohnya: `Selamat pagi, Aman`.

### 💡 Petunjuk:

- Kunjungi bab [penggabungan](../strings/concat.md) dari strings untuk informasi lebih lanjut tentang penggabungan string.