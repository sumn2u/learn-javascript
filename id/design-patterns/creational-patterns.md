---
layout: editorial
title: Pola Desain Kreasional dalam Javascript
keterangan: Pola desain kreasional berfokus pada mekanisme penciptaan objek
---

# Pola Desain Kreasional

Pola desain kreasional berfokus pada mekanisme penciptaan objek

## 1. Metode Pabrik (Factory Method)

Sebuah fungsi pabrik hanyalah sebuah fungsi yang menciptakan objek dan mengembalikannya. Ini adalah pola desain kreasional yang memungkinkan Anda untuk membuat objek tanpa menentukan kelas atau konstruktor yang tepat untuk digunakan. Ini mengkonsolidasikan logika penciptaan objek, memungkinkan fleksibilitas dalam penciptaan berbagai jenis objek. Katakanlah Anda memiliki situs web dan ingin membuat metode yang memungkinkan Anda dengan mudah membuat objek HTML dan menambahkannya ke DOM. Pabrik adalah solusi yang sempurna untuk ini, dan berikut adalah bagaimana kita dapat mengimplementasikannya.

### 1.1. Komponen Metode Pabrik

_Pencipta (Creator)_

Ini adalah metode yang diimplementasikan dalam Pabrik yang menciptakan produk baru.

_Produk Abstrak (Abstract Product)_

Antarmuka untuk produk yang sedang dibuat.

_Produk Konkret (Concrete Product)_

Ini adalah objek sebenarnya yang sedang dibuat.

### 1.2. Manfaat Metode Pabrik

**Abstraksi Penciptaan Objek**

Ini menghilangkan kompleksitas penciptaan objek, memungkinkan kode klien hanya fokus pada objek yang dibuat.

**Fleksibilitas dan Kustomisasi**

Pabrik memungkinkan kustomisasi proses penciptaan objek, memungkinkan variasi dalam objek yang dibuat.

**Enkapsulasi Logika Penciptaan**

Logika penciptaan terenkapsulasi dalam pabrik, membuatnya lebih mudah dimodifikasi atau diperluas tanpa memengaruhi kode klien.

**Penciptaan Objek yang Kompleks**

Pabrik berguna ketika penciptaan objek rumit, melibatkan beberapa langkah, atau memerlukan kondisi tertentu.

### 1.3. Contoh

```javascript
function elementFactory(type, text, color) {
  const newElement = document.createElement(type);
  newElement.innerText = text;
  newElement.style.color = color;
  document.body.append(newElement);

  function setText(newText) {
    newElement.innerText = newText;
  }

  function setColor(newColor) {
    newElement.innerText = newColor;
  }

  return {
    newElement,
    setText,
    setColor,
  };
}

const h1Tag = elementFactory("h1", "Teks Awal", "Biru");

h1Tag.setText("Halo dunia");

h1Tag.setColor("Merah");
```

## 2. Metode Pabrik Abstrak

Pabrik abstrak adalah pola desain pembuatan lainnya. Tujuannya utama adalah menyediakan antarmuka untuk menciptakan keluarga objek terkait atau bergantung tanpa menentukan kelas konkret mereka. Pola ini memastikan bahwa objek yang diciptakan kompatibel dan bekerja bersama.

### 2.1. 4 Komponen dari Pabrik Abstrak

_Pabrik Abstrak_

Ini mendefinisikan antarmuka untuk membuat produk abstrak, yang merupakan keluarga objek terkait (misalnya, komponen UI). Pabrik abstrak mendeklarasikan metode penciptaan untuk setiap jenis produk dalam keluarga.

_Pabrik Konkrit_

Ini adalah kelas yang mengimplementasikan antarmuka pabrik abstrak, menyediakan implementasi khusus untuk menciptakan produk konkret. Setiap pabrik konkret menciptakan keluarga produk terkait (misalnya, pabrik UI mungkin menciptakan tombol atau kotak centang).

