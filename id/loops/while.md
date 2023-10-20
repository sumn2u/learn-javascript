---
bab: 7
nomor halaman: 51
keterangan: Perulangan while menjalankan berulang kali blok kode selama kondisi yang ditentukan benar.
---

# While

Perulangan while menjalankan berulang kali blok kode selama kondisi yang ditentukan benar. Ini menyediakan cara untuk mengotomatisasi tugas-tugas berulang dan melakukan iterasi berdasarkan evaluasi kondisi.

```javascript
while (kondisi) {
  // lakukan selama kondisi benar
}
```

Sebagai contoh, perulangan dalam contoh ini akan menjalankan berulang kali blok kode selama variabel i kurang dari 5:

```javascript
var i = 0,
  x = "";
while (i < 5) {
  x = x + "Nomornya adalah " + i;
  i++;
}
```

{% hint style="warning" %}
&#x20;Hati-hati untuk menghindari perulangan tak terbatas jika kondisinya selalu benar!
{% endhint %}
