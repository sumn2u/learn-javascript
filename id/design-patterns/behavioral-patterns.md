---
layout: editorial
title: Pola Desain Perilaku dalam JavaScript
keterangan: Berfokus pada bagaimana objek berkomunikasi satu sama lain dan menetapkan tanggung jawab kepada mereka.
---

# Pola Desain Perilaku

Berfokus pada bagaimana objek berkomunikasi satu sama lain dan menetapkan tanggung jawab kepada mereka.

## 1. Rantai Tanggung Jawab (Chain of Responsibility)

Rantai Tanggung Jawab adalah pola desain perilaku, dan tujuannya adalah mengambil permintaan dan meneruskannya melalui serangkaian penangan. Ketika permintaan melewati rantai, setiap penangan akan memutuskan apakah akan memproses permintaan atau meneruskannya ke penangan berikutnya dalam rantai. Pola ini memungkinkan beberapa penangan untuk menangani permintaan tanpa pengirim perlu tahu penangan mana yang akan memprosesnya.

## 1.1. Komponen Rantai Tanggung Jawab

_Permintaan (Request)_

Permintaan hanyalah objek yang dikirim oleh klien yang perlu diproses. Permintaan melewati rantai penangan hingga diproses atau mencapai akhir rantai.

_Interface/Kelas Penangan Abstrak (Abstract Handler)_

Ini adalah antarmuka/kelas dasar yang mendefinisikan metode yang akan digunakan untuk menangani permintaan. Antarmuka penangan berisi logika untuk urutan rantai dan bagaimana permintaan dilewati.

_Penangan Konkret (Concrete Handlers)_

Ini adalah metode/kelas yang mengimplementasikan penangan abstrak. Setiap penangan konkret berisi logika untuk menangani jenis permintaan tertentu. Jika penangan konkret dapat memproses permintaan, maka akan melakukannya; jika tidak, maka akan meneruskan permintaan ke penangan berikutnya.

## 1.2. Manfaat Rantai Tanggung Jawab

**Kemudahan Penggunaan**

Pengirim tidak perlu mengetahui metode khusus untuk memproses permintaan, pengirim hanya perlu meneruskannya ke rantai. Ini memudahkan pengirim untuk memproses permintaan.

**Fleksibilitas dan Perluasan**

Penangan baru dapat ditambahkan ke rantai atau dihapus dari rantai tanpa mengubah kode pengirim. Ini memungkinkan modifikasi dinamis urutan pemrosesan.

**Mempromosikan Segregasi yang Bertanggung Jawab**

Penangan bertanggung jawab untuk memproses jenis permintaan tertentu berdasarkan logika yang ditentukan. Ini mempromosikan pemisahan tanggung jawab yang jelas, sehingga lebih mudah mengelola dan memelihara setiap penangan secara independen.

**Pemrosesan Permintaan Berurutan**

Pola ini memastikan bahwa setiap permintaan diproses secara berurutan melalui rantai penangan. Setiap penangan dapat memilih untuk memproses permintaan atau meneruskannya ke penangan berikutnya. Ini dapat sangat berguna dalam skenario di mana permintaan perlu diproses dalam urutan tertentu.

## 1.3. Contoh

```javascript
// Handler interface
class CoffeeHandler {
  constructor() {
    this.nextHandler = null;
  }

  setNext(handler) {
    this.nextHandler = handler;
  }

  processRequest(request) {
    throw new Error(
      "Metode `processRequest` harus diimplementasikan oleh subclass (kelas turunan)."
    );
  }
}

// Konkrit handler untuk memesan kopi

class OrderCoffeeHandler extends CoffeeHandler {
  processRequest(request) {
    if (request === "Coffee") {
      return "Pesanan untuk segelas kopi telah ditempatkan.";
    } else if (this.nextHandler) {
      return this.nextHandler.processRequest(request);
    } else {
      return "Maaf, kami tidak menyajikan " + request + ".";
    }
  }
}

// Konkrit handler untuk menyiapkan kopi

class PrepareCoffeeHandler extends CoffeeHandler {
  processRequest(request) {
    if (request === "PrepareCoffee") {
      return "Kopi sedang disiapkan.";
    } else if (this.nextHandler) {
      return this.nextHandler.processRequest(request);
    } else {
      return "Tidak bisa menyiapkan " + request + ".";
    }
  }
}

// Kode klien
const orderHandler = new OrderCoffeeHandler();
const prepareHandler = new PrepareCoffeeHandler();

// Menyiapkan rantai (chain)
orderHandler.setNext(prepareHandler);

// Memesan kopi
console.log(orderHandler.processRequest("Coffee")); // Hasil: Pesanan ditempatkan untuk segelas kopi.

// Menyiapkan kopi
console.log(orderHandler.processRequest("PrepareCoffee")); // Hasil: Kopi sedang disiapkan.

// Coba pesan yang lain
console.log(orderHandler.processRequest("Tea")); // Hasil: Maaf, kami tidak menyajikan Teh.
```

