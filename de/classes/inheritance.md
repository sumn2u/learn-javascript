---
capítulo: 15
número de página: 77
descripción: La herencia se refiere a la capacidad de un objeto (subclase) de heredar propiedades y métodos de otro objeto (superclase). JavaScript admite la herencia prototípica, lo que significa que los objetos pueden heredar propiedades y métodos directamente de otros objetos, conocidos como prototipos.
---

# Herencia

La herencia es útil con fines de reutilización de código, ya que extiende las propiedades y métodos existentes de una clase. Se utiliza la palabra clave `extends` para crear una herencia de clases.

```javascript
class Coche {
  constructor(marca) {
    this.nombredelcoche = marca;
  }
  presentar() {
    return 'Tengo un ' + this.nombredelcoche;
  }
}

class Modelo extends Coche {
  constructor(marca, mod) {
    super(marca);
    this.modelo = mod;
  }
  mostrar() {
    return this.presentar() + ', es un ' + this.modelo;
  }
}

let miCoche = new Modelo("Toyota", "Camry");
console.log(miCoche.mostrar()); // Tengo un Toyota, es un Camry.
```

{% hint style="info" %}
El prototipo de la clase principal debe ser un Object o null.
{% endhint %}

El método super se utiliza dentro de un constructor y se refiere a la clase principal. Con él, se pueden acceder a las propiedades y métodos de la clase principal.