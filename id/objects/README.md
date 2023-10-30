---
layout: editorial
bab: 9
nomor halaman: 56
keterangan: Objek adalah tipe data komposit yang memungkinkan Anda menyimpan dan mengorganisir beberapa nilai (properti) sebagai pasangan kunci-nilai. Ini adalah struktur data dasar dalam bahasa dan digunakan secara luas untuk merepresentasikan data kompleks dan membuat entitas terstruktur.
---

# Bab 9

# Objek

Dalam JavaScript, objek bersifat **mutable** karena kita mengubah nilai yang ditunjuk oleh objek referensi, sedangkan ketika kita mengubah nilai primitif, kita mengubah referensi yang sekarang menunjuk ke nilai baru, sehingga primitif bersifat **immutable**. Tipe primitif dalam JavaScript adalah `true`, `false`, `number`, `string`, `null`, dan `undefined`. Nilai lainnya adalah `object`. Objek berisi pasangan `namaProperti`: `nilaiProperti`. Ada tiga cara untuk membuat objek dalam JavaScript:

1. Literal

   ```javascript
   let objek = {};
   // Ya, hanya sepasang tanda kurung kurawal!
   ```

   > _**Catatan:**_ Ini adalah cara yang **direkomendasikan**.

2. Berorientasi objek

   ```javascript
   let objek = new Object();
   ```

   > _**Catatan:**_ Ini hampir seperti Java.

3. Dan menggunakan `Object.create`

   ```javascript
   let objek = Object.create(proto[, propertiesObject]);
   ```

   > _**Catatan:**_ Ini membuat objek baru dengan objek prototipe yang ditentukan dan properti.