_Produk Abstrak_

Ini adalah antarmuka atau kelas dasar untuk produk yang dibuat oleh pabrik abstrak. Setiap jenis produk dalam keluarga memiliki definisi produk abstraknya sendiri (misalnya, Tombol, Kotak Centang).

_Produk Konkrit_

Ini adalah implementasi aktual dari produk abstrak. Setiap pabrik konkret menciptakan seperangkat produk konkretnya sendiri. Produk konkrit mengimplementasikan antarmuka produk abstrak yang didefinisikan untuk keluarganya (misalnya, HTMLButton, WindowsButton).

### 2.2. Manfaat dari Pabrik Abstrak

**Konsistensi**

Ini memastikan bahwa objek yang dibuat kompatibel dan mengikuti tema atau gaya yang konsisten.

**Pemisahan Tanggung Jawab**

Ini mengisolasi penciptaan objek dari kode klien, mempromosikan pemisahan yang bersih antara perhatian.

**Fleksibilitas dan Skalabilitas**

Ini memungkinkan penambahan mudah keluarga produk baru tanpa mengubah kode klien yang ada.

### 2.3. Contoh

```javascript
// Pabrik Abstrak: UIFactory
class UIFactory {
    createButton() {
        throw new Error('metode createButton harus di-override');
    }

    createCheckbox() {
        throw new Error('metode createCheckbox harus di-override');
    }
}

// Pabrik Konkret: WindowsUIFactory
class WindowsUIFactory extends UIFactory {
    createButton() {
        return new WindowsButton();
    }

    createCheckbox() {
        return new WindowsCheckbox();
    }
}

// Pabrik Konkret: MacUIFactory
class MacUIFactory extends UIFactory {
    createButton() {
        return new MacButton();
    }

    createCheckbox() {
        return new MacCheckbox();
    }
}

// Produk Abstrak: Tombol (Button)
class Button {
    render() {
        throw an Error('metode render harus di-override');
    }
}

// Produk Konkret: WindowsButton
class WindowsButton extends Button {
    render() {
        console.log('Merender tombol Windows');
    }
}

// Produk Konkret: MacButton
class MacButton extends Button {
    render() {
        console.log('Merender tombol Mac');
    }
}

// Produk Abstrak: Checkbox
class Checkbox {
    render() {
        throw new Error('metode render harus di-override');
    }
}

// Produk Konkret: WindowsCheckbox
class WindowsCheckbox extends Checkbox {
    render() {
        console.log('Merender checkbox Windows');
    }
}

// Produk Konkret: MacCheckbox
class MacCheckbox extends Checkbox {
    render() {
        console.log('Merender checkbox Mac');
    }
}

// Penggunaan
const windowsFactory = new WindowsUIFactory();
const macFactory = new MacUIFactory();

const windowsButton = windowsFactory.createButton();
windowsButton.render();  // Output: Merender tombol Windows

const macCheckbox = macFactory.createCheckbox();
macCheckbox.render();  // Output: Merender checkbox Mac
```

## 3. Pembangun (Builder)

Tujuan dari pembangun adalah untuk memisahkan konstruksi objek dari representasinya. Apa yang dilakukan pola pembangun adalah memungkinkan klien untuk membangun objek kompleks hanya dengan melewati jenis dan konten objek. Klien tidak perlu khawatir tentang detail konstruksi.

### 3.1. 4 Komponen dari Pembangun

_Pembangun_

Biasanya berisi serangkaian metode untuk membangun berbagai bagian objek.

_Pembangun Konkrit_

Mengimplementasikan metode dari antarmuka pembangun untuk membangun bagian-bagian objek.

_Direktur (Opsional)_

Ini tidak selalu diperlukan tetapi dapat membantu dalam membangun objek akhir menggunakan proses konstruksi tertentu.

_Objek_

Representasi produk akhir. Berisi bagian-bagian yang dibangun oleh pembangun.

