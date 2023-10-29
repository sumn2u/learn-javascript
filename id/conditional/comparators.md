---
bab: 5
nomor halaman: 34
keterangan: Komparator adalah fungsi yang digunakan untuk membandingkan dua nilai dan menentukan hubungan mereka. Nilai yang dikembalikan menunjukkan apakah nilai-nilai tersebut sama, lebih besar, lebih kecil, atau memiliki hubungan lain berdasarkan suatu kriteria perbandingan tertentu.
---

# Comparators

Mari fokus pada bagian kondisional sekarang:

```javascript
if (country === "France") {
    ...
}
```

Bagian kondisional ini adalah variabel country diikuti oleh tiga tanda sama dengan (===). Tiga tanda sama dengan menguji apakah variabel country memiliki nilai yang benar (France) dan juga tipe yang benar (String). Anda juga dapat menguji kondisi dengan dua tanda sama dengan, tetapi dalam kondisi seperti if (x == 5), itu akan mengembalikan nilai true baik untuk var x = 5; maupun var x = "5";. Tergantung pada apa yang dilakukan program Anda, ini bisa membuat perbedaan yang cukup besar. Sangat disarankan sebagai praktik terbaik bahwa Anda selalu membandingkan kesetaraan dengan tiga tanda sama dengan (=== dan !==) daripada dua (== dan !=).

Penguji kondisi lainnya:

- `x > a`: apakah x lebih besar dari a?
- `x < a`: apakah x lebih kecil dari a?
- `x <= a`: apakah x lebih kecil atau sama dengan a?
- `x >=a`: apakah x lebih besar atau sama dengan a?
- `x != a`: apakah x bukan a?
- `x`: apakah x ada?

## Logical Comparison

Untuk menghindari kerumitan if-else, perbandingan logika sederhana dapat digunakan.

```javascript
let topper = marks > 85 ? "YES" : "NO";
```

Pada contoh di atas, `?` adalah operator logis. Kode tersebut menyatakan bahwa jika nilai marks lebih dari 85, yaitu `marks > 85`, maka `topper = YES`; jika tidak, maka `topper = NO`. Pada dasarnya, jika kondisi perbandingan terbukti benar, argumen pertama diakses, dan jika kondisi perbandingan salah, argumen kedua diakses.
