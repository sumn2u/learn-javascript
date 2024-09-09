---
chapter: 23
pageNumber: 236
layout: editorial
title: Patrones de diseño creacionales
description: Los patrones de diseño creacional se centran en los mecanismos de creación de objetos.
---
# Patrones de diseño creacionales

Los patrones de diseño creacional se centran en los mecanismos de creación de objetos.

## 1. Método Factoría

Una función de factoría es simplemente una función que crea un objeto y lo devuelve. Es un patrón de diseño creacional que le permite crear objetos sin especificar la clase o constructor exacto que se utilizará. Centraliza la lógica de creación de objetos, lo que permite flexibilidad en la creación de diferentes tipos de objetos. Digamos que tienes un sitio web y quieres crear un método que te permita crear fácilmente objetos html y agregarlos al DOM. Una factoría es la solución perfecta para esto y así es como podemos implementarla.

### 1.1. Componentes del método Factoría

- *Creador*

  Este es el método implementado en la factoría que crea nuevos productos.

- *Producto Abstracto*

  Una interfaz para el producto que se está creando.

- *Producto concreto*

  Este es el objeto real que se está creando.

### 1.2. Beneficios del método Factoría

- **Abstracción de la creación de objetos**

Elimina la complejidad de crear un objeto, permitiendo que el código del cliente se centre únicamente en los objetos creados.

- **Flexibilidad y personalización**

Las factorías permiten la personalización del proceso de creación de objetos, permitiendo variaciones en los objetos creados.

- **Encapsulación de la lógica de la creación**

La lógica de creación está encapsulada dentro de la factoria, lo que facilita modificar o ampliar el proceso de creación sin afectar el código del cliente.

- **Creación de objetos complejos**

Las fábricas son útiles cuando la creación de objetos es compleja, implica múltiples pasos o requiere que se cumplan ciertas condiciones.

### 1.3. Ejemplo

```javascript
    function elementoFactoria(tipo, texto, color){
        const nuevoElemento = document.createElement(tipo)
        nuevoElemento.innerText = texto 
        nuevoElemento.style.color = color 
        document.body.append(nuevoElemento)
        
        
    function setText(nuevoTexto) {
         nuevoElemento.innerText = nuevoTexto;
    }
        
    function setColor(nuevoColor) { 
        nuevoElemento.innerText = nuevoColor; 
    }
        
    return {
        nuevoElemento, 
        setText,
        setColor,
        }
    }

const h1Tag = elementoFactoria('h1','Texto inicial','Blue'); 

h1Tag.setText('Hola mundo');

h1Tag.setColor('Red');
```

## 2. Método de factoría abstracta

Las factorías abstractas son otro patrón de diseño creacional. Su objetivo principal es proporcionar una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas. Este patrón garantiza que los objetos creados sean compatibles y funcionen juntos.

### 2.1. Los 4 componentes de una factoría abstracta

- *Factorías abstractas*

Esto define la interfaz para crear productos abstractos, que son familias de objetos relacionados (por ejemplo, componentes de interfaz de usuario). La fábrica abstracta declara métodos de creación para cada tipo de producto de la familia.

- *Factorías concretas*

Estas son clases que implementan la interfaz de factoría abstracta, proporcionando implementaciones específicas para crear productos concretos. Cada factoría concreta crea una familia de productos relacionados (por ejemplo, la factoría de UI puede crear un botón o una casilla de verificación).

- *Productos abstractos*

Estas son las interfaces o clases base para los productos que crea la factoría abstracta. Cada tipo de producto de la familia tiene su propia definición de producto abstracta (por ejemplo, Boton, CasillaDeVerificacion).

- *Productos concretos*

Estas son las implementaciones reales de los productos abstractos. Cada factoría concreta crea su propio conjunto de productos concretos. Los productos concretos implementan las interfaces de productos abstractas definidas para su familia (por ejemplo, HTMLButton, WindowsButton).

### 2.2. Beneficios de una factoría abstracta

- **Consistencia**
Garantiza que los objetos creados sean compatibles y sigan un tema o estilo coherente.

- **Aislamiento de responsabilidades**
Aísla la creación de objetos del código del cliente, promoviendo una clara separación de cometidos.

- **Flexibilidad y escalabilidad**
Permite agregar fácilmente nuevas familias de productos sin modificar el código de cliente existente.

### 2.3. Ejemplo

