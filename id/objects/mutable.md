---
bab: 9
nomor halaman: 58
keterangan: Mutable berarti sebuah objek atau tipe data dapat diubah setelah dibuat, sedangkan "immutable" berarti tidak dapat diubah. Objek yang mutable memungkinkan untuk memodifikasi status internal mereka, sementara objek yang immutable mengembalikan instance baru dengan perubahan, meninggalkan yang asli tidak berubah.
---

# Mutable

Perbedaan antara objek dan nilai primitif adalah bahwa kita dapat **mengubah objek**, sementara nilai primitif adalah **immutable**.

Sebagai contoh:

```javascript
let nilaiPrimitifSaya = "nilai pertama";
nilaiPrimitifSaya = "nilai lain";
// nilaiPrimitifSaya sekarang menunjuk ke string lain.
let objekSaya = { kunci: "nilai pertama" };
objekSaya.kunci = "nilai lain";
// objekSaya menunjuk ke objek yang sama.
```

Anda dapat menambahkan, mengubah, atau menghapus properti dari objek menggunakan notasi titik atau notasi tanda kurung siku.

```javascript
let objek = {};
objek.foo = "bar"; // Menambahkan properti 'foo'
objek["baz"] = "qux"; // Menambahkan properti 'baz'
objek.foo = "quux"; // Mengubah properti 'foo'
delete objek.baz; // Menghapus properti 'baz'
```

{% hint style="warning" %}
Nilai primitif (seperti angka dan string) adalah immutable, sedangkan objek (seperti array dan objek) adalah mutable.
{% endhint %}
