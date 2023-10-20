```
---
bab: 19
nomor halaman: 98
keterangan: Linked List adalah struktur data linear yang digunakan untuk menyimpan kumpulan elemen, yang disebut node. Setiap node dalam linked list berisi dua bagian, yaitu data atau nilai dari elemen yang diwakili dan referensi (pointer) ke node berikutnya dalam urutan. Node terakhir dalam daftar menunjuk ke null, menandakan akhir dari daftar.

# Linked List

Ini adalah struktur data umum yang ditemukan dalam semua bahasa pemrograman. Linked List sangat mirip dengan array biasa dalam JavaScript, hanya berfungsi sedikit berbeda.

Di sini setiap elemen dalam daftar adalah objek terpisah yang berisi tautan atau pointer ke elemen berikutnya. Tidak ada metode atau fungsi bawaan untuk Linked Lists dalam JavaScript sehingga seseorang harus mengimplementasikannya. Contoh dari linked list ditunjukkan di bawah ini.&#x20;

```

["satu", "dua", "tiga", "empat"]

````

**Jenis-Jenis Linked List**

Ada tiga jenis linked list yang berbeda:

1. **Singly Linked Lists:** Setiap node hanya berisi satu pointer ke node berikutnya.
2. **Doubly Linked Lists:** Ada dua pointer pada setiap node, satu ke node berikutnya dan satu ke node sebelumnya.
3. **Circular Linked Lists:** Circular linked list membentuk lingkaran dengan node terakhir yang menunjuk ke node pertama atau node lain sebelumnya.

# Tambah

Metode `add` dibuat di sini untuk menambahkan nilai ke linked list.

```javascript
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head) {
        this head = head
    }
    append = (value) => {
        const newNode = new Node(value)
        let current = this.head
        if (!this.head) {
            this head = newNode
            return
        }
        while (current.next) {
            current = current.next
        }
        current.next = newNode
    }
}
````

# Hapus

Di sini, metode `pop` dibuat untuk menghapus nilai dari linked list.

```javascript
class Node {
    constructor(data) {
        this data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head) {
        this head = head
    }
    pop = () => {
        let current = this head
        while (current.next.next) {
            current = current.next
        }
        current.next = current.next.next
    }
}
```

# Sisipkan di Depan

Di sini, metode `prepend` dibuat untuk menambahkan nilai sebelum anak pertama dalam linked list.

```javascript
class Node {
    constructor(data) {
        this data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head) {
        this head = head
    }
    prepend = (value) => {
        const newNode = new Node(value)
        if (!this.head) {
            this head = newNode
        }
        else {
            newNode.next = this head
            this head = newNode
        }
    }
}
```

# Geser

Di sini, metode `shift` dibuat untuk menghapus elemen pertama dari Linked List.

```javascript
class Node {
    constructor(data) {
        this data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head) {
        this head = head
    }
    shift = () => {
        this head = this.head.next
    }
}
```
