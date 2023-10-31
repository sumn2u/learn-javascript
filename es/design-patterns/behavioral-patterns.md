---
layout: editorial
title: Patrones de diseño de comportamiento
description: Se concentra en cómo los objetos se comunican entre sí y se les asignan las responsabilidades.
---
# Patrones de diseño de comportamiento

Se concentra en cómo los objetos se comunican entre sí y se les asignan las responsabilidades.

## 1. Cadena de responsabilidad

La Cadena de responsabilidad es un patrón de diseño de comportamiento y su objetivo principal es tomar una solicitud y transmitirla a lo largo de una cadena de manejadores. Cuando la solicitud pasa por la cadena, cada controlador decidirá si procesa la solicitud o la pasa al siguiente controlador de la cadena. Este patrón permite que varios controladores manejen la solicitud sin que el remitente necesite saber cuál la procesará.

### 1.1. Componentes del patrón Cadena de responsabilidad

- *Solicitud*

La solicitud es solo el objeto que envía el cliente y que debe procesarse. La solicitud pasa por la cadena de controladores hasta que se procesa o llega al final de la cadena.

- *Interfaz/clase del controlador abstracto*

Esta es la interfaz/clase base que define los métodos que se utilizarán para manejar la solicitud. La interfaz del controlador contiene la lógica para el orden de la cadena y cómo se pasa la solicitud.

- *Manipuladores concretos*

Estos son los métodos/clases que implementan el controlador abstracto. Cada controlador concreto contiene lógica para manejar un tipo particular de solicitud. Si el controlador concreto puede procesar la solicitud, lo hará; si no puede, pasará la solicitud al siguiente controlador.

### 1.2. Beneficios del patrón Cadena de responsabilidad

- **Facilidad de uso**

El remitente no necesita conocer el método específico para procesar la solicitud, solo necesita pasarlo a la cadena. Esto facilita que el remitente procese las solicitudes.

- **Flexibilidad y extensibilidad**

Se pueden agregar o eliminar nuevos controladores a la cadena sin modificar el código del remitente. Esto permite la modificación dinámica del orden de procesamiento.

- **Promueve la segregación responsable**

Los controladores son responsables de procesar tipos específicos de solicitudes según su lógica definida. Esto promueve una clara separación de responsabilidades, lo que facilita la gestión y el mantenimiento de cada manejador de forma independiente.

- **Procesamiento de solicitudes secuenciales**

El patrón garantiza que cada solicitud se procese secuencialmente a través de la cadena de controladores. Cada controlador puede optar por procesar la solicitud o pasarla al siguiente controlador. Esto puede resultar especialmente útil en escenarios en los que las solicitudes deben procesarse en un orden específico.

### 1.3. Ejemplo

```javascript
// Interfaz del manejador
class CafeManejador {
  constructor() {
    this.siguienteManejador = null;
  }

  establecerSiguiente(manejador) {
    this.siguienteManejador = manejador;
  }

  procesarPeticion(peticion) {
    throw new Error('El método procesarPeticion debe ser implementado por subclases.');
  }
}

// Manejador concreto para pedir un café
class PedirCafeManejador extends CafeManejador {
  procesarPeticion(peticion) {
    if (peticion === 'Cafe') {
      return 'Pedido realizado para una taza de café.';
    } else if (this.siguienteManejador) {
      return this.siguienteManejador.procesarPeticion(peticion);
    } else {
      return 'Lo sentimos, no atendemos ' + peticion + '.';
    }
  }
}

// Manejador concreto para preparar un café
class PrepararCafeManejanador extends CafeManejador {
  procesarPeticion(peticion) {
    if (peticion === 'PrepararCafe') {
      return 'Se está preparando cafe.';
    } else if (this.siguienteManejador) {
      return this.siguienteManejador.procesarPeticion(peticion);
    } else {
      return 'Cannot prepare ' + peticion + '.';
    }
  }
}

// Código del cliente
const pedirManejador = new PedirCafeManejador();
const prepararManejador = new PrepararCafeManejanador();

// Configuramos la cadena de responsabilidad
pedirManejador.establecerSiguiente(prepararManejador);

// Pedimos el café
console.log(pedirManejador.procesarPeticion('Cafe'));  // Salida: Pedido realizado para una taza de café.

// Preparamos el café
console.log(pedirManejador.procesarPeticion('PrepararCafe'));  // Salida: Se está preparando cafe.

// Intenta pedir algo más
console.log(pedirManejador.procesarPeticion('Té'));  // Salida: Lo sentimos, no servimos té.
```

## 2. Comando

El patrón de diseño de comandos es un patrón de diseño de comportamiento que le permite encapsular una solicitud como un objeto, ese objeto contendrá toda la información necesaria para la ejecución de la solicitud. Este patrón permite la parametrización y puesta en cola de solicitudes y proporciona la capacidad de deshacer operaciones.

