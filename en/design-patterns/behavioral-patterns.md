---
layout: editorial
title: Behavioral Design Patterns in Javascript
description: Focus on how objects communicate with each other and assigning responsibilities to them.
---

# Behavioral Design Patterns

Focus on how objects communicate with each other and assigning responsibilities to them.

## 1. Chain of Responsibility 

The Chain of Responsibility is a behavioural design pattern and its main purpose is to take a request and pass it along a chain of handlers. When the request goes through the chain each handler will decide either to process the request or pass it to the next handler in the chain. This pattern allows multiple handlers to handle the request without the sender needing to know which one will process it. 

## 1.1. Components of the Chain of Responsibility 

*Request*

The request is just the object the client sends that needs to be processed. The request goes through the chain of handlers until it is processed or reaches the end of the chain. 

*Abstract Handler Interface/Class*

This is the base interface/class that defines the methods that will be used for handling the request. The handler interface contains the logic for the order of the chain and how the request gets passed through.

*Concrete Handlers*

These are the methods/classes that implement the abstract handler. Each concrete handler contains logic for handling a particular type of request. If the concrete handler can process the request it will, if it can't then it will pass the request to the next handler. 

## 1.2. Benefits of the Chain of Responsibility 

**Ease of Use**

The sender does not need to know the specific method to process the request, the sender just needs to pass it to the chain. This makes it easier for the sender to process requests. 

**Flexibility and Extensibility**

New Handlers can be added to the chain or removed from the chain without modifying the sender's code. This allows for dynamic modification of the processing order. 

**Promotes Responsible Segregation**

Handlers are responsible for processing specific types of requests based on their defined logic. This promotes a clear separation of responsibilities, making it easier to manage and maintain each handler independently.

**Sequential Request Processing**

The pattern ensures that each request is processed sequentially through the chain of handlers. Each handler can choose to process the request or pass it to the next handler. This can be particularly useful in scenarios where requests need to be processed in a specific order.

## 1.3. Example 

```javascript 
// Handler interface
class CoffeeHandler {
  constructor() {
    this.nextHandler = null;
  }

  setNext(handler) {
    this.nextHandler = handler;
  }

  processRequest(request) {
    throw new Error('processRequest method must be implemented by subclasses');
  }
}

// Concrete handler for ordering coffee
class OrderCoffeeHandler extends CoffeeHandler {
  processRequest(request) {
    if (request === 'Coffee') {
      return 'Order placed for a cup of coffee.';
    } else if (this.nextHandler) {
      return this.nextHandler.processRequest(request);
    } else {
      return 'Sorry, we do not serve ' + request + '.';
    }
  }
}

// Concrete handler for preparing coffee
class PrepareCoffeeHandler extends CoffeeHandler {
  processRequest(request) {
    if (request === 'PrepareCoffee') {
      return 'Coffee is being prepared.';
    } else if (this.nextHandler) {
      return this.nextHandler.processRequest(request);
    } else {
      return 'Cannot prepare ' + request + '.';
    }
  }
}

// Client code
const orderHandler = new OrderCoffeeHandler();
const prepareHandler = new PrepareCoffeeHandler();

// Set up the chain
orderHandler.setNext(prepareHandler);

// Order coffee
console.log(orderHandler.processRequest('Coffee'));  // Output: Order placed for a cup of coffee.

// Prepare coffee
console.log(orderHandler.processRequest('PrepareCoffee'));  // Output: Coffee is being prepared.

// Try ordering something else
console.log(orderHandler.processRequest('Tea'));  // Output: Sorry, we do not serve Tea.
```

## 2. Command 

The command design pattern is a behavioral design pattern that allows you to encapsulate a request as an object, that object will contain all the necessary information for the request's execution. This pattern allows for the parameterization and queuing of requests and provides the ability to undo operations. 

## 2.1. Components of the Command 

*Invoker*

This is the object that requests the execution of a command. It has a reference to a command and can execute the command by calling its `execute` method. The Invoker does not need to know the specifics of how the command is executed. It just triggers the command. 

*Command*

This is the interface or abstract class that declares the `execute` method. It defines the common method that concrete command classes should implement.

