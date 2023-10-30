---
bab: 6
nomor halaman: 44
keterangan: Array memiliki sebuah properti yang disebut panjang (length) yang mengukur panjang (jumlah elemen) dari array tersebut.
---

# Length

Array memiliki sebuah properti yang disebut `length`, dan sebenarnya itu sesuai dengan namanya, yaitu panjang dari array tersebut.

```javascript
let array = [1, 2, 3];

let l = array.length;

// Hasil: l = 3
```

Properti panjang (length) juga menentukan jumlah elemen dalam sebuah array. Sebagai contoh:

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length = 2;

console.log(fruits);
// Hasil: ['Banana', 'Orange']
```

Anda juga dapat menggunakan properti `length` untuk mendapatkan elemen terakhir dari sebuah array dengan menggunakannya sebagai indeks. Sebagai contoh:

```c
console.log(fruits[fruits.length - 1]); // Hasil: Orange
```

Anda juga dapat menggunakan properti `length` untuk menambahkan elemen ke ujung array. Sebagai contoh:

```c
fruits[fruits.length] = "Pineapple";
console.log(fruits); // Hasil: ['Banana', 'Orange', 'Pineapple']
```

{% hint style="info" %}
Properti `length` secara otomatis diperbarui ketika elemen-elemen ditambahkan atau dihapus dari array.
{% endhint %}

Juga perlu diingat bahwa properti `length` bukanlah sebuah metode, sehingga Anda tidak perlu menggunakan tanda kurung saat mengaksesnya. Ini hanyalah sebuah properti dari objek array yang dapat Anda akses seperti properti objek lainnya.
