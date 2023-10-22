# Set Interval
The set Interval method is a method used to call a function and add a delay time to it, in milliseconds,  before the function will run again. For example, if you're making a function that generates a random color, you can use `setInterval()` to say how long the computer has to wait before the function generates another color. This is useful in making functions repeat. The first parameter in the method is the name of the function your setting an interval to, the second parameter is for how long the interval will be.  You can add extra parameters in case you want to add the parameters for the function.

As another simple example, let's create a function called `repeatSaying` where it says "And again!" every 2 seconds in the [console](https://javascript.sumankunwar.com.np/en/exercises/console.html). 

```js
function repeatSaying() {
console.log("And again");
}
//when called, it generates in the console: "And again!"

setInterval(repeatSaying, 2000);
//calls the function every 2 seconds


```
Now let's add an ellipsis to the console statement, to show that it repeats. 