### 2.1. Componentes del patrón Comando

- *Invocador*

Este es el objeto que solicita la ejecución de un comando. Tiene una referencia a un comando y puede ejecutar el comando llamando a su método `ejecutar`. El invocador no necesita conocer los detalles de cómo se ejecuta el comando. Simplemente activa el comando.

- *Comando*

Esta es la interfaz o clase abstracta que declara el método `ejecutar`. Define el método común que las clases de comando concretas deben implementar.

- *Receptor*

Este es un objeto que realiza el trabajo real cuando se llama al método `ejecutar` de un comando. El receptor sabe cómo realizar la acción asociada a un comando específico.

### 2.2. Beneficios del patrón Comando

- **Flexibilidad y extensibilidad**

Este patrón permite agregar fácilmente nuevos comandos sin necesidad de modificar el invocador o el receptor.

- **Operaciones deshacer y rehacer**

El patrón de comando facilita la implementación de operaciones de deshacer y rehacer. Cada objeto de comando puede realizar un seguimiento del estado anterior, lo que permite revertir la acción ejecutada.

- **Parametrización y colas**

Los comandos se pueden parametrizar con argumentos, lo que permite la personalización de acciones en tiempo de ejecución. Además, el patrón permite poner en cola y programar solicitudes, proporcionando control sobre el orden de ejecución.

- **Historia y registro**

Es posible mantener un historial de comandos ejecutados, lo que puede resultar útil para auditar, registrar o rastrear las acciones del usuario.

### 2.3. Ejemplo

```javascript
class Comando {
  constructor(receptor) {
    this.receptor = receptor;
  }

  ejecutar() {
    throw new Error('el método ejecutar() debe ser implementado');
  }
}

class ConcretoComando extends Comando {
  constructor(receptor, parametro) {
    super(receptor);
    this.parametro = parametro;
  }

  ejecutar() {
    this.receptor.actuar(this.parametro);
  }
}

class Receptor {
  actuar(parametro) {
    console.log(`El receptor está realizando la acción con parámetro: ${parametro}`);
  }
}

class Invocador {
  constructor() {
    this.comandos = [];
  }

  agregarComando(comando) {
    this.comandos.push(comando);
  }

  ejecutarComandos() {
    this.comandos.forEach(comando => comando.ejecutar());
    this.comandos = []; // Borra los comandos ejecutados
  }
}

// Usage
const receptor = new Receptor();
const comando1 = new ConcretoComando(receptor, 'parámetro del Comando 1');
const comando2 = new ConcretoComando(receptor, 'parámetro del Comando 2');

const invocador = new Invocador();
invocador.agregarComando(comando1);
invocador.agregarComando(comando2);

invocador.ejecutarComandos();
```

## 3. Intérprete

El patrón de diseño del intérprete se utiliza para definir una gramática para un idioma y proporcionar un intérprete para interpretar oraciones en ese idioma. Por lo general, se usa para crear intérpretes o analizadores de idiomas, pero también puede usarlos dentro de su aplicación. Imagine que tiene una aplicación de escritorio compleja, podría diseñar un lenguaje de programación básico que permita al usuario final manipular su aplicación mediante instrucciones sencillas.

### 3.1. Componentes del patrón Intérprete

- *Contexto*

Un estado o contexto global que el intérprete utiliza para interpretar expresiones. A menudo contiene información que es relevante durante la interpretación de expresiones.

- *Expresiones abstractas*

Define una interfaz para todo tipo de expresiones en la gramática del idioma. Estas expresiones normalmente se representan como una clase o interfaz abstracta.

- *Expresiones terminales*

Representa los símbolos terminales en la gramática. Estas son las hojas del árbol de expresión. La expresión terminal implementa la interfaz definida por la expresión abstracta.

- *Expresión no terminal*

Representa los símbolos no terminales en la gramática. Las expresiones no terminales utilizan expresiones terminales y/u otras expresiones no terminales para definir expresiones complejas combinándolas o componiéndolas.

- *Árbol de expresiones*

Representa la estructura jerárquica de las expresiones del lenguaje. El árbol de expresiones se construye combinando expresiones terminales y no terminales basadas en las reglas gramaticales del idioma.

- *Intérprete*

Define una interfaz o clase que interpreta el árbol de sintaxis abstracta creado por el árbol de expresión. Por lo general, incluye un método `interpretar` que toma un contexto e interpreta la expresión según el contexto dado.

- *Cliente*

Construye el árbol de sintaxis abstracta (el árbol de expresiones) utilizando expresiones terminales y no terminales basadas en la gramática del idioma. Luego, el cliente utiliza el intérprete para interpretar la expresión.

