---
layout: editorial
chapter: 15
pageNumber: 75
---

# Bölüm 15

# Classes (Sınıflar)

Sınıflar, bir nesne oluşturmak için kullanılan şablonlardır. Veriler üzerinde çalışmak için verileri kod ile kapsüller (_encapsulation_). Bir sınıf oluşturmak için `class` anahtar sözcüğü kullanılır. Ve bir sınıfla oluşturulan bir objeyi oluşturmak ve başlatmak için `constructor` (yapıcı) adı verilen belirli bir method kullanılır. Araba sınıfının bir örneği aşağıda gösterilmiştir:

```javascript
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Toyota", 2021);
console.log(myCar.age()); // 1
```

{% hint style="info" %}
Sınıf, kullanımından önce tanımlanmalıdır.
{% endhint %}

Sınıf gövdesinde, yöntemler veya constructors (yapıcılar) tanımlanır ve `strict mode`da çalıştırılır. `strict mode` 'a uymayan sözdizimi hataya neden olur.&#x20;
