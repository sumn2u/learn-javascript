---
bab: 16
nomor halaman: 81
keterangan: Pop-up adalah jendela kecil yang muncul di atas peramban utama untuk memberikan informasi. Ini digunakan untuk menampilkan notifikasi, peringatan, dialog, formulir login, atau konten lain yang seharusnya muncul sementara atau dalam konteks terpisah dari halaman utama.
---

# Popup

Pop-up adalah cara tambahan untuk menampilkan informasi, mengonfirmasi pengguna, atau mengambil masukan pengguna dari dokumen tambahan. Sebuah pop-up dapat menavigasi ke URL baru dan mengirim informasi ke jendela pembuka. **Kotak peringatan (Alert box)**, **Kotak konfirmasi (Confirmation box)**, dan **Kotak prompt (Prompt box)** adalah fungsi global di mana kita dapat menampilkan informasi pop-up.

1. **alert()**: Ini menampilkan informasi kepada pengguna dan memiliki tombol "**OK**" untuk melanjutkan.

   ```javascript
   alert("Alert message example");
   ```

2. **confirm()**: Digunakan sebagai dialog box untuk mengonfirmasi atau menerima sesuatu. Ini memiliki tombol "**Ok**" dan "**Batal**" untuk melanjutkan. Jika pengguna mengklik "**Ok**," maka ini mengembalikan `true`, jika mengklik "**Batal**," maka ini mengembalikan `false`.&#x20;

   ```javascript
   let txt;
   if (confirm("Tekan tombol!")) {
     txt = "Anda menekan OK!";
   } else {
     txt = "Anda menekan Batal!";
   }
   ```

3. **prompt()**: Mengambil nilai masukan pengguna dengan tombol "**Ok**" dan "**Batal**". Ini mengembalikan `null` jika pengguna tidak memberikan nilai masukan apa pun.

   ```javascript
   //syntax
   //window.prompt("sometext","defaultText");
   ```

let person = prompt("Silakan masukkan nama Anda", "Harry Potter");

if (person == null || person == "") {
txt = "Pengguna membatalkan prompt.";
} else {
txt = "Halo " + person + "! Bagaimana kabarmu hari ini?";
}

```

```
