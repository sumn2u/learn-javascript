---
chapter: 7
pageNumber: 71
description: Una declaración break se utiliza para salir de un bucle siempre que se cumple una condición específica.
---

# Break

El bucle finaliza cuando la condición especificada para el bucle se vuelve falsa. Sin embargo, podemos finalizar cualquier bucle de manera forzada mediante la declaración `break`.

## Sintaxis

La sintaxis de `break` en JavaScript se muestra a continuación

```javascript
for (inicializacion; condicion finalizacion; cambio) {
    if(condicionParaRomper){
        break;
    }
}
```

## Explicación

- Dentro del bucle for, siempre que se cumpla la condición `condicionParaRomper`, el control llega fuera del bucle for y el bucle finaliza.

## Ejemplo

- Supongamos que tenemos una matriz de números y necesitamos imprimir la primera aparición de un número divisible por 5. Podemos usar la declaración `break` para lograr esto:

```javascript
const arr = [4, 7, 9, 11, 45, 23, 15, 87];

for(let i = 0; i < arr.length; i++){
    if(arr[i]%5 == 0){
        console.log(arr[i]);
        break;
    }
}
// Este código imprimirá 45, que es la primera aparición de un número divisible por 5.
```

- La declaración `break` también se puede utilizar dentro del bucle `while`.

```javascript
const arr = [4, 7, 9, 11, 45, 23, 15, 87];
let i = 0;
while(i < arr.length){
    if(arr[i]%5 == 0){
        console.log(arr[i]);
        break;
    }
    i++;
}
// Este código también imprimirá 45, que es la primera aparición de un número divisible por 5.
```
