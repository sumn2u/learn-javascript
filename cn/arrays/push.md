章节：6
页码：55
描述：push 方法向数组添加元素，使最后一个索引成为新添加的元素。此方法会改变数组长度，并返回新的长度。

Push

可以向数组末尾添加元素，使最后一个索引成为新添加的元素。它会改变数组的长度，并返回新的长度。

push 的语法如下：

array.push(element1[, ...[, elementN]]);


其中 element1, ..., elementN 参数表示要添加到数组末尾的元素。

例如：

let array = [1, 2, 3]; 
array.push(4); 

console.log(array); 

// 结果: array = [1, 2, 3, 4]


你也可以将 push 用于类数组对象（例如 arguments 对象或 NodeList 对象），但需要先使用 Array.prototype.slice() 方法将其转换为数组：

function printArguments() {
  let args = Array.prototype.slice.call(arguments);
  args.push('d', 'e', 'f');
  console.log(args);
}

printArguments('a', 'b', 'c'); // 结果: ["a", "b", "c", "d", "e", "f"]


注意：push 方法会修改原数组，并不会创建新的数组。