*Receiver* 

This is an object that performs the actual work when the `execute` method of a command is called. The receiver knows how to carry out the action associate with a specific command. 

## 2.2. Benefits of the Command 


**Flexibility and Extensibility**

This pattern allows for easy addition of new commands without needing to modify the invoker or receiver. 

**Undo and Redo Operations**

The command pattern facilitates the implementation of undo and redo operations.Each command object can keep track of the previous state, enabling the reversal of the executed action.

**Parameterization and Queuing**

Commands can be parameterized with arguments, allowing for the customization of actions at runtime. Additionally, the pattern enables the queuing and scheduling of requests, providing control over the order of execution.

**History and Logging**

It's possible to maintain a history of executed commands, which can be useful for auditing, logging, or tracking user actions.

## 2.3. Example 

```javascript 

class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }

  execute() {
    throw new Error('execute() method must be implemented');
  }
}

class ConcreteCommand extends Command {
  constructor(receiver, parameter) {
    super(receiver);
    this.parameter = parameter;
  }

  execute() {
    this.receiver.action(this.parameter);
  }
}

class Receiver {
  action(parameter) {
    console.log(`Receiver is performing action with parameter: ${parameter}`);
  }
}

class Invoker {
  constructor() {
    this.commands = [];
  }

  addCommand(command) {
    this.commands.push(command);
  }

  executeCommands() {
    this.commands.forEach(command => command.execute());
    this.commands = []; // Clear the executed commands
  }
}

// Usage
const receiver = new Receiver();
const command1 = new ConcreteCommand(receiver, 'Command 1 parameter');
const command2 = new ConcreteCommand(receiver, 'Command 2 parameter');

const invoker = new Invoker();
invoker.addCommand(command1);
invoker.addCommand(command2);

invoker.executeCommands();
```

## 3. Interperator 

The interperator design pattern is used to define a grammar for a language and provide an interpreter to interpret sentences in that language. It's typically use for creating language interpreters or parsers but you could also use them inside your application. Imagine you have a complex desktop application, you could design a basic scripting language which allows the end-user to manipulate your application through simple instructions. 


## 3.1. Components of the Interperator 

*Context*

A global state or context that the Interpreter uses to interpret expressions. It often contains information that is relevant during the interpretation of expressions. 

*Abstract Expressions* 

Defines an interface for all types of expressions in the language's grammar. These expressions are typically represented as an abstract class or interface. 

*Terminal Expressions*

Represents the terminal symbols in the grammar. These are the leaves of the expression tree. Terminal expression implement the interface defined by the abstract expression.

*Non-terminal Expression* 

Represents the non-terminal symbols in the grammar. Non-terminal expressions use terminal and/or other non-terminal expressions to define complex expressions by combining or composing them.

*Expression Tree* 

Represents the hierarchical structure of the language's expressions. The expression tree is built by combining terminal and non-terminal expressions based on the rules of the language's grammar. 

*Interpreter*

Defines an interface or class that interprets the abstract syntax tree created by the expression tree. It typically includes an `interpret` method that takes a context and interprets the expression based on the given context.

*client*

Builds the abstract syntax tree using terminal and non-terminal expressions based on the language's grammar. The client then uses the interpreter to interpret the expression. 

## 3.2. Benefits of Interpreters

**Ease of Grammar Interpretation**

The pattern simplifies the interpretation of complex grammatical rules by breaking them down into smaller, more manageable expressions. Each expression type handles its own interpretation, making the overall interpretation process easier to manage.

**Better Error Handling**

Since each expression type handles its own interpretation, error handling can be tailored to specific expressions. This allows for more precise and meaningful error messages when parsing or interpreting the input.

**Flexibility and Extensibility** 

The interpreter pattern provides a flexible way to define and extend grammatical rules and language expressions without modifying the core interpreter logic. You can easily add new expressions by creating new terminal and non-terminal expression classes. 

**Integration with other Design Patterns**

The Interpreter pattern can be combined with other design patterns, such as Composite, to build complex hierarchies of expressions. This allows for the creation of powerful and feature-rich interpreters.

