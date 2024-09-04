---
chapter: 15
pageNumber: 96
description: La herencia se refiere a la capacidad de un objeto (subclase) de heredar propiedades y métodos de otro objeto (superclase). JavaScript admite la herencia de prototipos, lo que significa que los objetos pueden heredar propiedades y métodos directamente de otros objetos, lo que se conoce como prototipos.
---
# Herencia

La herencia es útil para fines de reutilización del código, ya que amplía las propiedades y métodos existentes de una clase. La palabra clave `extends` se utiliza para crear una herencia de clase.

```javascript
class Vehiculo {
  constructor(marca) {
    this.nombrecoche = marca;
  }
  presentar() {
    return 'Tengo un ' + this.nombrecoche;
  }
}

class Modelo extends Vehiculo {
  constructor(marca, mod) {
    super(marca);
    this.modelo = mod;
  }
  mostrar() {
    return this.presentar() + ', es un ' + this.modelo;
  }
}

let miCoche = new Modelo("Toyota", "Camry");
console.log(miCoche.mostrar()); // Tengo un Toyota, es un Camry
```

{% hint style="info" %}
El prototipo de la clase padre debe ser un `Object` o `null`.
{% endhint %}

El método `super` se utiliza dentro de un constructor y hace referencia a la clase padre. Con esto, se puede acceder a las propiedades y métodos de la clase padre. En el ejemplo anterior, usamos `super(marca)` en la subclase `Modelo` para que pueda obtener las propiedades de la superclase `Coche`.

{% hint style="info" %}
Las superclases son las clases principales utilizadas, mientras que las subclases son clases que se extienden a partir de las superclases.
{% endhint %}
