---
layout: editorial
title: Creational Design Patterns in Javascript
description: Creational design patterns focus on object creation mechanisms
---

# Creational Design Patterns

## 1. Factory Method

A factory function is just a function that creates an object and returns it. It is a creational design pattern that allows you to create objects without specifying the exact class or constructor to be used. It centralizes object creation logic, allowing for flexibility in creating different types of objects. 

Lets say you have a website and you want to create a method that will allow you to easily create html objects and add it to the DOM. A factory is the perfect solution for this and here is how we can implement it 


Factories work very simililarly to Classes however when creating objects with factories we don't have to specify a specific class or constructor, It simply creates an interface for creating objects. There are four main benefits to factories 

### 1.1. Benefits of Factories

**Abstraction of Object Creation**

It removes the complexity of creating an object, allowing the client code to just focus on the created objects. 

**Flexibility and Customization**

Factories enable customization of the object creation process, allowing for variations in the created objects

**Encapsulation of Creation Logic**

The creation logic is encapsulated within the factory, making it easier to modify or extend the creation process without affecting client code

**Complex Object Creation**

Factories are useful when the creation of objects is complex, involves multiple steps,  or requires certain conditions to be met. 

### 1.2. When should you use a factory

* The object creation process is complex or requires different steps.
* There are variations or configurations in object creation based on specific conditions.
* You want to abstract the object creation logic from the client, allowing for future changes or improvements in the creation process.

### 1.3. Example

```javascript
    function elementFactory(type, text, color){
        const newElement = document.createElement(type)
        newElement.innerText = text 
        newElement.style.color = color 
        document.body.append(newElement)
        
        
    function setText(newText) {
         newElement.innerText = newText;
    }
        
    function setColor(newColor) { 
        newElement.innerText = newColor; 
    }
        
    return {
        newElement, 
        setText,
        setColor,
        }

    }

const h1Tag = elementFactory('h1','Initial Text','Blue'); 

h1Tag.setText('Hello world');

h1Tag.setColor('Red');
```

The `elementFactory` function is a factory in Javascript that creates and configures a DOM element based on the parameters the client passes. It will return an object that contains the created DOM element and methods that can be used to change the text or the color of the element in the future. 


## 2. Abstract Factory Method

Abstract factories are another creational design pattern. Its main goal is to provide an interface for creating families of related or dependent objects without specifying their concrete classes. This pattern ensures that the created objects are compatible and work together. 

### 2.1. The 4 Components of an Abstract Factory

*Abstract Factories*

* This defines the interface for creating the abstract products, which are related families of objects (e.g. UI components)
* The abstract factory declares creation methods for each type of product in the family 

*Concreate Factories*

* These are classes that implement the abstract factory interface, providing specific implementations for creating the concrete products
* Each concrete factory creates a family of related products (e.g. UI factory might create a button or checkbox).

*Abstract Products*

* These are the interfaces or base classes for the products that the abstract factory creates.
* Each product type in the family has its own abstract product definition (e.g., Button, Checkbox).

*Concrete Products*

* These are the actual implementations of the abstract products. Each concrete factory creates its own set of concrete products.
* Concrete products implement the abstract product interfaces defined for their family (e.g., HTMLButton, WindowsButton).

### 2.2. Benefits of Abstract Factories

**Consistency**

It ensures that created objects are compatible and follow a consistent theme or style.

**Isolation of Responsibilities** 

It isolates the creation of objects from the client code, promoting a clean separation of concerns.

**Flexibility and Scalability**

It allows for easy addition of new product families without modifying existing client code.

### 2.3. Example 

```javascript 
 // Abstract Factory: UIFactory
class UIFactory {
    createButton() {
        throw new Error('createButton method must be overridden');
    }

    createCheckbox() {
        throw new Error('createCheckbox method must be overridden');
    }
}

// Concrete Factory: WindowsUIFactory
class WindowsUIFactory extends UIFactory {
    createButton() {
        return new WindowsButton();
    }

    createCheckbox() {
        return new WindowsCheckbox();
    }
}

// Concrete Factory: MacUIFactory
class MacUIFactory extends UIFactory {
    createButton() {
        return new MacButton();
    }

    createCheckbox() {
        return new MacCheckbox();
    }
}

// Abstract Product: Button
class Button {
    render() {
        throw new Error('render method must be overridden');
    }
}

// Concrete Product: WindowsButton
class WindowsButton extends Button {
    render() {
        console.log('Rendering a Windows button');
    }
}

// Concrete Product: MacButton
class MacButton extends Button {
    render() {
        console.log('Rendering a Mac button');
    }
}

// Abstract Product: Checkbox
class Checkbox {
    render() {
        throw new Error('render method must be overridden');
    }
}

// Concrete Product: WindowsCheckbox
class WindowsCheckbox extends Checkbox {
    render() {
        console.log('Rendering a Windows checkbox');
    }
}

// Concrete Product: MacCheckbox
class MacCheckbox extends Checkbox {
    render() {
        console.log('Rendering a Mac checkbox');
    }
}

// Usage
const windowsFactory = new WindowsUIFactory();
const macFactory = new MacUIFactory();

const windowsButton = windowsFactory.createButton();
windowsButton.render();  // Output: Rendering a Windows button

const macCheckbox = macFactory.createCheckbox();
macCheckbox.render();  // Output: Rendering a Mac checkbox
```

Here you can see that UIFactory is defined as the abstract factory with methods to create bottons and checkboxes


## 3. Builder 

The goal of a builder is to sepreate the construction of an object from its representation. What the builder pattern does is basically allow the client to construct a complex object by just passing in the type and content of the object only. The client does not have to worry about the construction details.

## 3.1. The 4 Components of a Builder

*Builder*

