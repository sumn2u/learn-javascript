---
layout: editorial
title: Patrones de diseño estructural en Javascript
description: Se centra en cómo se componen las clases y los objetos para formar estructuras más grandes.
chapter: 23
pageNumber: 205
---

# Patrones de diseño estructural

Se centra en cómo se componen las clases y los objetos para formar estructuras más grandes.

## 1. Adaptador

El Adaptador es un patrón de diseño estructural que le permite hacer que diferentes interfaces con diferentes métodos funcionen juntas sin cambiar su código. El propósito de un Adaptador es hacer que dos interfaces incompatibles funcionen juntas sin problemas.

### 1.1 Componentes del patrón adaptador

- *Clase/interfaz Objetivo*
Esta es la interfaz o clase con la que trabajará el cliente. Contiene todos los métodos y propiedades que utilizará el código del cliente.

- *Adaptee*
Adaptee es la antigua interfaz/clase que contiene propiedades y métodos que son incompatibles con la nueva interfaz/clase.

- *Adaptador*
El Adaptador es lo que cierra la brecha entre el Adaptee y la interfaz/clase objetivo.

### 1.2. Beneficios del patrón adaptador

- **Fácil integración**
Los adaptadores crean una manera fácil para que nuevos códigos o sistemas interactúen con los existentes. Al utilizar adaptadores, la integración de código nuevo se vuelve más fluida y menos propensa a errores.

- **Compatibilidad y reutilización**
Los adaptadores promueven la reutilización del código y amplían la usabilidad del código existente al hacer que el código antiguo sea compatible con el código más nuevo.

- **Integración gradual del sistema**
En situaciones en las que es necesario implementar un nuevo sistema de forma gradual, los adaptadores pueden actuar como intermediarios, permitiendo que nuevas funciones lleguen lentamente mientras se mantiene la compatibilidad con el sistema existente.

- **Capacidad de prueba mejorada**
Los adaptadores facilitan las pruebas al permitir burlarse o eliminar al adaptee durante la prueba del código del cliente. Esto mejora la capacidad de prueba del código del cliente y ayuda a escribir pruebas unitarias más comprensibles.

### 1.3. Ejemplo

```javascript
// Adaptee: conector de carga EU
class EUCConectorCarga {
  cargaConConectorEU() {
    console.log('Carga con enchufe de la UE');
  }
}

// Adaptee: conector de carga de EEUU
class USConectorCarga {
  cargaConConectorUS() {
    console.log('Carga con enchufe de EEUU');
  }
}

// Objetivo: Interfaz de carga común esperada por el cliente
class InterfazCarga {
  carga() {
    console.log('Cargando...');
  }
}

// Adaptador para el conector de carga de la UE
class EUCargaAdaptador extends InterfazCarga {
  constructor(euConectorCarga) {
    super();
    this.euConectorCarga = euConectorCarga;
  }

  carga() {
    this.euConectorCarga.cargaConConectorEU();
  }
}

// Adaptador para el conector de carga de EEUU
class USCargaAdaptador extends InterfazCarga {
  constructor(usConectorCarga) {
    super();
    this.usConectorCarga = usConectorCarga;
  }

  carga() {
    this.usConectorCarga.cargaConConectorUS();
  }
}

// Cliente
function cargarDispositivo(interfazCarga) {
  interfazCarga.carga();
}

// Uso
const euCConectorCarga = new EUCConectorCarga();
const euAdaptador = new EUCargaAdaptador(euCConectorCarga);

const usConectorCarga = new USConectorCarga();
const usAdaptador = new USCargaAdaptador(usConectorCarga);

console.log('Carga con bloque de carga de la UE:');
cargarDispositivo(euAdaptador);

console.log('Carga con bloque de carga estadounidense:');
cargarDispositivo(usAdaptador);
```

## 2. Puente

El Puente es un patrón de diseño estructural diseñado para dividir una clase muy grande en dos jerarquías separadas que pueden desarrollarse de forma independiente. Las dos jerarquías se denominan nivel de abstracción y nivel de implementación. Básicamente, si tiene una clase que tiene múltiples variantes de alguna funcionalidad, puede usar un patrón Bridge para dividir y organizar la clase en dos jerarquías más fáciles de entender.

### 2.1. Componentes del patrón Puente

- *Abstracción*
Esta es la interfaz o abstracción de alto nivel. Define la funcionalidad abstracta que utilizarán los clientes.

