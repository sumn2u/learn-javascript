章节：6
页码：52
描述：pop 方法移除数组的最后一个元素，并返回该元素。此方法会改变数组的长度。

Pop

pop 方法会移除数组的最后一个元素，并返回该元素。此方法会改变数组的长度。

pop 的语法如下：

array.pop();


例如：

let arr = ["一", "二", "三", "四", "五"]; 
arr.pop(); 

console.log(arr); 

// 结果: ['一', '二', '三', '四']


你也可以结合循环使用 pop 方法来移除数组中的所有元素。示例：

while (array.length > 0) {
  array.pop();
}

console.log(array); // 结果: []


{% hint style="working" %}
pop 方法只适用于数组，而不适用于类似数组的对象，例如 arguments 对象或 NodeList 对象。如果你需要从这些类型的对象中移除元素，需要先使用 Array.prototype.slice() 方法将它们转换为数组。
{% endhint %}