---
chapter: 18
pageNumber: 91
---

# Async/Await

Async/Await, Promise'leri daha kolay yazmaya yarayan bir JavaScript özelliğidir. `async` anahtar kelimesi, bir Promise döndüren ve `await` sözdizimi, JavaScript'in o Promise'nin çözülmesi ve değerinin döndürülmesini beklemesini sağlar.

```javascript
//async function f
async function f() {
  return 1;
}
// promise being resolved
f().then(alert); // 1
```

Yukarıdaki örnek, aşağıdaki şekilde de yazılabilir:

```javascript
function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
```

`async`, işlevin bir Promise döndürmesini sağlar ve Promise olmayanları ona sarar. `await` ile, JavaScript'in Promise çözülene ve değeri döndürilene kadar beklemesini sağlayabiliriz.&#x20;

```javascript
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Welcome to Learn JavaScript!"), 1000);
  });

  let result = await promise; // wait until the promise resolves (*)
  alert(result); // "Welcome to Learn JavaScript!"
}

f();
```

{% hint style="warning" %}
`await` anahtar kelimesi yalnızca `async` fonksiyonları içinde kullanılabilir.
{% endhint %}