### 3.2. Manfaat dari Pola Pembangun

**Pemisahan Perhatian**

Pola Pembangun memisahkan konstruksi objek kompleks dari representasinya, memungkinkan berbagai implementasi pembangun untuk bervariasi dalam representasi internal.

**Penciptaan Objek yang Fleksibel**

Ini memungkinkan penciptaan konfigurasi yang berbeda dari objek kompleks dengan menggunakan proses konstruksi yang umum. Pembangun dapat disesuaikan untuk menciptakan variasi objek tertentu.

**Meningkatkan Keterbacaan**

Menggunakan pembangun dapat meningkatkan keterbacaan kode dengan jelas menguraikan langkah-langkah yang diperlukan untuk membangun objek. Mudah memahami kontribusi setiap langkah pada objek akhir.

**Konstruksi Berparameter**

Pembangun memungkinkan Anda untuk membangun objek dengan melewati parameter ke langkah-langkah konstruksi, memberikan kontrol terperinci atas penciptaan dan konfigurasi objek.

**Penggunaan Kembali**

Pembangun dapat digunakan kembali untuk membuat beberapa instance objek kompleks dengan konfigurasi yang berbeda, mempromosikan penggunaan ulang kode dan meminimalkan duplikasi logika konstruksi.

### 3.3. Contoh

```Javascript
// Pembangun
class ComputerBuilder {
    buildCPU() {}
    buildRAM() {}
    buildStorage() {}
    getResult() {}
}

// Pembangun Konkret
class GamingComputerBuilder extends ComputerBuilder {
    // Implementasikan langkah-langkah khusus untuk membangun komputer gaming
}

class OfficeComputerBuilder extends ComputerBuilder {
    // Implementasikan langkah-langkah khusus untuk membangun komputer kantor
}

// Kelas Objek
class Computer {
    constructor() {
        this.parts = [];
    }

    addPart(part) {
        this.parts.push(part);
    }
}

// Direktur (Opsional)
class ComputerAssembler {
    constructor(builder) {
        this.builder = builder;
    }

    assembleComputer() {
        this.builder.buildCPU();
        this.builder.buildRAM();
        this.builder.buildStorage();
        return this.builder.getResult();
    }
}
```

## 4. Singleton

Sebuah singleton adalah objek yang hanya bisa diinstansiasi sekali. Singleton berguna ketika tindakan sistem secara menyeluruh perlu diselaraskan dari satu tempat pusat tunggal. Singleton mengurangi kebutuhan untuk variabel global, yang sangat penting dalam JavaScript karena membatasi polusi ruang nama.

### 4.1. Komponen dari Singleton

_Fungsi Anonim_

Sebuah singleton diimplementasikan menggunakan fungsi anonim.

_Fungsi getInstance_

Ini adalah fungsi yang mengembalikan objek yang diinstansiasi secara unik.

_Konstruktor (Opsional)_

Dalam JavaScript, konstruktor tidak diperlukan untuk mengimplementasikan pola singleton, tetapi memiliki konstruktor umum karena memungkinkan Anda untuk mengkonfigurasi singleton dan menambahkan logika inisialisasi.

### 4.2. Manfaat dari Singleton

**Mengurangi Variabel Global**

Singleton dapat membantu mengurangi jumlah variabel global yang diperlukan dalam program Anda, mempromosikan organisasi kode yang lebih baik dan pemeliharaan.

**Efisien Memori**

Karena Singleton memastikan hanya ada satu instans yang ada pada satu waktu, memori disimpan karena Anda menghindari memiliki beberapa instans dari kelas yang sama.

**Akses Global**

Singleton menyediakan titik akses global ke instans. Ini memungkinkan bagian lain dari program untuk mengakses dan menggunakan instans yang sama tanpa perlu meneruskannya.

**Berbagi Sumber Daya**

