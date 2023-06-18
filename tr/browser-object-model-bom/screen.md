---
chapter: 16
pageNumber: 82
---
# Screen

`screen` objesi, geçerli pencerenin oluşturulduğu ekran hakkında bilgi içerir. `screen` objesine erişmek için `window` objesinin `screen` özelliğini kullanabiliriz.

```javascript
window.screen
//veya
screen
```

`window.screen` objesinin farklı özellikleri vardır, bunlardan bazıları aşağıda listelenmiştir:

| Property | Description |
| :--- | :--- |
| `height` | Ekranın piksel yüksekliğini temsil eder. |
| `left` | Mevcut ekranın sol tarafının piksel mesafesini temsil eder. |
| `pixelDepth` | Ekranın bit derinliğini döndüren salt okunur bir özelliktir. |
| `top` | Mevcut ekranın üst kısmının piksel mesafesini temsil eder. |
| `width` | Ekranın piksel genişliğini temsil eder.  |
| `orientation` | Ekran Oryantasyon API'sinde (*Screen Orientation API*) belirtildiği şekilde ekran oryantasyonunu döndürür |
| `availTop` | Sistem öğeleri tarafından alınmayan üstteki ilk pikseli döndüren salt okunur bir özelliktir. |
| `availWidth` | Sistem öğeleri hariç ekranın piksel genişliğini döndüren salt okunur bir özelliktir. |
| `colorDepth` | Renkleri temsil etmek için kullanılan bit sayısını döndüren salt okunur bir özelliktir. |




