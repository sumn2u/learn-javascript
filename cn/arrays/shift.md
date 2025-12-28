章节：6
页码：51
描述：shift 方法删除数组的第一个元素，并将所有索引左移。它会修改原数组。

Shift

shift 方法会删除数组的第一个元素，并将所有元素的索引左移。它会改变原数组。

shift 的语法如下：

array.shift();


例如：

let array = [1, 2, 3]; 
array.shift(); 

// 结果: array = [2, 3]


你也可以结合循环使用 shift 方法来移除数组中的所有元素。示例：

while (array.length > 0) {
  array.shift();
}

console.log(array); // 结果: []


{% hint style="working" %}
shift 方法只适用于数组，而不适用于类似数组的对象，例如 arguments 对象或 NodeList 对象。如果你需要从这些类型的对象中移除元素，需要先使用 Array.prototype.slice() 方法将其转换为数组。
{% endhint %}