- *Abstracción refinada*
Son subclases o extensiones de la capa de abstracción. Estos proporcionan características o mejoras adicionales. Amplía la funcionalidad definida por la abstracción.

- *Implementador*
Esta es la interfaz que define los métodos de implementación. Por lo general, no refleja la interfaz de abstracción, pero es una interfaz de nivel inferior en la que se basa la abstracción.

- *Implementador concreto*
Clases concretas que implementan la interfaz del implementador. Estas clases proporcionan implementaciones específicas de los métodos definidos por la interfaz del implementador.

### 2.2. Beneficios del patrón Puente

- **Desacopla la abstracción de la implementación**
El principal beneficio del patrón Puente es que divide la capa de abstracción de la capa de implementación. Esto permite que ambas secciones evolucionen de forma independiente, lo que facilita la modificación del código base.

- **Mejora la mantenibilidad**
Dado que la base del código está dividida en dos secciones, lo más probable es que realizar cambios en una parte del sistema no afecte a la otra parte. Lo que hace que mantener la base del código sea más fácil y eficiente.

- **Mejora las pruebas**
Las pruebas son mucho más fáciles cuando tienes un patrón puente en tu código base porque puedes concentrarte en probar la capa de abstracción por separado de probar la capa de implementación. Esto permite realizar pruebas más fáciles y específicas.

- **Mejora la legibilidad**
El patrón Puente crea una jerarquía clara en la base del código. Organizar la base del código de esta manera ayuda a comprender las relaciones entre las diferentes partes del sistema.

### 2.3. Ejemplo

```javascript
// Abstracción
class Figura {
  constructor(color) {
    this.color = color;
  }

  dibuja() {
    console.log(`Dibujando una Figura con color ${this.color}`);
  }
}

// Implementaciones
class ColorRojo {
  aplicaColor() {
    console.log('Aplicando el color rojo');
  }
}

class ColorAzul {
  aplicaColor() {
    console.log('Aplicando el color azul');
  }
}

// Puente
class FiguraConColor extends Figura {
  constructor(color, implementacionColor) {
    super(color);
    this.implementacionColor = implementacionColor;
  }

  dibuja() {
    super.dibuja();
    this.implementacionColor.aplicaColor();
  }
}

// Uso
const figuraRoja = new FiguraConColor('rojo', new ColorRojo());
const figuraAzul = new FiguraConColor('azul', new ColorAzul());

figuraRoja.dibuja();  // Salida: Dibujando una figura con color rojo, aplicando color rojo
figuraAzul.dibuja(); // Salida: Dibujando una figura con color azul, aplicando color azul
```

## 3. Composición

El patrón de diseño compuesto permite la creación de objetos con propiedades que son elementos primitivos o una colección de objetos. Imagine una estructura similar a un árbol, donde tiene objetos individuales (nodos de hoja) o grupos de objetos (ramas). El patrón de diseño compuesto le permite crear este tipo de estructura y poder realizar operaciones en cada nivel de manera consistente.

### 3.1 Componentes del patrón composición

- *Componente*
Esta es la interfaz/clase que representa tanto los nodos hoja (elementos individuales) como los nodos compuestos (colección de elementos). El componente define operaciones que se pueden aplicar a ambos tipos de nodos.

- *Hoja*
Esto representa objetos individuales en el árbol que no tienen hijos. Implementan las operaciones que se definen en la interfaz del componente.

- *Compuesto*
Esto representa los compuestos o contenedores que pueden contener una colección de nodos hoja u otros nodos compuestos.

### 3.2. Beneficios del patrón composición

- **Uniformidad y consistencia**
El patrón de diseño compuesto proporciona una manera uniforme de tratar tanto objetos individuales como composiciones de objetos. Los clientes tienen una interfaz común para operar con estos objetos, lo que simplifica la base del código y las interacciones entre objetos.

- **Flexibilidad**
Este patrón de diseño permite flexibilidad para agregar nuevos tipos de componentes o modificar los existentes sin afectar el código del cliente. Puede introducir nuevos tipos de hojas u objetos compuestos fácilmente.

- **Código de cliente simplificado**
El código del cliente no necesita distinguir entre componentes individuales y compuestos, lo que hace que trabajar con la estructura sea más sencillo e intuitivo.

### 3.3. Ejemplo