## 3.3. Example 

```javascript 
// Abstract Expression
class Expression {
  interpret(context) {
    // To be overridden by subclasses
  }
}

// Terminal Expression: NumberExpression
class NumberExpression extends Expression {
  constructor(number) {
    super();
    this.number = number;
  }

  interpret(context) {
    return this.number;
  }
}

// Terminal Expression: VariableExpression
class VariableExpression extends Expression {
  constructor(variable) {
    super();
    this.variable = variable;
  }

  interpret(context) {
    return context[this.variable] || 0;
  }
}

// Non-terminal Expression: AddExpression
class AddExpression extends Expression {
  constructor(expression1, expression2) {
    super();
    this.expression1 = expression1;
    this.expression2 = expression2;
  }

  interpret(context) {
    return this.expression1.interpret(context) + this.expression2.interpret(context);
  }
}

// Non-terminal Expression: SubtractExpression
class SubtractExpression extends Expression {
  constructor(expression1, expression2) {
    super();
    this.expression1 = expression1;
    this.expression2 = expression2;
  }

  interpret(context) {
    return this.expression1.interpret(context) - this.expression2.interpret(context);
  }
}

// Client code
const context = { a: 10, b: 5, c: 2 };

const expression = new SubtractExpression(
  new AddExpression(
    new VariableExpression('a'),
    new VariableExpression('b')
  ),
  new VariableExpression('c')
);

const result = expression.interpret(context);
console.log('Result:', result); // Output: Result: 13
```

## 4. Iterator 

The Iterator pattern allows clients to effectively loop over a collection of objects

## 4.1. Components of the Iterator 

*Iterator*

Implements Iterator interface or class with methods like `first()`,`next()`. The Iterator keeps track of the current position when traversing collections. 

*Items*

These are the individual objects of the collection that the Iterator will traverse 

## 4.2. Benefits of iterators

**Compatibility with Different Data Structures** 

The Iterator pattern allows the same iteration logic to be applied to different data structures. 

**Support for concurrent Iteration**

Iterators can support concurrent iteration over the same collection without interfering with each other, this enables the client to iterate over the collection in different ways simultaneously.

**Lazy Loading**

Iterators can be designed to load elements on demand, which is beneficial for large collections where loading all elements at once might be impractical or resource-intensive. Elements can be fetched as needed, optimizing memory usage.

**Simplified Interface**

The Iterator pattern provides a clean and consistent interface for accessing elements in a collection without exposing the internal structure of the collection. This simplifies the usage and understanding of the collection.

## 4.3. Example 

```javascript
// Car class representing a car
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getInfo() {
    return `${this.make} ${this.model}`;
  }
}

// Iterator interface
class Iterator {
  constructor(collection) {
    this.collection = collection;
    this.index = 0;
  }

  next() {
    return this.collection[this.index++];
  }

  hasNext() {
    return this.index < this.collection.length;
  }
}

// Collection of cars
class CarCollection {
  constructor() {
    this.cars = [];
  }

  addCar(car) {
    this.cars.push(car);
  }

  createIterator() {
    return new Iterator(this.cars);
  }
}

// Usage
const carCollection = new CarCollection();
carCollection.addCar(new Car('Toyota', 'Corolla'));
carCollection.addCar(new Car('Honda', 'Civic'));
carCollection.addCar(new Car('Ford', 'Mustang'));

const iterator = carCollection.createIterator();

while (iterator.hasNext()) {
  const car = iterator.next();
  console.log(car.getInfo());
}
```

## 5. Mediator 

The Mediator pattern acts as a middle man between a group of objects by encapsulating how these objects interact. The mediator facilitates communication between different components of a system without them needing to directly reference each other. 

## 5.1. Components of the Mediator 

*Mediator*

The mediator manages central control over operations. It contains an interface for communicating with the Colleague objects and has a reference to each Colleague object.

*Colleague*

The colleagues are the objects that are being mediated, each colleague has a reference to the mediator.

## 5.2. Benefits of the Mediator 

**Centralized Control**

Centralizing communication within the Mediator allows for better control and coordination of interactions between components. The ,Mediator can manage message distribution, prioritize messages, and apply specific logic based on the system's requirements.

