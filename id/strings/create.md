---
bab: 4
nomor halaman: 25
---

# Creation

String dapat didefinisikan dengan mengapit teks dengan tanda kutip tunggal atau tanda kutip ganda:

```javascript
// Anda dapat menggunakan tanda kutip tunggal
let str = "String kita yang indah";

// Dan juga tanda kutip ganda
let otherStr = "String lain yang bagus";
```

Dalam Javascript, String dapat berisi karakter UTF-8:

```
"中文 español English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어";
```

Anda juga dapat menggunakan konstruktor `String` untuk membuat objek string:

```javascript
const stringObject = new String("Ini adalah string");
```

Namun, umumnya tidak disarankan untuk menggunakan konstruktor `String` untuk membuat string, karena hal ini dapat menyebabkan kebingungan antara string primitif dan objek string. Lebih baik menggunakan literal string untuk membuat string.

Anda juga dapat menggunakan literal template untuk membuat string. Literal template adalah string yang diapit oleh backtick (` `) dan dapat berisi placeholder untuk nilai. Placeholder ditandai dengan sintaks `` `${}` ``.

```javascript
const name = "John";
const message = `Halo, ${name}!`;
```

Literal template juga dapat berisi beberapa baris dan dapat mencakup ekspresi apa pun di dalam placeholder.

{% hint style="warning" %}
String tidak dapat dikurangkan, dikalikan, atau dibagi.
{% endhint %}