```javascript
class BloqueUnico {
  constructor(nombre) {
    this.nombre = nombre;
  }

  mostrar() {
    console.log('Bloque:', this.nombre);
  }
}

class ColeccionDeBloques {
  constructor(nombre) {
    this.nombre = nombre;
    this.bloques = [];
  }

  agregar(bloque) {
    this.bloques.push(bloque);
  }

  eliminar(bloque) {
    this.bloques = this.bloques.filter(b => b !== bloque);
  }

  mostrar() {
    console.log('Colección de bloques:', this.nombre);

    for (const bloque of this.bloques) {
      bloque.mostrar();
    }
  }
}

// Usage
const bloque1 = new BloqueUnico('Bloque 1');
const bloque2 = new BloqueUnico('Bloque 2');
const bloque3 = new BloqueUnico('Bloque 3');

const bloqueGrupo1 = new ColeccionDeBloques('Grupo de bloques 1');
bloqueGrupo1.agregar(bloque1);
bloqueGrupo1.agregar(bloque2);

const bloqueGrupo2 = new ColeccionDeBloques('Grupo de bloques 2');
bloqueGrupo2.agregar(bloque3);

const megaEstructura = new ColeccionDeBloques('Megaestructura');
megaEstructura.agregar(bloqueGrupo1);
megaEstructura.agregar(bloqueGrupo2);

megaEstructura.mostrar();
```

## 4. Decorador

El patrón de diseño Decorador se puede utilizar para modificar el comportamiento de un objeto de forma estática o dinámica sin afectar el comportamiento de otros objetos de la misma clase. Los decoradores son particularmente útiles cuando desea agregar características a un objeto de una manera flexible y reutilizable.

### 4.1. Componentes del patrón decorador

- *Interfaz de componente*
Esto define la lógica de los objetos a los que se les pueden agregar responsabilidades dinámicamente.

- *Componentes concretos*
Este es el objeto inicial al que se le pueden agregar funcionalidades adicionales.

- *Decorador*
Esta es una interfaz que amplía la funcionalidad de los componentes concretos. Tiene una referencia a una instancia de componente e implementa la interfaz del componente.

- *Decoradores concretos*
Estas son las implementaciones concretas de la clase decoradora, agregan un comportamiento específico al componente deseado al extender la clase decoradora.

### 4.2. Beneficios del patrón decorador

- **Extensibilidad y flexibilidad**
Los decoradores le permiten agregar nuevas funcionalidades o comportamientos a los objetos de forma dinámica en tiempo de ejecución. Esto promueve la extensibilidad sin modificar el código base existente y proporciona flexibilidad en cómo se pueden componer y utilizar estas funcionalidades adicionales.

- **Modularidad**
Los decoradores permiten un enfoque más modular del código al dividir la funcionalidad en unidades más pequeñas y manejables. Estas unidades se pueden combinar y reutilizar de varias maneras.

- **Configuración de tiempo de ejecución**
Los decoradores le permiten configurar dinámicamente un objeto en tiempo de ejecución. Esto le permite agregar o eliminar funcionalidades sin afectar los componentes principales ni tener que volver a compilar el código.

- **Reducir subclases**
Sin decoradores, ampliar las funcionalidades suele implicar la creación de numerosas subclases para cada combinación de comportamientos. Los decoradores eliminan la necesidad de subclases, lo que da como resultado un código base más limpio y más fácil de entender.

### 4.3. Ejemplo

```javascript
class Cafe {
  costo() {
    return 5;
  }
}

class LecheDecorador {
  constructor(cafe) {
    this.cafe = cafe;
  }

  costo() {
    return this.cafe.costo() + 2;
  }
}

class AzucarDecorador {
  constructor(cafe) {
    this.cafe = cafe;
  }

  costo() {
    return this.cafe.costo() + 1;
  }
}

// Uso
let cafe = new Cafe();
console.log('Costo del café simple:', cafe.costo());

let cafeConLeche = new LecheDecorador(cafe);
console.log('Costo del café con leche:', cafeConLeche.costo());

let cafeConLecheAzucarado = new AzucarDecorador(cafeConLeche);
console.log('Costo del café con leche azucarado:', cafeConLecheAzucarado.costo());
```

## 5. Fachada

El patrón de diseño Facade es básicamente una interfaz simplificada con la que el cliente puede interactuar para utilizar otras operaciones de bajo nivel ocultas en otras partes del código base. Este patrón de diseño se utiliza a menudo en sistemas construidos en torno a una arquitectura multicapa. Las fachadas permiten al cliente realizar determinadas tareas sin necesidad de comprender la complejidad del sistema subyacente.

### 5.1. Componentes del patrón fachada

- *Fachada*

