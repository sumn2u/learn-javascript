---
layout: editorial
title: Pertanyaan Wawancara JavaScript Tingkat Menengah
keterangan:
---

# Pertanyaan Wawancara JavaScript Tingkat Menengah

## 1. Perulangan (Loops)

### 1.1. Apa definisi iterasi dalam perulangan JavaScript?

**Jawaban:**

Iterasi dalam perulangan JavaScript merujuk pada setiap eksekusi individu dari tubuh perulangan, biasanya sesuai dengan satu siklus perulangan.

### 1.2. Apa saja struktur perulangan dalam JavaScript?

**Jawaban:**

Perulangan while: Perulangan while adalah pernyataan aliran kendali yang memungkinkan kode dieksekusi secara berulang berdasarkan kondisi Boolean yang diberikan. Perulangan while dapat dianggap sebagai pernyataan if berulang.

Perulangan for: Perulangan for memberikan cara ringkas untuk menulis struktur perulangan. Berbeda dengan perulangan while, pernyataan for mengonsumsi inisialisasi, kondisi, dan penambahan/pengurangan dalam satu baris, sehingga memberikan struktur perulangan yang lebih singkat, mudah didebug.

Do while: Perulangan do-while mirip dengan perulangan while dengan satu perbedaan, yaitu bahwa ia memeriksa kondisi setelah mengeksekusi pernyataan, dan oleh karena itu merupakan contoh dari Perulangan Kontrol Keluar.

### 1.3. Bagaimana cara kerja pernyataan break dalam perulangan?

**Jawaban:**

Pernyataan break mengakhiri perulangan atau pernyataan switch saat ini dan mengalihkan kendali program ke pernyataan yang mengikuti pernyataan yang diakhiri. Ini juga dapat digunakan untuk melompati pernyataan berlabel saat digunakan dalam pernyataan berlabel.

### 1.4. Bagaimana cara kerja pernyataan continue dalam perulangan?

**Jawaban:**

Direktif continue adalah "versi ringan" dari pernyataan break. Ini tidak menghentikan seluruh perulangan; sebaliknya, itu menghentikan iterasi saat ini dan memaksa perulangan memulai yang baru (jika kondisinya memungkinkan).

## 2. Pernyataan Switch (Switch Statement)

### 2.1. Apa itu pernyataan switch dalam JavaScript?

**Jawaban:**

Pernyataan switch dalam JavaScript adalah pernyataan aliran kendali yang mengevaluasi suatu ekspresi dan mengeksekusi blok kode tertentu berdasarkan kasus yang cocok.

### 2.2. Apa keuntungan menggunakan pernyataan switch?

**Jawaban:**

Pernyataan switch dapat menggantikan beberapa pemeriksaan, lebih deskriptif, dan lebih mudah dibaca. Pernyataan switch meningkatkan keterbacaan kode, memberikan kinerja yang lebih baik, menyederhanakan kondisi yang kompleks, meningkatkan pemeliharaan, dan mendukung sintaks yang lebih bersih.

### 2.3. Apakah urutan pernyataan case penting dalam pernyataan switch?

**Jawaban:**

Urutan pernyataan case penting dalam pernyataan switch, terutama saat menggunakan perilaku jatuh. Kasus dievaluasi secara berurutan, sehingga kasus yang cocok yang ditemukan lebih awal akan mencegah pengujian kasus selanjutnya, yang memengaruhi eksekusi dan kinerja.

## 3. Cookie JavaScript

### 3.1. Apa itu Cookie JavaScript?

**Jawaban:**

Cookie adalah file kecil yang disimpan di komputer pengguna. Mereka digunakan untuk menyimpan sejumlah kecil data yang khusus untuk klien dan situs web tertentu, dan dapat diakses baik oleh server web maupun komputer klien. Ketika cookie ditemukan, mereka awalnya berisi informasi tentang preferensi pengguna. Misalnya, saat Anda memilih bahasa tampilan situs web, situs web akan menyimpan informasi tersebut dalam cookie di komputer Anda, sehingga ketika Anda mengunjungi situs web tersebut kembali, itu dapat membaca cookie yang disimpan sebelumnya.

