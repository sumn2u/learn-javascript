---
chapter: 6
pageNumber: 60 
description:  El método Javascript arr.slice() devuelve una nueva matriz que contiene una parte de la matriz en la que se implementa. El original permanece sin cambios.
---
# Slice

El método `slice` acepta dos parametros inicio y fin.

* **inicio**: Este parámetro define el índice inicial desde donde la porción va a ser extraída.
  Si este argumento se pierde entonces el método tomca como inicio el `0` como valor de inicio por defecto.

* **final**: Este parámetro es el índice hasta el cual se extraerá la porción (excluyendo el índice final).
  Si este argumento no está definido, entonces se extrae la matriz hasta el final, ya que es el valor final predeterminado. Si el valor final es mayor que la longitud de la matriz, entonces el valor final cambia a la longitud de la matriz.

```javascript
function func() {
    //Matriz original
    let arr = [23, 56, 87, 32, 75, 13];
    //Matrix extraído
    let nuevo_arr = arr.slice();
    console.log(arr);
    console.log(nuevo_arr);
}
func();


// RESULTADO: 
[23,56,87,32,75,13]
[23,56,87,32,75,13]
```

El método `slice()` copia las referencias de objetos a la nueva matriz.
(Por ejemplo, una matriz anidada). Entonces, si se modifica el objeto al que se hace referencia, los cambios son visibles en la nueva matriz devuelta.

```javascript
let humano = {
  nombre: "David",
  edad: 23,
};

let arr = [humano, "Nepal", "Gestor"];
let nuevo_arr = arr.slice();

// objeto original
console.log(arr[0]); // { nombre: 'David', edad: 23 }

// hacemos cambios al objeto en la nueva matriz
nuevo_arr[0].nombre = "Levy";

// los cambios se ven reflejados
console.log(arr[0]); // { nombre: 'Levy', edad: 23 }
```
