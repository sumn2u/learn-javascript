---
chapter: 19
pageNumber: 148
description: La lista enlazada es una estructura de datos lineal que se utiliza para almacenar una colección de elementos, llamados nodos. Cada nodo en una lista enlazada contiene dos partes - los datos o el valor del elemento que representa y una referencia (puntero) al siguiente nodo de la secuencia. El último nodo de la lista apunta a nulo, lo que indica el final de la lista.
---
# Lista Enlazada

Es una estructura de datos común que se encuentra en todos los lenguajes de programación. Una lista enlazada es muy similar a una matriz normal en Javascript, solo que actúa un poco diferente.

Aquí cada elemento de la lista es un objeto independiente que contiene un enlace o un puntero al siguiente. No existe un método o función integrado para listas vinculadas en Javascript, por lo que hay que implementarlo. A continuación se muestra un ejemplo de una lista enlazada.

```javascript
["one", "two", "three", "four"]
```

## **Tipos de listas enlazadas**

Hay tres tipos diferentes de listas enlazadas:

1. **Listas enlazadas individualmente:** Cada nodo contiene solo un puntero al siguiente nodo.
2. **Listas doblemente enlazadas:** Hay dos punteros en cada nodo, uno al siguiente nodo y otro al nodo anterior.
3. **Listas enlazadas circulares:** Una lista enlazada circular forma un bucle al hacer que el último nodo apunte al primer nodo o a cualquier otro nodo anterior.

### Agregar (add, en inglés)

El método `agregar` se crea aquí para agregar valor a una lista vinculada.

```javascript
class Nodo {
    constructor(datos) {
        this.datos = datos
        this.siguiente = null 
    }
}

class ListaEnlazada {
    constructor(cabeza) {
        this.cabeza = cabeza 
    }
    agregar = (valor) => {
        const nuevoNodo = new Nodo(valor) 
        let actual = this.cabeza 
        if (!this.cabeza) {
            this.cabeza = nuevoNodo 
            return 
        }
        while (actual.siguiente) {
            actual = actual.siguiente
        }
        actual.siguiente = nuevoNodo
    }
}
```

### Extraer (pop, en inglés)

Aquí, se crea un método `extraer` para eliminar un valor de la lista vinculada.

```javascript
class Nodo {
    constructor(datos) {
        this.datos = datos
        this.siguiente = null 
    }
}

class ListaEnlazada {
    constructor(cabeza) {
        this.cabeza = cabeza 
    }
    extraer = () => {
        let actual = this.cabeza 
        while (actual.siguiente.siguiente) {
            actual = actual.siguiente 
        }
        actual.siguiente = actual.siguiente.siguiente 
    }
}
```

### Anteponer (prepend, en inglés)

Aquí, se crea un método `anteponer` para agregar un valor antes del primer hijo de la lista vinculada.

```javascript
class Nodo {
    constructor(datos) {
        this.datos = datos
        this.siguiente = null 
    }
}

class ListaEnlazada {
    constructor(cabeza) {
        this.cabeza = cabeza 
    }
    anteponer = (valor) => {
        const nuevoNodo = new Nodo(valor)
        if (!this.cabeza) {
            this.cabeza = nuevoNodo 
        }
        else {
            nuevoNodo.siguiente = this.cabeza 
            this.cabeza = nuevoNodo 
        }
    }
}
```

### EliminarPrimero (shift, en inglés)

Aquí, se crea el método `eliminarPrimero` para eliminar el primer elemento de la Lista Enlazada.

```javascript
class Nodo {
    constructor(datos) {
        this.datos = datos
        this.siguiente = null 
    }
}

class ListaEnlazada {
    constructor(cabeza) {
        this.cabeza = cabeza 
    }
    eliminarPrimero = () => {
        this.cabeza = this.cabeza.siguiente 
    }
}
```
