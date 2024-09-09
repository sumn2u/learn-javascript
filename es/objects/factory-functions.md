---
chapter: 9
pageNumber: 101
description: Comprensión de las funciones factoría para objetos en JavaScript.
---

# Comprensión de las funciones factoría para objetos en JavaScript

Las funciones de factoría son funciones que crean y devuelven objetos. Ofrecen una forma flexible de crear múltiples instancias de objetos sin utilizar la palabra clave `new` ni funciones constructoras.

## Definición de una función factoría

Una función factoría es una función normal que devuelve un objeto. Puede incluir parámetros para personalizar las propiedades del objeto creado.

## Ejemplo de una función factoría

He aquí un ejemplo básico de una función factoría:

```javascript
function creaPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido,
        obtenNombreCompleto: function() {
            return `${this.nombre} ${this.apellido}`;
        }
    };
}

const persona1 = creaPersona("Juan", "Pérez");
const persona2 = creaPersona("Juana", "Herrera");

console.log(persona1.obtenNombreCompleto()); // Salida: 'Juan Pérez'
console.log(persona2.obtenNombreCompleto()); // Salida: 'Juana Herrera'
```

En este ejemplo, la función `creaPersona` devuelve un nuevo objeto con propiedades `nombre`, `apellido` y `obtenNombreCompleto`.

## Ventajas de las funciones factoría

1. **Sin palabra clave `new`: Las funciones factoría no requieren la palabra clave `new`, lo que las hace más simples y menos propensas a errores.
2. **Encapsulación**: Las funciones factoría pueden encapsular variables y métodos privados.
3. **Flexibilidad**: Pueden devolver diferentes tipos de objetos según las condiciones.

## Encapsulación con funciones factoría

Las funciones factoría pueden encapsular datos privados definiendo variables dentro del alcance de la función y devolviendo un objeto con métodos que acceden a esas variables.

```javascript
function creaContador() {
    let cuenta = 0;
    return {
        incrementa: function() {
            cuenta++;
            return cuenta;
        },
        decrementa: function() {
            cuenta--;
            return cuenta;
        },
        dameCuenta: function() {
            return cuenta;
        }
    };
}

const contador = creaContador();
console.log(contador.incrementa()); // Salida: 1
console.log(contador.dameCuenta()); // Salida: 1
console.log(contador.decrementa()); // Salida: 0
```

## Devolviendo objetos diferentes

Las funciones factoría pueden devolver diferentes objetos según las condiciones, lo que proporciona flexibilidad en la creación de objetos.

```javascript
function creaForma(tipo) {
    if (tipo === "circulo") {
        return {
            tipo: "circulo",
            radio: 10,
            obtenArea: function() {
                return Math.PI * this.radio * this.radio;
            }
        };
    } else if (tipo === "cuadrado") {
        return {
            tipo: "cuadrado",
            lado: 10,
            obtenArea: function() {
                return this.lado * this.lado;
            }
        };
    }
}

const circulo = creaForma("circulo");
const cuadrado = creaForma("cuadrado");

console.log(circulo.obtenArea()); // Salida: 314.1592653589793
console.log(cuadrado.obtenArea()); // Salida: 100```

## Conclusión

Las funciones factoría son una forma potente y flexible de crear objetos en JavaScript. Ofrecen ventajas como evitar la palabra clave `new`, encapsular datos privados y devolver distintos tipos de objetos en función de condiciones. Al utilizar funciones de fábrica, puede escribir código más modular y fácil de mantener.
