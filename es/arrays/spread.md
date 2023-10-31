---
chapter: 6
pageNumber: 40  
description: El operador Spread permite que una matriz u objeto manipule rápidamente matrices y objetos. Proporciona una sintaxis concisa para copiar, fusionar o extraer elementos de matrices y para copiar propiedades de objetos.
---
# Spread

Una matriz u objeto se puede copiar rápidamente en otra matriz u objeto utilizando el operador de extensión `(...)`. Permite expandir un iterable, como una matriz, en lugares donde se esperan cero o más argumentos (para llamadas a funciones) o elementos (para literales de matriz), o expandir una expresión de objeto en lugares donde cero o más pares clave-valor. (para literales de objetos) se esperan.

A continuación se muestran algunos ejemplos de ello:

```javascript
let arr = [1, 2, 3, 4, 5]; 

console.log(...arr); 
// Resultado: 1 2 3 4 5

let arr1;
arr1 = [...arr]; //copia arr a arr1 

console.log(arr1);    //Resultado: [1, 2, 3, 4, 5]

arr1 = [6,7];
arr = [...arr,...arr1];

console.log(arr);   //Resultado: [1, 2, 3, 4, 5, 6, 7]

```

{% hint style="warning" %}
El operador de propagación solo funciona en navegadores modernos que admiten esta función. Si necesita admitir navegadores más antiguos, deberá utilizar un transpilador como Babel para convertir la sintaxis del operador de extensión a código ES5 equivalente.
{% endhint %}
