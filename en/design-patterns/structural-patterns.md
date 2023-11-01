---
layout: editorial
title: Structural Design Patterns in Javascript
description: Focus on how classes and objects are composed to form larger structures
chapter: 23
pageNumber: 205
---

# Structural Design Patterns 

Focus on how classes and objects are composed to form larger structures

## 1. Adapter 

The Adapter is a structural design pattern that enables you to make make different interfaces with different methods work together without changing their code. The purpose of an Adapter is to make two incompatible interfaces work together seamlessly. 

## 1.1 Components of the Adapter 

*Target Interface/Class* 

This is the interface or class that the client will work with. It contains all the methods and properties that the client code will use. 

*Adaptee*

The Adaptee is the old interface/class that contains properties and methods that are incompatible with the new interface/class. 

*Adapter* 

The Adapter is what bridges the gap between the Adaptee and the Target interface/class 


## 1.2. Benefits of Adapters 

**Easy Integration**

Adapters create an easy way for new code or systems to interact with existing ones. By using Adapters, integrating new code becomes smoother and less error-prone. 

**Compatibility and Reusability**

Adapters promote code reuse and extends the usability of existing code by making older code compatible with newer code. 

**Gradual System Integration**

In situations where a new system needs to be implemented gradually, Adapters can serve as intermediaries, allowing new features to come in slowly while maintaining compatibility with the existing system. 

**Improved Testability**

Adapters facilitate easier testing by allowing mocking or stubbing of the adaptee during testing of the client code. This improves the testability of the client code and helps in wrtiting more comprehensible unit tests. 


## 1.3. Example 

```javascript 
// Adaptee: EU charging brick
class EUChargingBrick {
  chargeWithEUPlug() {
    console.log('Charging with EU plug');
  }
}

// Adaptee: US charging brick
class USChargingBrick {
  chargeWithUSPlug() {
    console.log('Charging with US plug');
  }
}

// Target: Common charging interface expected by the client
class ChargingInterface {
  charge() {
    console.log('Charging...');
  }
}

// Adapter for EU charging brick
class EUChargingAdapter extends ChargingInterface {
  constructor(euChargingBrick) {
    super();
    this.euChargingBrick = euChargingBrick;
  }

  charge() {
    this.euChargingBrick.chargeWithEUPlug();
  }
}

// Adapter for US charging brick
class USChargingAdapter extends ChargingInterface {
  constructor(usChargingBrick) {
    super();
    this.usChargingBrick = usChargingBrick;
  }

  charge() {
    this.usChargingBrick.chargeWithUSPlug();
  }
}

// Client
function chargeDevice(chargingInterface) {
  chargingInterface.charge();
}

// Usage
const euChargingBrick = new EUChargingBrick();
const euAdapter = new EUChargingAdapter(euChargingBrick);

const usChargingBrick = new USChargingBrick();
const usAdapter = new USChargingAdapter(usChargingBrick);

console.log('Charging with EU charging brick:');
chargeDevice(euAdapter);

console.log('Charging with US charging brick:');
chargeDevice(usAdapter);
```

## 2. Bridge 

The Bridge is a structural design pattern that is designed to split a very large class into two separate hierarchies which can be developed independendently. The two hierarchies are referred to as the Abstraction level and the Implementation level. Basically if you have a class that has multiple variants of some functionality, you can use a Bridge pattern to divide and organize the class into two easier to understand hierarchies. 

## 2.1. Components of the Bridge 

*Abstraction* 

This is the high-level interface or abstraction. It defines the abstract functionality that the clients will use. 

*Refined Abstraction* 

These are subclasses or extensions of the abstraction layer. These provide additional features or refinements. It extends the functionality defined by the abstraction. 

*Implementor* 

This is the interface that defines the implementation methods, It usually doesn't mirror the abstraction interface, but its a lower-level interface that the abstraction relies upon. 

*Concrete Implementor* 

Concrete classes that implement the implementor interface. Theses classes provide specific implementations of the methods defined by the implementor interface. 

## 2.2. Benefits of the Bridge Pattern

**Decouples Abstraction from Implementation**

The primary benefit of the Bridge pattern is it splits the abstraction layer from the implementation layer. This allows both sections to evolve independently, making the code base easier to modify. 