```javascript
 // Factoría abstracta: UIFactoria
class UIFactoria {
    creaBoton() {
        throw new Error('el método creaBoton debe ser sobreescrito');
    }

    creaCasillaVerificacion() {
        throw new Error('el método creaCasillaVerificacion debe ser sobreescrito');
    }
}

// Factoría concreta: WindowsUIFactoria
class WindowsUIFactoria extends UIFactoria {
    creaBoton() {
        return new WindowsBoton();
    }

    creaCasillaVerificacion() {
        return new WindowsCasillaVerificacion();
    }
}

// Concrete Factory: MacUIFactoria
class MacUIFactoria extends UIFactoria {
    creaBoton() {
        return new MacBoton();
    }

    creaCasillaVerificacion() {
        return new MacCasillaVerificacion();
    }
}

// Producto abstracto: Boton
class Boton {
    reproducir() {
        throw new Error('el método reproducir debe ser sobreescrito');
    }
}

// Producto concreto: WindowsBoton
class WindowsBoton extends Boton {
    reproducir() {
        console.log('reproduciendo un botón de Windows');
    }
}

// Producto concreto: MacBoton
class MacBoton extends Boton {
    reproducir() {
        console.log('reproduciendo un botón de Mac');
    }
}

// Producto abstracto: CasillaVerificacion
class CasillaVerificacion {
    reproducir() {
        throw new Error('el método reproducir debe ser sobreescrito');
    }
}

// Concrete Product: WindowsCasillaVerificacion
class WindowsCasillaVerificacion extends CasillaVerificacion {
    reproducir() {
        console.log('reproduciendo una casilla de verificación de Windows');
    }
}

// Concrete Product: MacCasillaVerificacion
class MacCasillaVerificacion extends CasillaVerificacion {
    reproducir() {
        console.log('reproduciendo una casilla de verificación de Mac');
    }
}

// Usage
const windowsFactoria = new WindowsUIFactoria();
const macFactoria = new MacUIFactoria();

const botonWindows = windowsFactoria.creaBoton();
botonWindows.reproducir();  // Salida: reproduciendo un botón de Windows

const casillaVerificacionMac = macFactoria.creaCasillaVerificacion();
casillaVerificacionMac.reproducir();  // Salida: reproduciendo una casilla de verificación de Mac
```

## 3. Constructor

El objetivo de un constructor es separar la construcción de un objeto de su representación. Lo que hace el patrón de construcción es básicamente permitir que el cliente construya un objeto complejo simplemente pasando el tipo y el contenido del objeto únicamente. El cliente no tiene que preocuparse por los detalles constructivos.

### 3.1. Los 4 componentes de un constructor

- *Constructor*
El constructor suele contener una serie de métodos para construir varias partes del objeto.

- *Constructor concreto*
Implementa métodos desde la interfaz del constructor para construir partes del objeto.

- *Director (Opcional)*
Esto no siempre es necesario, pero puede ayudar a construir el objeto final mediante un proceso de construcción específico.

- *Objeto*
Representación del producto final. Contiene piezas que fueron construidas por el constructor.

### 3.2. Beneficios del patrón constructor

- **Separación de responsabilidades**
El patrón Constructor separa la construcción de un objeto complejo de su representación, lo que permite que diferentes implementaciones de constructores varíen la representación interna.

- **Creación de objetos flexibles**
Permite la creación de diferentes configuraciones de un objeto complejo mediante el uso de un proceso de construcción común. Los constructores pueden adaptarse para crear variaciones específicas del objeto.

- **Legibilidad mejorada**
El uso de un constructor puede mejorar la legibilidad del código al describir claramente los pasos necesarios para construir un objeto. Es fácil entender qué aporta cada paso al objeto final.

- **Construcción parametrizada**
Los constructores le permiten construir un objeto pasando parámetros a los pasos de construcción, lo que permite un control detallado sobre la creación y configuración del objeto.

- **Reutilización**
Los constructores se pueden reutilizar para crear múltiples instancias del objeto complejo con diferentes configuraciones, promoviendo la reutilización del código y minimizando la duplicación de la lógica de construcción.

### 3.3. Ejemplo

```Javascript
//Constructor
class ComputadoraConstructor {
    construyeCPU() {}
    construyeRAM() {}
    construyeAlmacenamiento() {}
    obtenResultado() {}
}

//Constructores concretos
class ComputadoraJuegosConstructor extends ComputadoraConstructor {
    // Implementa pasos específicos para construir una computadora para juegos
}

class ComputadoraOficinaConstructor extends ComputadoraConstructor {
    // Implementa pasos específicos para construir una computadora de oficina.
}

//Clase Objeto
class Computadora {
    constructor() {
        this.piezas = [];
    }

    agregaPieza(pieza) {
        this.piezas.push(pieza);
    }
}

// Director (Opcional)
class EnsambladorComputadora {
    constructor(computadoraConstructor) {
        this.computadoraConstructor = computadoraConstructor;
    }

    ensamblaComputadora() {
        this.computadoraConstructor.construyeCPU();
        this.computadoraConstructor.construyeRAM();
        this.computadoraConstructor.construyeAlmacenamiento();
        return this.computadoraConstructor.obtenResultado();
    }
}
```

## 4. Único (más conocido como Singleton, en inglés)

Un único es un objeto del que solo se puede crear una instancia una vez. Los únicos son útiles cuando es necesario coordinar acciones de todo el sistema desde un único lugar central. Los únicos reducen la necesidad de variables globales, lo cual es particularmente importante en javascript porque limita la contaminación del espacio de nombres.

