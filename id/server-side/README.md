---
layout: editorial
bab: 20
nomor halaman: 103
---

# Bab 20

# Kode Sisi Server

**Kode sisi server** merujuk pada kode yang berjalan pada _web server_ daripada pada peramban web pengguna. Kode ini bertanggung jawab untuk memproses permintaan dari klien (biasanya peramban web) dan menghasilkan halaman web dinamis atau menyediakan data kepada klien.

**Kode sisi klien** merujuk pada kode yang berjalan di _peramban web_ pengguna daripada di server web. Kode ini bertanggung jawab untuk menghasilkan antarmuka pengguna dan menangani interaksi pengguna. Kode sisi klien biasanya ditulis dalam bahasa JavaScript dan dieksekusi oleh peramban.

## Mengapa kita memerlukan kode sisi server?

Kode sisi server sangat penting dalam pengembangan web karena beberapa alasan:

- **Keamanan**: Kode sisi server tidak terlihat oleh pengguna, sehingga lebih aman daripada kode sisi klien.
- **Kinerja**: Kode sisi server dapat digunakan untuk melakukan tugas yang membutuhkan komputasi, seperti pemrosesan data, tanpa memengaruhi pengalaman pengguna.
- **Penyimpanan Data**: Kode sisi server dapat digunakan untuk menyimpan data dalam database, yang kemudian dapat diakses oleh kode sisi klien.
- **Autentikasi Pengguna**: Kode sisi server dapat digunakan untuk mengautentikasi pengguna dan membatasi akses ke bagian-bagian tertentu dari situs web.
- **Konten Dinamis**: Kode sisi server dapat digunakan untuk menghasilkan halaman web dinamis, yang dapat disesuaikan untuk setiap pengguna.

## Kode Sisi Server vs. Kode Sisi Klien

Perbedaan-perbedaan ini dirangkum dalam tabel di bawah:

| Kode Sisi Server                                                                    | Kode Sisi Klien                                                                     |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Berjalan pada server web                                                            | Berjalan di peramban web                                                            |
| Memiliki akses ke sumber daya server (sistem file, database, dll.).                 | Memiliki akses ke sumber daya klien (cookie, penyimpanan lokal, dll.).              |
| Dapat ditulis dalam berbagai bahasa (PHP, Python, Ruby, Java, C#, dll.).            | Hanya dapat ditulis dalam JavaScript.                                               |
| Mungkin menggunakan rendering sisi server (SSR) untuk menghasilkan HTML di server.  | Menggunakan rendering sisi klien (CSR) untuk menghasilkan HTML di peramban.         |
| Lebih baik untuk SEO karena kontennya langsung tersedia untuk mesin pencari.        | Lebih buruk untuk SEO karena kontennya tidak langsung tersedia untuk mesin pencari. |
| Dapat memanfaatkan pengecualian dan Jaringan Pengiriman Konten (CDN) untuk kinerja. | Kontrol terbatas atas pengecualian, mengandalkan cache peramban.                    |

## Mengapa menggunakan JavaScript untuk kode sisi server?

Berbeda dengan kode sisi klien, yang hanya dapat ditulis dalam JavaScript, kode sisi server dapat ditulis dalam berbagai bahasa, termasuk PHP, Python, Ruby, Java, C#, dan banyak lagi. Jadi mengapa menggunakan JavaScript untuk kode sisi server? Ada beberapa alasan:

- **Bahasa Tunggal**: Pengembang dapat menggunakan bahasa yang sama dan paradigma pemrograman sepanjang tumpukan aplikasi, yang dapat mengarah pada reuse kode dan kolaborasi yang lebih mudah antara pengembang sisi depan dan sisi belakang.

- **Ekosistem Besar**: JavaScript memiliki ekosistem yang luas dari perpustakaan dan paket yang tersedia melalui npm (Node Package Manager). Ekosistem yang kaya ini menyederhanakan proses pengembangan dengan menyediakan modul yang telah dibangun sebelumnya untuk berbagai fungsionalitas, mulai dari routing server hingga konektivitas basis data.

- **JSON**: JavaScript Object Notation (JSON) adalah format data populer yang digunakan untuk mengirimkan data antara server dan aplikasi web. JSON didasarkan pada JavaScript, sehingga mudah untuk bekerja dengan data JSON dalam JavaScript.

Selanjutnya, kita akan belajar cara menggunakan JavaScript untuk kode sisi server dengan Node.js dan cara menggunakan Server Side Rendering (SSR) untuk menghasilkan HTML di server.