**Simplified Communication**

Mediators simplify communication logic, as components send messages to the Mediator instead of dealing with the complexity of direct communication. This simplifies the interaction between components and allows for easier maintenance and updates.

**Reusability of Mediator**

The Mediator can be reused across various components and scenarios, allowing for a single point of control for different parts of the application. This reusability promotes consistency and helps in managing the communication flow efficiently.

**Promotes Maintainability**

The Mediator pattern promotes maintainability by reducing the complexity of direct inter-component communication. As the system grows, changes and updates can be made within the Mediator without affecting the individual components, making maintenance easier and less error-prone.

```javascript
var Participant = function (name) {
    this.name = name;
    this.chatroom = null;
};

Participant.prototype = {
    send: function (message, to) {
        this.chatroom.send(message, this, to);
    },
    receive: function (message, from) {
        console.log(from.name + " to " + this.name + ": " + message);
    }
};

var Chatroom = function () {
    var participants = {};

    return {

        register: function (participant) {
            participants[participant.name] = participant;
            participant.chatroom = this;
        },

        send: function (message, from, to) {
            if (to) {                      // single message
                to.receive(message, from);
            } else {                       // broadcast message
                for (key in participants) {
                    if (participants[key] !== from) {
                        participants[key].receive(message, from);
                    }
                }
            }
        }
    };
};

function run() {

    var yoko = new Participant("Yoko");
    var john = new Participant("John");
    var paul = new Participant("Paul");
    var ringo = new Participant("Ringo");

    var chatroom = new Chatroom();
    chatroom.register(yoko);
    chatroom.register(john);
    chatroom.register(paul);
    chatroom.register(ringo);

    yoko.send("All you need is love.");
    yoko.send("I love you John.");
    john.send("Hey, no need to broadcast", yoko);
    paul.send("Ha, I heard that!");
    ringo.send("Paul, what do you think?", paul);
}
```

## 6. Memento

The Memento design pattern allows an objects state to be captured and restored at a later time without exposing its internal structure. The Memento is a separate object that stores the state of the original object. 

## 6.1. Components of the Memento 

*Originator*

This is the object that gets saved. It creates a Memento object to store its internal state. 

*Memento*

The Memento is responsible for storing the state of the originator. It has methods to retrieve and set the state of the originator but does not expose the originator's internal structure. 

*Caretaker*

The caretaker is responsible for keeping track and managing the Mementos. It does not modify or inspect the contents of the Mementos

## 6.2. Benefits of the Memento 

**State Preservation and Restoration**

Mementos allow an objects internal state to be captured and restored at a later time. 

**Undo/Redo Operations**

Memento facilitates implementing undo and redo functionality easily. Since Mementos store the objects state at various points in time, you can support undoing changes made to the object or redoing changes made to the object

**Improved Performance**

Storing the object's state in a Memento allows for more efficient storage and retrieval operations compared to other approaches. 

**Flexible Design** 

It provides a flexible way to manage the history of an object's state. The caretaker can decide which states to keep and when to restore them, allowing for a customizable approach based on the application's requirements.


## 6.3. Example

```javascript
// Computer class (originator)
class Computer {
  constructor() {
    this.os = '';
    this.version = '';
  }

  setOS(os, version) {
    this.os = os;
    this.version = version;
  }

  getState() {
    return {
      os: this.os,
      version: this.version
    };
  }

  restoreState(state) {
    this.os = state.os;
    this.version = state.version;
  }
}

// Caretaker
class Caretaker {
  constructor() {
    this.mementos = {};
    this.nextKey = 1;
  }

  add(memento) {
    const key = this.nextKey++;
    this.mementos[key] = memento;
    return key;
  }

  get(key) {
    return this.mementos[key];
  }
}

function run() {
  const computer = new Computer();
  const caretaker = new Caretaker();

  // Save state
  const originalState = computer.getState();
  const key = caretaker.add(originalState);

  // Mess up the state
  computer.setOS('Windows', '11');

  // Restore original state
  const restoredState = caretaker.get(key);
  computer.restoreState(restoredState);

  console.log(computer.getState()); // Output: { os: '', version: '' }
}

run();
```

