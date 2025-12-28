章节：6
页码：48
描述：要在数组开头添加元素，可以使用 unshift 方法。它会修改原数组，并返回数组的新长度。

Unshift

unshift 方法会将一个或多个新元素依次添加到数组的开头。它会修改原数组，并返回数组的新长度。例如：

let array = [0, 5, 10];
array.unshift(-5);  // 返回 4

// 结果: array = [-5, 0, 5, 10]


{% hint style="working" %}
unshift() 方法会覆盖原数组。
{% endhint %}

unshift 方法可以接受一个或多个参数，这些参数表示要添加到数组开头的元素。它会按照参数顺序添加元素，因此第一个参数会成为数组的第一个元素。

示例，向数组添加多个元素：

const numbers = [1, 2, 3];
const newLength = numbers.unshift(-1, 0);
console.log(numbers);    // [-1, 0, 1, 2, 3]
console.log(newLength);  // 5