## 2. Command

Pola desain perintah adalah pola desain perilaku yang memungkinkan Anda untuk mengkapsulasi permintaan sebagai objek. Objek tersebut akan berisi semua informasi yang diperlukan untuk eksekusi permintaan. Pola ini memungkinkan untuk memarameterisasi dan mengantri permintaan serta memberikan kemampuan untuk membatalkan operasi.

## 2.1. Komponen-Komponen Pola Komando

_Invoker_

Objek yang meminta eksekusi perintah. Invoker memiliki referensi ke perintah dan dapat mengeksekusi perintah dengan memanggil metodenya `execute`. Invoker tidak perlu mengetahui detail bagaimana perintah tersebut dieksekusi. Ia hanya memicu perintah.

_Command_

Ini adalah antarmuka atau kelas abstrak yang mendeklarasikan metode `execute`. Ini mendefinisikan metode umum yang harus diimplementasikan oleh kelas perintah konkret.

_Receiver_

Ini adalah objek yang melakukan pekerjaan sebenarnya ketika metode `execute` dari perintah dipanggil. Penerima tahu bagaimana melaksanakan tindakan yang terkait dengan perintah tertentu.

## 2.2. Manfaat Pola Komando

**Fleksibilitas dan Kemudahan Perluasan**

Pola ini memungkinkan penambahan perintah baru dengan mudah tanpa perlu memodifikasi invoker atau penerima.

**Operasi Pembatalan dan Pengulangan**

Pola perintah memfasilitasi implementasi operasi pembatalan dan pengulangan. Setiap objek perintah dapat melacak status sebelumnya, memungkinkan pembatalan tindakan yang dieksekusi.

**Parameterisasi dan Penyusunan Antrian**

Perintah dapat diparameterisasi dengan argumen, memungkinkan penyesuaian tindakan saat runtime. Selain itu, pola ini memungkinkan penyusunan antrian dan penjadwalan permintaan, memberikan kendali atas urutan eksekusi.

**Riwayat dan Pencatatan**

Memungkinkan untuk mempertahankan riwayat perintah yang dieksekusi, yang dapat berguna untuk audit, pencatatan, atau pelacakan tindakan pengguna.

## 2.3. Contoh

```javascript
class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }

  execute() {
    throw new Error("Metode execute() harus diimplementasikan");
  }
}

class ConcreteCommand extends Command {
  constructor(receiver, parameter) {
    super(receiver);
    this.parameter = parameter;
  }

  execute() {
    this.receiver.action(this.parameter);
  }
}

class Receiver {
  action(parameter) {
    console.log(
      `Receiver sedang menjalankan aksi dengan parameter: ${parameter}`
    );
  }
}

class Invoker {
  constructor() {
    this.commands = [];
  }

  addCommand(command) {
    this.commands.push(command);
  }

  executeCommands() {
    this.commands.forEach((command) => command.execute());
    this.commands = []; // Menghapus perintah yang sudah dieksekusi
  }
}

// Penggunaan
const receiver = new Receiver();
const command1 = new ConcreteCommand(receiver, "Parameter Perintah 1");
const command2 = new ConcreteCommand(receiver, "Parameter Perintah 2");

const invoker = new Invoker();
invoker.addCommand(command1);
invoker.addCommand(command2);

invoker.executeCommands();
```

## 3. Interpolator

Pola desain interperator digunakan untuk menentukan tata bahasa (grammar) untuk suatu bahasa dan menyediakan sebuah penerjemah (interpreter) untuk mengartikan kalimat-kalimat dalam bahasa tersebut. Biasanya digunakan untuk membuat penerjemah bahasa atau pemroses bahasa, tetapi Anda juga dapat menggunakannya dalam aplikasi Anda. Bayangkan Anda memiliki aplikasi desktop yang kompleks, Anda dapat merancang bahasa skrip dasar yang memungkinkan pengguna akhir untuk memanipulasi aplikasi Anda melalui instruksi sederhana.

## 3.1. Komponen-komponen dari Interpolator

_Konteks_

Sebuah keadaan global atau konteks yang digunakan oleh Interpolator untuk menginterpretasikan ekspresi-ekspresi. Konteks ini sering berisi informasi yang relevan selama interpretasi ekspresi.

_Ekspresi-ekspresi Abstrak_

Mendefinisikan antarmuka untuk semua jenis ekspresi dalam tata bahasa (grammar) bahasa tersebut. Ekspresi-ekspresi ini biasanya diwakili sebagai kelas abstrak atau antarmuka.

_Ekspresi-e Ekspresi Terminal_

Mewakili simbol-simbol terminal dalam tata bahasa (grammar). Ini adalah daun-daun dari pohon ekspresi. Ekspresi terminal mengimplementasikan antarmuka yang didefinisikan oleh ekspresi abstrak.

_Ekspresi-e Ekspresi Non-Terminal_

