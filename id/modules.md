---
layout: editorial
bab: 13
nomor halaman: 70
keterangan: Modul adalah cara untuk mengorganisasi kode ke dalam komponen terpisah, yang dapat digunakan kembali, dan terenkapsulasi. Modul memungkinkan pengembang untuk memecah kode yang besar dan kompleks menjadi bagian-bagian yang lebih kecil, mudah dipahami, dijaga, dan berkolaborasi dalam proyek.
---

# Bab 13

# Modul

Di dunia nyata, sebuah program berkembang secara organik untuk mengatasi kebutuhan fungsionalitas baru. Dengan pertumbuhan kode yang semakin besar, struktur dan pemeliharaan kode memerlukan pekerjaan tambahan. Meskipun akan memberikan manfaat di masa depan, terkadang sulit untuk mengabaikannya dan membiarkan program menjadi sangat rumit. Dalam kenyataannya, hal ini meningkatkan kompleksitas aplikasi, karena seseorang harus memahami sistem secara menyeluruh dan sulit untuk memahami setiap bagian secara terpisah. Kedua, seseorang harus menginvestasikan lebih banyak waktu untuk memecahnya agar dapat menggunakan fungsionalitasnya.

_Modul_ hadir untuk menghindari masalah ini. Sebuah `modul` menentukan potongan kode mana yang menjadi dependennya, bersama dengan fungsionalitas apa yang disediakannya untuk modul lainnya. Modul yang bergantung pada modul lain disebut _dependensi_. Berbagai perpustakaan modul digunakan untuk mengorganisir kode menjadi modul dan memuatnya sesuai permintaan.

- AMD - salah satu sistem modul tertua, awalnya digunakan oleh [require.js](https://requirejs.org/).
- CommonJS - sistem modul yang dibuat untuk server Node.js.
- UMD - sistem modul yang kompatibel dengan AMD dan CommonJS.

Modul dapat memuat satu sama lain dan menggunakan direktif khusus `import` dan `export` untuk bertukar fungsionalitas dan memanggil fungsi satu sama lain.

- `export` - memberi label pada fungsi dan variabel yang harus dapat diakses dari luar modul saat ini.
- `import` - mengimpor fungsionalitas dari modul luar.

Mari kita lihat mekanisme `import` dan `export` dalam modul. Kami memiliki fungsi `sayHi` yang diekspor dari file `sayHi.js`.

```javascript
// 📁 sayHi.js
export const sayHi = (user) => {
  alert(`Halo, ${user}!`);
};
```

Fungsi `sayHi` digunakan dalam file `main.js` dengan bantuan direktif `import`.

```javascript
// 📁 main.js
import { sayHi } from "./sayHi.js";

alert(sayHi); // function...
sayHi("Kelvin"); // Halo, Kelvin!
```

Di sini, direktif impor memuat modul dengan mengimpor path relatif dan mengassign variabel `sayHi`.

Modul dapat diekspor dalam dua cara: **Named** dan **Default**. Selain itu, ekspor Nama dapat diberikan secara inline atau individu.

```javascript
// 📁 person.js

// ekspor nama bernama
export const name = "Kelvin";
export const age = 30;

// sekaligus
const name = "Kelvin";
const age = 30;
export { name, age };
```

{% hint style="warning" %}
Hanya dapat ada satu ekspor `default` dalam satu file.
{% endhint %}

```javascript
// 📁 message.js
const message = (name, age) => {
  return `${name} berusia ${age} tahun.`;
};
export default message;
```

Berdasarkan jenis ekspor, kita dapat mengimpornya dengan dua cara. Ekspor nama dibuat menggunakan kurung kurawal, sedangkan ekspor default tidak.

```javascript
import { name, age } from "./person.js"; // impor ekspor nama
import message from "./message.js"; // impor ekspor default
```

Ketika mengassign modul, kita harus menghindari _ketergantungan berputar_. Ketergantungan berputar adalah situasi di mana modul A bergantung pada B, dan B juga bergantung pada A secara langsung atau tidak langsung.&#x20;