### 3.2. Beneficios del patrón Intérprete

- **Facilidad de interpretación de la gramática**

El patrón simplifica la interpretación de reglas gramaticales complejas dividiéndolas en expresiones más pequeñas y manejables. Cada tipo de expresión maneja su propia interpretación, lo que hace que el proceso de interpretación general sea más fácil de gestionar.

- **Mejor manejo de errores**

Dado que cada tipo de expresión maneja su propia interpretación, el manejo de errores se puede adaptar a expresiones específicas. Esto permite mensajes de error más precisos y significativos al analizar o interpretar la entrada.

- **Flexibilidad y extensibilidad**

El patrón de intérprete proporciona una forma flexible de definir y ampliar reglas gramaticales y expresiones del lenguaje sin modificar la lógica central del intérprete. Puede agregar fácilmente nuevas expresiones creando nuevas clases de expresión terminales y no terminales.

- **Integración con otros patrones de diseño**

El patrón Interpreter se puede combinar con otros patrones de diseño, como el patrón de Composición, para crear jerarquías complejas de expresiones. Esto permite la creación de intérpretes potentes y ricos en funciones.

### 3.3. Ejemplo

```javascript
// Expresión abstracta
class Expresion {
  interpreta(contexto) {
    // Para ser sobreescrito por sus subclases
  }
}

// Expresion terminal: NumeroExpresion
class NumeroExpresion extends Expresion {
  constructor(numero) {
    super();
    this.numero = numero;
  }

  interpreta(contexto) {
    return this.numero;
  }
}

// Expresion terminal: VariableExpresion
class VariableExpresion extends Expresion {
  constructor(variable) {
    super();
    this.variable = variable;
  }

  interpreta(contexto) {
    return contexto[this.variable] || 0;
  }
}

// Expresion no terminal: SumarExpresion
class SumarExpresion extends Expresion {
  constructor(expresion1, expresion2) {
    super();
    this.expresion1 = expresion1;
    this.expresion2 = expresion2;
  }

  interpreta(contexto) {
    return this.expresion1.interpreta(contexto) + this.expresion2.interpreta(contexto);
  }
}

// Expresion no terminal: RestarExpresion
class RestarExpresion extends Expresion {
  constructor(expresion1, expresion2) {
    super();
    this.expresion1 = expresion1;
    this.expresion2 = expresion2;
  }

  interpreta(contexto) {
    return this.expresion1.interpreta(contexto) - this.expresion2.interpreta(contexto);
  }
}

// Código del Cliente
const contexto = { a: 10, b: 5, c: 2 };

const expression = new RestarExpresion(
  new SumarExpresion(
    new VariableExpresion('a'),
    new VariableExpresion('b')
  ),
  new VariableExpresion('c')
);

const resultado = expression.interpreta(contexto);
console.log('Resultado:', resultado); // Salida: Resultado: 13
```

## 4. Iterador

El patrón Iterador permite a los clientes recorrer de manera efectiva una colección de objetos.

### 4.1. Componentes del patrón Iterador

- *Iterador*

Implementa la interfaz o clase Iterador con métodos como `first()`,`next()`. El iterador realiza un seguimiento de la posición actual al atravesar colecciones.

- *Elementos*

Estos son los objetos individuales de la colección que atravesará el iterador.

### 4.2. Beneficios del patrón Iterador

- **Compatibilidad con diferentes estructuras de datos**

El patrón Iterador permite aplicar la misma lógica de iteración a diferentes estructuras de datos.

- **Soporte para iteración concurrente**

Los iteradores pueden admitir iteraciones simultáneas sobre la misma colección sin interferir entre sí, lo que permite al cliente iterar sobre la colección de diferentes maneras simultáneamente.

- **Carga diferida**

Los iteradores se pueden diseñar para cargar elementos a pedido, lo cual es beneficioso para colecciones grandes donde cargar todos los elementos a la vez puede resultar poco práctico o consumir muchos recursos. Los elementos se pueden recuperar según sea necesario, optimizando el uso de la memoria.

- **Interfaz simplificada**

El patrón Iterador proporciona una interfaz limpia y consistente para acceder a elementos de una colección sin exponer la estructura interna de la colección. Esto simplifica el uso y la comprensión de la colección.

### 4.3. Ejemplo

