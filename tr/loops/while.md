---
chapter: 7
pageNumber: 51
---

# While

While döngüleri, belirtilen bir koşul doğru olduğu sürece bir kod bloğunu tekrarlı olarak yürütür.

```javascript
while (condition) {
  // koşul doğru olduğu sürece kodu çalıştır
}
```

Örneğin, bu örnekteki döngü, i değişkeni 5'ten küçük olduğu sürece kod bloğunu tekrar tekrar yürütecektir:

```javascript
var i = 0,
  x = "";
while (i < 5) {
  x = x + "The number is " + i;
  i++;
}
```

{% hint style="warning" %}
&#x20;Koşula her zaman doğru dönen bir ifade vermeye dikkat edin! Çünkü bu sonsuz döngü oluşturacaktır.
{% endhint %}