## 7. Observer

The observer pattern allows many objects to subscribe to events that are broadcast by another object. 

## 7.1. Components of the Observer 

*Subject*

The subject is an object that implements an interface that lets observer objects subscribe to it and send notifications to observers when its state changes. 

*Observers*

The Observer subscribes to the subject and and typically has a function that get invoked when notified by the Subject

## 7.2. Benefits of Observers 

**Simplified Event Handling**

The Observer pattern can simplify event handling mechanisms, as events can be treated as notifications to observers about a state change.

**Reduces Duplicate code**

Instead of duplicating the same code to respond to state changes in multiple places, the Observer pattern allows for a centralized place to manage these responses, promoting cleaner and more maintainable code.

**Support for Broadcast Communication**

The Observer pattern facilitates a "one-to-many" communication model, where a single event triggers actions in multiple observers. This is useful in scenarios where multiple components need to react to a change in state.

**Modularity and Resuability**

Observers can be reused across different subjects, promoting modularity and code reusability. This allows for more flexible and maintainable code.

## 7.3. Example 

```javascript
function Click() {
    this.handlers = [];  // observers
}

Click.prototype = {

    subscribe: function (fn) {
        this.handlers.push(fn);
    },

    unsubscribe: function (fn) {
        this.handlers = this.handlers.filter(
            function (item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },

    fire: function (o, thisObj) {
        var scope = thisObj || window;
        this.handlers.forEach(function (item) {
            item.call(scope, o);
        });
    }
}

function run() {

    var clickHandler = function (item) {
        console.log("fired: " + item);
    };

    var click = new Click();

    click.subscribe(clickHandler);
    click.fire('event #1');
    click.unsubscribe(clickHandler);
    click.fire('event #2');
    click.subscribe(clickHandler);
    click.fire('event #3');
}
```

## 8. State

The State pattern is a behavioral design pattern that allows you to have a base object and provide it with additional functionality based on its state. This pattern is particularly useful when an object needs to change its behavior based on its internal state.

## 8.1. Components of the State

*State*

This is the object that encapsulates the State values and the associated behavior of the State. 

*Context*

This is the object that maintains a reference to a State object that defines the current State. It also includes an interface that allows other State objects to change its current State to a different State.

## 8.2. Benefits of the State

**Modular and Organized Code**

Each State is encapuslated within its own class, making the code modular and easy to manage. 

**No Need for Switch Statements**

Switch statements can also be used to change the behavior of an object but the problem with this method is that switch statements can become very lengthy as your project scales. The State pattern fixes this issue. 

**Promotes Reusability**

States can be reused across different contexts, this reduces code duplication. 

**Simplifies Testing**

Testing individual state classes in isolation is easier and more effective than testing a monolithic object with complex conditional logic. 

## 8.3. Example 

```javascript 
class Car {
  constructor() {
    this.state = new ParkState();
  }

  setState(state) {
    this.state = state;
    console.log(`Changed state to: ${state.constructor.name}`);
  }

  park() {
    this.state.park(this);
  }

  drive() {
    this.state.drive(this);
  }

  reverse() {
    this.state.reverse(this);
  }
}

class ParkState {
  park(car) {
    console.log("Car is already in Park");
  }

  drive(car) {
    console.log("Shifting to Drive");
    car.setState(new DriveState());
  }

  reverse(car) {
    console.log("Shifting to Reverse");
    car.setState(new ReverseState());
  }
}

class DriveState {
  park(car) {
    console.log("Shifting to Park");
    car.setState(new ParkState());
  }

  drive(car) {
    console.log("Car is already in Drive");
  }

  reverse(car) {
    console.log("Shifting to Reverse");
    car.setState(new ReverseState());
  }
}

class ReverseState {
  park(car) {
    console.log("Shifting to Park");
    car.setState(new ParkState());
  }

  drive(car) {
    console.log("Shifting to Drive");
    car.setState(new DriveState());
  }

  reverse(car) {
    console.log("Car is already in Reverse");
  }
}

// Example usage
const car = new Car();

car.drive();
car.reverse();
car.drive();
car.park();
car.drive();  // Trying to drive while parked
```