Singleton sangat berguna ketika menangani tugas seperti mengelola sumber daya bersama. Singleton dapat digunakan untuk mengelola koneksi basis data, penangan berkas, dan bahkan grup benang, memastikan bahwa sumber daya ini dibagikan secara efisien di seluruh aplikasi.

### 4.3. Contoh

```javascript
class Singleton {
  constructor() {
    const privateVariable = "Ini adalah variabel pribadi";

    function privateMethod() {
      console.log("Ini adalah metode pribadi.");
    }

    return {
      publicMethod: function () {
        console.log("Ini adalah metode publik.");
      },
      publicVariable: "Saya adalah publik",
    };
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const singletonInstance1 = Singleton.getInstance();
const singletonInstance2 = Singleton.getInstance();

console.log(singletonInstance1 === singletonInstance2); // Menghasilkan: true
```

## 5. Prototype

Pola prototipe adalah cara alternatif untuk mengimplementasikan warisan, tetapi perbedaan utamanya adalah daripada mewarisi properti dari sebuah kelas, objek mewarisi properti dari objek prototipe. Pola prototipe juga disebut pola properti, dan JavaScript mendukung prototipe secara alami. Dalam JavaScript, setiap objek memiliki prototipe (referensi ke objek lain). Ketika Anda mencoba mengakses properti yang tidak ada dalam objek itu sendiri, JavaScript akan mencarinya dalam prototipe objek dan terus naik ke prototipe hingga menemukannya atau mencapai ujung rantai prototipe.

### 5.1. Komponen dari Pola Prototipe

_Objek Prototipe_

Mengandung properti dan metode yang akan diwarisi oleh semua instansi baru.

_Klien_

Klien bertanggung jawab untuk membuat objek baru berdasarkan prototipe. Klien dapat membuat instansi baru berdasarkan prototipe dan memodifikasi properti-properti mereka sesuai kebutuhan.

_Mekanisme Klona/Pembuatan_

Mekanisme yang digunakan untuk membuat objek baru berdasarkan prototipe. Dalam JavaScript, ini dapat dicapai dengan menggunakan fungsi `Object.create()`.

### 5.2. Manfaat dari Pola Prototipe

**Penciptaan Instansi yang Efisien**

Membuat instansi baru dari Prototipe lebih efisien daripada menggunakan kelas dan konstruktor tradisional. Objek dibuat dengan mengklon prototipe, yang mengurangi kebutuhan untuk mengatur kelas dan logika inisialisasi.

**Penggunaan Kode Kembali**

Pola Prototipe memungkinkan Anda untuk mendefinisikan seperangkat properti dan metode default dalam objek prototipe. Ini memungkinkan beberapa instansi untuk berbagi perilaku dan struktur yang sama tanpa menggandakan kode. Ini juga mengurangi penggunaan memori karena setiap instansi tidak perlu menyimpan salinan properti prototipe.

**Penciptaan Objek yang Fleksibel**

Objek yang dibuat menggunakan Pola Prototipe dapat dengan mudah disesuaikan dengan memodifikasi properti mereka atau menambahkan properti baru yang khusus untuk instansi.

**Perubahan Runtime yang Dinamis**

Perubahan yang dibuat pada objek prototipe selama runtime tercermin dalam semua instansi yang didasarkan pada prototipe. Perilaku ini memungkinkan pembaruan dan modifikasi pada prototipe, yang memengaruhi semua instansi yang berbagi prototipe yang sama.

### 5.3. Contoh

```javascript
const cameraPrototype = {
  model: "default",
  make: "default",
  shutter: function () {
    console.log(`Kamera ${this.make} ${this.model} telah mengambil foto`);
  },
};

const camera1 = Object.create(cameraPrototype);
camera1.model = "X-Pro 3";
camera1.make = "Fujifilm";

const camera2 = Object.create(cameraPrototype);
camera2.model = "R5";
camera2.make = "Canon";
```

---
