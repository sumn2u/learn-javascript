---
bab: 5
nomor halaman: 32
keterangan: `Switch` adalah pernyataan kondisional yang melakukan tindakan berdasarkan berbagai kondisi yang berbeda. Ini menggunakan perbandingan ketat (strict comparison) untuk mencocokkan kondisi dan mengeksekusi blok kode dari kondisi yang sesuai.
---

# Switch

`switch` adalah pernyataan kondisional yang melakukan tindakan berdasarkan kondisi berbeda. Ia menggunakan perbandingan yang ketat ( `===` ) untuk mencocokkan kondisi dan mengeksekusi blok kode dari kondisi yang cocok. Sintaks ekspresi `switch` ditunjukkan di bawah ini.

```javascript
switch (expression) {
  case x:
    // blok kode
    break;
  case y:
    // blok kode
    break;
  default:
  // blok kode
}
```

Ekspresi dievaluasi sekali dan dibandingkan dengan setiap kasus. Jika ada kecocokan, maka blok kode yang terkait akan dieksekusi; jika tidak, blok kode `default` akan dieksekusi. Kata kunci `break` digunakan untuk menghentikan eksekusi dan dapat ditempatkan di mana saja. Jika tanpa `break`, kondisi berikutnya akan dievaluasi bahkan jika kondisinya tidak cocok.&#x20;

Berikut adalah contoh mendapatkan nama hari berdasarkan kondisi `switch`.&#x20;

```javascript
switch (new Date().getDay()) {
  case 0:
    day = "Minggu";
    break;
  case 1:
    day = "Senin";
    break;
  case 2:
    day = "Selasa";
    break;
  case 3:
    day = "Rabu";
    break;
  case 4:
    day = "Kamis";
    break;
  case 5:
    day = "Jumat";
    break;
  case 6:
    day = "Sabtu";
}
```

Dalam beberapa kasus pencocokan, nilai pencocokan **first** yang dipilih, jika bukan nilai default yang dipilih. Jika tidak ada default dan tidak ada kasus yang cocok, program melanjutkan ke pernyataan berikutnya setelah kondisi peralihan.&#x20;

{% exercise %}
Dari nilai `dayOfWeek` berikut, tulis pernyataan `switch` yang memeriksa nilai dari `dayOfWeek`. Jika `dayOfWeek` adalah "Senin", "Selasa", "Rabu", "Kamis", atau "Jumat", berikan nilai "Ini hari kerja" ke variabel `result`. Jika `dayOfWeek` adalah "Sabtu" atau "Minggu", berikan nilai "Ini akhir pekan" ke variabel `result`.

{% initial %}
let dayOfWeek = "Senin";
let result;
// Periksa apakah ini hari kerja atau akhir pekan
switch(expression) {
case x:
// Blok kode
break;
case y:
// Blok kode
break;
default:
// Blok kode
}
{% solution %}
let dayOfWeek = "Senin";
let result;
// Periksa apakah ini hari kerja atau akhir pekan
switch (dayOfWeek) {
case "Senin":
case "Selasa":
case "Rabu":
case "Kamis":
case "Jumat":
result = "Ini hari kerja";
break;
case "Sabtu":
case "Minggu":
result = "Ini akhir pekan";
break;
default:
result = "Hari minggu yang tidak valid";
break;
}
{% validation %}
assert(result == "Ini adalah hari kerja" );

{% context %}
{% endexercise %}