Mewakili simbol-simbol non-terminal dalam tata bahasa (grammar). Ekspresi non-terminal menggunakan ekspresi-ekspresi terminal dan/atau ekspresi-e non-terminal lainnya untuk mendefinisikan ekspresi-e kompleks dengan menggabungkan atau menggabungkan mereka.

_Pohon Ekspresi (Expression Tree)_

Mewakili struktur hirarkis ekspresi bahasa tersebut. Pohon ekspresi dibangun dengan menggabungkan ekspresi terminal dan ekspresi non-terminal berdasarkan aturan tata bahasa bahasa tersebut.

_Penerjemah (Interpreter)_

Mendefinisikan antarmuka atau kelas yang menginterpretasikan pohon sintaks abstrak yang dibuat oleh pohon ekspresi. Biasanya mencakup metode `interpret` yang mengambil konteks dan menginterpretasikan ekspresi berdasarkan konteks yang diberikan.

_klien_

Membangun pohon sintaks abstrak menggunakan ekspresi-e terminal dan non-terminal berdasarkan tata bahasa bahasa. Klien kemudian menggunakan penerjemah untuk menginterpretasikan ekspresi.

## 3.2. Manfaat Interpreters

**Kemudahan Interpretasi Tata Bahasa (Grammar)**

Pola ini menyederhanakan interpretasi aturan tata bahasa yang kompleks dengan memecahnya menjadi ekspresi-e yang lebih kecil dan lebih mudah dikelola. Setiap jenis ekspresi menangani interpretasinya sendiri, menjadikan proses interpretasi secara keseluruhan lebih mudah dikelola.

**Penanganan Kesalahan yang Lebih Baik**

Karena setiap jenis ekspresi menangani interpretasinya sendiri, penanganan kesalahan dapat disesuaikan dengan ekspresi tertentu. Ini memungkinkan pesan kesalahan yang lebih tepat dan bermakna saat memparsing atau menginterpretasikan masukan.

**Fleksibilitas dan Pemuaian (Extensibility)**

Pola interpeter menyediakan cara fleksibel untuk mendefinisikan dan memperluas aturan tata bahasa dan ekspresi bahasa tanpa mengubah logika inti interpreter. Anda dapat dengan mudah menambahkan ekspresi-e baru dengan membuat kelas-kelas ekspresi terminal dan non-terminal yang baru.

**Integrasi dengan Pola Desain Lainnya**

Pola Interpolator dapat digabungkan dengan pola desain lain, seperti Composite, untuk membangun hierarki ekspresi yang kompleks. Ini memungkinkan pembuatan interpreter yang kuat dan kaya fitur.

## 3.3. Contoh

```javascript
// Ekspresi Abstrak
class Ekspresi {
  tafsirkan(konteks) {
    // Akan digantikan oleh subclass
  }
}

// Ekspresi Terminal: EkspresiAngka
class EkspresiAngka extends Ekspresi {
  constructor(angka) {
    super();
    this.angka = angka;
  }

  tafsirkan(konteks) {
    return this.angka;
  }
}

// Ekspresi Terminal: EkspresiVariabel
class EkspresiVariabel extends Ekspresi {
  constructor(variabel) {
    super();
    this.variabel = variabel;
  }

  tafsirkan(konteks) {
    return konteks[this.variabel] || 0;
  }
}

// Ekspresi Non-terminal: EkspresiTambah
class EkspresiTambah extends Ekspresi {
  constructor(ekspresi1, ekspresi2) {
    super();
    this.ekspresi1 = ekspresi1;
    this.ekspresi2 = ekspresi2;
  }

  tafsirkan(konteks) {
    return (
      this.ekspresi1.tafsirkan(konteks) + this.ekspresi2.tafsirkan(konteks)
    );
  }
}

// Ekspresi Non-terminal: EkspresiKurang
class EkspresiKurang extends Ekspresi {
  constructor(ekspresi1, ekspresi2) {
    super();
    this.ekspresi1 = ekspresi1;
    this.ekspresi2 = ekspresi2;
  }

  tafsirkan(konteks) {
    return (
      this.ekspresi1.tafsirkan(konteks) - this.ekspresi2.tafsirkan(konteks)
    );
  }
}

// Kode Klien
const konteks = { a: 10, b: 5, c: 2 };

const ekspresi = new EkspresiKurang(
  new EkspresiTambah(new EkspresiVariabel("a"), new EkspresiVariabel("b")),
  new EkspresiVariabel("c")
);

const hasil = ekspresi.tafsirkan(konteks);
console.log("Hasil:", hasil); // Output: Hasil: 13
```

## 4. Iterator

Pola Iterator memungkinkan klien untuk secara efektif mengulangi koleksi objek

## 4.1. Komponen dari Iterator

_Iterator_

Mengimplementasikan antarmuka atau kelas Iterator dengan metode seperti `first()`,`next()`. Iterator melacak posisi saat ini saat melintasi koleksi.

_Item_

Ini adalah objek individu dari koleksi yang akan dijelajahi oleh Iterator.

