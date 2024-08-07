# Composition

Composition is useful for creating "has-a" relationships that ensure loose coupling and flexibility. If we imagine that our class is a wall, the classes that make it up via composition are like bricks - smaller and more manageable components.

## Benefits of composition

  + Reusability - Components can be reused throughout different parts of the application.

  + Maintainability - Changes in one component have minimal impact on others.

  + Flexibility - It's easier to change the application's behavior by changing different components rather than larger and more complex structures.

  + Single responsibility - It keeps each class encapsulated and focused on a single task, adhering to the single responsibility principle.

```javascript
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Library {
  constructor() {
    this.books = [];
  }
  
  add(book) {
    this.books.push(book);
    return `${book.title} was added to the library.`;
  }
}

let myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald");
let myLibrary = new Library();

console.log(myLibrary.add(myBook)); // The Great Gatsby was added to the library.
```

In the example above, instances of the `Book` class are used to create the larger `Library` class. Composition is used to create a "has-a" relationship between the two classes (a library has books inside it), which ensures loose coupling. Changes to the `Book` class won't be reflected on the `Library` class,  and vice versa.

## Composition vs Inheritance

While inheritance creates an "is-a" relationship (e.g., a `Car` is a `Vehicle`), composition creates a "has-a" relationship (e.g., a `Car` has an `Engine`). Here are some pros and cons for using both:

  + Inheritance
    
    - Pros 
      
      - Simple and intuitive for modeling class relationships
      - Code reuse through base classes

    - Cons 
      - Tight coupling
      - Less flexibility 
      - Deep inheritance hierarchies

  + Composition

    - Pros
      - Loose coupling
      - High flexibility
      - Easier maintenance

    - Cons
      - More complex to set up and understand
      - Fewer classes but more objects
