---
layout: editorial
title: Pola Desain Struktural dalam JavaScript
keterangan: Fokus pada bagaimana kelas dan objek disusun untuk membentuk struktur yang lebih besar
---

# Pola Desain Struktural

Fokus pada bagaimana kelas dan objek disusun untuk membentuk struktur yang lebih besar

## 1. Adapter

Adapter adalah pola desain struktural yang memungkinkan Anda untuk membuat antarmuka yang berbeda dengan metode yang berbeda bekerja bersama tanpa mengubah kode mereka. Tujuan dari Adapter adalah membuat dua antarmuka yang tidak kompatibel dapat bekerja bersama dengan lancar.

## 1.1 Komponen dari Adapter

_Antarmuka/Kelas Target_

Ini adalah antarmuka atau kelas yang akan digunakan oleh klien. Ini berisi semua metode dan properti yang akan digunakan oleh kode klien.

_Adaptee_

Adaptee adalah antarmuka/kelas lama yang berisi properti dan metode yang tidak kompatibel dengan antarmuka/kelas baru.

_Adapter_

Adapter adalah yang menghubungkan kesenjangan antara Adaptee dan antarmuka/kelas Target.

## 1.2 Manfaat dari Adapter

**Integrasi yang Mudah**

Adapter menciptakan cara yang mudah bagi kode atau sistem baru untuk berinteraksi dengan yang sudah ada. Dengan menggunakan Adapter, integrasi kode baru menjadi lebih lancar dan kurang rentan terhadap kesalahan.

**Kompatibilitas dan Daur Ulang**

Adapter mendorong penggunaan kembali kode dan memperluas kegunaan kode yang sudah ada dengan membuat kode lama kompatibel dengan kode baru.

**Integrasi Sistem Bertahap**

Dalam situasi di mana sistem baru perlu diimplementasikan secara bertahap, Adapter dapat berfungsi sebagai perantara, memungkinkan fitur-fitur baru masuk secara perlahan sambil tetap menjaga kompatibilitas dengan sistem yang sudah ada.

**Peningkatan Uji Coba**

Adapter memudahkan pengujian dengan memungkinkan pemalsuan atau penggantian Adaptee selama pengujian kode klien. Ini meningkatkan uji coba kode klien dan membantu dalam menulis pengujian unit yang lebih mudah dimengerti.

## 1.3 Contoh

```javascript
// Adaptee: Pengisi daya EU
class PengisiDayaEU {
  chargeWithEUPlug() {
    console.log("Mengisi daya dengan steker EU");
  }
}

// Adaptee: Pengisi daya AS
class PengisiDayaAS {
  chargeWithUSPlug() {
    console.log("Mengisi daya dengan steker AS");
  }
}

// Target: Antarmuka pengisian daya yang diharapkan oleh klien
class AntarmukaPengisianDaya {
  charge() {
    console.log("Mengisi daya...");
  }
}

// Adapter untuk pengisi daya EU
class AdapterPengisiDayaEU extends AntarmukaPengisianDaya {
  constructor(pengisiDayaEU) {
    super();
    this.pengisiDayaEU = pengisiDayaEU;
  }

  charge() {
    this.pengisiDayaEU.chargeWithEUPlug();
  }
}

// Adapter untuk pengisi daya AS
class AdapterPengisiDayaAS extends AntarmukaPengisianDaya {
  constructor(pengisiDayaAS) {
    super();
    this.pengisiDayaAS = pengisiDayaAS;
  }

  charge() {
    this.pengisiDayaAS.chargeWithUSPlug();
  }
}

// Klien
function mengisiPerangkat(antarmukaPengisianDaya) {
  antarmukaPengisianDaya.charge();
}

// Penggunaan
const pengisiDayaEU = new PengisiDayaEU();
const adapterEU = new AdapterPengisiDayaEU(pengisiDayaEU);

const pengisiDayaAS = new PengisiDayaAS();
const adapterAS = new AdapterPengisiDayaAS(pengisiDayaAS);

console.log("Mengisi daya dengan pengisi daya EU:");
mengisiPerangkat(adapterEU);

console.log("Mengisi daya dengan pengisi daya AS:");
mengisiPerangkat(adapterAS);
```