## 4.2. Manfaat dari iterator

**Kompatibilitas dengan Struktur Data yang Berbeda**

Pola Iterator memungkinkan logika iterasi yang sama diterapkan pada struktur data yang berbeda.

**Dukungan untuk Iterasi Bersamaan**

Iterator dapat mendukung iterasi bersamaan atas koleksi yang sama tanpa saling mengganggu, ini memungkinkan klien untuk mengulangi koleksi dengan cara yang berbeda secara bersamaan.

**Pemuatan Malas (Lazy Loading)**

Iterator dapat dirancang untuk memuat elemen sesuai permintaan, yang bermanfaat untuk koleksi besar di mana memuat semua elemen sekaligus mungkin tidak praktis atau memakan banyak sumber daya. Elemen dapat diambil sesuai kebutuhan, mengoptimalkan penggunaan memori.

**Antarmuka yang Disederhanakan**

Pola Iterator menyediakan antarmuka yang bersih dan konsisten untuk mengakses elemen dalam koleksi tanpa mengekspos struktur internal koleksi. Ini menyederhanakan penggunaan dan pemahaman koleksi.

## 4.3. Contoh

```javascript
// Kelas Mobil yang Mewakili Sebuah Mobil
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getInfo() {
    return `${this.make} ${this.model}`;
  }
}

// Antarmuka Iterator
class Iterator {
  constructor(collection) {
    this.collection = collection;
    this.index = 0;
  }

  next() {
    return this.collection[this.index++];
  }

  hasNext() {
    return this.index < this.collection.length;
  }
}

// Koleksi Mobil
class CarCollection {
  constructor() {
    this.cars = [];
  }

  addCar(car) {
    this.cars.push(car);
  }

  createIterator() {
    return new Iterator(this.cars);
  }
}

// Penggunaan
const carCollection = new CarCollection();
carCollection.addCar(new Car("Toyota", "Corolla"));
carCollection.addCar(new Car("Honda", "Civic"));
carCollection.addCar(new Car("Ford", "Mustang"));

const iterator = carCollection.createIterator();

while (iterator.hasNext()) {
  const car = iterator.next();
  console.log(car.getInfo());
}
```

## 5. Mediator

Pola Mediator berperan sebagai perantara antara sekelompok objek dengan mengkapsulasi cara objek-objek ini berinteraksi. Mediator memfasilitasi komunikasi antara komponen-komponen yang berbeda dalam suatu sistem tanpa mereka perlu merujuk langsung satu sama lain.

## 5.1. Komponen dari Mediator

_Mediator_

Mediator mengelola kontrol pusat atas operasi. Ini berisi antarmuka untuk berkomunikasi dengan objek-objek Kolaborator dan memiliki referensi ke setiap objek Kolaborator.

_Kolaborator_

Kolaborator adalah objek-objek yang dimediasi, setiap kolaborator memiliki referensi ke mediator.

## 5.2. Manfaat dari Mediator

**Kontrol Terpusat**

Pusatkan komunikasi dalam Mediator memungkinkan pengendalian dan koordinasi yang lebih baik antara komponen-komponen. Mediator dapat mengelola distribusi pesan, mengutamakan pesan, dan menerapkan logika khusus berdasarkan kebutuhan sistem.

**Pemudahan Komunikasi**

Mediator menyederhanakan logika komunikasi, karena komponen mengirim pesan ke Mediator daripada berurusan dengan kompleksitas komunikasi langsung. Hal ini menyederhanakan interaksi antara komponen dan memungkinkan pemeliharaan dan pembaruan yang lebih mudah.

**Dapat Digunakan Kembali Mediator**

Mediator dapat digunakan kembali di berbagai komponen dan skenario, memungkinkan satu titik kontrol untuk bagian-bagian yang berbeda dari aplikasi. Dapat digunakannya ini mempromosikan konsistensi dan membantu dalam mengelola aliran komunikasi dengan efisien.

**Mendorong Pemeliharaan**

Pola Mediator mendorong pemeliharaan dengan mengurangi kompleksitas komunikasi antar komponen yang langsung. Seiring pertumbuhan sistem, perubahan dan pembaruan dapat dilakukan dalam Mediator tanpa memengaruhi komponen-komponen individu, membuat pemeliharaan lebih mudah dan kurang rentan terhadap kesalahan.

