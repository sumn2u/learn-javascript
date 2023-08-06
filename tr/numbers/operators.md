---
chapter: 3
pageNumber: 19
---

# Basic Operators (Temel operatörler)

Sayılar üzerinde matematiksel işlemler, aşağıdaki gibi bazı temel operatörler kullanılarak gerçekleştirilebilir:

- **Toplama operatörü (`+`)**: Toplama operatörü iki sayıyı birbirine ekler. Örneğin:

```javascript
console.log(1 + 2); // 3
console.log(1 + -2); // -1
```

- **Çıkarma operetörü (`-`)**: Çıkarma operatörü bir sayıyı diğerinden çıkarır. Örneğin:

```javascript
console.log(3 - 2); // 1
console.log(3 - -2); // 5
```

- **Çarpma operatörü (`*`)**: Çarpma operatörü iki sayıyı çarpar. Örneğin:

```javascript
console.log(2 * 3); // 6
console.log(2 * -3); // -6
```

- **Bölme operatörü (`/`)**: Bölme operatörü bir sayıyı diğerine böler. Örneğin:

```javascript
console.log(6 / 2); // 3
console.log(6 / -2); // -3
```

- **Remainder (Kalan) operatörü (`%`)**: Kalan operatörü, bir bölme işleminin kalanını döndürür. Örneğin:

```javascript
console.log(10 % 3); // 1
console.log(11 % 3); // 2
console.log(12 % 3); // 0
```

JavaScript yorumlayıcısı soldan sağa doğru çalışır. İfadeleri ayırmak ve gruplamak için matematikte olduğu gibi parantezler kullanılabilir: `c = (a / b) + d`

{% hint style="warning" %}
JavaScript hem toplama hem de birleştirme için `+` operatörü kullanır. Sayılar eklenirken, dizeler (**string**) birleştirilir.
{% endhint %}

`NaN` terimi, bir sayının geçerli bir sayı olmadığını belirten ayrılmış bir sözcüktür; bu, sayısal olmayan bir dizeyle aritmetik yaptığımızda ortaya çıkar ve `NaN` (Not a Number) ile sonuçlanır.

```javascript
let x = 100 / "10";
```

`parseInt` fonksiyonu bir değeri bir dize olarak çözümleyip ilk tamsayıyı döndürür.

```javascript
parseInt("10"); // 10
parseInt("10.00"); // 10
parseInt("10.33"); // 10
parseInt("34 45 66"); // 34
parseInt(" 60 "); // 60
parseInt("40 years"); //40
parseInt("He was 40"); //NaN
```

JavaScript'te, mümkün olan en büyük sayının dışında bir sayı hesaplarsak `Infinity` döndürür.

```javascript
let x = 2 / 0; // Infinity
let y = -2 / 0; // -Infinity
```

{% exercise %}
Matematik operatörleri +, -, \*, / ve %'yi kullanarak `num1` ve `num2` üzerinde aşağıdaki işlemleri gerçekleştirin.
{% initial %}

let num1 = 10;
let num2 = 5;

// num1 ile num2'yi toplayın.
let addResult =
// num2'den, num1'i çıkartın.
let subtractResult =
// num1 ile num2'yi çarpın.
let multiplyResult =
// num1 ile num2'yi bölün.
let divideResult =
// Num1'in num2'ye bölümünden kalanı bulun.
let reminderResult =

{% solution %}
let num1 = 10;
let num2 = 5;

// Add num1 and num2.
let addResult = (num1 + num2);
// Subtract num2 from num1.
let subtractResult = (num1 - num2);
// Multiply num1 and num2.
let multiplyResult = (num1 \* num2);
// Divide num1 by num2.
let divideResult = (num1 / num2);
// Find the remainder num1 is divided by num2.
let reminderResult = (num1 % num2);

{% validation %}
assert(addResult === 15 && subtractResult === 5 && multiplyResult === 50 && divideResult === 2 && reminderResult === 0 );

{% context %}
{% endexercise %}
