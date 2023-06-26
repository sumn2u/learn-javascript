---
chapter: 5
pageNumber: 31
---

# Else

Ayrıca, ilk koşul doğru olmadığında uygulanacak bir `else` ifadesi de vardır. Herhangi bir değere müdahale etmek, ancak özel muamele için özellikle birini ayırmak istiyorsanız bu çok güçlüdür.

```javascript
let umbrellaMandatory;

if (country === "England") {
  umbrellaMandatory = true;
} else {
  umbrellaMandatory = false;
}
```

`else` ifadesi başka bir `if` ile birleştirilebilir. Bir önceki yazıdaki örneği yeniden yapalım.

```javascript
if (country === "England") {
  ...
} else if (country === "France") {
  ...
} else if (country === "Germany") {
  ...
}
```

{% exercise %}
Aşağıdaki değerlerden `num1`in `num2`den büyük olup olmadığını kontrol eden bir koşullu ifade yazın. Eğer büyükse, `result` değişkenine "num1 is greater than num2" atayın. Değilse, "num1 is less than or equal to num2" ifadesini atayın.

{% initial %}
let num1 = 10;
let num2 = 5;
let result;

// num1'in num2'den büyük olup olmadığını kontrol et
if( condition ) {

}else {

}
{% solution %}
let num1 = 10;
let num2 = 5;
let result;

// num1'in num2'den büyük olup olmadığını kontrol et
if (num1 > num2) {
result = "num1 is greater than num2";
} else {
result = "num1 is less than or equal to num2";
}

{% validation %}
assert(result == "num1 is greater than num2" );

{% context %}
{% endexercise %}
