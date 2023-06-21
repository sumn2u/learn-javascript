---
chapter: 15
pageNumber: 76
---

# Static (Statik)

`static`anahtar kelimesi, bir sınıf için statik yöntemleri veya özellikleri tanımlar. Bu yöntemler ve özellikler, sınıfın içinde çağrılır.&#x20;

```javascript
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello " + x.name;
  }
}
let myCar = new Car("Toyota");

console.log(myCar.hello()); // Hata verir
console.log(Car.hello(myCar));
// Sonuç: Hello Toyota
```

{% hint style="info" %}
Aynı sınıfın başka bir statik yönteminin statik yöntemine veya özelliğine `this` anahtar sözcüğü kullanılarak erişilebilir;
{% endhint %}
