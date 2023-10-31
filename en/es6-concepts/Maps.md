## Maps

Map is a collection of keyed data items, just like an `Object`. But the main difference is that `Map` allows keys of any type.


Methods and properties are:

`new Map()` – creates the map.  
`map.set(key, value)` – stores the value by the key.   
`map.get(key)` – returns the value by the key, undefined if key doesn’t exist in map.
`map.has(key)` – returns true if the key exists, false otherwise.    
`map.delete(key)` – removes the element (the key/value pair) by the key.        
`map.clear()` – removes everything from the map.             
`map.size` – returns the current element count.

For example
```sh
let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3
```

The differences from a regular `Object`:

* Any keys, objects can be keys.

* Additional convenient methods, the size property.

## Conclusion
Maps are a versatile and powerful data structure that provides key-value pairs for efficient data management.
Maps are often a preferred choice over plain objects for tasks involving key-value associations, as they provide better control and performance.
