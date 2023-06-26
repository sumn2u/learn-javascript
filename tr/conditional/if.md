---
chapter: 5
pageNumber: 30
---

# If

En basit koşul ifadesi "if" ifadesidir ve sözdizimi (_syntax_) `if (koşul) { bunu yap ... }` şeklindedir. Koşul, süslü parantezlerin içindeki kodun yürütülmesi için doğru (_true_) olmalıdır. Örneğin, aşağıda açıklandığı gibi bir dizeyi test edebilir ve değerine bağlı olarak başka bir dizenin değerini ayarlayabilirsiniz.

```javascript
let country = "France";
let weather;
let food;
let currency;

if (country === "England") {
  weather = "horrible";
  food = "filling";
  currency = "pound sterling";
}

if (country === "France") {
  weather = "nice";
  food = "stunning, but hardly ever vegetarian";
  currency = "funny, small and colourful";
}

if (country === "Germany") {
  weather = "average";
  food = "wurst thing ever";
  currency = "funny, small and colourful";
}

let message =
  "this is " +
  country +
  ", the weather is " +
  weather +
  ", the food is " +
  food +
  " and the " +
  "currency is " +
  currency;

console.log(message);
// 'this is France, the weather is nice, the food is stunning, but hardly ever vegetarian and the currency is funny, small and colourful'
```

{% hint style="info" %}
Koşullar aynı zamanda iç içe de olabilir.
{% endhint %}
