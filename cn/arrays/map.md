章节：6
页码：49
描述：map 方法遍历数组，并使用回调函数修改数组元素。这个回调函数会被应用到数组的每一个元素。

Map

Array.prototype.map() 方法会遍历数组，并使用回调函数修改数组的元素。回调函数会应用到数组的每个元素上。

map 的语法如下：

let newArray = oldArray.map(function(element, index, array) {
  // element: 当前正在处理的数组元素
  // index: 当前正在处理元素的索引
  // array: 调用 map 的数组
  // 返回值将被添加到 newArray 中
});


例如，假设你有一个数字数组，并且想创建一个新数组，其元素是原数组中每个数字的两倍。你可以使用 map 来实现，如下所示：

const numbers = [2, 4, 6, 8];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers);

// 结果: [4, 8, 12, 16]


你也可以使用箭头函数语法来定义传递给 map 的函数：

let doubledNumbers = numbers.map((number) => {
  return number * 2;
});


或者更简洁地写成：

let doubledNumbers = numbers.map(number => number * 2);


{% hint style="info" %}
map() 方法不会对空元素执行函数，并且不会改变原数组。
{% endhint %}