```javascript
// clase Coche que representa un coche
class Coche {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  obtenerInformacion() {
    return `${this.marca} ${this.modelo}`;
  }
}

// interfaz Iterador
class Iterador {
  constructor(coleccion) {
    this.coleccion = coleccion;
    this.indice = 0;
  }

  siguiente() {
    return this.coleccion[this.indice++];
  }

  tieneSiguiente() {
    return this.indice < this.coleccion.length;
  }
}

// Colección de coches
class CochesColeccion {
  constructor() {
    this.coches = [];
  }

  agregaCoche(coche) {
    this.coches.push(coche);
  }

  creaIterador() {
    return new Iterador(this.coches);
  }
}

// Uso
const coleccionCoches = new CochesColeccion();
coleccionCoches.agregaCoche(new Coche('Toyota', 'Corolla'));
coleccionCoches.agregaCoche(new Coche('Honda', 'Civic'));
coleccionCoches.agregaCoche(new Coche('Ford', 'Mustang'));

const iterador = coleccionCoches.creaIterador();

while (iterador.tieneSiguiente()) {
  const coche = iterador.siguiente();
  console.log(coche.obtenerInformacion());
}
```

## 5. Mediador

El patrón Mediador actúa como intermediario entre un grupo de objetos al encapsular cómo interactúan estos objetos. El mediador facilita la comunicación entre los diferentes componentes de un sistema sin necesidad de hacer referencia directa entre sí.

### 5.1. Componentes del patrón Mediador

- *Mediador*

El mediador gestiona el control central de las operaciones. Contiene una interfaz para comunicarse con los objetos Participante y tiene una referencia a cada objeto Participante.

- *Participante*

Los participantes son los objetos que están siendo mediados, cada participante tiene una referencia al mediador.

### 5.2. Beneficios del patrón Mediador

- **Control centralizado**

Centralizar la comunicación dentro del Mediador permite un mejor control y coordinación de las interacciones entre los componentes. El Mediador puede gestionar la distribución de mensajes, priorizar mensajes y aplicar lógica específica según los requisitos del sistema.

- **Comunicación simplificada**

Los mediadores simplifican la lógica de la comunicación, ya que los componentes envían mensajes al mediador en lugar de lidiar con la complejidad de la comunicación directa. Esto simplifica la interacción entre componentes y permite un mantenimiento y actualizaciones más fáciles.

- **Reutilizabilidad del mediador**

El Mediador se puede reutilizar en varios componentes y escenarios, lo que permite un único punto de control para diferentes partes de la aplicación. Esta reutilización promueve la coherencia y ayuda a gestionar el flujo de comunicación de manera eficiente.

- **Promueve la mantenibilidad**

El patrón Mediador promueve la mantenibilidad al reducir la complejidad de la comunicación directa entre componentes. A medida que el sistema crece, se pueden realizar cambios y actualizaciones dentro del Mediador sin afectar los componentes individuales, lo que hace que el mantenimiento sea más fácil y menos propenso a errores.

### 5.3. Ejemplo

```javascript
var Participante = function (nombre) {
    this.nombre = nombre;
    this.salaDeChat = null;
};

Participante.prototype = {
    envia: function (mensaje, para) {
        this.salaDeChat.envia(mensaje, this, para);
    },
    recibe: function (mensaje, de) {
        console.log(de.nombre + " para " + this.nombre + ": " + mensaje);
    }
};

var SalaDeChat = function () {
    var participantes = {};

    return {

        unirse: function (participante) {
            participantes[participante.nombre] = participante;
            participante.salaDeChat = this;
        },

        envia: function (mensaje, de, para) {
            if (para) {                      // mensaje único
                para.recibe(mensaje, de);
            } else {                       // mensaje de difusión
                for (key in participantes) {
                    if (participantes[key] !== de) {
                        participantes[key].recibe(mensaje, de);
                    }
                }
            }
        }
    };
};

function ejecuta() {

    var yoko = new Participante("Yoko");
    var john = new Participante("John");
    var paul = new Participante("Paul");
    var ringo = new Participante("Ringo");

    var salaDeChat = new SalaDeChat();
    salaDeChat.unirse(yoko);
    salaDeChat.unirse(john);
    salaDeChat.unirse(paul);
    salaDeChat.unirse(ringo);

    yoko.envia("Todo lo que necesitas es amor.");
    yoko.envia("Te amo John.");
    john.envia("Oye, no es necesario transmitir", yoko);
    paul.envia("¡Ja, escuché eso!");
    ringo.envia("Paul, ¿qué opinas?", paul);
}
```

## 6. Recuerdo

El patrón de diseño Recuerdo permite capturar y restaurar el estado de un objeto en un momento posterior sin exponer su estructura interna. El Recuerdo es un objeto separado que almacena el estado del objeto original.

### 6.1. Componentes del patrón Recuerdo

- *Creador*

Este es el objeto que se guarda. Crea un objeto Recuerdo para almacenar su estado interno.

- *Recuerdo*

El Recuerdo es responsable de almacenar el estado del originador. Tiene métodos para recuperar y establecer el estado del originador pero no expone la estructura interna del originador.

