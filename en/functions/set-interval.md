# Set Interval
The set Interval method is a method used to call a function and add a delay time to it, in milliseconds,  before the function will run again. For example, if you're making a function that generates a random color, you can use `setInterval()` to say how long the computer has to wait before the function runs again and generates another color. This is useful in making functions repeat. 

The first parameter in the method is the name of the function you're setting an interval to, the second parameter is for how long the interval will be.  You can add extra parameters in case you want to add the parameters of a function.

As another simple example, let's create a function called `repeatSaying` where it says "And again!" every 2 seconds in the [console](https://javascript.sumankunwar.com.np/en/exercises/console.html). 

```js
function repeatSaying() {
console.log("And again");
}
//when called, it generates in the console: "And again!"

setInterval(repeatSaying, 2000);
//calls the function every 2 seconds


```
You can also add parameters of a function when you use set interval. Continuing on with the previous example let's add an ellipsis to the console statement, to show that it repeats. First we'll add a parameter called `el` which is short for ellipse. Next we'll add a `+` followed by calling are parameter `el` to show that the value of the parameter comes after. Finally in set interval let's add a comma `,` followed by a string for the value of the ellipse parameter, we'll put `"..."`.

```js
function repeatSaying(el) {
console.log("And again!" + el);
}

setInterval(repeatSaying, 2000, "...");
//When it runs, it'll repeat the saying "And again!..."
```

As you can see from this example, after you put the function and interval for the function, you can set the values of the function parameters inside set interval. 




## Clear Interval
You can use the `clearInterval()` method to remove a set interval with a specefic variable name. As an example based on the previous one let's store set interval into a variable named `intervalTime`, however, right after our variable we'll call it inside clear interval by writing `clearInterval(intervalTime).`

```js
function repeatSaying(el) {
console.log("And again!" + el);
}

var interval = setInterval(repeatSaying, 2000, "...");

clearInterval(interval);
//The clear Interval method stops setInterval
```

When this code is run, you'll see that there is no output. This is because `setInterval` was the only thing calling the `repeatSaying` function, but since it was removed by `clearInterval` it's no longer is called. Even if it was called seperately using `repeatSaying()` it would only run once because clear Interval stops it from repeating.

