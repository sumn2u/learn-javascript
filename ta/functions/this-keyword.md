---
chapter: 8
description: ஜாவாஸ்கிரிப்டில் `this` முக்கிய சொல்லைப் புரிந்துகொள்வது.
---

## ஜாவாஸ்கிரிப்டில் `this` முக்கிய சொல்லைப் புரிந்துகொள்வது

ஜாவாஸ்கிரிப்டில் `this` முக்கிய சொல் அது சார்ந்திருக்கும் பொருளைக் குறிக்கிறது. அது எங்கு பயன்படுத்தப்படுகிறது என்பதைப் பொறுத்து இது வெவ்வேறு மதிப்புகளைக் கொண்டுள்ளது: ஒரு முறையில், தனியாக, ஒரு செயல்பாட்டில், ஒரு நிகழ்வில், முதலியன.

### Global சூழலில் `this`

Global execution சூழலில் (எந்த செயல்பாட்டிற்கும் வெளியே), `this` global பொருளைக் குறிக்கிறது, இது உலாவிகளில் `window` ஆகும்.

```javascript
console.log(this); // Output: Window {...}
```

### பொருள் முறைகளில் `this`

ஒரு பொருள் முறையில் (object method) பயன்படுத்தப்படும்போது, `this` முறை சார்ந்திருக்கும் பொருளைக் குறிக்கிறது.

```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.fullName()); // Output: John Doe
```

### Constructor செயல்பாடுகளில் `this`

ஒரு constructor செயல்பாட்டில், `this` புதிதாக உருவாக்கப்பட்ட instance ஐ குறிக்கிறது.

```javascript
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const person1 = new Person("Jane", "Smith");
console.log(person1.firstName); // Output: Jane
```

### Arrow செயல்பாடுகளில் `this`

Arrow செயல்பாடுகளுக்கு அவற்றின் சொந்த `this` இல்லை. மாறாக, `this` என்பது arrow செயல்பாடு வரையறுக்கப்பட்டுள்ள வெளிப்புற செயல்பாட்டிலிருந்து சொற்பொருள் ரீதியாகப் பெறப்படுகிறது.

```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        const getFullName = () => `${this.firstName} ${this.lastName}`;
        return getFullName();
    }
};

console.log(person.fullName()); // Output: John Doe
```

### நிகழ்வு கையாளுபவர்களில் (Event Handlers) `this`

நிகழ்வு கையாளுபவர்களில், `this` நிகழ்வைப் பெற்ற உறுப்பைக் குறிக்கிறது.

```html
<button id="myButton">Click me</button>
<script>
    document.getElementById("myButton").addEventListener("click", function() {
        console.log(this); // Output: <button id="myButton">Click me</button>
    });
</script>
```

### `call`, `apply`, மற்றும் `bind` உடன் `this` ஐ மாற்றுதல்

`call`, `apply`, மற்றும் `bind` ஐப் பயன்படுத்தி நீங்கள் வெளிப்படையாக `this` இன் மதிப்பை அமைக்கலாம்.

#### `call` முறை

`call` முறையானது வழங்கப்பட்ட `this` மதிப்பு மற்றும் தனித்தனியாக வழங்கப்பட்ட வாதங்களுடன் ஒரு செயல்பாட்டை அழைக்கிறது.

```javascript
function greet() {
    console.log(`Hello, ${this.name}`);
}

const person = { name: "Alice" };
greet.call(person); // Output: Hello, Alice
```

#### `apply` முறை

`apply` முறையானது வழங்கப்பட்ட `this` மதிப்பு மற்றும் ஒரு வரிசையாக வழங்கப்பட்ட வாதங்களுடன் ஒரு செயல்பாட்டை அழைக்கிறது.

```javascript
function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

const person = { name: "Bob" };
greet.apply(person, ["Hi"]); // Output: Hi, Bob
```

#### `bind` முறை

`bind` முறை ஒரு புதிய செயல்பாட்டை உருவாக்குகிறது, அது அழைக்கப்படும்போது அதன் `this` முக்கிய சொல் வழங்கப்பட்ட மதிப்பிற்கு அமைக்கப்படும்.

```javascript
function greet() {
    console.log(`Hello, ${this.name}`);
}

const person = { name: "Charlie" };
const greetPerson = greet.bind(person);
greetPerson(); // Output: Hello, Charlie
```

### முடிவுரை

திறமையான ஜாவாஸ்கிரிப்ட் குறியீட்டை எழுதுவதற்கு `this` முக்கிய சொல்லைப் புரிந்துகொள்வது முக்கியமானது. அதன் மதிப்பு அது பயன்படுத்தப்படும் சூழலைப் பொறுத்தது, மேலும் `call`, `apply`, மற்றும் `bind` ஐப் பயன்படுத்தி அதை வெளிப்படையாக அமைக்கலாம்.