- *Vigilante*

El Vigilante es responsable de realizar un seguimiento y gestionar los Recuerdos. No modifica ni inspecciona el contenido de los Recuerdos.

### 6.2. Beneficios del patrón Recuerdo

- **Preservación y Restauración del Estado**

Los recuerdos permiten capturar y restaurar el estado interno de un objeto en un momento posterior.

- **Operaciones de deshacer/rehacer**

Recuerdo facilita la implementación de la funcionalidad de deshacer y rehacer fácilmente. Dado que el recuerdo almacena el estado del objeto en varios momentos en el tiempo, puede permitir deshacer los cambios realizados en el objeto o rehacer los cambios realizados en el objeto.

- **Desempeño mejorado**

Almacenar el estado del objeto en un Recuerdo permite operaciones de almacenamiento y recuperación más eficientes en comparación con otros enfoques.

- **Diseño flexible**

Proporciona una forma flexible de gestionar el historial del estado de un objeto. El vigilante puede decidir qué estados conservar y cuándo restaurarlos, lo que permite un enfoque personalizable según los requisitos de la aplicación.

### 6.3. Ejemplo

```javascript
// Clase Computadora  (Creador)
class Computador {
    constructor() {
      this.so = '';
      this.version = '';
    }
  
    estableceSO(so, version) {
      this.so = so;
      this.version = version;
    }
  
    obtenEstado() {
      return {
        so: this.so,
        version: this.version
      };
    }
  
    restauraEstado(estado) {
      this.so = estado.so;
      this.version = estado.version;
    }
  }
  
  // Vigilante
  class Vigilante {
    constructor() {
      this.recuerdos = {};
      this.siguienteClave = 1;
    }
  
    agregar(recuerdo) {
      const clave = this.siguienteClave++;
      this.recuerdos[clave] = recuerdo;
      return clave;
    }
  
    obtener(clave) {
      return this.recuerdos[clave];
    }
  }
  
  function ejecuta() {
    const computadora = new Computador();
    const vigilante = new Vigilante();
  
    // Salvamos el estado
    const estadoOriginal = computadora.obtenEstado();
    const clave = vigilante.agregar(estadoOriginal);
  
    // Arruinamos el estado
    computadora.estableceSO('Windows', '11');
  
    // Recuperamos el estado original
    const estadoRestaurado = vigilante.obtener(clave);
    computadora.restauraEstado(estadoRestaurado);
  
    console.log(computadora.obtenEstado()); // Salida: { so: '', version: '' }
  }
  
  ejecuta();
```

## 7. Observador

El patrón de observador permite que muchos objetos se suscriban a eventos transmitidos por otro objeto.

### 7.1. Componentes del patrón Observador

- *Sujeto*

El sujeto es un objeto que implementa una interfaz que permite a los objetos observadores suscribirse a él y enviar notificaciones a los observadores cuando cambia su estado.

- *Observadores*

El observador se suscribe al sujeto y normalmente tiene una función que se invoca cuando el sujeto lo notifica.

### 7.2. Beneficios del patrón Observador

- **Manejo de eventos simplificado**

El patrón Observador puede simplificar los mecanismos de manejo de eventos, ya que los eventos pueden tratarse como notificaciones a los observadores sobre un cambio de estado.

- **Reduce el código duplicado**

En lugar de duplicar el mismo código para responder a cambios de estado en varios lugares, el patrón Observador permite un lugar centralizado para gestionar estas respuestas, promoviendo un código más limpio y fácil de mantener.

- **Soporte para comunicación por radiodifusión**

El patrón Observador facilita un modelo de comunicación "uno a muchos", donde un único evento desencadena acciones en múltiples observadores. Esto es útil en escenarios donde varios componentes necesitan reaccionar ante un cambio de estado.

- **Modularidad y reutilización**

Los observadores se pueden reutilizar en diferentes temas, promoviendo la modularidad y la reutilización del código. Esto permite un código más flexible y mantenible.

### 7.3. Ejemplo

```javascript
function HacerClic() {
    this.manejadores = [];  // observadores
}

HacerClic.prototype = {

    subscribir: function (fn) {
        this.manejadores.push(fn);
    },

    abandonar: function (fn) {
        this.manejadores = this.manejadores.filter(
            function (elemento) {
                if (elemento !== fn) {
                    return elemento;
                }
            }
        );
    },

    disparar: function (o, esteObj) {
        var alcance = esteObj || window;
        this.manejadores.forEach(function (elemento) {
            elemento.call(alcance, o);
        });
    }
}

function ejecutar() {

    var hacerClicManejador = function (elemento) {
        console.log("disparado: " + elemento);
    };

    var hacerClic = new HacerClic();

    hacerClic.subscribir(hacerClicManejador);
    hacerClic.disparar('evento #1');
    hacerClic.abandonar(hacerClicManejador);
    hacerClic.disparar('evento #2');
    hacerClic.subscribir(hacerClicManejador);
    hacerClic.disparar('evento #3');
}

ejecutar();
```