La fachada es la interfaz con la que interactuará el cliente. Proporciona una interfaz simple y unificada que delega las solicitudes de los clientes a los objetos apropiados dentro del subsistema.

- *Subsistema*

El subsistema consta de todos los diversos componentes y funcionalidades que envuelve la Fachada. El subsistema y la Fachada interactúan entre sí pero operan de forma independiente.

### 5.2. Beneficios del patrón fachada

- **Interfaz simplificada**

La fachada proporciona una interfaz simple y fácil de entender.

- **Organización del código**

El patrón de diseño Fachada ayuda a organizar el código al encapsular la funcionalidad del subsistema y proporcionar una separación clara de las preocupaciones.

- **Mantenimiento más fácil**

Los cambios en el subsistema se pueden aislar dentro de la fachada, lo que reduce el impacto en el código del cliente.

### 5.3. Ejemplo

```javascript
// Subsistema de fontanería
class SubsistemaFontaneria {
  constructor() {}

  abrirAgua() {
    console.log('Fontanería: agua abierta');
  }

  cerrarAgua() {
    console.log('Fontanería: Agua cerrada');
  }
}

// Subsistema Eléctrica
class SubsistemaElectrico {
  constructor() {}

  encenderElectricidad() {
    console.log('Eléctrico: Electricidad encendida');
  }

  apagarElectricidad() {
    console.log('Eléctrico: electricidad apagada');
  }
}

// Fachada de la casa
class CasaFachada {
  constructor() {
    this.subsistemaFontaneria = new SubsistemaFontaneria();
    this.subsistemaElectrico = new SubsistemaElectrico();
  }

  entrarEnCasa() {
    this.plumbingSubsystem.abrirAgua();
    this.subsistemaElectrico.encenderElectricidad();
    console.log('Has entrado en la casa.');
  }

  salirDeCasa() {
    this.plumbingSubsystem.cerrarAgua();
    this.subsistemaElectrico.apagarElectricidad();
    console.log('Has salido de casa.');
  }
}

// Cliente
const cliente = () => {
  const casa = new CasaFachada();

  // entrar a la casa
  casa.entrarEnCasa();

  // salir de la casa
  casa.salirDeCasa();
};

// Ejecutamos el cliente
client();
```

## 6. Objeto ligero

El patrón de diseño Objeto ligero tiene como objetivo minimizar el uso de memoria o los gastos computacionales al almacenar valores intrínsecos (propiedades similares) de objetos similares en una aplicación, reduciendo la cantidad de código duplicado. Esto es particularmente útil cuando se trata de una gran cantidad de objetos similares en una aplicación.

### 6.1. Componentes de un patrón objeto ligero

- *Factoria de Objetos Ligeros*

La factoría de objetos ligeros crea los objetos ligeros. Contiene una función que creará un objeto ligero si aún no existe uno y almacena objetos ligeros recién creados para futuras solicitudes.

- *Objeto ligero*

El objeto ligero contiene los datos intrínsecos que se compartirán en toda la aplicación.

### 6.2. Beneficios del patrón objeto ligero

- **Ahorro de memoria**

Al compartir datos intrínsecos entre múltiples objetos, el patrón de Objetos Ligeros reduce significativamente el uso de memoria, especialmente cuando se trata de una gran cantidad de instancias.

- **Mejoras de rendimiento**

Debido al uso reducido de memoria, mejora el rendimiento general del solicitante. Un menor uso de memoria generalmente conduce a tiempos de ejecución más rápidos y un rendimiento más fluido de las aplicaciones.

- **Simplifica la gestión del estado**

Al separar los datos intrínsecos (valores compartidos) y los datos extrínsecos (valores únicos), el patrón de diseño de objeto ligero simplifica la gestión de estos estados. Permite una separación más clara de los cometidos y un enfoque más organizado para el manejo del estado.

### 6.3. Ejemplo