## 2. Bridge (Jembatan)

Jembatan adalah pola desain struktural yang dirancang untuk memisahkan kelas yang sangat besar menjadi dua hierarki terpisah yang dapat dikembangkan secara independen. Kedua hierarki ini disebut sebagai tingkat Abstraksi (Abstraction) dan tingkat Implementasi (Implementation). Pada dasarnya, jika Anda memiliki kelas yang memiliki variasi dari beberapa fungsionalitas, Anda dapat menggunakan pola Jembatan untuk membagi dan mengorganisasi kelas menjadi dua hierarki yang lebih mudah dipahami.

### 2.1. Komponen dari Jembatan

_Abstraksi_

Ini adalah antarmuka atau abstraksi tingkat tinggi. Ini mendefinisikan fungsionalitas abstrak yang akan digunakan oleh klien.

_Abstraksi Yang Diperinci_

Ini adalah subclass atau perluasan dari tingkat abstraksi. Ini memberikan fitur tambahan atau penyempurnaan. Ini memperluas fungsionalitas yang didefinisikan oleh abstraksi.

_Implementor_

Ini adalah antarmuka yang mendefinisikan metode implementasi, biasanya tidak mencerminkan antarmuka abstraksi, tetapi merupakan antarmuka tingkat lebih rendah yang digunakan oleh abstraksi.

_Implementor Konkret_

Kelas konkret yang mengimplementasikan antarmuka implementor. Kelas-kelas ini memberikan implementasi spesifik dari metode yang didefinisikan oleh antarmuka implementor.

### 2.2. Manfaat dari Pola Jembatan

**Mengurai Abstraksi dari Implementasi**

Manfaat utama dari pola Jembatan adalah memisahkan tingkat abstraksi dari tingkat implementasi. Ini memungkinkan kedua bagian tersebut untuk berkembang secara independen, membuat basis kode lebih mudah dimodifikasi.

**Meningkatkan Keterjagaan**

Karena basis kode dibagi menjadi dua bagian, membuat perubahan pada salah satu bagian sistem kemungkinan besar tidak akan berdampak pada bagian lain. Ini membuat pemeliharaan basis kode lebih mudah dan efisien.

**Meningkatkan Pengujian**

Pengujian menjadi lebih mudah saat Anda memiliki pola jembatan dalam basis kode Anda karena Anda dapat fokus pada pengujian tingkat abstraksi secara terpisah dari pengujian tingkat implementasi. Ini memungkinkan pengujian yang lebih mudah dan lebih terfokus.

**Meningkatkan Keterbacaan**

Pola Jembatan menciptakan hierarki yang jelas dalam basis kode. Mengorganisasi basis kode dengan cara ini membantu memahami hubungan antara berbagai bagian sistem.

### 2.3. Contoh

```javascript
// Abstraksi
class Bentuk {
  constructor(warna) {
    this.warna = warna;
  }

  gambar() {
    console.log(`Menggambar bentuk dengan warna ${this.warna}`);
  }
}

// Implementasi
class WarnaMerah {
  aplikasiWarna() {
    console.log("Menerapkan warna merah");
  }
}

class WarnaBiru {
  aplikasiWarna() {
    console.log("Menerapkan warna biru");
  }
}

// Jembatan (Bridge)
class BentukDenganWarna extends Bentuk {
  constructor(warna, implementasiWarna) {
    super(warna);
    this.implementasiWarna = implementasiWarna;
  }

  gambar() {
    super.gambar();
    this.implementasiWarna.aplikasiWarna();
  }
}

// Penggunaan
const bentukMerah = new BentukDenganWarna("merah", new WarnaMerah());
const bentukBiru = new BentukDenganWarna("biru", new WarnaBiru());

bentukMerah.gambar(); // Output: Menggambar bentuk dengan warna merah, Menerapkan warna merah
bentukBiru.gambar(); // Output: Menggambar bentuk dengan warna biru, Menerapkan warna biru
```