**Improves Maintainability** 

Since the code base is split into two sections, making changes to one part of the system is most likely not going to impact the other part. Which makes maintaining the code base easier and more efficient

**Improves Testing**

Testing is a lot easier when you have a bridge pattern in your code base because you can focus on testing the abstraction layer separately from testing the implementation layer. This allows for easier and more targeted testing. 

**Improves Readability**

The Bridge pattern creates a clear hierarchy in the code base. Organzing the code base in this way helps in understanding the relationships between different parts of the system. 

## 2.3. Example 

```javascript 
// Abstraction
class Shape {
  constructor(color) {
    this.color = color;
  }

  draw() {
    console.log(`Drawing a shape with color ${this.color}`);
  }
}

// Implementations
class RedColor {
  applyColor() {
    console.log('Applying red color');
  }
}

class BlueColor {
  applyColor() {
    console.log('Applying blue color');
  }
}

// Bridge
class ShapeWithColor extends Shape {
  constructor(color, colorImplementation) {
    super(color);
    this.colorImplementation = colorImplementation;
  }

  draw() {
    super.draw();
    this.colorImplementation.applyColor();
  }
}

// Usage
const redShape = new ShapeWithColor('red', new RedColor());
const blueShape = new ShapeWithColor('blue', new BlueColor());

redShape.draw();  // Output: Drawing a shape with color red, Applying red color
blueShape.draw(); // Output: Drawing a shape with color blue, Applying blue color
```
## 3. Composite 

The composite design pattern allows for the creation of objects with properties that are primitive items or a collection of objects. Imagine a tree like structure, where you have single objects (leaf nodes) or groups of objects (branches). The composite design pattern allows you to create this type of structure and be able to perform operations on each level in a consistent manner. 

## 3.1 Components of the Composite 

*Component*

This is the interface/class that represents both leaf nodes (individual elements) and composite nodes (collection of elements). The component defines operations that can be applied to both types of nodes. 

*Leaf*

This represents individual objects in the tree that do not have any children. They implement the operations that are defined in the component interface. 

*Composite*

This represents the composites or containers that can hold a collection of leaf nodes or other composite nodes. 


## 3.2. Benefits of Composites 

**Uniformly and Consistency** 

The Composite design pattern provides a uniform way to treat both individual objects and compositions of objects. Clients have one common interface to use to operate on these objects which simplifes the code base and object interactions. 

**Flexibility** 

This design pattern allows for flexibility in adding new types of components or modifying existing ones without affecting the client code. You can introduce new types of leaf or composite objects easily. 


**Simplified Client Code**

The client code doesn't need to distinguish between individual and composite components, making it simpler and more intuitive to work with the structure.


## 3.3. Example 

```javascript 
class SingleBlock {
  constructor(name) {
    this.name = name;
  }

  display() {
    console.log('Block:', this.name);
  }
}

class BlockCollection {
  constructor(name) {
    this.name = name;
    this.blocks = [];
  }

  add(block) {
    this.blocks.push(block);
  }

  remove(block) {
    this.blocks = this.blocks.filter(b => b !== block);
  }

  display() {
    console.log('Block Collection:', this.name);

    for (const block of this.blocks) {
      block.display();
    }
  }
}

// Usage
const block1 = new SingleBlock('Block 1');
const block2 = new SingleBlock('Block 2');
const block3 = new SingleBlock('Block 3');

const blockGroup1 = new BlockCollection('Block Group 1');
blockGroup1.add(block1);
blockGroup1.add(block2);

const blockGroup2 = new BlockCollection('Block Group 2');
blockGroup2.add(block3);

const megaStructure = new BlockCollection('Mega Structure');
megaStructure.add(blockGroup1);
megaStructure.add(blockGroup2);

megaStructure.display();
```

## 4. Decorator 

The Decorator design pattern can be used to modify an objects behavior either statically or dynamically without affecting the behavior of other objects from the same class. Decorators are particularly useful when you want to add features to an object in a flexible and reusable way. 

## 4.1. Components of a Decorator 

*Component Interface*

This defines the logic for the objects that can have resposibilities added to them dynamically. 

*Concrete Components*

This is the initial object to which additional functionalities can be added. 

*Decorator* 

