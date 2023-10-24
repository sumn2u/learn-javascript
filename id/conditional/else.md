---
bab: 5
nomor halaman: 31
keterangan: Kata kunci else digunakan bersamaan dengan pernyataan if untuk memberikan blok kode alternatif yang akan dieksekusi ketika kondisi yang ditentukan dalam pernyataan if mengevaluasi menjadi false.
---

# Else

Terdapat juga klausa `else` yang akan diterapkan ketika kondisi pertama tidak benar. Ini sangat berguna jika Anda ingin merespons berbagai nilai, tetapi ingin memperlakukan satu nilai tertentu secara khusus.

```javascript
let umbrellaMandatory;

if (country === "England") {
  umbrellaMandatory = true;
} else {
  umbrellaMandatory = false;
}
```

Klausa `else` dapat digabungkan dengan `if` lainnya. Mari kita buat ulang contoh dari artikel sebelumnya.

```javascript
if (country === "England") {
  ...
} else if (country === "France") {
  ...
} else if (country === "Germany") {
  ...
}
```

{% exercise %}
Dari nilai berikut tulis pernyataan kondisional yang memeriksa apakah `angka1` lebih besar dari `angka2`. Jika ya, tetapkan "angka1 lebih besar dari angka2" ke variabel `hasil`. Jika tidak, tetapkan "angka1 kurang dari atau sama dengan angka2".

{% initial %}
let num1 = 10;
let num2 = 5;
let result;
// periksa apakah angka1 lebih besar dari angka2
if( condition ) {

}else {

}
{% solution %}
let num1 = 10;
let num2 = 5;
let result;
// periksa apakah angka1 lebih besar dari angka2
if (num1 > num2) {
result = "angka1 lebih besar dari angka2";
} else {
result = "angka1 kurang dari atau sama dengan angka2";
}

{% validation %}
assert(result == "angka1 lebih besar dari angka2");

{% context %}
{% endexercise %}
