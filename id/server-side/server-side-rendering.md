---
bab: 20
nomor halaman: 105
---

# Server Side Rendering (SSR)

Secara normal, ketika seorang pengguna mengunjungi sebuah situs web, peramban mengirim permintaan ke server, yang memberikan respons dalam bentuk HTML, CSS, dan JavaScript. Namun, dengan perpustakaan seperti _React_ dan _Vue_, server hanya mengirimkan halaman HTML kosong bersama dengan file JavaScript. File JavaScript kemudian merender halaman di peramban. Ini disebut **Client Side Rendering (CSR)**.

**Server Side Rendering (SSR)** adalah sebuah teknik di mana server memproses permintaan dan menghasilkan HTML di server dari komponen React atau Vue. Kemudian, server mengirimkan HTML yang dihasilkan ke peramban, yang kemudian dapat merender halaman tanpa harus menunggu JavaScript untuk dimuat.

## Mengapa menggunakan SSR?

Ada beberapa keuntungan menggunakan SSR dibandingkan dengan CSR:

- **Lebih baik untuk SEO**: Mesin pencari dapat menjelajahi dan mengindeks konten situs web Anda dengan lebih mudah jika kontennya dirender di server. Ini dapat menghasilkan peringkat mesin pencari yang lebih baik dan lebih banyak lalu lintas dari mesin pencari.

- **Waktu muat halaman awal yang lebih cepat**: Karena HTML dihasilkan di server, peramban tidak perlu menunggu JavaScript dimuat sebelum merender halaman. Ini dapat menghasilkan waktu muat halaman awal yang lebih cepat.

- **Kinerja yang lebih baik pada perangkat berdaya rendah**: Karena HTML dihasilkan di server, peramban tidak perlu melakukan banyak pekerjaan untuk merender halaman. Ini dapat menghasilkan kinerja yang lebih baik pada perangkat berdaya rendah, seperti ponsel dan tablet.

## Kerugian SSR

Ada juga beberapa kerugian dalam menggunakan SSR:

- **Proses pengembangan yang lebih kompleks**: SSR membutuhkan lebih banyak pekerjaan di sisi server, yang dapat membuat proses pengembangan menjadi lebih kompleks.

- **Sumber daya server yang lebih banyak**: SSR membutuhkan lebih banyak sumber daya server, yang dapat mengakibatkan biaya hosting yang lebih tinggi.

- **Fungsionalitas sisi klien yang terbatas**: SSR tidak memungkinkan Anda menggunakan perpustakaan sisi klien, seperti jQuery atau Bootstrap, karena perpustakaan tersebut tidak tersedia di server.

## Cara mengimplementasikan SSR?

Setiap perpustakaan memiliki cara tersendiri untuk mengimplementasikan SSR. Misalnya, untuk React, Anda dapat menggunakan [Next.js](https://nextjs.org/) atau [Gatsby](https://www.gatsbyjs.com/). Untuk Vue, Anda dapat menggunakan [Nuxt.js](https://nuxtjs.org/). Untuk Svelte, Anda dapat menggunakan [SvelteKit](https://kit.svelte.dev/).

## Kesimpulan

Dalam bab ini, kita mempelajari tentang Server Side Rendering (SSR) dan bagaimana itu dapat meningkatkan kinerja situs web Anda. Kita juga mempelajari tentang kelebihan menggunakan SSR dibandingkan dengan CSR dan bagaimana mengimplementasikan SSR dengan React, Vue, dan Svelte.