```javascript
// Objeto ligero para una Camara
function Camara(marca, modelo, resolucion) {
    this.marca = marca;
    this.modelo = modelo;
    this.resolucion = resolucion;
}

// Factoria de objetos ligeros para Camara
var FactoriaObjetoLigeroCamara = (function () {
    var objetosLigeros = {};

    return {
        obtener: function (marca, modelo, resolucion) {
            if (!objetosLigeros[marca + modelo]) {
                objetosLigeros[marca + modelo] = new Camara(marca, modelo, resolucion);
            }
            return objetosLigeros[marca + modelo];
        },

        obtenerContador: function () {
            var contador = 0;
            for (var f in objetosLigeros) contador++;
            return contador;
        }
    };
})();

// Colección de cámaras
function ColeccionCamara() {
    var camaras = {};
    var contador = 0;

    return {
        agregar: function (marca, modelo, resolucion, numeroSerie) {
            camaras[numeroSerie] = {
                flyweight: FactoriaObjetoLigeroCamara.obtener(marca, modelo, resolucion),
                numeroSerie: numeroSerie
            };
            contador++;
        },

        obtener: function (numeroSerie) {
            return camaras[numeroSerie];
        },

        obtenerContador: function () {
            return contador;
        }
    };
}

// Función que ejecutará el ejemplo
function ejecuta() {
    var camaras = new ColeccionCamara();

    camaras.agregar("Canon", "EOS R5", "45MP", "A1234");
    camaras.agregar("Nikon", "D850", "45.7MP", "B5678");
    camaras.agregar("Sony", "A7R III", "42.4MP", "C9101");
    camaras.agregar("Canon", "EOS R5", "45MP", "D1212"); // Reusando el objeto ligero existente

    console.log("Cámaras: " + camaras.obtenerContador());
    console.log("Objetos ligeros: " + FactoriaObjetoLigeroCamara.obtenerContador());
}

// Ejecutamos el ejemplo
ejecuta();
```

## 7. Apoderado

El patrón de diseño Apoderado es un patrón de diseño estructural que le permite proporcionar un sustituto o marcador de posición para otro objeto. Este objeto apoderado puede controlar el acceso al objeto original. En Javascript, el objeto `Proxy` está integrado en el lenguaje y facilita la implementación del patrón de diseño Apoderado.

### 7.1. Componentes del patrón Apoderado

- *Apoderado*
El Apoderado contiene una interfaz que es similar al objeto real, mantiene una referencia que le permite al apoderado acceder al objeto real y maneja solicitudes y las reenvía al objeto real.

- *Asunto real*
Este es el objeto real al que sustituye el apoderado.

### 7.2. Beneficios del patrón Apoderado

- **Acceso controlado**
Los apoderados le permiten controlar el acceso al objeto original, lo que le permite implementar lógica de control de acceso, como permisos, restricciones o validaciones, antes de permitir el acceso al objeto subyacente.

- **Aumento de funcionalidad**
Los apoderados pueden agregar comportamiento o funcionalidad adicional antes o después de la invocación de métodos o el acceso a propiedades del objeto original. Esto es útil para implementar cuestiones transversales como el registro, el almacenamiento en caché o el manejo de errores.

- **Almacenamiento en caché**

Los apoderados pueden implementar mecanismos de almacenamiento en caché para almacenar resultados de operaciones costosas, mejorando el rendimiento y la eficiencia.

- **Inicialización diferida**

Los apoderados permiten una inicialización diferida, donde puede retrasar la creación del objeto real hasta que sea necesario. Esto puede mejorar el rendimiento al reducir el uso inicial de recursos.

### 7.3. Ejemplo

```javascript
// El objeto original representa una cuenta de banco
const cuentaBancaria = {
  saldo: 1000,

  depositar(cantidad) {
    this.saldo += cantidad;
    console.log(`Depositó ${cantidad}. Nuevo saldo: ${this.saldo}`);
  },

  retirar(cantidad) {
    if (cantidad <= this.saldo) {
      this.saldo -= cantidad;
      console.log(`Retiró ${cantidad}. Nuevo saldo: ${this.saldo}`);
    } else {
      console.log('Fondos insuficientes.');
    }
  }
};

// Creamos un proxy para la cuenta bancaria
const bankAccountProxy = new Proxy(cuentaBancaria, {
  // Intercepta el acceso a la propiedad
  obtener(objetivo, propiedad) {
    if (propiedad === 'saldo') {
      // Agrega algún comportamiento personalizado antes de acceder a 'saldo'
      console.log('Saldo accedido.');
    }
    return objetivo[propiedad];
  },

  // Intercepta la invocación al método
  apply(objetivo, thisArg, args) {
    // Agregue algún comportamiento personalizado antes de invocar un método
    console.log(`Se ha llamado al método "${args[0]}".`);
    return objetivo.apply(thisArg, args);
  }
});

// Accedemos al proxy (apoderado)
console.log(bankAccountProxy.saldo); // Esto activará el comportamiento personalizado.

bankAccountProxy.depositar(500); // Esto activará el comportamiento personalizado para la invocación de métodos.
```

---
