---
chapter: 19
pageNumber: 139
description: En este capítulo, profundizaremos en los aspectos críticos de las pruebas en el desarrollo web. Estas habilidades son indispensables para garantizar la confiabilidad y funcionalidad de las aplicaciones web. Exploremos el mundo de las pruebas unitarias utilizando varias herramientas y marcos.
---

# Pruebas

## Pruebas unitarias

Las pruebas unitarias son una práctica fundamental en el desarrollo web. Implica probar componentes o funciones individuales para garantizar que funcionen como se espera. Esta práctica está incluida en un enfoque de desarrollo de software llamado desarrollo basado en pruebas (TDD), que consiste en escribir pruebas unitarias a partir de los requisitos del software primero y luego escribir el código. Veamos ahora por qué deberíamos escribir pruebas unitarias.

## ¿Por qué escribir pruebas unitarias?

Las pruebas unitarias se utilizan ampliamente por las siguientes razones:

- En TDD, los requisitos del software se convierten en casos de prueba específicos. Luego, el software se mejora para pasar las nuevas pruebas.
- En otras palabras, para verificar que partes individuales del código base estén funcionando correctamente.
- Permite la modificación del código sin afectar la funcionalidad de otras unidades o del software.
- Proporciona una red de seguridad al refactorizar o realizar cambios.
- Ayuda a documentar el comportamiento esperado de las funciones y los componentes.
- Ayuda a que no se repitan los módulos porque cada módulo tiene su propia responsabilidad.

## Beneficios de las pruebas unitarias

La principal ventaja de las pruebas unitarias es su enfoque preciso. Dado que prueban una sola función, brindan una respuesta precisa. Si una prueba unitaria falla, en la mayoría de los casos, puede estar seguro de que la función específica que se está probando es el problema.

- Las pruebas unitarias ayudan a encontrar y corregir errores de manera rápida y sencilla.
- Las pruebas unitarias contribuyen a una mayor calidad del código.
- Las pruebas unitarias contribuyen a una mejor arquitectura de la aplicación.
- Las pruebas unitarias actúan como documentación.

## Mejores prácticas para crear pruebas unitarias

Para asegurarse de tener buenas pruebas unitarias, siga estas mejores prácticas:

- Escriba las pruebas durante el desarrollo, no después
- Los casos de prueba no deben duplicar la lógica de implementación.
- Los casos de prueba deben exhibir el mismo comportamiento siempre que su código no cambie.
- Use una convención de nomenclatura consistente para los casos de prueba
- Evite usar expresiones de lógica condicional en las pruebas unitarias
- Si es posible, automatice las pruebas unitarias

## Marcos de prueba

Los marcos de prueba agilizan el proceso de redacción y ejecución de pruebas. Dos marcos populares son Jest y Mocha.

### Jest

Jest es un popular marco de pruebas todo en uno y sin configuración. Es adecuado tanto para pruebas unitarias como de integración. Veamos cómo empezar con Jest.

Instale Jest usando npm o hilo:

```sh
npm install --save-dev jest
```

Cree un archivo de prueba (por ejemplo, `miFuncion.test.js`) para la función que desea probar.

Escriba un caso de prueba usando la función de prueba de Jest:

```javascript
const miFuncion = require('./miFuncion');

test('debe devolver la suma de dos números', () => {
  expect(miFuncion(2, 3)).toBe(5);
});
```

Ejecute pruebas usando el comando jest:

```sh
npx jest
```

### Mocha

Mocha es un marco de prueba flexible. Proporciona la estructura para ejecutar pruebas, pero requiere bibliotecas adicionales para las aserciones y burlas.

Comenzando con Mohca

Instale Mocha y una biblioteca de aserciones como Chai:

```sh
npm install --save-dev mocha chai
```

Cree un directorio `test` y agregue sus archivos de prueba.

Escriba sus casos de prueba utilizando las funciones describe e it de Mocha y las funciones assertion de Chai.

```javascript
const chai = require('chai');
const expect = chai.expect;
const myFunction = require('./myFunction');

describe('myFunction', () => {
  it('debe devolver la suma de dos números', () => {
    expect(myFunction(2, 3)).to.equal(5);
  });
});
```

## Conclusión

En este capítulo, hemos explorado los aspectos básicos de las pruebas en el desarrollo web y hemos analizado la importancia de las pruebas unitarias y otros marcos y herramientas de prueba que son fundamentales para cualquier desarrollador web. Con una práctica constante y acceso al conjunto de herramientas adecuado, se puede escribir código confiable y garantizar que las aplicaciones funcionen de manera óptima.