### 3.2. Bagaimana cara membuat cookie menggunakan JavaScript?

**Jawaban:**

Untuk membuat cookie menggunakan JavaScript, Anda hanya perlu menetapkan nilai string ke objek document.cookie.

```javascript
document.cookie = "key1 = value1; key2 = value2; expires = date";
```

### 3.3. Bagaimana cara membaca cookie menggunakan JavaScript?

**Jawaban:**

Nilai dari document.cookie digunakan untuk membuat cookie. Kapan pun Anda ingin mengakses cookie, Anda dapat menggunakan string ini. String document.cookie menyimpan daftar pasangan nama = nilai yang dipisahkan oleh titik koma, di mana nama adalah nama cookie dan nilai adalah nilai stringnya.

### 3.4. Bagaimana cara menghapus cookie menggunakan JavaScript?

**Jawaban:**

Menghapus cookie jauh lebih mudah daripada membuat atau membaca cookie. Anda hanya perlu mengatur expires = "waktu yang lalu" dan pastikan satu hal menentukan jalur cookie yang benar, kecuali beberapa tidak akan memungkinkan Anda menghapus cookie.

## 4. Kotak Pop-up di JavaScript

### 4.1. Apa jenis kotak pop-up yang tersedia dalam JavaScript?

**Jawaban:**

Ada tiga jenis kotak pop-up yang tersedia dalam JavaScript: Alert, Confirm, Prompt.

### 4.2. Apa perbedaan antara kotak peringatan (alert box) dan kotak konfirmasi (confirmation box)?

**Jawaban:**

Kotak peringatan (alert box) hanya akan menampilkan satu tombol yaitu tombol OK. Ini digunakan untuk memberi tahu pengguna tentang persetujuan yang harus disetujui. Tetapi kotak konfirmasi (confirmation box) menampilkan dua tombol, OK dan Batal, di mana pengguna dapat memutuskan untuk setuju atau tidak.

## 5. Fungsi Panah (Arrow Functions)

### 5.1. Apa definisi fungsi panah (arrow function)?

**Jawaban:**

Fungsi panah adalah sintaksis ringkas untuk mendefinisikan fungsi anonim dalam JavaScript, menggunakan notasi panah. Ini menawarkan sintaksis yang lebih pendek, lingkup leksikal "this," dan tidak dapat digunakan sebagai konstruktor.

### 5.2. Bagaimana fungsi pan

ah berbeda dari ekspresi fungsi?

**Jawaban:**

Fungsi panah memberikan sintaksis yang lebih pendek, tidak memiliki "this," "arguments," "super," atau "new.target" mereka sendiri, dan tidak dapat digunakan sebagai konstruktor, berbeda dari ekspresi fungsi.

### 5.3. Apa yang dimaksud dengan ikatan "this" leksikal dalam fungsi panah?

**Jawaban:**

Ikatan "this" leksikal dalam fungsi panah berarti bahwa mereka tidak membuat konteks "this" mereka sendiri; sebaliknya, mereka mewarisi "this" dari cakupan yang mengelilingi mereka, mengurangi masalah umum terkait "this."

### 5.4. Apa keuntungan menggunakan fungsi panah?

**Jawaban:**

Keuntungan menggunakan fungsi panah dalam JavaScript meliputi sintaksis yang lebih pendek, pengembalian implisit, dan ikatan 'this' leksikal.

### 5.5. Apa kasus penggunaan umum untuk fungsi panah?

**Jawaban:**

Fungsi panah umumnya digunakan untuk metode objek, penangan acara, pemanggilan kembali, dan fungsi lain yang memerlukan sintaksis yang lebih pendek dan lebih ringkas.