## 8. Estado

El patrón Estado es un patrón de diseño de comportamiento que le permite tener un objeto base y proporcionarle funcionalidad adicional según su estado. Este patrón es particularmente útil cuando un objeto necesita cambiar su comportamiento en función de su estado interno.

### 8.1. Componentes del patrón Estado

- *Estado*

Este es el objeto que encapsula los valores del Estado y el comportamiento asociado del Estado.

- *Contexto*

Este es el objeto que mantiene una referencia a un objeto Estado que define el Estado actual. También incluye una interfaz que permite que otros objetos de estado cambien su estado actual a un estado diferente.

### 8.2. Beneficios del patrón Estado

- **Código modular y organizado**

Cada Estado está encapsulado dentro de su propia clase, lo que hace que el código sea modular y fácil de administrar.

- **No hay necesidad de declaraciones switch**

Las declaraciones switch también se pueden usar para cambiar el comportamiento de un objeto, pero el problema con este método es que las declaraciones switch pueden volverse muy largas a medida que su proyecto escala. El patrón Estado soluciona este problema.

- **Promueve la reutilización**

Los estados se pueden reutilizar en diferentes contextos, lo que reduce la duplicación de código.

- **Simplifica las pruebas**

Probar clases de estados individuales de forma aislada es más fácil y eficaz que probar un objeto monolítico con lógica condicional compleja.

### 8.3. Ejemplo

```javascript
class Coche {
    constructor() {
      this.estado = new AparcadoEstado();
    }
  
    establecerEstado(estado) {
      this.estado = estado;
      console.log(`Estado cambiado a : ${estado.constructor.name}`);
    }
  
    aparcar() {
      this.estado.aparcar(this);
    }
  
    conducir() {
      this.estado.conducir(this);
    }
  
    darMarchaAtras() {
      this.estado.darMarchaAtras(this);
    }
  }
  
  class AparcadoEstado {
    aparcar(coche) {
      console.log("El coche ya está en el estacionamiento");
    }
  
    conducir(coche) {
      console.log("Cambiando a conducir");
      coche.establecerEstado(new ConduciendoEstado());
    }
  
    darMarchaAtras(coche) {
      console.log("Cambiando a dar marcha atras");
      coche.establecerEstado(new DandoMarchaAtrasEstado());
    }
  }
  
  class ConduciendoEstado {
    aparcar(coche) {
      console.log("Cambiando a estacionamiento");
      coche.establecerEstado(new AparcadoEstado());
    }
  
    conducir(coche) {
      console.log("El coche ya está conduciéndose");
    }
  
    darMarchaAtras(coche) {
      console.log("Cambiando a dar marcha atras");
      coche.establecerEstado(new DandoMarchaAtrasEstado());
    }
  }
  
  class DandoMarchaAtrasEstado {
    aparcar(coche) {
      console.log("Cambiando a estacionamiento");
      coche.establecerEstado(new AparcadoEstado());
    }
  
    conducir(coche) {
      console.log("Cambiando a conducir");
      coche.establecerEstado(new ConduciendoEstado());
    }
  
    darMarchaAtras(coche) {
      console.log("El coche ya está dando marcha atras");
    }
  }
  
  // Ejemplo de uso
  const coche = new Coche();
  
  coche.conducir();
  coche.darMarchaAtras();
  coche.conducir();
  coche.aparcar();
  coche.conducir();  // Intentando conducir estando estacionado
```

## 9. Estrategia

El patrón Estrategia es esencialmente un patrón de diseño que le permite tener un grupo de algoritmos (estrategias) que son intercambiables.

### 9.1. Components del patrón Estrategia

- *Estrategia*

Este es un algoritmo que implementa la interfaz Estrategia.

- *Contexto*

Este es el objeto que mantiene una referencia a la estrategia actual. Define una interfaz que permite al cliente cambiar la estrategia actual a una estrategia diferente o recuperar cálculos de la estrategia actual referenciada.

### 9.2. Beneficios del patrón Estrategia

- **Algoritmos dinámicamente intercambiables**

Las estrategias se pueden intercambiar en tiempo de ejecución, lo que permite la selección dinámica de algoritmos en función de diferentes condiciones o requisitos. Esto es particularmente útil cuando el algoritmo apropiado puede variar según la entrada del usuario, los ajustes de configuración u otros factores.

- **Flexibilidad y mantenibilidad**

