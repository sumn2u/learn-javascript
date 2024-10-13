---
chapter: 8
pageNumber: 55
description: This chapter explains space complexity, which measures the memory usage of an algorithm relative to the input size. It includes examples in JavaScript to illustrate how different algorithms use memory. The focus is on understanding how the memory requirements change with varying input sizes.
---

# Space Complexity

Space complexity is the amount of memory that a program takes to run with respect to the size of the input.

In this chapter, we will learn about the following space complexities:

- O(n) - linear space complexity
- O($n^2$) - quadratic space complexity
- O(1) - constant space complexity 

### **Linear Space Complexity: O(n)**
An algorithm has a linear space complexity if the amount of memory required to execute is proportional to the size of the input.

**Example:**
```javascript
function squareElements(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * arr[i]);
    }
    return result;
}

const myArray = [1, 2, 3, 4, 5];
console.log(squareElements(myArray)); // Output: [1, 4, 9, 16, 25]
```
In this example, the space complexity is O(n) because the result array grows in proportion to the size of the input array `arr`.


### Quadratic Space Complexity (O($n^2$))
The memory required grows proportionally to the square of the input size.

**Example:**
```javascript
function createMatrix(n) {
    const matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = i + j;
        }
    }
    return matrix;
}

const matrix = createMatrix(3);
console.log(matrix); // Output: [[0, 1, 2], [1, 2, 3], [2, 3, 4]]
```

The space required grows quadratically with the input size `n`.


### **Constant Space Complexity (O(1))**
The memory required remains the same regardless of the input size.

**Example:**
```javascript
function printCube(num) {
    const result = num * num * num;
    console.log(result);
}

printCube(3); // Output: 27
```

The space required does not depend on the input size.