This is an interface that extends the functionality of the concrete components. It has a reference to a component instance and implements the component interface. 

*Concrete Decorators*

These are the concrete implementations of the decorator class, they add specific behavior to the desired component by extending the decorator class. 


## 4.2. Benefits of Decorators 

**Extensibility and Flexibility** 

Decorators allow you to add new functionalities or behaviors to objects dynamically at runtime. This promotes extensibility without modifying the existing codebase and provides flexibility in how you can compose and use these additional functionalities.

**Modularity**

Decorators enable a more modular approach to code by breaking down functionality into smaller, more manageable units. These units can be combined and reused in various ways. 

**Runtime Configuration**

Decorators allow you to dynamically configure an object at runtime. This allows you to add or remove functionalities without impacting the core components or needing to recompile the code. 

**Reduce Subclassing**

Without Decorators, extending functionalities often involves creating numerous subclasses for each combination of behaviors. Decorators eliminate the need for subclasses which results in an cleaner and easier to understand code base. 

## 4.3. Example 

```javascript 
class Coffee {
  cost() {
    return 5;
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 2;
  }
}

class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 1;
  }
}

// Usage
let coffee = new Coffee();
console.log('Cost of plain coffee:', coffee.cost());

let milkCoffee = new MilkDecorator(coffee);
console.log('Cost of milk coffee:', milkCoffee.cost());

let sugarMilkCoffee = new SugarDecorator(milkCoffee);
console.log('Cost of sugar milk coffee:', sugarMilkCoffee.cost());
```

## 5. Facade 

The Facade design pattern is basically a simplified interface that the client can interact with to use other low level operations hidden elsewhere in the code base. This design pattern is often used in systems that are built around a multi-layer architecture. Facades allow the client to perform certain tasks without needing to understand the complexity of the underlying system. 


## 5.1. Components of the Facade 

*Facade*

The facade is the interface that the client will interact with. It provides a simple and unified interface that delegates the clients requests to the appropriate objects within the subsystem

*Subsystem*

The subsystem consists of all the various components and functionalities that the Facade wraps around. The subsystem and the Facade interact with eachother but operate independently. 


## 5.2. Benefits of the Facade 

**Simplified Interface**

The Facade provides a simple and easy to understand interface 

**Code Organization**

The Facade helps organize the code by encapsulating the subsystem's functionality and providing a clear separation of concerns 

**Easier Maintenance**

Changes to the subsystem can be isolated within the facade, reducing the impact on the client code. 


## 5.3. Example 

```javascript 
// Plumbing subsystem
class PlumbingSubsystem {
  constructor() {}

  turnOnWater() {
    console.log('Plumbing: Water turned on');
  }

  turnOffWater() {
    console.log('Plumbing: Water turned off');
  }
}

// Electrical subsystem
class ElectricalSubsystem {
  constructor() {}

  turnOnElectricity() {
    console.log('Electrical: Electricity turned on');
  }

  turnOffElectricity() {
    console.log('Electrical: Electricity turned off');
  }
}

// House facade
class HouseFacade {
  constructor() {
    this.plumbingSubsystem = new PlumbingSubsystem();
    this.electricalSubsystem = new ElectricalSubsystem();
  }

  enterHouse() {
    this.plumbingSubsystem.turnOnWater();
    this.electricalSubsystem.turnOnElectricity();
    console.log('You have entered the house.');
  }

  leaveHouse() {
    this.plumbingSubsystem.turnOffWater();
    this.electricalSubsystem.turnOffElectricity();
    console.log('You have left the house.');
  }
}

// Client
const client = () => {
  const house = new HouseFacade();

  // Enter the house
  house.enterHouse();

  // Leave the house
  house.leaveHouse();
};

// Run the client
client();
```

## 6. Flyweight 

The Flyweight design pattern aims to minimize memory usage or computaional expenses by storing intrinsic values (similar properties) of similar object in an application, reducing the amount of duplicate code. This is particularly useful when dealing with a large number of similar objects in an application. 

## 6.1. Components of a Flyweight 

*FlyweightFactory*

The flyweight factory creates the flyweight objects. It contains a function that will create a flyweight if one does not already exist and it stores newly created flyweights for future request. 

*Flyweight*

