# Currying

`Currying` is an advanced technique in functional programming of transforming a function with multiple arguments into a sequence of nesting functions. It transforms a function from callable  `f(a,b,c)` into callable as `f(a)(b)(c)`. It doesn’t call a function instead it transforms it.

To get a better understanding of currying let’s create a simple `add` function add that takes three arguments and returns the sum of them. Then, we create a `addCurry` function that takes a single input and returns a series of functions with its sum.

```javascript
// Noncurried version
const add = (a, b, c)=>{
    return a+ b + c
}
console.log(add(2, 3, 5)) // 10

// Curried version
const addCurry = (a) => {
    return (b)=>{
        return (c)=>{
            return a+b+c
        }
    }
}
console.log(addCurry(2)(3)(5)) // 10
```

Here, we can see that both the curried and noncurried versions returned the same result. Currying can be beneficial for many reasons, some of which are mentioned here.

* It helps to avoid passing the same variable again and again.
* It divides the function into smaller chunks with a single responsibility, making the function less error-prone.
* It is used in functional programming to create a high-order function.
