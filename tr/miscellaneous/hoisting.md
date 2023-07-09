---
chapter: 19
pageNumber: 94
---

# Hoisting

Hosting, JavaScript'te tanımlamaları en üste taşımak için varsayılan bir davranıştır. Bir kod yürütülürken, global bir yürütme bağlamı oluşturur: oluşturma ve yürütme. Oluşturma aşamasında, JavaScript değişken ve işlev tanımlamalarını sayfanın en üstüne taşır, bu da hoisting olarak bilinir.&#x20;

```javascript
// değişken hoisting
console.log(counter);
let counter = 1; // "ReferenceError: Cannot access 'counter' before initialization" hatası verir
```

Her ne kadar `counter` değişkeni bellekte mevcut olsa da değişken ilk değerini almadığı için hata veriyor. Bunun nedeni, `counter` değişkeninin burada sayfanın yukarısına çekilmesidir.&#x20;

<pre class="language-javascript"><code class="lang-javascript"><strong>// function hoisting
</strong><strong>const x = 20,
</strong>    y = 10;

let result = add(x,y); // ❌ Uncaught ReferenceError: add is not defined
console.log(result);

let add = (x, y) => x + y; 
</code></pre>

Burada, `add` işlevi, global yürütme bağlamının oluşturulması aşamasında bellekte `undefined` ile başlatılır ve yukarı çekilir. Böylece, bir hata atılır.&#x20;
