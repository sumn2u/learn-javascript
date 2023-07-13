---
chapter: 4
pageNumber: 25
---

# Creation (Oluşturma)

Dizeler, metni tek veya çift tırnak içine alarak tanımlanabilir:

```javascript
// Tek tırnak kullanılabilir
let str = "Our lovely string";

// Çift tırnak da kullanılabilir
let otherStr = "Another nice string";
```

JavaScript'te, dizeler UTF-8 karakterleri içerebilir:

```
"中文 español English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어";
```

Ayrıca, `String` yapıcı (_constructor_) fonksiyonu kullanılarak bir dize nesnesi oluşturulabilir:

```javascript
const stringObject = new String("This is a string");
```

Ancak, `String` yapıcı (_constructor_) fonksiyonunu dizeler oluşturmak için kullanmak genellikle önerilmez, çünkü bu, primitive (_ilkel_) dizeler ve dize nesneleri arasında kafa karışıklığına neden olabilir. Dizeler oluşturmak için genellikle string literalleri kullanmak daha iyidir.

Şablon literalleri kullanarak da dizeler oluşturulabilir. Şablon literalleri, ters eğik çizgiler (```)` ile sarmalanmış ve değerler için yer tutucular içerebilen dizeler. Yer tutucular, `${}` sözdiziminde gösterilir.

```javascript
const name = "John";
const message = `Hello, ${name}!`;
```

Şablon literalleri birden çok satıra da sahip olabilir ve yer tutucular içinde herhangi bir ifade içerebilir.

{% hint style="warning" %}
Dizeler çıkarılamaz, çarpılamaz veya bölünemez.
{% endhint %}

{% exercise %}
`name` ve `age` değerlerini içeren bir dize oluşturmak için bir şablon literali kullanın. Dizenin formatı şu şekilde olmalıdır: "My name is John and I am 25 years old.".

{% initial %}
let name = "John";
let age = 25;

// My name is John and I am 25 years old.
let result =  
{% solution %}
let name = "John";
let age = 25;

// My name is John and I am 25 years old.
let result = `My name is ${name} and I am ${age} years old.`

{% validation %}
assert(result == "My name is John and I am 25 years old.");

{% context %}
{% endexercise %}
