---
capítulo: 15
número de página: 78
descripción: Los modificadores de acceso controlan la visibilidad y accesibilidad de los miembros de una clase (propiedades y métodos). Los tres modificadores de acceso utilizados en una clase para controlar su acceso desde el exterior son públicos, privados y protegidos. De forma predeterminada, todos los miembros (propiedades, campos, métodos o funciones) son accesibles públicamente desde el exterior de la clase.
---

# Modificadores de Acceso

`public`, `private` y `protected` son los tres modificadores de acceso utilizados en una clase para controlar su acceso desde el exterior. De forma predeterminada, todos los miembros (propiedades, campos, métodos o funciones) son accesibles públicamente desde el exterior de la clase.

```javascript
class Coche {
  constructor(nombre) {
    this.nombre = nombre;
  }
  static hola(x) {
    return "Hola " + x.nombre;
  }
}
let miCoche = new Coche("Toyota");
console.log(Coche.hola(miCoche)); // Hola Toyota
```

Los miembros `private` solo pueden accederse internamente dentro de la clase y no son accesibles desde el exterior. Las propiedades privadas deben comenzar con `#`.


```javascript
class Coche {
  constructor(nombre) {
    this.nombre = nombre;
  }
  static hola(x) {
    return "Hola " + x.nombre;
  }
  #presentar(nombredelcoche) {
    return 'Tengo un ' + this.nombredelcoche;
  }
}
let miCoche = new Coche("Toyota");
console.log(miCoche.#presentar("Camry")); // Error
console.log(Coche.hola(miCoche)); // Hola Toyota
```

Los campos `protected` solo son accesibles desde dentro de la clase y desde las clases que la extienden. Son útiles para la interfaz interna, ya que la clase que hereda también gana acceso a la clase principal. Los campos protegidos utilizan `_`.

```javascript
class Coche {
  constructor(marca) {
    this.nombredelcoche = marca;
  }
  _presentar() {
    return 'Tengo un ' + this.nombredelcoche;
  }
}

class Modelo extends Coche {
  constructor(marca, mod) {
    super(marca);
    this.modelo = mod;
  }
  mostrar() {
    return this._presentar() + ', es un ' + this.modelo;
  }
}
let miCoche = new Modelo("Toyota", "Camry");
console.log(miCoche.mostrar()) // Tengo un Toyota, es un Camry
```
