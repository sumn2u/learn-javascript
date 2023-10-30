---
bab: 16
nomor halaman: 86
keterangan: Lokasi adalah objek bawaan yang mewakili URL saat ini dari halaman web yang ditampilkan di peramban. Ini menyediakan lokasi saat ini dari halaman web dan memungkinkan untuk melakukan berbagai operasi yang terkait dengan URL.
---

# Location

Objek `location` digunakan untuk mengambil lokasi saat ini (URL) dari dokumen dan menyediakan berbagai metode untuk memanipulasi lokasi dokumen. Lokasi saat ini dapat diakses dengan menggunakan:

```javascript
window.location;
//or
document.location;
//or
location;
```

> _**Catatan**_: `window.location` dan `document.location` merujuk pada objek lokasi yang sama.

Mari kita ambil contoh dari URL berikut dan jelajahi berbagai properti dari `location`.

[`http://localhost:3000/js/index.html?type=listing&page=2#title`](http://localhost:8080/js/index.html?type=listing&page=2#title)

```javascript
location.href; // mencetak URL dokumen saat ini
location.protocol; // mencetak protokol seperti http: atau https:
location.host; // mencetak nama host dengan port seperti localhost atau localhost:3000
location.hostname; // mencetak nama host seperti localhost atau www.example.com
location.port; // mencetak nomor port seperti 3000
location.pathname; // mencetak jalur seperti /js/index.html
location.search; // mencetak string kueri seperti ?type=listing&page=2
location.hash; // mencetak pengenal fragmen seperti #title
```