```javascript
var Participant = function (name) {
  this.name = name;
  this.chatroom = null;
};

Participant.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function (message, from) {
    console.log(from.name + " to " + this.name + ": " + message);
  },
};

var Chatroom = function () {
  var participants = {};

  return {
    register: function (participant) {
      participants[participant.name] = participant;
      participant.chatroom = this;
    },

    send: function (message, from, to) {
      if (to) {
        // Pesan Tunggal
        to.receive(message, from);
      } else {
        // Pesan Penyiaran
        for (key in participants) {
          if (participants[key] !== from) {
            participants[key].receive(message, from);
          }
        }
      }
    },
  };
};

function run() {
  var yoko = new Participant("Yoko");
  var john = new Participant("John");
  var paul = new Participant("Paul");
  var ringo = new Participant("Ringo");

  var chatroom = new Chatroom();
  chatroom.register(yoko);
  chatroom.register(john);
  chatroom.register(paul);
  chatroom.register(ringo);

  yoko.kirim("Semua yang Anda butuhkan adalah cinta.");
  yoko.kirim("Aku mencintaimu John.");
  john.kirim("Hei, tidak perlu disiarkan", yoko);
  paul.kirim("Ha, aku mendengarnya!");
  ringo.kirim("Paul, apa pendapatmu?", paul);
}
```

## 6. Memento

Pola desain Memento memungkinkan status objek disimpan dan dipulihkan pada waktu yang akan datang tanpa mengekspos struktur internalnya. Memento adalah objek terpisah yang menyimpan status objek asli.

## 6.1. Komponen dari Memento

_Originator_

Ini adalah objek yang disimpan. Itu membuat objek Memento untuk menyimpan status internalnya.

_Memento_

Memento bertanggung jawab untuk menyimpan status dari Originator. Ini memiliki metode untuk mengambil dan mengatur status Originator tetapi tidak mengekspos struktur internal Originator.

_Caretaker_

Caretaker bertanggung jawab untuk melacak dan mengelola Memento. Ini tidak mengubah atau memeriksa isi dari Memento.

## 6.2. Manfaat dari Memento

**Pemeliharaan dan Pemulihan Status**

Memento memungkinkan status internal objek disimpan dan dipulihkan pada waktu yang akan datang.

**Operasi Undo/Redo**

Memento memudahkan implementasi fungsi undo dan redo dengan mudah. Karena Memento menyimpan status objek pada berbagai titik waktu, Anda dapat mendukung pembatalan perubahan yang dibuat pada objek atau mengulang perubahan yang dibuat pada objek.

**Kinerja yang Ditingkatkan**

Menyimpan status objek dalam Memento memungkinkan operasi penyimpanan dan pengambilan yang lebih efisien dibandingkan dengan pendekatan lain.

**Desain yang Fleksibel**

Ini menyediakan cara fleksibel untuk mengelola sejarah status objek. Caretaker dapat memutuskan status mana yang akan dijaga dan kapan akan mengembalikannya, memungkinkan pendekatan yang dapat disesuaikan berdasarkan kebutuhan aplikasi.

## 6.3. Contoh

```javascript
// Kelas Komputer (Originator)
class Computer {
  constructor() {
    this.os = "";
    this.version = "";
  }

  setOS(os, version) {
    this.os = os;
    this.version = version;
  }

  getState() {
    return {
      os: this.os,
      version: this.version,
    };
  }

  restoreState(state) {
    this.os = state.os;
    this.version = state.version;
  }
}

// Caretaker
class Caretaker {
  constructor() {
    this.mementos = {};
    this.nextKey = 1;
  }

  add(memento) {
    const key = this.nextKey++;
    this.mementos[key] = memento;
    return key;
  }

  get(key) {
    return this.mementos[key];
  }
}

function run() {
  const computer = new Computer();
  const caretaker = new Caretaker();

  // Simpan status
  const originalState = computer.getState();
  const key = caretaker.add(originalState);

  // Merusak status
  computer.setOS("Windows", "11");

  // Pulihkan status asli
  const restoredState = caretaker.get(key);
  computer.restoreState(restoredState);

  console.log(computer.getState()); // Output: { os: '', version: '' }
}

run();
```

## 7. Observer

Pola observer memungkinkan banyak objek untuk berlangganan acara yang disiarkan oleh objek lain.

## 7.1. Komponen Observer

_Subjek_

Subjek adalah objek yang mengimplementasikan antarmuka yang memungkinkan objek pengamat berlangganan dan mengirim pemberitahuan kepada pengamat saat statusnya berubah.

_Pengamat_

Pengamat berlangganan subjek dan biasanya memiliki fungsi yang dipanggil saat diberitahu oleh Subjek.

## 7.2. Manfaat Pengamat

**Pemudahan Penanganan Acara**

Pola Observer dapat menyederhanakan mekanisme penanganan acara, karena acara dapat diperlakukan sebagai pemberitahuan kepada pengamat tentang perubahan status.

**Mengurangi Kode yang Sama**

Alih-alih menggandakan kode yang sama untuk merespons perubahan status di beberapa tempat, pola Observer memungkinkan adanya tempat terpusat untuk mengelola respons ini, mempromosikan kode yang lebih bersih dan mudah dikelola.

**Dukungan untuk Komunikasi Penyiaran**

Pola Observer memfasilitasi model komunikasi "satu-ke-banyak", di mana satu acara memicu tindakan dalam beberapa pengamat. Ini berguna dalam skenario di mana beberapa komponen perlu bereaksi terhadap perubahan status.

