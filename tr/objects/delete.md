---
chapter: 9
pageNumber: 61
---

# Delete (Silmek)

Bir objeden **bir özelliği** kaldırmak için `delete` özelliği kullanılabilir. Bir özellik silindiğinde, objeden kaldırılır ve erişilemez veya numaralandırılamaz (yani, bir for-in döngüsünde görünmez).

İşte `delete` kullanımı için sözdizimi:

```javascript
delete object.property;
```

Örneğin:

```javascript
let adult = { age: 26 },
  child = Object.create(adult);

child.age = 8;

delete child.age;

/* Remove age property from child, revealing the age of the prototype, because then it is not overriden. */

let prototypeAge = child.age;
// 26, because child does not have its own age property.
```

{% hint style="warning" %}
`delete` operatörü sadece bir objenin kendi özellikleri üzerinde çalışır, miras alınan özellikler üzerinde çalışmaz. Ayrıca `configurable` niteliği `false` olarak ayarlanmış özellikler üzerinde de çalışmaz.
{% endhint %}

`delete`operatörü objenin prototip zincirini (**prototype chain**) değiştirmez. Sadece belirtilen özelliği objeden kaldırır ve ayrıca objeyi veya özelliklerini gerçekten yok etmez. Sadece özellikleri erişilemez hale getirir. Bir nesneyi yok etmeniz ve belleğini serbest bırakmanız gerekiyorsa, nesneyi `null` olarak ayarlayabilir veya belleği geri almak için bir çöp toplayıcı kullanabilirsiniz.