## 9. Strategy 

The Strategy pattern is essentially a design pattern that allows you to have a group of algorithms (strategies) that are interchangeable. 

## 9.1. Components of Strategy 

*Strategy*

This is an algorithm that implements the Strategy interface. 

*Context*

This is the object that maintains a reference to the current strategy. It defines an interface that allows the client to change the current Strategy to a different Strategy or retrieve calculations from the current Strategy referenced. 

## 9.2. Benefits of Strategy 

**Dynamically Swappable Algorithms**

Strategies can be swapped at runtime, allowing for dynamic selection of algorithms based on different conditions or requirements. This is particularly useful when the appropriate algorithm may vary based on user input, configuration settings, or other factors.

**Flexibility and Maintainability**

Strategies can be changed or extended without modifying the context using them. This makes the system more flexible and easier to maintain since changes in one strategy do not affect others.

**Simplifies Testing**

Testing strategies in isolation is easier since each strategy is a separate class. This allows for targeted testing and ensures that changes to one strategy don't inadvertently affect others.

**Reusability**

Strategies can be reused in multiple contexts or applications, promoting code reuse and minimizing redundancy.

## 9.3. Example

```javascript 
class RegularCustomerStrategy {
  calculatePrice(bookPrice) {
    // Regular customers get a fixed discount of 10%
    return bookPrice * 0.9;
  }
}

class VIPCustomerStrategy {
  calculatePrice(bookPrice) {
    // VIP customers get a fixed discount of 20%
    return bookPrice * 0.8;
  }
}

class BookStore {
  constructor(pricingStrategy) {
    this.pricingStrategy = pricingStrategy;
  }

  setPricingStrategy(pricingStrategy) {
    this.pricingStrategy = pricingStrategy;
  }

  calculatePrice(bookPrice) {
    return this.pricingStrategy.calculatePrice(bookPrice);
  }
}

// Usage
const regularCustomerStrategy = new RegularCustomerStrategy();
const vipCustomerStrategy = new VIPCustomerStrategy();

const bookstore = new BookStore(regularCustomerStrategy);

console.log('Regular customer price:', bookstore.calculatePrice(50)); // Outputs: 45 (10% discount)
bookstore.setPricingStrategy(vipCustomerStrategy);
console.log('VIP customer price:', bookstore.calculatePrice(50)); // Outputs: 40 (20% discount)
```

## 10. Template Method 

The Template Method is a behavioral design pattern that defines the program skeleton of an algorithm in a method but lets subclasses override specific steps of the algorithm without changing its structure. 

## 10.1. Components of the Template Method 

*Abstract Class*

The abstract class is the template for the algorithm. It defines an interface for the client to invoke its method. It also contains all the functions that can be overridden by subclasses.

*Concrete Class*

Implements the steps as defined in the Abstract Class and can make changes to the steps. 

## 10.2. Benefits of the Template Method 

**Code Reusability**

The pattern promotes code reusability by defining the algorithm's skeleton in a base class. Subclasses can reuse this structure and only need to provide implementations for specific steps.

**Easy Maintenance**

Making changes to the algorithm is simplified because modifications only need to be made in one place—the template method in the abstract class—rather than in multiple subclasses. This reduces the chances of errors and makes maintenance more straightforward.

**Extension and Variation**

The pattern allows for easy extension and variation of the algorithm. Subclasses can override certain steps to provide custom implementations, effectively extending or modifying the behavior of the algorithm without altering its core structure.

**Control Flow**

The template method defines the control flow of the algorithm, making it easier to manage and understand the sequence of operations in the algorithm.

## 10.3. Example 

