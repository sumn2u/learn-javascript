---
chapter: 6
pageNumber: 48  
---

# İndeksler

Diyelim ki veri öğelerinden oluşan bir diziniz var, peki bu dizide bulunan belirli bir öğeye erişmek için ne yaparsınız? İşte burada indeksler devreye giriyor. **İndeks** dizideki bir noktayı ifade eder. İndeksler, mantıksal olarak birer birer ilerler ve çoğu programlama dilinde bir dizinin ilk indeksi 0'dır. Bir dizinin belirli bir öğesine erişmek için `[]` kullanılır.

```javascript
// Meyveleri içeren bir dizi
let meyveler = ["elma", "muz", "ananas", "çilek"];

// `meyveler` dizisinin ikinci elemanını `muz` adında bir değişkene atıyoruz.
// Unutmayın, indeksler 0'dan başlıyor. Bu durumda eğer ikinci elemana yani muza erişmek istiyorsak 1. indeksi seçmeliyiz.
// Sonuç: muz = "muz"
let muz = fruits[1];
```

İndeksleri, dizideki bir elemanın değerini değiştirmek için de kullanabilirsiniz.

```sql
let harfler = ['a', 'b', 'c', 'd', 'e'];
//  indeksler:  0    1    2    3    4
harfler[4] = 'f';
console.log(harfler); // Sonuç: ['a', 'b', 'c', 'd', 'f']
```

Dizinin sınırları dışında bir indeks kullanarak bir elemana erişmeye veya değiştirmeye çalışırsanız (yani, 0'dan küçük veya dizinin uzunluğuna eşit veya daha büyük bir indeks), `undefined` değeri alırsınız.

```sql
console.log(array[5]); // Output: undefined
array[5] = 'g';
console.log(array); // Result: ['a', 'b', 'c', 'd', 'f', undefined, 'g']
```