Las estrategias se pueden cambiar o ampliar sin modificar el contexto en el que se utilizan. Esto hace que el sistema sea más flexible y más fácil de mantener, ya que los cambios en una estrategia no afectan a las demás.

- **Simplifica las pruebas**

Probar estrategias de forma aislada es más fácil ya que cada estrategia es una clase separada. Esto permite realizar pruebas específicas y garantiza que los cambios en una estrategia no afecten inadvertidamente a otras.

- **Reutilizabilidad**

Las estrategias se pueden reutilizar en múltiples contextos o aplicaciones, promoviendo la reutilización del código y minimizando la redundancia.

### 9.3. Ejemplo

```javascript
class ClienteNormalEstrategia {
  calculaPrecio(precioLibro) {
    // Los clientes normales obtienen un descuento fijo del 10%
    return precioLibro * 0.9;
  }
}

class ClienteImportanteEstrategia {
  calculaPrecio(precioLibro) {
    // Los clientes importantes obtienen un descuento fijo del 20%
    return precioLibro * 0.8;
  }
}

class Libreria {
  constructor(preciosEstrategia) {
    this.preciosEstrategia = preciosEstrategia;
  }

  estableceEstrategiaDePrecios(preciosEstrategia) {
    this.preciosEstrategia = preciosEstrategia;
  }

  calculaPrecio(precioLibro) {
    return this.preciosEstrategia.calculaPrecio(precioLibro);
  }
}

// Uso
const clienteNormalEstrategia = new ClienteNormalEstrategia();
const clienteImportanteEstrategia = new ClienteImportanteEstrategia();

const libreria = new Libreria(clienteNormalEstrategia);

console.log('Precio para el cliente normal:', libreria.calculaPrecio(50)); // Salida: 45 (10% de descuento)
libreria.estableceEstrategiaDePrecios(clienteImportanteEstrategia);
console.log('Precio para el cliente importante:', libreria.calculaPrecio(50)); // Salida: 40 (20% de descuento)
```

## 10. Método Plantilla

El método de plantilla es un patrón de diseño de comportamiento que define el esqueleto del programa de un algoritmo en un método, pero permite que las subclases anulen pasos específicos del algoritmo sin cambiar su estructura.

### 10.1. Componentes del patrón Método Plantilla

- *Clase abstracta*

La clase abstracta es la plantilla del algoritmo. Define una interfaz para que el cliente invoque su método. También contiene todas las funciones que las subclases pueden sobreescribir.

- *Clase concreta*

Implementa los pasos definidos en la clase abstracta y puede realizar cambios en los pasos.

### 10.2. Beneficios del patrón Método Plantilla

- **Reutilización del código**

El patrón promueve la reutilización del código al definir el esqueleto del algoritmo en una clase base. Las subclases pueden reutilizar esta estructura y solo necesitan proporcionar implementaciones para pasos específicos.

- **Facil mantenimiento**

Realizar cambios en el algoritmo se simplifica porque las modificaciones solo deben realizarse en un lugar (el método de plantilla en la clase abstracta) en lugar de en varias subclases. Esto reduce las posibilidades de errores y hace que el mantenimiento sea más sencillo.

- **Extensión y variación**

El patrón permite una fácil extensión y variación del algoritmo. Las subclases pueden anular ciertos pasos para proporcionar implementaciones personalizadas, extendiendo o modificando efectivamente el comportamiento del algoritmo sin alterar su estructura central.

- **Flujo de control**

El método de plantilla define el flujo de control del algoritmo, lo que facilita la gestión y comprensión de la secuencia de operaciones del algoritmo.

### 10.3. Ejemplo

```javascript
cclass Camara {
  // Método de plantilla que define los pasos comunes para capturar una fotografía.
  capturaFoto() {
    this.enciende();
    this.inicializa();
    this.fijaExposicion();
    this.captura();
    this.apaga();
  }

  // Pasos comunes para encender una camara
  enciende() {
    console.log('Encendiendo la cámara');
  }

  // Método abstracto para inicializar la cámara (para ser sobreescrito por subclases)
  inicializa() {
    throw new Error('Método abstracto: inicializa() debe ser implementado por las subclases');
  }

  // Método abstracto para configurar la exposición (para ser anulado por subclases)
  fijaExposicion() {
    throw new Error('Método abstracto: fijaExposicion() debe ser implementado por las subclases');
  }

  // Pasos comunes para capturar una foto
  captura() {
    console.log('Capturando una foto');
  }

  // Pasos comunes para apagar la cámara
  apaga() {
    console.log('Apagando la cámara');
  }
}

class CamaraReflexDigitalObjetivoUnico extends Camara {
  inicializa() {
    console.log('Inicializando la cámara Réflex Digital de Objetivo Único');
  }

  fijaExposicion() {
    console.log('Fijando la exposición de la cámara Réflex Digital de Objetivo Único');
  }
}

class CamaraSinEspejo extends Camara {
  inicializa() {
    console.log('Inicializando la cámara Sin Espejo');
  }

  fijaExposicion() {
    console.log('Fijando la exposición de la cámara Sin Espejo');
  }
}

// Uso
const camaraReflexDigitalObjetivoUnico = new CamaraReflexDigitalObjetivoUnico();
console.log('Capturando foto con la cámara Réflex Digital de Objetivo Único:');
camaraReflexDigitalObjetivoUnico.capturaFoto();
console.log('');

const camaraSinEspejo = new CamaraSinEspejo();
console.log('Capturando foto con la cámara Sin Espejo:');
camaraSinEspejo.capturaFoto();
```

