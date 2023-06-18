---
chapter: 16
pageNumber: 84
---
# Çerezler 🍪

Çerezler, bir bilgisayarda depolanan ve tarayıcı tarafından erişilebilen bilgi parçacıklarıdır.

Web tarayıcısı ile sunucu arasındaki iletişim durumsuzdur, kendisinden önceki isteklerin bilgisini içermez yani her isteği bağımsız olarak işler. Kullanıcı bilgilerini depolamamız ve bu bilgileri tarayıcıya kullanılabilir hale getirmemiz gereken durumlar vardır. Bu gibi durumlarda çerezler aracılığıyla bilgi, gerektiğinde bilgisayardan alınabilir.
Çerezler `name-value` (isim-değer) çifti olarak kaydedilir.

```javascript
book = Learn Javascript
```


`document.cookie` özelliği, çerezleri oluşturmak, okumak ve silmek için kullanılır. Çerez oluşturmak oldukça kolaydır, sadece ismi ve değeri sağlamanız gerekmektedir.

```javascript
document.cookie = "book=Learn Javacript";
```


Varsayılan olarak, bir tarayıcı kapatıldığında bir çerez silinir. Kalıcı olmasını sağlamak için son kullanma tarihini (UTC zaman diliminde) belirtmemiz gerekmektedir.

```javascript
document.cookie = "book=Learn Javacript; expires=Fri, 08 Jan 2022 12:00:00 UTC";
```

Çerezin hangi sayfa yoluna (*path*) ait olduğunu söylemek için bir parametre ekleyebiliriz. Varsayılan olarak, çerez şu anki sayfaya aittir.

```javascript
document.cookie = "book=Learn Javacript; expires=Fri, 08 Jan 2022 12:00:00 UTC; path=/";
```

İşte basit bir çerez örneği.

```javascript
let cookies = document.cookie;
// tüm çerezlere ulaşmanın basit bir yolu.

document.cookie = "book=Learn Javacript; expires=Fri, 08 Jan 2022 12:00:00 UTC; path=/";
// çerez oluşturma
```