## 3. Komposit (Composite)

Pola desain komposit memungkinkan pembuatan objek dengan properti yang merupakan item primitif atau kumpulan objek. Bayangkan struktur seperti pohon, di mana Anda memiliki objek tunggal (simpul daun) atau kelompok objek (cabang). Pola desain komposit memungkinkan Anda membuat jenis struktur ini dan dapat melakukan operasi pada setiap tingkatan dengan cara yang konsisten.

### 3.1 Komponen Komposit

_Komponen_

Ini adalah antarmuka/kelas yang mewakili baik simpul daun (elemen individu) maupun simpul komposit (kumpulan elemen). Komponen mendefinisikan operasi yang dapat diterapkan pada kedua jenis simpul.

_Daun (Leaf)_

Ini mewakili objek individu dalam pohon yang tidak memiliki anak. Mereka mengimplementasikan operasi yang didefinisikan dalam antarmuka komponen.

_Komposit (Composite)_

Ini mewakili komposit atau kontainer yang dapat menampung koleksi simpul daun atau simpul komposit lainnya.

### 3.2 Manfaat Komposit

**Keseragaman dan Konsistensi**

Pola desain Komposit menyediakan cara yang seragam untuk memperlakukan baik objek individu maupun komposisi objek. Klien memiliki satu antarmuka umum untuk mengoperasikan objek-objek ini yang menyederhanakan basis kode dan interaksi objek.

**Fleksibilitas**

Pola desain ini memungkinkan fleksibilitas dalam menambahkan jenis komponen baru atau memodifikasi yang sudah ada tanpa memengaruhi kode klien. Anda dapat dengan mudah memperkenalkan jenis objek daun atau komposit yang baru.

**Sederhana Kode Klien**

Kode klien tidak perlu membedakan antara komponen individu dan komposit, sehingga membuatnya lebih sederhana dan intuitif untuk bekerja dengan struktur ini.

### 3.3 Contoh

```javascript
class SatuBlok {
  constructor(nama) {
    this.nama = nama;
  }

  tampilkan() {
    console.log("Blok:", this.nama);
  }
}

class KoleksiBlok {
  constructor(nama) {
    this.nama = nama;
    this.blok = [];
  }

  tambah(blok) {
    this.blok.push(blok);
  }

  hapus(blok) {
    this.blok = this.blok.filter((b) => b !== blok);
  }

  tampilkan() {
    console.log("Koleksi Blok:", this.nama);

    for (const blok of this.blok) {
      blok.tampilkan();
    }
  }
}

// Penggunaan
const blok1 = new SatuBlok("Blok 1");
const blok2 = new SatuBlok("Blok 2");
const blok3 = new SatuBlok("Blok 3");

const grupBlok1 = new KoleksiBlok("Grup Blok 1");
grupBlok1.tambah(blok1);
grupBlok1.tambah(blok2);

const grupBlok2 = new KoleksiBlok("Grup Blok 2");
grupBlok2.tambah(blok3);

const megaStruktur = new KoleksiBlok("Mega Struktur");
megaStruktur.tambah(grupBlok1);
megaStruktur.tambah(grupBlok2);

megaStruktur.tampilkan();
```

## 4. Dekorator (Decorator)

Pola desain Dekorator dapat digunakan untuk memodifikasi perilaku objek baik secara statis maupun dinamis tanpa memengaruhi perilaku objek lain dari kelas yang sama. Dekorator sangat berguna ketika Anda ingin menambahkan fitur ke objek secara fleksibel dan dapat digunakan ulang.

### 4.1 Komponen Dekorator

_Antarmuka Komponen (Component Interface)_

Ini mendefinisikan logika untuk objek yang dapat memiliki tanggung jawab ditambahkan secara dinamis.

_Komponen Konkret (Concrete Components)_

Ini adalah objek awal yang dapat ditambahkan fungsionalitas tambahan.

_Dekorator (Decorator)_

