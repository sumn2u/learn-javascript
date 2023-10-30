---
bab: 18
nomor halaman: 91
keterangan: Async/Await adalah fitur yang diperkenalkan dalam ECMAScript 2017 (ES8) yang menyediakan sintaks yang lebih ringkas dan mudah dibaca untuk bekerja dengan kode JavaScript asinkron. Ini dibangun di atas JavaScript Promises dan digunakan untuk menangani operasi asinkron dengan cara yang mirip dengan operasi sinkron.
---

# Async/Await

Dengan promises, seseorang dapat menggunakan kata kunci `async` untuk mendeklarasikan fungsi asinkron yang mengembalikan promise, sedangkan sintaks `await` membuat JavaScript menunggu sampai promise tersebut selesai dan mengembalikan nilainya. Kata kunci-kata kunci ini membuat promises lebih mudah untuk ditulis. Contoh async ditunjukkan di bawah ini.

```javascript
// fungsi async f
async function f() {
  return 1;
}
// promise yang di-resolve
f().then(alert); // 1
```

Contoh di atas dapat ditulis seperti berikut:

```javascript
function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
```

`async` memastikan bahwa fungsi mengembalikan promise, dan membungkus non-promises di dalamnya. Dengan `await`, kita dapat membuat JavaScript menunggu sampai promise tersebut selesai dengan nilai yang dikembalikan.&#x20;

```javascript
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Selamat datang di Belajar JavaScript!"), 1000);
  });

  let result = await promise; // tunggu sampai promise tersebut diselesaikan (*)
  alert(result); // "Selamat datang di Belajar JavaScript!"
}

f();
```

{% hint style="warning" %}
Kata kunci `await` hanya dapat digunakan di dalam fungsi `async`.
{% endhint %}