**Modularitas dan Dapat Digunakan Kembali**

Pengamat dapat digunakan kembali di berbagai subjek, mempromosikan modularitas dan dapat digunakan kembali kode. Ini memungkinkan kode yang lebih fleksibel dan mudah dikelola.

## 7.3. Contoh

```javascript
function Click() {
  this.handlers = []; // observers
}

Click.prototype = {
  subscribe: function (fn) {
    this.handlers.push(fn);
  },

  unsubscribe: function (fn) {
    this.handlers = this.handlers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
  },

  fire: function (o, thisObj) {
    var scope = thisObj || window;
    this.handlers.forEach(function (item) {
      item.call(scope, o);
    });
  },
};

function run() {
  var clickHandler = function (item) {
    console.log("fired: " + item);
  };

  var click = new Click();

  click.subscribe(clickHandler);
  click.fire("event #1");
  click.unsubscribe(clickHandler);
  click.fire("event #2");
  click.subscribe(clickHandler);
  click.fire("event #3");
}
```

## 8. State

Pola State adalah pola desain perilaku yang memungkinkan Anda memiliki objek dasar dan memberikannya fungsionalitas tambahan berdasarkan statusnya. Pola ini sangat berguna ketika sebuah objek perlu mengubah perilakunya berdasarkan status internalnya.

## 8.1. Komponen dari State

_State_

Ini adalah objek yang mengkapsulasi nilai-nilai Status dan perilaku yang terkait dengan Status tersebut.

_Context_

Ini adalah objek yang menjaga referensi ke objek State yang menentukan Status saat ini. Ini juga mencakup antarmuka yang memungkinkan objek State lain untuk mengubah Status saat ini menjadi Status yang berbeda.

## 8.2. Manfaat dari State

**Kode yang Modular dan Terorganisir**

Setiap State dikapsulkan dalam kelasnya sendiri, membuat kode menjadi modular dan mudah dikelola.

**Tidak Perlu Pernyataan Switch yang Panjang**

Pernyataan switch juga dapat digunakan untuk mengubah perilaku objek, tetapi masalah dengan metode ini adalah pernyataan switch bisa menjadi sangat panjang saat proyek Anda berkembang. Pola State memperbaiki masalah ini.

**Mempromosikan Dapat Digunakan Kembali**

Status dapat digunakan kembali di berbagai konteks, ini mengurangi duplikasi kode.

**Membuat Pengujian Lebih Sederhana**

Menguji kelas status individual secara terisolasi lebih mudah dan efektif daripada menguji objek monolitik dengan logika kondisional yang kompleks.

## 8.3. Contoh

```javascript
class Car {
  constructor() {
    this.state = new ParkState();
  }

  setState(state) {
    this.state = state;
    console.log(`Mengganti status menjadi: ${state.constructor.name}`);
  }

  park() {
    this.state.park(this);
  }

  drive() {
    this.state.drive(this);
  }

  reverse() {
    this.state.reverse(this);
  }
}
class ParkState {
  park(car) {
    console.log("Mobil sudah berada dalam Posisi Parkir");
  }

  drive(car) {
    console.log("Beralih ke Posisi Drive");
    car.setState(new DriveState());
  }

  reverse(car) {
    console.log("Beralih ke Posisi Reverse");
    car.setState(new ReverseState());
  }
}

class DriveState {
  park(car) {
    console.log("Beralih ke Posisi Parkir");
    car.setState(new ParkState());
  }

  drive(car) {
    console.log("Mobil sudah berada dalam Posisi Drive");
  }

  reverse(car) {
    console.log("Beralih ke Posisi Reverse");
    car.setState(new ReverseState());
  }
}

class ReverseState {
  park(car) {
    console.log("Beralih ke Posisi Parkir");
    car.setState(new ParkState());
  }

  drive(car) {
    console.log("Beralih ke Posisi Drive");
    car.setState(new DriveState());
  }

  reverse(car) {
    console.log("Mobil sudah berada dalam Posisi Reverse");
  }
}

// Contoh penggunaan
const car = new Car();

car.drive();
car.reverse();
car.drive();
car.park();
car.drive(); // Mencoba untuk mengemudi saat diparkir
```

## 9. Strategy

Pola Strategy pada dasarnya adalah pola desain yang memungkinkan Anda memiliki sekelompok algoritma (strategi) yang dapat dipertukarkan.

## 9.1. Komponen dari Strategy

_Strategi_

Ini adalah algoritma yang mengimplementasikan antarmuka Strategi.

_Konteks_

Ini adalah objek yang menjaga referensi ke Strategi saat ini. Ini mendefinisikan antarmuka yang memungkinkan klien untuk mengubah Strategi saat ini menjadi Strategi yang berbeda atau mengambil perhitungan dari Strategi saat ini yang dirujuk.

## 9.2. Manfaat dari Strategy

**Algoritma yang Dapat Dipertukarkan Secara Dinamis**