Ini adalah antarmuka yang memperluas fungsionalitas komponen konkret. Ini memiliki referensi ke instansi komponen dan mengimplementasikan antarmuka komponen.

_Dekorator Konkret (Concrete Decorators)_

Ini adalah implementasi konkret dari kelas dekorator, yang menambahkan perilaku tertentu ke komponen yang diinginkan dengan memperluas kelas dekorator.

### 4.2 Manfaat Dekorator

**Ekstensibilitas dan Fleksibilitas**

Dekorator memungkinkan Anda untuk menambahkan fungsionalitas atau perilaku baru ke objek secara dinamis saat runtime. Ini mempromosikan ekstensibilitas tanpa mengubah basis kode yang ada dan memberikan fleksibilitas dalam cara Anda dapat menggabungkan dan menggunakan fungsionalitas tambahan ini.

**Modularitas**

Dekorator memungkinkan pendekatan kode yang lebih modular dengan memecah fungsionalitas menjadi unit yang lebih kecil dan mudah dikelola. Unit-unit ini dapat digabungkan dan digunakan kembali dengan berbagai cara.

**Konfigurasi Saat Runtime**

Dekorator memungkinkan Anda untuk mengonfigurasi objek secara dinamis saat runtime. Ini memungkinkan Anda untuk menambahkan atau menghapus fungsionalitas tanpa memengaruhi komponen inti atau perlu kompilasi ulang kode.

**Mengurangi Pembuatan Subkelas (Subclassing)**

Tanpa Dekorator, memperluas fungsionalitas sering melibatkan pembuatan banyak subclass untuk setiap kombinasi perilaku. Dekorator menghilangkan kebutuhan untuk subclass, yang menghasilkan basis kode yang lebih bersih dan lebih mudah dipahami.

### 4.3 Contoh

```javascript
class Kopi {
  biaya() {
    return 5;
  }
}

class DekoratorSusu {
  constructor(kopi) {
    this.kopi = kopi;
  }

  biaya() {
    return this.kopi.biaya() + 2;
  }
}

class DekoratorGula {
  constructor(kopi) {
    this.kopi = kopi;
  }

  biaya() {
    return this.kopi.biaya() + 1;
  }
}

// Penggunaan
let kopi = new Kopi();
console.log("Biaya kopi biasa:", kopi.biaya());

let susuKopi = new DekoratorSusu(kopi);
console.log("Biaya kopi susu:", susuKopi.biaya());

let gulaSusuKopi = new DekoratorGula(susuKopi);
console.log("Biaya kopi susu gula:", gulaSusuKopi.biaya());
```

## 5. Fasad (Facade)

Pola desain Fasad adalah antarmuka yang disederhanakan yang dapat diakses oleh klien untuk menggunakan operasi-operasi level rendah lainnya yang disembunyikan di tempat lain dalam basis kode. Pola desain ini sering digunakan dalam sistem yang dibangun di sekitar arsitektur multi-lapisan. Fasad memungkinkan klien untuk melakukan tugas-tugas tertentu tanpa perlu memahami kompleksitas dari sistem yang mendasarinya.

### 5.1 Komponen Fasad

_Fasad (Facade)_

Fasad adalah antarmuka yang akan diakses oleh klien. Ini menyediakan antarmuka yang sederhana dan terpadu yang mendelegasikan permintaan klien ke objek yang sesuai dalam subsistem.

_Subsisitem (Subsystem)_

Subsistem terdiri dari semua komponen dan fungsionalitas beragam yang dibungkus oleh Fasad. Subsistem dan Fasad berinteraksi satu sama lain tetapi beroperasi secara independen.

### 5.2 Manfaat Fasad

**Antarmuka yang Disederhanakan**

Fasad menyediakan antarmuka yang sederhana dan mudah dipahami.

**Organisasi Kode**

Fasad membantu mengorganisasi kode dengan mengenkapsulasi fungsionalitas subsistem dan memberikan pemisahan yang jelas terhadap perhatian.

**Pemeliharaan yang Lebih Mudah**