## 11. Visitante

El patrón de diseño de visitante es un patrón de diseño de comportamiento que le permite separar algoritmos u operaciones del objeto sobre el que operan.

### 11.1 Componentes del patrón Visitante

- *ObjetoEstructura*

Mantiene una colección de elementos sobre los que se puede iterar.

- *Elementos*

El elemento contiene un método de aceptación que acepta los objetos del visitante.

- *Visitante*

Implementa un método de visita donde el argumento del método es el elemento que se visita. Así es como se realizan los cambios en el elemento.

### 11.2. Beneficios del patrón Visitante

- **Principio abierto/cerrado**

El patrón se alinea con el Principio Abierto/Cerrado, que establece que las entidades de software (clases, módulos, funciones) deben estar abiertas a la extensión pero cerradas a la modificación. Puede introducir nuevas operaciones (nuevos visitantes) sin modificar la estructura o los elementos del objeto existente.

- **Extensibilidad**

Puede introducir nuevos comportamientos u operaciones agregando nuevas implementaciones de visitantes sin modificar los elementos existentes o la estructura del objeto. Esto hace que el sistema sea más extensible, lo que permite agregar fácilmente nuevas funciones o comportamientos.

- **Comportamiento centralizado**

El patrón Visitante centraliza el código relacionado con el comportamiento dentro de las clases de visitante. Cada visitante encapsula un comportamiento específico, que puede reutilizarse en diferentes elementos, promoviendo la reutilización y la modularidad del código.

- **Consistencia en las operaciones**

Con el patrón Visitante, puede asegurarse de que una operación específica (método de visitante) se aplique de manera consistente en varios elementos, ya que el método de aceptación de cada elemento llama al método de visitante apropiado para ese tipo de elemento.

### 11.3 Ejemplo

```javascript
class GimnasioMiembro {
    constructor(nombre, tipoSubscripcion, puntuacionFitness) {
        this.nombre = nombre;
        this.tipoSubscripcion = tipoSubscripcion;
        this.puntuacionFitness = puntuacionFitness;
    }

    aceptar(visitante) {
        visitante.visit(this);
    }

    obtenNombre() {
        return this.nombre;
    }

    obtenTipoSubscripcion() {
        return this.tipoSubscripcion;
    }

    obtenPuntuacionFitness() {
        return this.puntuacionFitness;
    }

    establecePuntuacionFitness(puntuacion) {
        this.puntuacionFitness = puntuacion;
    }
}

class EvaluacionFitness {
    visit(miembro) {
        miembro.establecePuntuacionFitness(miembro.obtenPuntuacionFitness() + 10);
    }
}

class DescuentoMembresia {
    visit(miembro) {
        if (miembro.obtenTipoSubscripcion() === 'Premium') {
            console.log(`${miembro.obtenNombre()}: Puntuación Fitness  - ${miembro.obtenPuntuacionFitness()}, Tipo membresía - ${miembro.obtenTipoSubscripcion()}, ¡Elegible para un 10% de descuento!`);
        } else {
            console.log(`${miembro.obtenNombre()}: Puntuación Fitness - ${miembro.obtenPuntuacionFitness()}, Tipo membresía - ${miembro.obtenTipoSubscripcion()}, No elegible para un descuento.`);
        }
    }
}

function ejecuta() {
    const miembrosGimnasio = [
        new GimnasioMiembro("Alice", "Basic", 80),
        new GimnasioMiembro("Bob", "Premium", 90),
        new GimnasioMiembro("Eve", "Basic", 85)
    ];

    const evaluacionFitness = new EvaluacionFitness();
    const descuentoMembresia = new DescuentoMembresia();

    for (let i = 0; i < miembrosGimnasio.length; i++) {
        const miembro = miembrosGimnasio[i];

        miembro.aceptar(evaluacionFitness);
        miembro.aceptar(descuentoMembresia);
    }
}

ejecuta();
```

---