Strategi dapat ditukar saat runtime, memungkinkan pemilihan dinamis algoritma berdasarkan kondisi atau persyaratan yang berbeda. Hal ini sangat berguna ketika algoritma yang tepat dapat bervariasi berdasarkan masukan pengguna, pengaturan konfigurasi, atau faktor lainnya.

**Fleksibilitas dan Pemeliharaan**

Strategi dapat diubah atau diperluas tanpa mengubah konteks yang menggunakannya. Ini membuat sistem lebih fleksibel dan lebih mudah dikelola karena perubahan dalam satu strategi tidak memengaruhi yang lain.

**Membuat Pengujian Lebih Sederhana**

Menguji strategi secara terisolasi lebih mudah karena setiap strategi adalah kelas terpisah. Ini memungkinkan pengujian yang terfokus dan memastikan bahwa perubahan dalam satu strategi tidak secara tidak sengaja memengaruhi yang lain.

**Dapat Digunakan Kembali**

Strategi dapat digunakan kembali dalam berbagai konteks atau aplikasi, mempromosikan penggunaan kode dan mengurangi duplikasi.

## 9.3. Contoh

```javascript
class RegularCustomerStrategy {
  calculatePrice(bookPrice) {
    // Pelanggan reguler mendapatkan diskon tetap 10%
    return bookPrice * 0.9;
  }
}

class VIPCustomerStrategy {
  calculatePrice(bookPrice) {
    // Pelanggan VIP mendapatkan diskon tetap 20%
    return bookPrice * 0.8;
  }
}

class TokoBuku {
  constructor(pricingStrategy) {
    this.pricingStrategy = pricingStrategy;
  }

  aturStrategiHarga(pricingStrategy) {
    this.pricingStrategy = pricingStrategy;
  }

  hitungHarga(hargaBuku) {
    return this.pricingStrategy.hitungHarga(hargaBuku);
  }
}

// Usage
const regularCustomerStrategy = new RegularCustomerStrategy();
const vipCustomerStrategy = new VIPCustomerStrategy();

const bookstore = new BookStore(regularCustomerStrategy);
console.log("Harga pelanggan reguler:", tokoBuku.hitungHarga(50)); // Output: 45 (diskon 10%)
tokoBuku.aturStrategiHarga(new VIPCustomerStrategy());
console.log("Harga pelanggan VIP:", tokoBuku.hitungHarga(50)); // Output: 40 (diskon 20%)
```

## 10. Template Method

Pola Template Method adalah pola desain perilaku yang mendefinisikan kerangka program dari sebuah algoritma dalam sebuah metode, namun memungkinkan subclass mengganti langkah-langkah spesifik dari algoritma tanpa mengubah strukturnya.

## 10.1. Komponen dari Template Method

_Kelas Abstrak_

Kelas abstrak adalah template untuk algoritma. Ini mendefinisikan antarmuka yang dapat diakses oleh klien untuk memanggil metodenya. Ini juga berisi semua fungsi yang dapat digantikan oleh subclass.

_Kelas Konkrit_

Mengimplementasikan langkah-langkah sebagaimana yang didefinisikan dalam Kelas Abstrak dan dapat membuat perubahan pada langkah-langkah tersebut.

## 10.2. Manfaat dari Template Method

**Penggunaan Kembali Kode**

Pola ini mempromosikan penggunaan kembali kode dengan mendefinisikan kerangka algoritma dalam kelas dasar. Subclass dapat menggunakan struktur ini dan hanya perlu memberikan implementasi untuk langkah-langkah tertentu.

**Pemeliharaan yang Mudah**

Membuat perubahan pada algoritma menjadi lebih sederhana karena modifikasi hanya perlu dilakukan di satu tempat, yaitu metode template dalam kelas abstrak, daripada di beberapa subclass. Ini mengurangi peluang kesalahan dan memudahkan pemeliharaan.

**Ekstensi dan Variasi**

Pola ini memungkinkan ekstensi dan variasi algoritma dengan mudah. Subclass dapat mengganti langkah-langkah tertentu untuk memberikan implementasi kustom, efektif memperluas atau mengubah perilaku algoritma tanpa mengubah struktur inti.

**Aliran Kontrol**

Metode template mendefinisikan aliran kontrol algoritma, membuatnya lebih mudah dikelola dan memahami urutan operasi dalam algoritma.

## 10.3. Contoh