Perubahan pada subsistem dapat diisolasi dalam Fasad, mengurangi dampak pada kode klien.

### 5.3 Contoh

```javascript
// Subsistem Plumbing
class SubsistemPlumbing {
  constructor() {}

  nyalakanAir() {
    console.log("Plumbing: Air dinyalakan");
  }

  matikanAir() {
    console.log("Plumbing: Air dimatikan");
  }
}

// Subsistem Electrical
class SubsistemElectrical {
  constructor() {}

  nyalakanListrik() {
    console.log("Electrical: Listrik dinyalakan");
  }

  matikanListrik() {
    console.log("Electrical: Listrik dimatikan");
  }
}

// Fasad Rumah
class FasadRumah {
  constructor() {
    this.subsistemPlumbing = new SubsistemPlumbing();
    this.subsistemElectrical = new SubsistemElectrical();
  }

  masukRumah() {
    this.subsistemPlumbing.nyalakanAir();
    this.subsistemElectrical.nyalakanListrik();
    console.log("Anda telah memasuki rumah.");
  }

  keluarRumah() {
    this.subsistemPlumbing.matikanAir();
    this.subsistemElectrical.matikanListrik();
    console.log("Anda telah keluar dari rumah.");
  }
}

// Klien
const klien = () => {
  const rumah = new FasadRumah();

  // Masuk rumah
  rumah.masukRumah();

  // Keluar rumah
  rumah.keluarRumah();
};

// Jalankan klien
klien();
```

## 6. Pola Flyweight

Pola desain Flyweight bertujuan untuk meminimalkan penggunaan memori atau biaya komputasi dengan menyimpan nilai intrinsik (properti serupa) dari objek serupa dalam aplikasi, mengurangi jumlah kode duplikat. Ini sangat berguna ketika berurusan dengan sejumlah besar objek serupa dalam aplikasi.

### 6.1. Komponen Pola Flyweight

_Pabrik Flyweight (FlyweightFactory)_

Pabrik flyweight membuat objek flyweight. Ini berisi fungsi yang akan membuat flyweight jika flyweight tersebut belum ada, dan menyimpan flyweight yang baru dibuat untuk permintaan di masa depan.

_Flyweight_

Flyweight berisi data intrinsik yang akan dibagikan di seluruh aplikasi.

### 6.2. Manfaat Pola Flyweights

**Efisiensi Memori**

Dengan berbagi data intrinsik di antara beberapa objek, pola Flyweight secara signifikan mengurangi penggunaan memori, terutama ketika berurusan dengan sejumlah besar instans.

**Peningkatan Kinerja**

Dengan penggunaan memori yang lebih rendah, kinerja keseluruhan aplikasi meningkat. Penggunaan memori yang lebih rendah biasanya mengarah pada waktu eksekusi yang lebih cepat dan kinerja aplikasi yang lebih lancar.

**Mempermudah Manajemen Status**

Dengan memisahkan data intrinsik (nilai bersama) dan data ekstrinsik (nilai unik), Flyweights mempermudah manajemen status. Ini memungkinkan pemisahan perhatian yang lebih bersih dan pendekatan yang lebih terorganisir dalam penanganan status.

### 6.3. Contoh

```javascript
// Objek Flyweight untuk Kamera
function Kamera(make, model, resolusi) {
  this.make = make;
  this.model = model;
  this.resolution = resolusi;
}

// Pabrik Flyweight untuk Kamera
var PabrikKameraFlyweight = (function () {
  var flyweights = {};

  return {
    get: function (make, model, resolusi) {
      if (!flyweights[make + model]) {
        flyweights[make + model] = new Kamera(make, model, resolusi);
      }
      return flyweights[make + model];
    },

    getCount: function () {
      var count = 0;
      for (var f in flyweights) count++;
      return count;
    },
  };
})();

// Koleksi Kamera
function KoleksiKamera() {
  var cameras = {};
  var count = 0;

  return {
    add: function (make, model, resolusi, serial) {
      cameras[serial] = {
        flyweight: PabrikKameraFlyweight.get(make, model, resolusi),
        serial: serial,
      };
      count++;
    },

    get: function (serial) {
      return cameras[serial];
    },

    getCount: function () {
      return count;
    },
  };
}

// Menjalankan contoh
function jalankan() {
  var cameras = new KoleksiKamera();

  cameras.add("Canon", "EOS R5", "45MP", "A1234");
  cameras.add("Nikon", "D850", "45.7MP", "B5678");
  cameras add ("Sony", "A7R III", "42.4MP", "C9101");
  cameras add ("Canon", "EOS R5", "45MP", "D1212"); // Menggunakan kembali flyweight yang ada

  console.log("Kamera: " + cameras.getCount());
  console.log("Flyweights: " + PabrikKameraFlyweight.getCount());
}

// Jalankan contoh
jalankan();
```