* An interface or class that defines the construction steps needed to create the object
* The builder usually contains a series of methods to build various parts of the object

*Concrete Builder*

* Implements methods from the builder interface to construct parts of the object 

*Director (Optional)* 

* This is not always necessary but can help with constructing the final object using a specfic construction process 

*Object* 

* Representation of the final product 
* Contains parts that were constructed by the builder

## 3.2. Benefits of the Builder Pattern 

**Separation of Concerns**

The Builder pattern separates the construction of a complex object from its representation, allowing different implementations of builders to vary the internal representation.

**Flexible Object Creation**

It allows for the creation of different configurations of a complex object by using a common construction process. Builders can be tailored to create specific variations of the object

**Improved Readability**

Using a builder can improve code readability by clearly outlining the steps needed to construct an object. It's easy to understand what each step contributes to the final object.

**Parameterized Construction**

Builders allow you to construct an object by passing parameters to the construction steps, enabling fine-grained control over the object's creation and configuration.

**Reusability**

Builders can be reused to create multiple instances of the complex object with different configurations, promoting code reuse and minimizing duplication of construction logic.

## 3.3. Example 

```Javascript 

//Builder
class ComputerBuilder {
    buildCPU() {}
    buildRAM() {}
    buildStorage() {}
    getResult() {}
}

//Concrete Builders
class GamingComputerBuilder extends ComputerBuilder {
    // Implement specific steps to build a gaming computer
}

class OfficeComputerBuilder extends ComputerBuilder {
    // Implement specific steps to build an office computer
}

//Object class
class Computer {
    constructor() {
        this.parts = [];
    }

    addPart(part) {
        this.parts.push(part);
    }
}

// Director (Optional)
class ComputerAssembler {
    constructor(builder) {
        this.builder = builder;
    }

    assembleComputer() {
        this.builder.buildCPU();
        this.builder.buildRAM();
        this.builder.buildStorage();
        return this.builder.getResult();
    }
}

```

## 4. Singleton

A singleton is an object that can only be instantiated once. Singletons are useful when system wide actions need to be coordinated from a single central place. Singletons reduce the need for global variables which is particularly important in javascript because it limits namespace pollution.

## 4.1. Components of a Singleton

*Anonymous Function*

A singleton is implemented using a anonymous function

*getInstance Function*

This is a function which returns the unique instantiated object

*Constructor (Optional)* 

In javascript, a constructor is not necessary for implementing the singleton pattern but having a constructor is common because it allows you to configure the singleton and add initialization logic. 

## 4.2. Benefits of a Singleton 

**Reduce Global Variables**

Singletons can help reduce the number of global variables required in your program, promoting better code organization and maintainability. 

**Memory Efficent**

Because a Singleton ensures there is only ever one instance that exists at a time, memory is saved because you avoid having multiple instances of the same class.

**Global Point of Access**

Singletons provide a global point of access to the instance. This allows other parts of the program to access and use the same instance without needing to pass it around. 

**Resource Sharing**

Singletons are especially useful when it comes to tasks like managing shared resources. Singletons can be used to manage database connections, file handlers, and even thread pools, ensuring that these resources are shared efficiently acrosss the application. 

## 4.3. Example 

```javascript

class Singleton {
  constructor() {
    const privateVariable = 'This is a private variable';

    function privateMethod() {
      console.log('This is a private method.');
    }

    return {
      publicMethod: function() {
        console.log('This is a public method.');
      },
      publicVariable: 'I am public'
    };
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const singletonInstance1 = Singleton.getInstance();
const singletonInstance2 = Singleton.getInstance();

console.log(singletonInstance1 === singletonInstance2); // Outputs: true

```

## 5. Prototype 

The prototype pattern is an alternative way to implement inheritance but the main differnce is instead of inheriting properties from a class, objects inherit properties from a prototype object. The prototype pattern is also reffered to as the properties pattern and Javascript has native support for protoypes. In Javascript, each object has a prototype (reference to another object). When you attempt to access a property that does not exist in the object itself Javascript will look for it in the object's prototype and continue up the prototype chain until it finds it or reaaches the end of the chain. 

## 5.1. Components of the Prototype Pattern

*Prototype Object* 

Contains the properties and methods that all the new instances will inherit

*Client*

The client is responsible for creating new objects based on the prototype. The client can create new instances based on the prototype and modify their
properties accordingly. 

*Clone/Creation Mechanism*

 The mechanism used to create a new object based on the prototype. In Javascript this can be achieved using the `Object.create()` function. 

## 5.2. Benefits of the Prototype Pattern 

**Efficient Instance Creation**

Creating new instances of the Prototyope is more efficient that using traditional classes and constructors. Objects are created by cloning the prototype, which reduces the need for setting up classes and initialization logic. 

**Code Reusability**

The Prototype pattern allows you to define a set of default properties and methods in a prototype object. This allows multiple instances to share the same behaviour and structure without duplicating the code. This also reduces memory usage since each instance does not need to store duplicates of the prototypes properties. 

**Flexible Object Creation**

Objects created using the Prototype pattern can be easily customized by modifying their properies or adding new properties specific to the instance.

**Dynamic Runtime Changes** 

Changes made to the prototype object at runtime are reflected in all instances based on the prototype. This behavior allows for updates and modifications to the prototype, impcating all instances sharing the same prototype. 


## 5.3. Example 

```javascript 

const cameraPrototype = {
    model = 'default',
    make = 'default',
    shutter: function () {
        console.log(`The ${this.make} ${this.model} has taken a photo`);
    }
};

const camera1 = Object.create(cameraPrototype);
camera1.model = 'X-Pro 3';
camera1.make = 'Fujifilm';

const camera1 = Object.create(cameraPrototype);
camera1.model = 'R5';
camera1.make = 'Canon';


```

---

