---
layout: editorial
chapter: 3
pageNumber: 16
---

# Bölüm 3

# Numbers (Sayılar)

JavaScript **sadece tek bir sayı türüne** sahiptir - 64 bit float point. Java'daki `double` ile aynıdır.
Diğer programlama dillerinin çoğundan farklı olarak, ayrı bir tamsayı türü yoktur, bu nedenle 1 ve 1.0 aynı değerdir. Bir sayı oluşturmak kolaydır, `var` anahtar sözcüğü kullanılarak diğer değişken türlerinde olduğu gibi yapılabilir.

Sayılar sabit bir değerden oluşturulabilir:

```javascript
// This is a float:
let a = 1.2;

// This is an integer:
let b = 10;
```

Veya başka bir değişkenin değerinden:

```javascript
let a = 2;
let b = a;
```

Tam sayılar 15 basamağa kadar tam olarak doğru bir şekilde temsil edilebilir. Ancak, 16 veya daha fazla basamaklı bir tam sayı tanımlamaya çalıştığınızda, JavaScript bu sayıyı yakınsama (approximation) yöntemiyle temsil etmeye başlar.

```javascript
let x = 999999999999999; // x'in değeri 999999999999999 olacak.
let y = 9999999999999999; // y'nin değeri 10000000000000000 olacak.
```

Sayıların önünde `0x` varsa **hexadecimal** formatta kullanılırlarr.

```javascript
let z = 0xff; // 255
```