## 7. Proxy

Pola desain Proxy adalah pola desain struktural yang memungkinkan Anda untuk menyediakan pengganti atau pelindung untuk objek lain. Objek proxy ini dapat mengendalikan akses ke objek asli. Di Javascript, objek `proxy` sudah ada dalam bahasa ini dan memudahkan implementasi pola desain Proxy.

### 7.1. Komponen Pola Proxy

_Proksi (Proxy)_

Proksi berisi antarmuka yang mirip dengan objek asli, menyimpan referensi yang memungkinkan proksi mengakses objek asli, dan menangani permintaan serta meneruskannya ke objek asli.

_Subyek Asli (RealSubject)_

Ini adalah objek sebenarnya yang diwakili oleh Proksi.

### 7.2. Manfaat dari Proksi

**Akses yang Terkendali**

Proksi memungkinkan Anda mengendalikan akses ke objek asli, memungkinkan Anda mengimplementasikan logika pengendalian akses seperti izin, pembatasan, atau validasi sebelum mengizinkan akses ke objek yang mendasarinya.

**Penambahan Perilaku (Behavior Augmentation)**

Proksi dapat menambahkan perilaku atau fungsionalitas tambahan sebelum atau setelah pemanggilan metode atau akses ke properti objek asli. Ini berguna untuk mengimplementasikan perhatian silang seperti logging, caching, atau penanganan kesalahan.

**Penggunaan Cache**

Proksi dapat mengimplementasikan mekanisme caching untuk menyimpan hasil operasi yang mahal, meningkatkan kinerja dan efisiensi.

**Inisialisasi Malas (Lazy Initialization)**

Proksi memungkinkan inisialisasi malas, di mana Anda dapat menunda pembuatan objek aktual hingga dibutuhkan. Ini dapat meningkatkan kinerja dengan mengurangi penggunaan sumber daya awal.

### 7.3. Contoh

```javascript
// Objek asli yang mewakili rekening bank
const rekeningBank = {
  saldo: 1000,

  setor(amount) {
    this.saldo += amount;
    console.log(`Setor ${amount}. Saldo baru: ${this.saldo}`);
  },

  tarik(amount) {
    if (amount <= this.saldo) {
      this.saldo -= amount;
      console.log(`Tarik ${amount}. Saldo baru: ${this.saldo}`);
    } else {
      console.log("Dana tidak mencukupi.");
    }
  },
};

// Membuat proksi untuk rekening bank
const proksiRekeningBank = new Proxy(rekeningBank, {
  // Menangkap akses properti
  get(target, property) {
    if (property === "saldo") {
      // Tambahkan perilaku kustom sebelum mengakses 'saldo'
      console.log("Saldo diakses.");
    }
    return target[property];
  },

  // Menangkap pemanggilan metode
  apply(target, thisArg, args) {
    // Tambahkan perilaku kustom sebelum memanggil metode
    console.log(`Metode "${args[0]}" dipanggil.`);
    return target.apply(thisArg, args);
  },
});

// Mengakses proksi
console.log(proksiRekeningBank.saldo); // Ini akan memicu perilaku kustom

proksiRekeningBank.setor(500); // Ini akan memicu perilaku kustom untuk pemanggilan metode
```

---