### 4.1. Componentes de Único

- *Función anónima*
Un singleton se implementa utilizando una función anónima.

- *Función getInstance*
Esta es una función que devuelve el objeto instanciado único.

- *Constructor (Opcional)*
En javascript, no es necesario un constructor para implementar el patrón Único, pero tener un constructor es común porque le permite configurar el Único y agregar lógica de inicialización.

### 4.2. Beneficios del patrón Único

- **Reduce variables globales**
Los únicos pueden ayudar a reducir la cantidad de variables globales requeridas en su programa, promoviendo una mejor organización y mantenibilidad del código.

- **Ahorro de memoria**
Debido a que un Único garantiza que solo exista una instancia a la vez, se ahorra memoria porque evita tener múltiples instancias de la misma clase.

- **Punto de acceso global**
Los únicos proporcionan un punto global de acceso a la instancia. Esto permite que otras partes del programa accedan y utilicen la misma instancia sin necesidad de pasarla.

- **Intercambio de recursos**
Los únicos son especialmente útiles cuando se trata de tareas como gestionar recursos compartidos. Los únicos se pueden utilizar para administrar conexiones de bases de datos, controladores de archivos e incluso grupos de subprocesos, lo que garantiza que estos recursos se compartan de manera eficiente en toda la aplicación.

### 4.3. Ejemplo

```javascript
class Unico {
  constructor() {
    const variablePrivada = 'Esto es una variable privada';

    function metodoPrivado() {
      console.log('Este es un método privado.');
    }

    return {
      metodoPublico: function() {
        console.log('Este es un método público.');
      },
      variablePublica: 'Soy pública'
    };
  }

  static getInstance() {
    if (!Unico.instance) {
      Unico.instance = new Unico();
    }
    return Unico.instance;
  }
}

const unicoInstancia1 = Unico.getInstance();
const unicoInstancia2 = Unico.getInstance();

console.log(unicoInstancia1 === unicoInstancia2); // Salida: true
```

## 5. Prototipo

El patrón prototipo es una forma alternativa de implementar la herencia, pero la principal diferencia es que, en lugar de heredar propiedades de una clase, los objetos heredan propiedades de un objeto prototipo. El patrón de prototipo también se conoce como patrón de propiedades y Javascript tiene soporte nativo para prototipos. En Javascript, cada objeto tiene un prototipo (referencia a otro objeto). Cuando intenta acceder a una propiedad que no existe en el objeto mismo, Javascript la buscará en el prototipo del objeto y continuará por la cadena del prototipo hasta que la encuentre o llegue al final de la cadena.

### 5.1. Componentes del patrón Prototipo

- *Objeto prototipo*
Contiene las propiedades y métodos que heredarán todas las nuevas instancias.

- *Cliente*
El cliente es responsable de crear nuevos objetos basados en el prototipo. El cliente puede crear nuevas instancias basadas en el prototipo y modificar sus propiedades en consecuencia.

- *Mecanismo de clonación/creación*
 El mecanismo utilizado para crear un nuevo objeto basado en el prototipo. En Javascript esto se puede lograr usando la función `Object.create()`.

### 5.2. Beneficios del patrón Prototipo

- **Creación de instancias eficiente**

Crear nuevas instancias del Prototipo es más eficiente que usar clases y constructores tradicionales. Los objetos se crean clonando el prototipo, lo que reduce la necesidad de configurar clases y lógica de inicialización.

- **Reutilización del código**

El patrón Prototipo le permite definir un conjunto de propiedades y métodos predeterminados en un objeto prototipo. Esto permite que varias instancias compartan el mismo comportamiento y estructura sin duplicar el código. Esto también reduce el uso de memoria ya que cada instancia no necesita almacenar duplicados de las propiedades de los prototipos.

- **Creación de objetos flexibles**

Los objetos creados con el patrón Prototipo se pueden personalizar fácilmente modificando sus propiedades o agregando nuevas propiedades específicas de la instancia.

- **Cambios dinámicos en tiempo de ejecución**

Los cambios realizados en el objeto prototipo en tiempo de ejecución se reflejan en todas las instancias basadas en el prototipo. Este comportamiento permite actualizaciones y modificaciones del prototipo, lo que afecta a todas las instancias que comparten el mismo prototipo.

### 5.3. Ejemplo

```javascript
const camaraPrototipo = {
    modelo: 'predeterminado',
    marca: 'predeterminada',
    disparador: function () {
        console.log(`La ${this.marca} ${this.modelo} ha tomado una foto`);
    }
};

const camara1 = Object.create(camaraPrototipo);
camara1.modelo = 'X-Pro 3';
camara1.marca = 'Fujifilm';

const camara2 = Object.create(camaraPrototipo);
camara2.modelo = 'R5';
camara2.marca = 'Canon';
```

---