```javascript 
class Camera {
  // Template method defining the common steps for capturing a photo
  capturePhoto() {
    this.turnOn();
    this.initialize();
    this.setExposure();
    this.capture();
    this.turnOff();
  }

  // Common steps for turning on the camera
  turnOn() {
    console.log('Turning on the camera');
  }

  // Abstract method for initializing the camera (to be overridden by subclasses)
  initialize() {
    throw new Error('Abstract method: initialize() must be implemented by subclasses');
  }

  // Abstract method for setting exposure (to be overridden by subclasses)
  setExposure() {
    throw new Error('Abstract method: setExposure() must be implemented by subclasses');
  }

  // Common steps for capturing a photo
  capture() {
    console.log('Capturing a photo');
  }

  // Common steps for turning off the camera
  turnOff() {
    console.log('Turning off the camera');
  }
}

class DSLRCamera extends Camera {
  initialize() {
    console.log('Initializing DSLR camera');
  }

  setExposure() {
    console.log('Setting exposure for DSLR camera');
  }
}

class MirrorlessCamera extends Camera {
  initialize() {
    console.log('Initializing mirrorless camera');
  }

  setExposure() {
    console.log('Setting exposure for mirrorless camera');
  }
}

// Usage
const dslrCamera = new DSLRCamera();
console.log('Capturing photo with DSLR camera:');
dslrCamera.capturePhoto();
console.log('');

const mirrorlessCamera = new MirrorlessCamera();
console.log('Capturing photo with mirrorless camera:');
mirrorlessCamera.capturePhoto();
```

## 11. Visitor 

The visitor design pattern is a behavioral design pattern that allows you to separate algorithms or operations from the object on which they operate. 

## 11.1 Components of the Visitor 

*ObjectStructure*

Maintains a collection of Elements which can be iterated over. 

*Elements*

The element contains an accept method that accepts the visitor objects.

*Visitor*

Implements a visit method where the argument of the method is the element being visited. This is how changes to the element get made. 

## 11.2. Benefits of the Visitor 

**Open/Closed Principle**

The pattern aligns with the Open/Closed Principle, which states that software entities (classes, modules, functions) should be open for extension but closed for modification. You can introduce new operations (new visitors) without modifying the existing object structure or elements.

**Extensibility**

You can introduce new behaviors or operations by adding new visitor implementations without modifying the existing elements or the object structure. This makes the system more extensible, allowing for new features or behaviors to be added easily.

**Centralized Behavior**

The Visitor pattern centralizes behavior-related code within the visitor classes. Each visitor encapsulates a specific behavior, which can be reused across different elements, promoting code reuse and modularity.

**Consistency in Operations**

With the Visitor pattern, you can ensure that a specific operation (visitor method) is applied consistently across various elements, as each element's accept method calls the appropriate visitor method for that element type.

## 11.3 Example 

```javascript 
class GymMember {
    constructor(name, subscriptionType, fitnessScore) {
        this.name = name;
        this.subscriptionType = subscriptionType;
        this.fitnessScore = fitnessScore;
    }

    accept(visitor) {
        visitor.visit(this);
    }

    getName() {
        return this.name;
    }

    getSubscriptionType() {
        return this.subscriptionType;
    }

    getFitnessScore() {
        return this.fitnessScore;
    }

    setFitnessScore(score) {
        this.fitnessScore = score;
    }
}

class FitnessEvaluation {
    visit(member) {
        member.setFitnessScore(member.getFitnessScore() + 10);
    }
}

class MembershipDiscount {
    visit(member) {
        if (member.getSubscriptionType() === 'Premium') {
            console.log(`${member.getName()}: Fitness score - ${member.getFitnessScore()}, Membership type - ${member.getSubscriptionType()}, Eligible for a 10% discount!`);
        } else {
            console.log(`${member.getName()}: Fitness score - ${member.getFitnessScore()}, Membership type - ${member.getSubscriptionType()}, Not eligible for a discount.`);
        }
    }
}

function run() {
    const gymMembers = [
        new GymMember("Alice", "Basic", 80),
        new GymMember("Bob", "Premium", 90),
        new GymMember("Eve", "Basic", 85)
    ];

    const fitnessEvaluation = new FitnessEvaluation();
    const membershipDiscount = new MembershipDiscount();

    for (let i = 0; i < gymMembers.length; i++) {
        const member = gymMembers[i];

        member.accept(fitnessEvaluation);
        member.accept(membershipDiscount);
    }
}

run();
```
 
 ---


