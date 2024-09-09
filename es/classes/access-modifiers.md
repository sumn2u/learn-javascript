---
chapter: 15
pageNumber: 127
description: Los modificadores de acceso controlan la visibilidad y accesibilidad de los miembros de la clase (propiedades y métodos). public, private y protected son los tres modificadores de acceso utilizados en clase para controlar su acceso desde el exterior. De forma predeterminada, todos los miembros (propiedades, campos, métodos o funciones) son accesibles públicamente desde fuera de la clase.
---
# Modificadores de acceso

`public`, `private`, y `protected` son los tres modificadores de acceso utilizados en clase para controlar su acceso desde el exterior. De forma predeterminada, todos los miembros (propiedades, campos, métodos o funciones) son accesibles públicamente desde fuera de la clase.

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

Los miembros `privados` sólo pueden accederse internamente dentro de la clase y no pueden ser accesibles desde fuera. Los elementos de la clase privados deben comenzar con el carácter de la almohadilla: `#`.

```javascript
class Coche {
  constructor(nombre) {
    this.nombre = nombre;
  }
  static hola(x) {
    return "Hola " + x.nombre;
  }
  #presenta(nombrecoche) {
    return 'Tengo un ' + this.nombrecoche;
  }
}
let miCoche = new Coche("Toyota");
console.log(miCoche.#presenta("Camry")); // Error
console.log(Coche.hola(miCoche)); // Hola Toyota
```

Solo se puede acceder a los campos `protected` (protegidos, en español) desde dentro de la clase y desde aquellos que la extienden. Estos son útiles para la interfaz interna ya que la clase heredera también obtiene acceso a la clase principal. Los elementos de la clase protegidos deben comenzar con el carácter del subrayado: `_`.

```javascript
class Coche {
  constructor(marca) {
    this.nombrecoche = marca;
  }
  _presenta() {
    return 'Tengo un ' + this.nombrecoche;
  }
}

class Modelo extends Coche {
  constructor(marca, modelo) {
    super(marca);
    this.modelo = modelo;
  }
  muestra() {
    return this._presenta() + ', es un ' + this.modelo;
  }
}
let miCoche = new Modelo("Toyota", "Camry");
```
