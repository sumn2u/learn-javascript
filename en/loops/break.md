---
chapter: 7
pageNumber: 53
description: A break statement is used to break out of a loop whenever a specific condition is met.
---

## Break

The loop ends when the condition specified for the loop becomes false. However we can end any loop forcibly by using the break statement.

### Syntax

The syntax of `break` in javascript is given below

```javascript
for (initialization; endCondition; change) {
    if(conditionForBreaking){
        break;
    }
}
```

### Explanation:

- inside the for loop whenever the condition `conditionForBreaking` is satisfied the control reaches outside the for loop and the loop end.


### Example

- Let use suppose we have an array of number and we have to print the first occurence of a number divisible by 5. We can use break here to achieve this:

```javascript
const arr = [4, 7, 9, 11, 45, 23, 15, 87];

for(let i = 0; i < arr.length; i++){
    if(arr[i]%5 == 0){
        console.log(arr[i]);
        break;
    }
}
//This code will print 45 which is the first occurence of a number divisible by 5
```
- Break statement can also be used inside while loop.

```javascript
const arr = [4, 7, 9, 11, 45, 23, 15, 87];
let i = 0;
while(i < arr.length){
    if(arr[i]%5 == 0){
        console.log(arr[i]);
        break;
    }
    i++;
}
//This code will also print 45 which is the first occurence of a number divisible by 5
```