```javascript
class Camera {
  // Metode template yang mendefinisikan langkah-langkah umum untuk mengambil foto
  capturePhoto() {
    this.turnOn();
    this.initialize();
    this.setExposure();
    this.capture();
    this.turnOff();
  }

  // Langkah-langkah umum untuk menyalakan kamera
  turnOn() {
    console.log("Menyalakan kamera");
  }

  // Metode abstrak untuk menginisialisasi kamera (akan di-override oleh subclass)
  initialize() {
    throw new Error(
      "Metode abstrak: initialize() harus diimplementasikan oleh subclass"
    );
  }

  // Metode abstrak untuk mengatur eksposur (akan di-override oleh subclass)
  setExposure() {
    throw new Error(
      "Metode abstrak: setExposure() harus diimplementasikan oleh subclass"
    );
  }

  // Langkah-langkah umum untuk mengambil foto
  capture() {
    console.log("Mengambil foto");
  }

  // Langkah-langkah umum untuk mematikan kamera
  turnOff() {
    console.log("Mematikan kamera");
  }
}

class KameraDSLR extends Camera {
  initialize() {
    console.log("Menginisialisasi kamera DSLR");
  }

  setExposure() {
    console.log("Mengatur eksposur untuk kamera DSLR");
  }
}

class KameraMirrorless extends Camera {
  initialize() {
    console.log("Menginisialisasi kamera mirrorless");
  }

  setExposure() {
    console.log("Mengatur eksposur untuk kamera mirrorless");
  }
}

// Penggunaan
const kameraDSLR = new KameraDSLR();
console.log("Mengambil foto dengan kamera DSLR:");
kameraDSLR.capturePhoto();
console.log("");

const kameraMirrorless = new KameraMirrorless();
console.log("Mengambil foto dengan kamera mirrorless:");
kameraMirrorless.capturePhoto();
```

## 11. Visitor

Pola desain Visitor adalah pola desain perilaku yang memungkinkan Anda memisahkan algoritma atau operasi dari objek yang dioperasikan.

## 11.1. Komponen dari Visitor

_ObjectStructure_

Menjaga koleksi Elemen yang dapat diiterasi.

_Elemen_

Elemen berisi metode accept yang menerima objek visitor.

_Visitor_

Mengimplementasikan metode visit di mana argumen metode adalah elemen yang sedang dikunjungi. Inilah cara perubahan pada elemen dilakukan.

## 11.2. Manfaat dari Visitor

**Prinsip Terbuka/Tertutup**

Pola ini sejalan dengan Prinsip Terbuka/Tertutup, yang menyatakan bahwa entitas perangkat lunak (kelas, modul, fungsi) harus terbuka untuk ekstensi tetapi tertutup untuk modifikasi. Anda dapat memperkenalkan operasi baru (visitor baru) tanpa mengubah struktur objek atau elemen yang ada.

**Dapat Diperluas**

Anda dapat memperkenalkan perilaku atau operasi baru dengan menambahkan implementasi visitor baru tanpa mengubah elemen atau struktur objek yang ada. Ini membuat sistem lebih dapat diperluas, memungkinkan penambahan fitur atau perilaku baru dengan mudah.

**Perilaku yang Terpusat**

Pola Visitor memusatkan kode terkait perilaku dalam kelas-kelas visitor. Setiap visitor mengkapsulasi perilaku tertentu, yang dapat digunakan kembali di berbagai elemen, mempromosikan penggunaan kode kembali dan modularitas.

**Konsistensi dalam Operasi**

Dengan pola Visitor, Anda dapat memastikan bahwa operasi tertentu (metode visitor) diterapkan secara konsisten di berbagai elemen, karena metode accept setiap elemen memanggil metode visitor yang sesuai untuk jenis elemen tersebut.

## 11.3. Contoh

```javascript
class GymMember {
  constructor(name, subscriptionType, fitnessScore) {
    this.name = name;
    this.subscriptionType = subscriptionType;
    this.fitnessScore = fitnessScore;
  }

  accept(visitor) {
    visitor.visit(this);
  }

  getName() {
    return this.name;
  }

  getSubscriptionType() {
    return this.subscriptionType;
  }

  getFitnessScore() {
    return this.fitnessScore;
  }

  setFitnessScore(score) {
    this.fitnessScore = score;
  }
}

class FitnessEvaluation {
  visit(member) {
    member.setFitnessScore(member.getFitnessScore() + 10);
  }
}

class DiskonKeanggotaan {
  visit(member) {
    if (member.getSubscriptionType() === "Premium") {
      console.log(
        `${member.getName()}: Skor Kebugaran - ${member.getFitnessScore()}, Jenis Keanggotaan - ${member.getSubscriptionType()}, Berhak atas diskon 10%!`
      );
    } else {
      console.log(
        `${member.getName()}: Skor Kebugaran - ${member.getFitnessScore()}, Jenis Keanggotaan - ${member.getSubscriptionType()}, Tidak berhak atas diskon.`
      );
    }
  }
}

function jalankan() {
  const anggotaGym = [
    new AnggotaGym("Alice", "Basic", 80),
    new AnggotaGym("Bob", "Premium", 90),
    new AnggotaGym("Eve", "Basic", 85),
  ];

  const evaluasiKebugaran = new EvaluasiKebugaran();
  const diskonKeanggotaan = new DiskonKeanggotaan();

  for (let i = 0; i < anggotaGym.length; i++) {
    const anggota = anggotaGym[i];

    anggota.accept(evaluasiKebugaran);
    anggota.accept(diskonKeanggotaan);
  }
}

run();
```

---
