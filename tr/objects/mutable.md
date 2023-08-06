---
chapter: 9
pageNumber: 58
---

# Mutable (Değişebilirlik)

Objeler ve primitive (_ilkel_) değerler arasındaki fark, **objeleri değiştirebileceğimiz**, ancak primitive (_ilkel_) değerlerin **değiştirilemez** olmasıdır.

Örneğin:

```javascript
let myPrimitive = "first value";
myPrimitive = "another value";
// myPrimitive şimdi başka bir dizeye işaret ediyor.
let myObject = { key: "first value" };
myObject.key = "another value";
// myObject aynı objeye işaret ediyor.
```

Bir objenin özelliklerini nokta veya köşeli ayraç gösterimi kullanarak ekleyebilir, değiştirebilir veya silebilirsiniz.

```javascript
let object = {};
object.foo = "bar"; // Add property 'foo'
object["baz"] = "qux"; // Add property 'baz'
object.foo = "quux"; // Modify property 'foo'
delete object.baz; // Delete property 'baz'
```

{% hint style="warning" %}
Primitive (_ilkel_) değerler (sayılar ve dizeler gibi) değişmezken, objeler (diziler ve objeler gibi) değişebilirdir.
{% endhint %}