The flyweight contains the intrinsic data that will be shared across the application 


## 6.2. Benefits of Flyweights 

**Memory Efficiency**

By sharing intrinsic data among multiple objects, the Flyweight pattern significantly reduces memory usage especially when dealing with a large number of instances. 

**Performance Improvements** 

Due to reduced memory usage, the application's overall performance improves. Lower memory usage typically leads to faster execution times and smoother application performance. 

**Simplifies State Management**

By separating intrinsic data (shared values) and extrinisc data (unique values), Flyweights simplify the management of these states. It allows for a cleaner separation of concerns and more organized approach to state handling. 

## 6.3. Example 

```javascript 
// Flyweight object for Camera
function Camera(make, model, resolution) {
    this.make = make;
    this.model = model;
    this.resolution = resolution;
}

// Flyweight factory for Camera
var FlyWeightCameraFactory = (function () {
    var flyweights = {};

    return {
        get: function (make, model, resolution) {
            if (!flyweights[make + model]) {
                flyweights[make + model] = new Camera(make, model, resolution);
            }
            return flyweights[make + model];
        },

        getCount: function () {
            var count = 0;
            for (var f in flyweights) count++;
            return count;
        }
    };
})();

// Camera collection
function CameraCollection() {
    var cameras = {};
    var count = 0;

    return {
        add: function (make, model, resolution, serial) {
            cameras[serial] = {
                flyweight: FlyWeightCameraFactory.get(make, model, resolution),
                serial: serial
            };
            count++;
        },

        get: function (serial) {
            return cameras[serial];
        },

        getCount: function () {
            return count;
        }
    };
}

// Run the example
function run() {
    var cameras = new CameraCollection();

    cameras.add("Canon", "EOS R5", "45MP", "A1234");
    cameras.add("Nikon", "D850", "45.7MP", "B5678");
    cameras.add("Sony", "A7R III", "42.4MP", "C9101");
    cameras.add("Canon", "EOS R5", "45MP", "D1212"); // Reusing existing flyweight

    console.log("Cameras: " + cameras.getCount());
    console.log("Flyweights: " + FlyWeightCameraFactory.getCount());
}

// Run the example
run();
``` 

## 7. Proxy 

The Proxy design pattern is a structural design pattern that allows you to provide a substitute or placeholder for another object. This proxy object can control access to the original object. In Javascript, the `proxy` object is built into the language and facilitates the implementation of the Proxy design pattern. 

## 7.1. Components of the Proxy 

*Proxy*

The Proxy contains an interface that is similar to the real object, it maintains a reference that lets the proxy access the real object and it handles requests and forwards them to the real object. 

*RealSubject*

This is the actual object that the Proxy is substituting for. 

## 7.2. Benefits of Proxies

**Controlled Access** 

Proxies allow you to control access to the original object, enabling you to implement access control logic such as permissions, restrictions, or validations before allowing access to the underlying object. 

**Behavior Augmentation**

Proxies can add additional behavior or functionality before or after the invocation of methods or access to properties of the original object. This is useful for implementing cross-cutting concerns like logging, caching, or error handling.

**Caching**

Proxies can implement caching mechanism to store results of expensive operations, improving performance and efficiency 


**Lazy Initialization** 

Proxies enable lazy initialization, where you can delay the creation of the actual object until its needed. This can improve performance by reducing upfront resource usage. 

## 7.3. Example 

```javascript
// Original object representing a bank account
const bankAccount = {
  balance: 1000,

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  },

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
    } else {
      console.log('Insufficient funds.');
    }
  }
};

// Create a proxy for the bank account
const bankAccountProxy = new Proxy(bankAccount, {
  // Intercept property access
  get(target, property) {
    if (property === 'balance') {
      // Add some custom behavior before accessing 'balance'
      console.log('Balance accessed.');
    }
    return target[property];
  },

  // Intercept method invocation
  apply(target, thisArg, args) {
    // Add some custom behavior before invoking a method
    console.log(`Method "${args[0]}" called.`);
    return target.apply(thisArg, args);
  }
});

// Accessing the proxy
console.log(bankAccountProxy.balance); // This will trigger the custom behavior

bankAccountProxy.deposit(500); // This will trigger the custom behavior for method invocation
```
---