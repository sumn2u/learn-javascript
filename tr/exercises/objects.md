---
chapter: 20
pageNumber: 111
---

# Objects (Objeler)

Objeler `anahtar`, `değer` çiftlerinin koleksiyonudur ve her anahtar-değer (_key-value_) çifti bir özellik olarak bilinir.

### 📝 Alıştırmalar:

İki üyeli bir Doe ailesi verildiğinde, her üyenin bilgisi bir obje şeklinde sunulur.&#x20;

```javascript
let person = {
  name: "John", //String
  lastName: "Doe",
  age: 35, //Number
  gender: "male",
  luckyNumbers: [7, 11, 13, 17], //Array
  significantOther: person2, //Object,
};

let person2 = {
  name: "Jane",
  lastName: "Doe",
  age: 38,
  gender: "female",
  luckyNumbers: [2, 4, 6, 8],
  significantOther: person,
};

let family = {
  lastName: "Doe",
  members: [person, person2], //Array of objects
};
```

- [ ] Doe ailesinin ilk üyesinin adını `console`'da yazdırmanın bir yolunu bulun.
- [ ] Doe ailesinin ikinci üyesinin `luckyNumbers`'in dördüncü değerini `33` olarak değiştirin.
- [ ] Doe ailesine yeni bir kişi ekleyin(`Jimmy,` `Doe`, `13`, `male`, `[1, 2, 3, 4]`, `null`) ve `family` objesini güncelleyin.
- [ ] Doe ailesinin şanslı sayılarının toplamını `console`'a yazdırın.&#x20;

### 💡 İpuçları:

- Objelerin nasıl çalıştığını anlamak için [objeler](../objects/) bölümünü ziyaret edin.
- Aile objesi içindeki her bir kişi objesinden `luckyNumbers` alabilirsiniz.
- Diziyi aldıktan sonra,her elemanı ekleyen bir döngü oluşturun ve ardından 3 aile üyesinin her bir toplamını ekleyin.
