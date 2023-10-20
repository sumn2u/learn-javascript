---
layout: editorial
bab: 17
nomor halaman: 87
keterangan: Dalam pemrograman, peristiwa adalah tindakan atau kejadian dalam suatu sistem yang sistem memberi tahu Anda sehingga Anda dapat meresponsnya. Misalnya, saat Anda mengklik tombol reset, itu akan menghapus input.
---

# Bab 17

# Peristiwa

Dalam pemrograman, _peristiwa_ adalah tindakan atau kejadian dalam suatu sistem yang sistem memberi tahu Anda sehingga Anda dapat meresponsnya. Misalnya, saat Anda mengklik tombol reset, itu akan menghapus input.

Interaksi dari keyboard seperti penekanan tombol perlu terus dibaca untuk menangkap keadaan tombol sebelum dilepaskan lagi. Melakukan komputasi yang memakan waktu lain dapat membuat Anda melewatkan penekanan tombol. Ini dulu adalah mekanisme penanganan masukan dari beberapa mesin primitif. Langkah lebih lanjut adalah dengan menggunakan antrian, yaitu program yang secara berkala memeriksa antrian untuk peristiwa baru dan meresponsnya. Pendekatan ini disebut _polling_.

Kekurangan utama dari pendekatan ini adalah bahwa harus melihat antrian dari waktu ke waktu, yang menyebabkan gangguan ketika suatu peristiwa terpicu. Mekanisme yang lebih baik untuk ini adalah memberi tahu kode ketika suatu peristiwa terjadi. Inilah yang dilakukan oleh peramban modern dengan memungkinkan kita mendaftarkan fungsi sebagai _handler_ untuk peristiwa tertentu.

```javascript
<p>Klik saya untuk mengaktifkan handler.</p>
<script>
  window.addEventListener("click", () => {
    console.log("diklik");
  });
</script>
```

Di sini, `addEventListener` dipanggil pada objek `window` (objek bawaan yang disediakan oleh peramban) untuk mendaftarkan handler untuk seluruh `window`. Memanggil metode `addEventListener`-nya mendaftarkan argumen kedua untuk dipanggil setiap kali peristiwa yang dijelaskan oleh argumen pertama terjadi.

{% hint style="info" %}
Pendengar peristiwa hanya dipanggil ketika peristiwa terjadi dalam konteks objek yang mendaftarkannya.
{% endhint %}

Beberapa peristiwa HTML umum disebutkan di sini.

| Peristiwa     | Deskripsi                                                     |
| ------------- | ------------------------------------------------------------- |
| `onchange`    | Saat pengguna mengubah atau memodifikasi nilai input formulir |
| `onclick`     | Saat pengguna mengklik elemen                                 |
| `onmouseover` | Saat kursor mouse berada di atas elemen                       |
| `onmouseout`  | Saat kursor mouse meninggalkan elemen                         |
| `onkeydown`   | Saat pengguna menekan dan kemudian melepaskan tombol          |
| `onload`      | Saat peramban selesai memuat                                  |

Umumnya, handler yang terdaftar pada node dengan anak-anak juga akan menerima peristiwa dari anak-anak tersebut. Misalnya, jika sebuah tombol di dalam sebuah paragraf diklik, handler yang terdaftar pada paragraf juga akan menerima peristiwa klik. Jika ada handler pada keduanya, yang ada di bawah akan dieksekusi terlebih dahulu. Peristiwa dikatakan _menyebar_ ke luar, dari node yang memulai ke node induknya dan pada akar dokumen.

Handler peristiwa dapat memanggil metode `stopPropagation` pada objek peristiwa untuk mencegah handler lebih atas menerima peristiwa. Ini berguna dalam kasus seperti Anda memiliki tombol di dalam elemen yang dapat diklik dan Anda tidak ingin memicu perilaku klik elemen luar dari klik tombol.

```javascript
<p>Sebuah paragraf dengan <button>tombol</button>.</p>
<script>
  let para = document.querySelector("p"),
      button = document.querySelector("button");
  para.addEventListener("mousedown", () => {
    console.log("Handler paragraf.");
  });
  button.addEventListener("mousedown", event => {
    console.log("Handler tombol.");
    event.stopPropagation();
  });
</script>
```

Di sini, handler _`mousedown`_ didaftarkan oleh paragraf dan tombol. Saat tombol diklik, handler tombol memanggil `stopPropagation`, yang akan mencegah handler pada paragraf dijalankan.

Peristiwa dapat memiliki perilaku default. Misalnya, tautan menavigasi ke tujuan tautan saat diklik, Anda akan diarahkan ke bawah halaman saat mengklik tombol panah bawah, dan sebagainya. Perilaku default ini dapat dicegah dengan memanggil metode `preventDefault` pada objek peristiwa.

```javascript
<a href="https://developer.mozilla.org/">MDN</a>
<script>
  let link = document.querySelector("a");
  link.addEventListener("click", event => {
    console.log("Tidak.");
    event.preventDefault();
  });
</script>
```

Di sini, perilaku default tautan saat diklik dicegah, yaitu tidak menavigasi ke tujuan tautan.
