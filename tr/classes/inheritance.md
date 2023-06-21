---
chapter: 15
pageNumber: 77
---

# Inheritance (Kalıtım - Miras)

Kalıtım, bir sınıfın mevcut özelliklerini ve yöntemlerini genişlettiği için kodun yeniden kullanılabilirliği açısından yararlıdır. Bir sınıf kalıtımı oluşturmak için `extends` anahtar sözcüğü kullanılır. &#x20;

```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

let myCar = new Model("Toyota", "Camry");
console.log(myCar.show()); // I have a Camry, it is a Toyota.
```

{% hint style="info" %}
Üst sınıfın prototipi bir `Object` veya `null` olmalıdır.&#x20;
{% endhint %}

`super` yöntemi bir constructor(yapıcının) içinde kullanılır ve üst sınıfa atıfta bulunur. Bu sayede, ana sınıfın özelliklerine ve metodlarına erişilebilir.
