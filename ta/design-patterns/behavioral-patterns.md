---
layout: editorial
title: ஜாவாஸ்கிரிப்டில் நடத்தை வடிவமைப்பு முறைகள் (Behavioral Design Patterns in Javascript)
description: பொருள்கள் (objects) ஒன்றுக்கொன்று எவ்வாறு தொடர்புகொள்கின்றன மற்றும் அவற்றிற்குப் பொறுப்புகளை எவ்வாறு ஒதுக்குவது என்பதில் கவனம் செலுத்துகின்றன.
chapter: 23
pageNumber: 219
---

# நடத்தை வடிவமைப்பு முறைகள் (Behavioral Design Patterns)

பொருள்கள் ஒன்றுக்கொன்று எவ்வாறு தொடர்புகொள்கின்றன மற்றும் அவற்றிற்குப் பொறுப்புகளை எவ்வாறு ஒதுக்குவது என்பதில் கவனம் செலுத்துகின்றன.

## 1. பொறுப்புச் சங்கிலி (Chain of Responsibility) 

பொறுப்புச் சங்கிலி என்பது ஒரு நடத்தை வடிவமைப்பு முறையாகும், மேலும் ஒரு கோரிக்கையை (request) எடுத்து அதை கையாளுபவர்களின் சங்கிலியுடன் (chain of handlers) அனுப்புவதே இதன் முக்கிய நோக்கமாகும். கோரிக்கை சங்கிலி வழியாகச் செல்லும்போது, ஒவ்வொரு கையாளுபவரும் கோரிக்கையைச் செயலாக்கலாமா (process) அல்லது சங்கிலியில் உள்ள அடுத்த கையாளுபவரிடம் அனுப்பலாமா என்பதை முடிவு செய்வார்கள். கோரிக்கையை அனுப்பியவருக்கு (sender), அதை யார் செயலாக்கப் போகிறார்கள் என்பதை அறியத் தேவையில்லாமல், பல கையாளுபவர்கள் கோரிக்கையைக் கையாள இந்த முறை அனுமதிக்கிறது. 

## 1.1. பொறுப்புச் சங்கிலியின் கூறுகள் 

*கோரிக்கை (Request)*

கோரிக்கை என்பது செயலாக்கப்பட வேண்டிய கிளையன்ட் அனுப்பும் பொருளாகும். கோரிக்கையானது செயலாக்கப்படும் வரை அல்லது சங்கிலியின் முடிவை அடையும் வரை கையாளுபவர்களின் சங்கிலி வழியாகச் செல்கிறது. 

*சுருக்கக் கையாளுபவர் இடைமுகம்/வகுப்பு (Abstract Handler Interface/Class)*

இது கோரிக்கையைக் கையாளுவதற்குப் பயன்படுத்தப்படும் முறைகளை வரையறுக்கும் அடிப்படை இடைமுகம்/வகுப்பாகும். கையாளுபவர் இடைமுகம் சங்கிலியின் வரிசை மற்றும் கோரிக்கை எவ்வாறு அனுப்பப்படுகிறது என்பதற்கான தர்க்கத்தைக் கொண்டுள்ளது.

*கான்கிரீட் கையாளுபவர்கள் (Concrete Handlers)*

இவை சுருக்கக் கையாளுபவரை (abstract handler) செயல்படுத்தும் முறைகள்/வகுப்புகளாகும். ஒவ்வொரு கான்கிரீட் கையாளுபவரும் ஒரு குறிப்பிட்ட வகையான கோரிக்கையைக் கையாள்வதற்கான தர்க்கத்தைக் கொண்டுள்ளனர். கான்கிரீட் கையாளுபவரால் கோரிக்கையைச் செயலாக்க முடியுமானால் அது செயலாக்கும், முடியாவிட்டால் கோரிக்கையை அடுத்த கையாளுபவருக்கு அனுப்பும். 

## 1.2. பொறுப்புச் சங்கிலியின் நன்மைகள் 

**பயன்படுத்த எளிதானது (Ease of Use)**

அனுப்புநருக்குக் கோரிக்கையைச் செயலாக்க குறிப்பிட்ட முறை தெரிந்திருக்கத் தேவையில்லை, அனுப்புநர் அதைச் சங்கிலிக்கு அனுப்பினால் போதும். இது அனுப்புநருக்குக் கோரிக்கைகளைச் செயலாக்குவதை எளிதாக்குகிறது. 

**நெகிழ்வுத்தன்மை மற்றும் நீட்டிக்கும் திறன் (Flexibility and Extensibility)**

அனுப்புநரின் குறியீட்டை மாற்றாமல் புதிய கையாளுபவர்களைச் சங்கிலியில் சேர்க்கலாம் அல்லது சங்கிலியிலிருந்து அகற்றலாம். இது செயலாக்க வரிசையின் மாறும் மாற்றங்களை (dynamic modification) அனுமதிக்கிறது. 

**பொறுப்பான பிரிவினையை ஊக்குவிக்கிறது (Promotes Responsible Segregation)**

கையாளுபவர்கள் தங்களின் வரையறுக்கப்பட்ட தர்க்கத்தின் அடிப்படையில் குறிப்பிட்ட வகையான கோரிக்கைகளைச் செயலாக்கப் பொறுப்பாவார்கள். இது பொறுப்புகளின் தெளிவான பிரிவினையை ஊக்குவிக்கிறது, ஒவ்வொரு கையாளுபவரையும் சுயாதீனமாக நிர்வகிப்பதை மற்றும் பராமரிப்பதை எளிதாக்குகிறது.

**வரிசையான கோரிக்கை செயலாக்கம் (Sequential Request Processing)**

ஒவ்வொரு கோரிக்கையும் கையாளுபவர்களின் சங்கிலி மூலம் வரிசையாகச் செயலாக்கப்படுவதை இந்த முறை உறுதி செய்கிறது. ஒவ்வொரு கையாளுபவரும் கோரிக்கையைச் செயலாக்கவோ அல்லது அடுத்த கையாளுபவருக்கு அனுப்பவோ தேர்வு செய்யலாம். கோரிக்கைகள் ஒரு குறிப்பிட்ட வரிசையில் செயலாக்கப்பட வேண்டிய சூழ்நிலைகளில் இது மிகவும் பயனுள்ளதாக இருக்கும்.

## 1.3. எடுத்துக்காட்டு 

```javascript 
// Handler interface
class CoffeeHandler {
  constructor() {
    this.nextHandler = null;
  }

  setNext(handler) {
    this.nextHandler = handler;
  }

  processRequest(request) {
    throw new Error('processRequest method must be implemented by subclasses');
  }
}

// Concrete handler for ordering coffee
class OrderCoffeeHandler extends CoffeeHandler {
  processRequest(request) {
    if (request === 'Coffee') {
      return 'ஒரு கப் காபிக்கு ஆர்டர் செய்யப்பட்டுள்ளது. (Order placed for a cup of coffee.)';
    } else if (this.nextHandler) {
      return this.nextHandler.processRequest(request);
    } else {
      return 'மன்னிக்கவும், நாங்கள் ' + request + ' வழங்குவதில்லை.';
    }
  }
}

// Concrete handler for preparing coffee
class PrepareCoffeeHandler extends CoffeeHandler {
  processRequest(request) {
    if (request === 'PrepareCoffee') {
      return 'காபி தயார் செய்யப்படுகிறது. (Coffee is being prepared.)';
    } else if (this.nextHandler) {
      return this.nextHandler.processRequest(request);
    } else {
      return request + ' ஐத் தயார் செய்ய முடியாது.';
    }
  }
}

// Client code
const orderHandler = new OrderCoffeeHandler();
const prepareHandler = new PrepareCoffeeHandler();

// Set up the chain
orderHandler.setNext(prepareHandler);

// Order coffee
console.log(orderHandler.processRequest('Coffee'));  // Output: ஒரு கப் காபிக்கு ஆர்டர் செய்யப்பட்டுள்ளது.

// Prepare coffee
console.log(orderHandler.processRequest('PrepareCoffee'));  // Output: காபி தயார் செய்யப்படுகிறது.

// Try ordering something else
console.log(orderHandler.processRequest('Tea'));  // Output: மன்னிக்கவும், நாங்கள் Tea வழங்குவதில்லை.
```

## 2. கட்டளை (Command) 

கட்டளை (Command) வடிவமைப்பு முறை என்பது ஒரு நடத்தை வடிவமைப்பு முறையாகும், இது ஒரு கோரிக்கையை ஒரு பொருளாக இணைக்க உங்களை அனுமதிக்கிறது, அந்தப் பொருள் கோரிக்கையை இயக்குவதற்கு (execution) தேவையான அனைத்து தகவல்களையும் கொண்டிருக்கும். கோரிக்கைகளின் அளவுருவாக்கம் (parameterization) மற்றும் வரிசையாக்கத்தை (queuing) இந்த முறை அனுமதிக்கிறது மற்றும் செயல்பாடுகளைச் செயல்தவிர்க்கும் (undo) திறனை வழங்குகிறது. 

## 2.1. கட்டளையின் கூறுகள் 

*அழைப்பாளர் (Invoker)*

இது ஒரு கட்டளையை இயக்கக் கோரும் பொருளாகும். இது ஒரு கட்டளைக்கான குறிப்பைக் கொண்டுள்ளது மற்றும் அதன் `execute` முறையை அழைப்பதன் மூலம் கட்டளையை இயக்க முடியும். கட்டளை எவ்வாறு செயல்படுத்தப்படுகிறது என்ற விவரங்களை அழைப்பாளர் தெரிந்து கொள்ளத் தேவையில்லை. இது கட்டளையைத் தூண்டுகிறது (triggers). 

*கட்டளை (Command)*

இது `execute` முறையை அறிவிக்கும் இடைமுகம் அல்லது சுருக்க வகுப்பாகும். கான்கிரீட் கட்டளை வகுப்புகள் செயல்படுத்த வேண்டிய பொதுவான முறையை இது வரையறுக்கிறது.

*பெறுநர் (Receiver)* 

ஒரு கட்டளையின் `execute` முறையை அழைக்கும்போது உண்மையான வேலையைச் செய்யும் ஒரு பொருள் இதுவாகும். ஒரு குறிப்பிட்ட கட்டளையுடன் தொடர்புடைய செயலை எவ்வாறு செய்வது என்று பெறுநருக்குத் தெரியும். 

## 2.2. கட்டளையின் நன்மைகள் 

**நெகிழ்வுத்தன்மை மற்றும் நீட்டிக்கும் திறன் (Flexibility and Extensibility)**

அழைப்பாளரை (invoker) அல்லது பெறுநரை (receiver) மாற்றத் தேவையில்லாமல் புதிய கட்டளைகளை எளிதாகச் சேர்க்க இந்த முறை அனுமதிக்கிறது. 

**செயல்தவிர் மற்றும் மீண்டும் செய் செயல்பாடுகள் (Undo and Redo Operations)**

கட்டளை முறையானது செயல்தவிர் மற்றும் மீண்டும் செய் செயல்பாடுகளைச் செயல்படுத்துவதற்கு உதவுகிறது. ஒவ்வொரு கட்டளைப் பொருளும் முந்தைய நிலையைக் கண்காணிக்க முடியும், செயல்படுத்தப்பட்ட செயலைத் திரும்பப் பெற இது உதவுகிறது.

**அளவுருவாக்கம் மற்றும் வரிசையாக்கம் (Parameterization and Queuing)**

கட்டளைகளை வாதங்களுடன் (arguments) அளவுருவாக்கலாம், இது இயக்க நேரத்தில் (runtime) செயல்களைத் தனிப்பயனாக்க அனுமதிக்கிறது. கூடுதலாக, இந்த முறையானது கோரிக்கைகளை வரிசைப்படுத்தவும் மற்றும் திட்டமிடவும் (scheduling) செயல்படுத்துகிறது, செயல்படுத்துவதற்கான வரிசையின் மீது கட்டுப்பாட்டை வழங்குகிறது.

**வரலாறு மற்றும் பதிவு செய்தல் (History and Logging)**

செயல்படுத்தப்பட்ட கட்டளைகளின் வரலாற்றைப் பராமரிக்க முடியும், இது தணிக்கை (auditing), பதிவு செய்தல் (logging) அல்லது பயனர் செயல்களைக் கண்காணிப்பதற்கு பயனுள்ளதாக இருக்கும்.

## 2.3. எடுத்துக்காட்டு 

```javascript 

class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }

  execute() {
    throw new Error('execute() method must be implemented');
  }
}

class ConcreteCommand extends Command {
  constructor(receiver, parameter) {
    super(receiver);
    this.parameter = parameter;
  }

  execute() {
    this.receiver.action(this.parameter);
  }
}

class Receiver {
  action(parameter) {
    console.log(`பெறுநர் அளவுருவுடன் செயலைச் செய்கிறார்: ${parameter}`);
  }
}

class Invoker {
  constructor() {
    this.commands = [];
  }

  addCommand(command) {
    this.commands.push(command);
  }

  executeCommands() {
    this.commands.forEach(command => command.execute());
    this.commands = []; // Clear the executed commands
  }
}

// Usage
const receiver = new Receiver();
const command1 = new ConcreteCommand(receiver, 'கட்டளை 1 அளவுரு');
const command2 = new ConcreteCommand(receiver, 'கட்டளை 2 அளவுரு');

const invoker = new Invoker();
invoker.addCommand(command1);
invoker.addCommand(command2);

invoker.executeCommands();
```

## 3. மொழிபெயர்ப்பாளர் (Interpreter) 

மொழிபெயர்ப்பாளர் வடிவமைப்பு முறை (Interpreter design pattern) என்பது ஒரு மொழிக்கான இலக்கணத்தை (grammar) வரையறுக்கவும் அந்த மொழியில் உள்ள வாக்கியங்களை (sentences) விளக்குவதற்கு ஒரு மொழிபெயர்ப்பாளரை வழங்கவும் பயன்படுத்தப்படுகிறது. இது பொதுவாக மொழி மொழிபெயர்ப்பாளர்கள் அல்லது பாகுபடுத்திகளை (parsers) உருவாக்கப் பயன்படுகிறது, ஆனால் அவற்றை உங்கள் பயன்பாட்டிற்குள்ளும் பயன்படுத்தலாம். உங்களிடம் ஒரு சிக்கலான டெஸ்க்டாப் பயன்பாடு (desktop application) இருப்பதாக கற்பனை செய்து பாருங்கள், ஒரு எளிய ஸ்கிரிப்டிங் மொழியை நீங்கள் வடிவமைக்கலாம், இது இறுதி-பயனர் (end-user) எளிமையான வழிமுறைகள் மூலம் உங்கள் பயன்பாட்டைக் கையாள அனுமதிக்கிறது. 


## 3.1. மொழிபெயர்ப்பாளரின் கூறுகள் 

*சூழல் (Context)*

கோவை (expressions) விளக்க மொழிபெயர்ப்பாளர் பயன்படுத்தும் குளோபல் நிலை (global state) அல்லது சூழல் (context). கோவைகளை விளக்கும் போது தொடர்புடைய தகவல்களை இது பெரும்பாலும் கொண்டுள்ளது. 

*சுருக்கக் கோவைகள் (Abstract Expressions)* 

மொழியின் இலக்கணத்தில் உள்ள அனைத்து வகையான கோவைகளுக்கான இடைமுகத்தை இது வரையறுக்கிறது. இந்தக் கோவைகள் பொதுவாக ஒரு சுருக்க வகுப்பு (abstract class) அல்லது இடைமுகமாகக் குறிப்பிடப்படுகின்றன. 

*முனையக் கோவைகள் (Terminal Expressions)*

இலக்கணத்தில் உள்ள முனையக் குறியீடுகளைக் (terminal symbols) குறிக்கிறது. இவை கோவை மரத்தின் (expression tree) இலைகளாகும். முனையக் கோவை சுருக்கக் கோவையால் வரையறுக்கப்பட்ட இடைமுகத்தை செயல்படுத்துகிறது.

*முனையம்-அல்லாத கோவை (Non-terminal Expression)* 

இலக்கணத்தில் உள்ள முனையம்-அல்லாத குறியீடுகளைக் குறிக்கிறது. முனையம்-அல்லாத கோவைகள் சிக்கலான கோவைகளை இணைப்பதன் (combining) மூலமாகவோ அல்லது இயற்றுவதன் (composing) மூலமாகவோ வரையறுக்க முனைய மற்றும்/அல்லது பிற முனையம்-அல்லாத கோவைகளைப் பயன்படுத்துகின்றன.

*கோவை மரம் (Expression Tree)* 

மொழியின் கோவைகளின் படிநிலை அமைப்பைக் (hierarchical structure) குறிக்கிறது. மொழியின் இலக்கண விதிகளின் அடிப்படையில் முனைய மற்றும் முனையம்-அல்லாத கோவைகளை இணைப்பதன் மூலம் கோவை மரம் கட்டப்பட்டுள்ளது. 

*மொழிபெயர்ப்பாளர் (Interpreter)*

கோவை மரத்தால் உருவாக்கப்பட்ட சுருக்க தொடரியல் மரத்தை (abstract syntax tree) விளக்கும் இடைமுகம் அல்லது வகுப்பை வரையறுக்கிறது. இது பொதுவாக ஒரு `interpret` முறையை உள்ளடக்கியது, அது ஒரு சூழலை (context) எடுத்து அந்தச் சூழலின் அடிப்படையில் கோவையை விளக்குகிறது.

*கிளையன்ட் (client)*

மொழியின் இலக்கணத்தின் அடிப்படையில் முனைய மற்றும் முனையம்-அல்லாத கோவைகளைப் பயன்படுத்தி சுருக்க தொடரியல் மரத்தை உருவாக்குகிறது. கிளையன்ட் பின்னர் கோவையை விளக்க மொழிபெயர்ப்பாளரைப் பயன்படுத்துகிறார். 

## 3.2. மொழிபெயர்ப்பாளர்களின் நன்மைகள்

**இலக்கண விளக்கத்தின் எளிமை (Ease of Grammar Interpretation)**

சிக்கலான இலக்கண விதிகளைச் சிறிய, நிர்வகிக்கக்கூடிய கோவைகளாக உடைப்பதன் மூலம் இந்த முறை அவற்றை விளக்குவதை எளிதாக்குகிறது. ஒவ்வொரு கோவை வகையும் அதன் சொந்த விளக்கத்தைக் கையாளுகிறது, ஒட்டுமொத்த விளக்கச் செயல்முறையை நிர்வகிப்பதை எளிதாக்குகிறது.

**சிறந்த பிழை கையாளுதல் (Better Error Handling)**

ஒவ்வொரு கோவை வகையும் அதன் சொந்த விளக்கத்தைக் கையாளுவதால், பிழை கையாளுதலை (error handling) குறிப்பிட்ட கோவைகளுக்கு ஏற்ப வடிவமைக்க முடியும். உள்ளீட்டைப் பாகுபடுத்தும் போது (parsing) அல்லது விளக்கும் போது துல்லியமான மற்றும் அர்த்தமுள்ள பிழை செய்திகளை வழங்க இது அனுமதிக்கிறது.

**நெகிழ்வுத்தன்மை மற்றும் நீட்டிக்கும் திறன் (Flexibility and Extensibility)** 

மொழிபெயர்ப்பாளர் முறை முக்கிய மொழிபெயர்ப்பாளர் தர்க்கத்தை மாற்றாமல் இலக்கண விதிகள் மற்றும் மொழி கோவைகளை (language expressions) வரையறுப்பதற்கும் நீட்டிப்பதற்கும் ஒரு நெகிழ்வான வழியை வழங்குகிறது. புதிய முனைய மற்றும் முனையம்-அல்லாத கோவை வகுப்புகளை உருவாக்குவதன் மூலம் நீங்கள் எளிதாகப் புதிய கோவைகளைச் சேர்க்கலாம். 

**பிற வடிவமைப்பு முறைகளுடனான ஒருங்கிணைப்பு (Integration with other Design Patterns)**

கோவைகளின் சிக்கலான படிநிலைகளை உருவாக்க, கலவை (Composite) போன்ற பிற வடிவமைப்பு முறைகளுடன் மொழிபெயர்ப்பாளர் முறையை இணைக்கலாம். இது சக்திவாய்ந்த மற்றும் அம்சம் நிறைந்த (feature-rich) மொழிபெயர்ப்பாளர்களை உருவாக்க அனுமதிக்கிறது.

## 3.3. எடுத்துக்காட்டு 

```javascript 
// Abstract Expression
class Expression {
  interpret(context) {
    // To be overridden by subclasses
  }
}

// Terminal Expression: NumberExpression
class NumberExpression extends Expression {
  constructor(number) {
    super();
    this.number = number;
  }

  interpret(context) {
    return this.number;
  }
}

// Terminal Expression: VariableExpression
class VariableExpression extends Expression {
  constructor(variable) {
    super();
    this.variable = variable;
  }

  interpret(context) {
    return context[this.variable] || 0;
  }
}

// Non-terminal Expression: AddExpression
class AddExpression extends Expression {
  constructor(expression1, expression2) {
    super();
    this.expression1 = expression1;
    this.expression2 = expression2;
  }

  interpret(context) {
    return this.expression1.interpret(context) + this.expression2.interpret(context);
  }
}

// Non-terminal Expression: SubtractExpression
class SubtractExpression extends Expression {
  constructor(expression1, expression2) {
    super();
    this.expression1 = expression1;
    this.expression2 = expression2;
  }

  interpret(context) {
    return this.expression1.interpret(context) - this.expression2.interpret(context);
  }
}

// Client code
const context = { a: 10, b: 5, c: 2 };

const expression = new SubtractExpression(
  new AddExpression(
    new VariableExpression('a'),
    new VariableExpression('b')
  ),
  new VariableExpression('c')
);

const result = expression.interpret(context);
console.log('Result:', result); // Output: Result: 13
```

## 4. ஐட்ரேட்டர் (Iterator) 

பொருள்களின் தொகுப்பின் (collection of objects) மூலம் திறம்பட சுழற்ற (loop) கிளையன்ட்களை ஐட்ரேட்டர் முறை அனுமதிக்கிறது.

## 4.1. ஐட்ரேட்டரின் கூறுகள் 

*ஐட்ரேட்டர் (Iterator)*

`first()`, `next()` போன்ற முறைகளைக் கொண்டு ஐட்ரேட்டர் இடைமுகம் அல்லது வகுப்பைச் செயல்படுத்துகிறது. தொகுப்புகளைப் பயணிக்கும்போது (traversing) ஐட்ரேட்டர் தற்போதைய நிலையைக் கண்காணிக்கிறது. 

*உருப்படிகள் (Items)*

இவை ஐட்ரேட்டர் பயணிக்கும் தொகுப்பின் தனிப்பட்ட பொருள்களாகும் 

## 4.2. ஐட்ரேட்டர்களின் நன்மைகள்

**வெவ்வேறு தரவுக் கட்டமைப்புகளுடன் பொருந்தக்கூடிய தன்மை (Compatibility with Different Data Structures)** 

ஐட்ரேட்டர் முறையானது வெவ்வேறு தரவுக் கட்டமைப்புகளுக்கு ஒரே சுழற்சி தர்க்கத்தைப் (iteration logic) பயன்படுத்த அனுமதிக்கிறது. 

**ஒரே நேர சுழற்சிக்கான ஆதரவு (Support for concurrent Iteration)**

ஒன்றுக்கொன்று குறுக்கிடாமல் (interfering) ஒரே தொகுப்பின் மீது ஒரே நேரத்தில் சுழற்சி செய்ய ஐட்ரேட்டர்கள் ஆதரவளிக்க முடியும், இது தொகுப்பின் மீது ஒரே நேரத்தில் வெவ்வேறு வழிகளில் சுழற்சி செய்ய கிளையன்ட்டை அனுமதிக்கிறது.

**சோம்பேறி ஏற்றம் (Lazy Loading)**

தேவைக்கேற்ப கூறுகளை ஏற்றுவதற்கு (load) ஐட்ரேட்டர்களை வடிவமைக்க முடியும், இது அனைத்து கூறுகளையும் ஒரே நேரத்தில் ஏற்றுவது நடைமுறைக்குச் சாத்தியமில்லாத அல்லது வளங்களை அதிக அளவில் பயன்படுத்தக்கூடிய பெரிய தொகுப்புகளுக்குப் பயனுள்ளதாக இருக்கும். தேவைக்கேற்ப கூறுகளைப் பெறலாம், நினைவகப் பயன்பாட்டை இது மேம்படுத்துகிறது.

**எளிமைப்படுத்தப்பட்ட இடைமுகம் (Simplified Interface)**

தொகுப்பின் உள் கட்டமைப்பை வெளிப்படுத்தாமல் ஒரு தொகுப்பில் உள்ள கூறுகளை அணுகுவதற்கான சுத்தமான மற்றும் நிலையான இடைமுகத்தை ஐட்ரேட்டர் முறை வழங்குகிறது. இது தொகுப்பின் பயன்பாடு மற்றும் புரிதலை எளிதாக்குகிறது.

## 4.3. எடுத்துக்காட்டு 

```javascript
// Car class representing a car
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getInfo() {
    return `${this.make} ${this.model}`;
  }
}

// Iterator interface
class Iterator {
  constructor(collection) {
    this.collection = collection;
    this.index = 0;
  }

  next() {
    return this.collection[this.index++];
  }

  hasNext() {
    return this.index < this.collection.length;
  }
}

// Collection of cars
class CarCollection {
  constructor() {
    this.cars = [];
  }

  addCar(car) {
    this.cars.push(car);
  }

  createIterator() {
    return new Iterator(this.cars);
  }
}

// Usage
const carCollection = new CarCollection();
carCollection.addCar(new Car('Toyota', 'Corolla'));
carCollection.addCar(new Car('Honda', 'Civic'));
carCollection.addCar(new Car('Ford', 'Mustang'));

const iterator = carCollection.createIterator();

while (iterator.hasNext()) {
  const car = iterator.next();
  console.log(car.getInfo());
}
```

## 5. மத்தியஸ்தர் (Mediator) 

பொருள்களின் ஒரு குழுவுக்கு இடையே தொடர்புகொள்வதற்கான (interaction) வழியை மூடிமறைப்பதன் (encapsulating) மூலம் மத்தியஸ்தர் (Mediator) முறை ஒரு இடைத்தரகராகச் (middle man) செயல்படுகிறது. அமைப்பின் வெவ்வேறு கூறுகளுக்கு இடையே நேரடிக் குறிப்பு இல்லாமல் தொடர்புகொள்வதை மத்தியஸ்தர் எளிதாக்குகிறார். 

## 5.1. மத்தியஸ்தரின் கூறுகள் 

*மத்தியஸ்தர் (Mediator)*

செயல்பாடுகளின் மீதான மையக் கட்டுப்பாட்டை (central control) மத்தியஸ்தர் நிர்வகிக்கிறார். இது சக (Colleague) பொருள்களுடன் தொடர்புகொள்வதற்கான இடைமுகத்தைக் கொண்டுள்ளது மற்றும் ஒவ்வொரு சக பொருளுக்கும் ஒரு குறிப்பைக் கொண்டுள்ளது.

*சக (Colleague)*

சக ஊழியர்கள் என்பவர்கள் மத்தியஸ்தம் செய்யப்படும் பொருள்கள், ஒவ்வொரு சக ஊழியருக்கும் மத்தியஸ்தரைப் பற்றிய குறிப்பு இருக்கும்.

## 5.2. மத்தியஸ்தரின் நன்மைகள் 

**மையப்படுத்தப்பட்ட கட்டுப்பாடு (Centralized Control)**

மத்தியஸ்தருக்குள் தொடர்புகளை மையப்படுத்துவது கூறுகளுக்கிடையேயான தொடர்புகளின் சிறந்த கட்டுப்பாட்டிற்கும் ஒருங்கிணைப்பிற்கும் (coordination) அனுமதிக்கிறது. மத்தியஸ்தர் செய்திகளின் விநியோகத்தை நிர்வகிக்கலாம், செய்திகளுக்கு முன்னுரிமை அளிக்கலாம் மற்றும் அமைப்பின் தேவைகளின் அடிப்படையில் குறிப்பிட்ட தர்க்கத்தைப் பயன்படுத்தலாம்.

**எளிமைப்படுத்தப்பட்ட தொடர்பு (Simplified Communication)**

நேரடித் தொடர்பின் சிக்கலான தன்மையைக் கையாளுவதற்குப் பதிலாக மத்தியஸ்தருக்குக் கூறுகள் செய்திகளை அனுப்புவதால், மத்தியஸ்தர்கள் தொடர்பு தர்க்கத்தை (communication logic) எளிதாக்குகிறார்கள். இது கூறுகளுக்கு இடையிலான தொடர்புகளை எளிதாக்குகிறது மற்றும் எளிதான பராமரிப்பு மற்றும் புதுப்பிப்புகளை அனுமதிக்கிறது.

**மத்தியஸ்தரின் மறுபயன்பாடு (Reusability of Mediator)**

மத்தியஸ்தரைப் பல்வேறு கூறுகள் மற்றும் சூழ்நிலைகளில் மீண்டும் பயன்படுத்தலாம், பயன்பாட்டின் வெவ்வேறு பகுதிகளுக்கு ஒற்றைக் கட்டுப்பாட்டுப் புள்ளியை இது அனுமதிக்கிறது. இந்த மறுபயன்பாடு நிலைத்தன்மையை ஊக்குவிக்கிறது மற்றும் தொடர்பு ஓட்டத்தை (communication flow) திறமையாக நிர்வகிக்க உதவுகிறது.

**பராமரிப்பை மேம்படுத்துகிறது (Promotes Maintainability)**

கூறுகளுக்கிடையேயான நேரடித் தொடர்பின் சிக்கலைக் குறைப்பதன் மூலம் மத்தியஸ்தர் முறை பராமரிப்பை மேம்படுத்துகிறது. அமைப்பு வளரும்போது, தனிப்பட்ட கூறுகளைப் பாதிக்காமல் மத்தியஸ்தருக்குள் மாற்றங்களையும் புதுப்பிப்புகளையும் செய்யலாம், இதனால் பராமரிப்பு எளிதாகிறது மற்றும் பிழைகள் குறைகின்றன.

```javascript
var Participant = function (name) {
    this.name = name;
    this.chatroom = null;
};

Participant.prototype = {
    send: function (message, to) {
        this.chatroom.send(message, this, to);
    },
    receive: function (message, from) {
        console.log(from.name + " to " + this.name + ": " + message);
    }
};

var Chatroom = function () {
    var participants = {};

    return {

        register: function (participant) {
            participants[participant.name] = participant;
            participant.chatroom = this;
        },

        send: function (message, from, to) {
            if (to) {                      // single message
                to.receive(message, from);
            } else {                       // broadcast message
                for (key in participants) {
                    if (participants[key] !== from) {
                        participants[key].receive(message, from);
                    }
                }
            }
        }
    };
};

function run() {

    var yoko = new Participant("Yoko");
    var john = new Participant("John");
    var paul = new Participant("Paul");
    var ringo = new Participant("Ringo");

    var chatroom = new Chatroom();
    chatroom.register(yoko);
    chatroom.register(john);
    chatroom.register(paul);
    chatroom.register(ringo);

    yoko.send("All you need is love.");
    yoko.send("I love you John.");
    john.send("Hey, no need to broadcast", yoko);
    paul.send("Ha, I heard that!");
    ringo.send("Paul, what do you think?", paul);
}
```

## 6. மெமெண்டோ (Memento)

மெமெண்டோ வடிவமைப்பு முறை (Memento design pattern) ஒரு பொருளின் நிலையை அதன் உள் கட்டமைப்பை வெளிப்படுத்தாமல் படம்பிடிக்கவும் பின்னர் அதை மீட்டெடுக்கவும் அனுமதிக்கிறது. மெமெண்டோ என்பது அசல் பொருளின் நிலையைச் சேமிக்கும் ஒரு தனிப் பொருளாகும். 

## 6.1. மெமெண்டோவின் கூறுகள் 

*உருவாக்குபவர் (Originator)*

இது சேமிக்கப்படும் பொருளாகும். இது அதன் உள் நிலையைச் சேமிக்க ஒரு மெமெண்டோ பொருளை உருவாக்குகிறது. 

*மெமெண்டோ (Memento)*

உருவாக்குபவரின் நிலையைச் சேமிக்க மெமெண்டோ பொறுப்பாகும். இது உருவாக்குபவரின் நிலையை மீட்டெடுப்பதற்கும் அமைப்பதற்குமான முறைகளைக் கொண்டுள்ளது, ஆனால் உருவாக்குபவரின் உள் கட்டமைப்பை இது வெளிப்படுத்தாது. 

*பராமரிப்பாளர் (Caretaker)*

பராமரிப்பாளர் மெமெண்டோக்களைக் கண்காணிக்கவும் நிர்வகிக்கவும் பொறுப்பாவார். இது மெமெண்டோக்களின் உள்ளடக்கங்களை மாற்றாது அல்லது பரிசோதிக்காது

## 6.2. மெமெண்டோவின் நன்மைகள் 

**நிலையைப் பாதுகாத்தல் மற்றும் மீட்டெடுத்தல் (State Preservation and Restoration)**

மெமெண்டோக்கள் ஒரு பொருளின் உள் நிலையைப் படம்பிடித்துப் பின்னர் மீட்டெடுக்க அனுமதிக்கின்றன. 

**செயல்தவிர்/மீண்டும் செய் செயல்பாடுகள் (Undo/Redo Operations)**

செயல்தவிர் மற்றும் மீண்டும் செய் செயல்பாட்டை எளிதாகச் செயல்படுத்துவதற்கு மெமெண்டோ உதவுகிறது. மெமெண்டோக்கள் பல்வேறு நேரங்களில் பொருள்களின் நிலையைச் சேமித்து வைப்பதால், பொருளில் செய்யப்பட்ட மாற்றங்களைச் செயல்தவிர்க்கவோ அல்லது பொருளில் செய்யப்பட்ட மாற்றங்களை மீண்டும் செய்யவோ நீங்கள் ஆதரிக்கலாம்.

**மேம்படுத்தப்பட்ட செயல்திறன் (Improved Performance)**

பிற அணுகுமுறைகளுடன் ஒப்பிடும்போது ஒரு மெமெண்டோவில் பொருளின் நிலையைச் சேமிப்பது மிகவும் திறமையான சேமிப்பிற்கும் (storage) மீட்டெடுப்பு (retrieval) செயல்பாடுகளுக்கும் அனுமதிக்கிறது. 

**நெகிழ்வான வடிவமைப்பு (Flexible Design)** 

ஒரு பொருளின் நிலையின் வரலாற்றை நிர்வகிக்க இது ஒரு நெகிழ்வான வழியை வழங்குகிறது. எந்த நிலைகளை வைத்திருக்க வேண்டும், எப்போது அவற்றை மீட்டெடுக்க வேண்டும் என்பதைப் பராமரிப்பாளர் தீர்மானிக்க முடியும், இது பயன்பாட்டின் தேவைகளின் அடிப்படையில் தனிப்பயனாக்கக்கூடிய அணுகுமுறையை அனுமதிக்கிறது.


## 6.3. எடுத்துக்காட்டு

```javascript
// Computer class (originator)
class Computer {
  constructor() {
    this.os = '';
    this.version = '';
  }

  setOS(os, version) {
    this.os = os;
    this.version = version;
  }

  getState() {
    return {
      os: this.os,
      version: this.version
    };
  }

  restoreState(state) {
    this.os = state.os;
    this.version = state.version;
  }
}

// Caretaker
class Caretaker {
  constructor() {
    this.mementos = {};
    this.nextKey = 1;
  }

  add(memento) {
    const key = this.nextKey++;
    this.mementos[key] = memento;
    return key;
  }

  get(key) {
    return this.mementos[key];
  }
}

function run() {
  const computer = new Computer();
  const caretaker = new Caretaker();

  // Save state
  const originalState = computer.getState();
  const key = caretaker.add(originalState);

  // Mess up the state
  computer.setOS('Windows', '11');

  // Restore original state
  const restoredState = caretaker.get(key);
  computer.restoreState(restoredState);

  console.log(computer.getState()); // Output: { os: '', version: '' }
}

run();
```

## 7. பார்வையாளர் (Observer)

பார்வையாளர் முறை (Observer pattern) மற்றொரு பொருளால் ஒளிபரப்பப்படும் (broadcast) நிகழ்வுகளுக்குப் (events) பல பொருள்கள் குழுசேர (subscribe) அனுமதிக்கிறது. 

## 7.1. பார்வையாளரின் கூறுகள் 

*பொருள் (Subject)*

பொருள் (Subject) என்பது ஒரு இடைமுகத்தைச் செயல்படுத்தும் பொருளாகும், இது பார்வையாளர் (observer) பொருள்களை அதில் குழுசேர அனுமதிக்கிறது மற்றும் அதன் நிலை மாறும்போது பார்வையாளர்களுக்கு அறிவிப்புகளை (notifications) அனுப்புகிறது. 

*பார்வையாளர்கள் (Observers)*

பார்வையாளர் பொருளுக்குக் குழுசேருகிறார், மேலும் பொருள் மூலம் அறிவிக்கப்படும்போது பொதுவாக ஒரு செயல்பாடு அழைக்கப்படுகிறது.

## 7.2. பார்வையாளர்களின் நன்மைகள் 

**எளிமைப்படுத்தப்பட்ட நிகழ்வு கையாளுதல் (Simplified Event Handling)**

நிலை மாற்றம் குறித்த பார்வையாளர்களுக்கு அறிவிப்புகளாக நிகழ்வுகளைக் கருதலாம் என்பதால், பார்வையாளர் முறையானது நிகழ்வைக் கையாளும் வழிமுறைகளை எளிதாக்கும்.

**நகல் குறியீட்டைக் குறைக்கிறது (Reduces Duplicate code)**

பல இடங்களில் ஏற்படும் நிலை மாற்றங்களுக்குப் பதிலளிக்க அதே குறியீட்டை நகலெடுப்பதற்குப் பதிலாக, இந்தப் பதில்களை நிர்வகிக்க ஒரு மையப்படுத்தப்பட்ட இடத்தை பார்வையாளர் முறை அனுமதிக்கிறது, தூய்மையான மற்றும் பராமரிக்கக்கூடிய குறியீட்டை இது ஊக்குவிக்கிறது.

**ஒளிபரப்புத் தொடர்பிற்கான ஆதரவு (Support for Broadcast Communication)**

பார்வையாளர் முறை "ஒருவருக்கு-பலர் (one-to-many)" தொடர்பு மாதிரியை எளிதாக்குகிறது, அங்கு ஒற்றை நிகழ்வு பல பார்வையாளர்களின் செயல்களைத் தூண்டுகிறது. நிலையில் ஏற்படும் மாற்றத்திற்குப் பல கூறுகள் எதிர்வினையாற்ற வேண்டிய சூழ்நிலைகளில் இது பயனுள்ளதாக இருக்கும்.

**மாடுலாரிட்டி மற்றும் மறுபயன்பாடு (Modularity and Resuability)**

வெவ்வேறு பொருள்களில் (subjects) பார்வையாளர்களை மீண்டும் பயன்படுத்தலாம், இது மாடுலாரிட்டி மற்றும் குறியீடு மறுபயன்பாட்டை ஊக்குவிக்கிறது. இது மிகவும் நெகிழ்வான மற்றும் பராமரிக்கக்கூடிய குறியீட்டை அனுமதிக்கிறது.

## 7.3. எடுத்துக்காட்டு 

```javascript
function Click() {
    this.handlers = [];  // observers
}

Click.prototype = {

    subscribe: function (fn) {
        this.handlers.push(fn);
    },

    unsubscribe: function (fn) {
        this.handlers = this.handlers.filter(
            function (item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },

    fire: function (o, thisObj) {
        var scope = thisObj || window;
        this.handlers.forEach(function (item) {
            item.call(scope, o);
        });
    }
}

function run() {

    var clickHandler = function (item) {
        console.log("fired: " + item);
    };

    var click = new Click();

    click.subscribe(clickHandler);
    click.fire('event #1');
    click.unsubscribe(clickHandler);
    click.fire('event #2');
    click.subscribe(clickHandler);
    click.fire('event #3');
}
```

## 8. நிலை (State)

நிலை முறை (State pattern) என்பது ஒரு நடத்தை வடிவமைப்பு முறையாகும், இது ஒரு அடிப்படை பொருளை (base object) வைத்திருக்க உங்களை அனுமதிக்கிறது மற்றும் அதன் நிலையின் (state) அடிப்படையில் கூடுதல் செயல்பாட்டை (functionality) வழங்குகிறது. ஒரு பொருள் அதன் உள் நிலையின் அடிப்படையில் அதன் நடத்தையை மாற்ற வேண்டியிருக்கும் போது இந்த முறை மிகவும் பயனுள்ளதாக இருக்கும்.

## 8.1. நிலையின் கூறுகள்

*நிலை (State)*

இது நிலை மதிப்புகள் மற்றும் நிலையின் தொடர்புடைய நடத்தையை உள்ளடக்கிய பொருளாகும். 

*சூழல் (Context)*

இது தற்போதைய நிலையை வரையறுக்கும் நிலை பொருளுக்கான குறிப்பைப் பராமரிக்கும் பொருளாகும். இது பிற நிலை பொருள்களை அதன் தற்போதைய நிலையை வேறொரு நிலைக்கு மாற்ற அனுமதிக்கும் இடைமுகத்தையும் கொண்டுள்ளது.

## 8.2. நிலையின் நன்மைகள்

**மாடுலர் மற்றும் ஒழுங்கமைக்கப்பட்ட குறியீடு (Modular and Organized Code)**

ஒவ்வொரு நிலையும் அதன் சொந்த வகுப்பிற்குள் (class) இணைக்கப்பட்டுள்ளது, குறியீட்டை மாடுலராகவும் நிர்வகிக்க எளிதாகவும் ஆக்குகிறது. 

**சுவிட்ச் அறிக்கைகள் தேவையில்லை (No Need for Switch Statements)**

ஒரு பொருளின் நடத்தையை மாற்றுவதற்குச் சுவிட்ச் (Switch) அறிக்கைகளைப் பயன்படுத்தலாம், ஆனால் இந்த முறையின் சிக்கல் என்னவென்றால், உங்கள் திட்டம் வளரும்போது சுவிட்ச் அறிக்கைகள் மிகவும் நீளமாக மாறும். நிலை (State) முறை இந்தச் சிக்கலைச் சரிசெய்கிறது. 

**மறுபயன்பாட்டை ஊக்குவிக்கிறது (Promotes Reusability)**

வெவ்வேறு சூழல்களில் நிலைகளை மீண்டும் பயன்படுத்தலாம், இது குறியீடு நகலெடுப்பைக் குறைக்கிறது. 

**சோதனையை எளிதாக்குகிறது (Simplifies Testing)**

சிக்கலான நிபந்தனை தர்க்கத்துடன் கூடிய ஒற்றைப் பொருளை (monolithic object) சோதிப்பதை விட, தனிப்பட்ட நிலை வகுப்புகளைத் தனிமைப்படுத்திச் சோதிப்பது எளிதானது மற்றும் பயனுள்ளது. 

## 8.3. எடுத்துக்காட்டு 

```javascript 
class Car {
  constructor() {
    this.state = new ParkState();
  }

  setState(state) {
    this.state = state;
    console.log(`Changed state to: ${state.constructor.name}`);
  }

  park() {
    this.state.park(this);
  }

  drive() {
    this.state.drive(this);
  }

  reverse() {
    this.state.reverse(this);
  }
}

class ParkState {
  park(car) {
    console.log("கார் ஏற்கனவே பார்க்கிங்கில் (Park) உள்ளது");
  }

  drive(car) {
    console.log("டிரைவிற்கு (Drive) மாறுகிறது");
    car.setState(new DriveState());
  }

  reverse(car) {
    console.log("ரிவர்ஸுக்கு (Reverse) மாறுகிறது");
    car.setState(new ReverseState());
  }
}

class DriveState {
  park(car) {
    console.log("பார்க்கிங்கிற்கு (Park) மாறுகிறது");
    car.setState(new ParkState());
  }

  drive(car) {
    console.log("கார் ஏற்கனவே டிரைவில் (Drive) உள்ளது");
  }

  reverse(car) {
    console.log("ரிவர்ஸுக்கு (Reverse) மாறுகிறது");
    car.setState(new ReverseState());
  }
}

class ReverseState {
  park(car) {
    console.log("பார்க்கிங்கிற்கு (Park) மாறுகிறது");
    car.setState(new ParkState());
  }

  drive(car) {
    console.log("டிரைவிற்கு (Drive) மாறுகிறது");
    car.setState(new DriveState());
  }

  reverse(car) {
    console.log("கார் ஏற்கனவே ரிவர்ஸில் (Reverse) உள்ளது");
  }
}

// Example usage
const car = new Car();

car.drive();
car.reverse();
car.drive();
car.park();
car.drive();  // Trying to drive while parked
```

## 9. வியூகம் (Strategy) 

வியூகம் (Strategy) முறை என்பது அடிப்படையில் ஒரு வடிவமைப்பு முறையாகும், இது ஒன்றோடொன்று மாற்றக்கூடிய (interchangeable) அல்காரிதம்களின் (algorithms - உத்திகள்) குழுவைக் கொண்டிருக்க உங்களை அனுமதிக்கிறது. 

## 9.1. வியூகத்தின் கூறுகள் 

*வியூகம் (Strategy)*

இது வியூக இடைமுகத்தை செயல்படுத்தும் ஒரு அல்காரிதம் ஆகும். 

*சூழல் (Context)*

தற்போதைய வியூகத்திற்கான குறிப்பைப் பராமரிக்கும் பொருள் இதுவாகும். தற்போதைய வியூகத்தை வேறு வியூகத்திற்கு மாற்ற அல்லது தற்போதைய வியூகக் குறிப்பிலிருந்து கணக்கீடுகளை (calculations) மீட்டெடுக்க கிளையன்ட்டை அனுமதிக்கும் இடைமுகத்தை இது வரையறுக்கிறது. 

## 9.2. வியூகத்தின் நன்மைகள் 

**மாறக்கூடிய அல்காரிதம்கள் (Dynamically Swappable Algorithms)**

வியூகங்களை இயக்க நேரத்தில் மாற்றிக்கொள்ளலாம் (swapped), வெவ்வேறு நிலைமைகள் அல்லது தேவைகளின் அடிப்படையில் அல்காரிதம்களை மாறும் வகையில் தேர்வு செய்ய அனுமதிக்கிறது. பயனர் உள்ளீடு, கட்டமைப்பு அமைப்புகள் அல்லது பிற காரணிகளின் அடிப்படையில் பொருத்தமான அல்காரிதம் மாறுபடும்போது இது மிகவும் பயனுள்ளதாக இருக்கும்.

**நெகிழ்வுத்தன்மை மற்றும் பராமரிப்பு (Flexibility and Maintainability)**

சூழலை (context) மாற்றாமல் வியூகங்களை மாற்றலாம் அல்லது நீட்டிக்கலாம் (extended). இது கணினியை மிகவும் நெகிழ்வானதாகவும் பராமரிக்க எளிதாகவும் ஆக்குகிறது, ஏனெனில் ஒரு வியூகத்தில் ஏற்படும் மாற்றங்கள் மற்றவற்றைப் பாதிக்காது.

**சோதனையை எளிதாக்குகிறது (Simplifies Testing)**

ஒவ்வொரு வியூகமும் ஒரு தனி வகுப்பாக (class) இருப்பதால், தனிமைப்படுத்தப்பட்ட வியூகங்களைச் சோதிப்பது எளிது. இது இலக்கு சோதனைக்கு (targeted testing) அனுமதிக்கிறது மற்றும் ஒரு வியூகத்தில் ஏற்படும் மாற்றங்கள் கவனக்குறைவாக மற்றவர்களைப் பாதிக்காது என்பதை உறுதி செய்கிறது.

**மறுபயன்பாடு (Reusability)**

பல்வேறு சூழல்களில் அல்லது பயன்பாடுகளில் வியூகங்களை மீண்டும் பயன்படுத்தலாம், இது குறியீடு மறுபயன்பாட்டை (code reuse) ஊக்குவிக்கிறது மற்றும் பணிநீக்கத்தைக் (redundancy) குறைக்கிறது.

## 9.3. எடுத்துக்காட்டு

```javascript 
class RegularCustomerStrategy {
  calculatePrice(bookPrice) {
    // Regular customers get a fixed discount of 10%
    return bookPrice * 0.9;
  }
}

class VIPCustomerStrategy {
  calculatePrice(bookPrice) {
    // VIP customers get a fixed discount of 20%
    return bookPrice * 0.8;
  }
}

class BookStore {
  constructor(pricingStrategy) {
    this.pricingStrategy = pricingStrategy;
  }

  setPricingStrategy(pricingStrategy) {
    this.pricingStrategy = pricingStrategy;
  }

  calculatePrice(bookPrice) {
    return this.pricingStrategy.calculatePrice(bookPrice);
  }
}

// Usage
const regularCustomerStrategy = new RegularCustomerStrategy();
const vipCustomerStrategy = new VIPCustomerStrategy();

const bookstore = new BookStore(regularCustomerStrategy);

console.log('Regular customer price:', bookstore.calculatePrice(50)); // Outputs: 45 (10% discount)
bookstore.setPricingStrategy(vipCustomerStrategy);
console.log('VIP customer price:', bookstore.calculatePrice(50)); // Outputs: 40 (20% discount)
```

## 10. டெம்ப்ளேட் முறை (Template Method) 

டெம்ப்ளேட் முறை (Template Method) என்பது ஒரு நடத்தை வடிவமைப்பு முறையாகும், இது ஒரு முறையில் ஒரு அல்காரிதத்தின் நிரல் கட்டமைப்பை (program skeleton) வரையறுக்கிறது, ஆனால் அதன் கட்டமைப்பை மாற்றாமல் அல்காரிதத்தின் குறிப்பிட்ட படிகளை மேலெழுத (override) துணைப்பிரிவுகளை (subclasses) அனுமதிக்கிறது. 

## 10.1. டெம்ப்ளேட் முறையின் கூறுகள் 

*சுருக்க வகுப்பு (Abstract Class)*

சுருக்க வகுப்பு என்பது அல்காரிதத்திற்கான டெம்ப்ளேட் ஆகும். கிளையன்ட் அதன் முறையை (method) அழைக்க இது ஒரு இடைமுகத்தை வரையறுக்கிறது. துணைப்பிரிவுகளால் மேலெழுதப்படக்கூடிய அனைத்து செயல்பாடுகளையும் இது கொண்டுள்ளது.

*கான்கிரீட் வகுப்பு (Concrete Class)*

சுருக்க வகுப்பில் (Abstract Class) வரையறுக்கப்பட்டுள்ள படிகளை இது செயல்படுத்துகிறது மற்றும் படிகளில் மாற்றங்களைச் செய்யலாம். 

## 10.2. டெம்ப்ளேட் முறையின் நன்மைகள் 

**குறியீடு மறுபயன்பாடு (Code Reusability)**

அடிப்படை வகுப்பில் அல்காரிதத்தின் கட்டமைப்பை வரையறுப்பதன் மூலம் குறியீடு மறுபயன்பாட்டை இந்த முறை ஊக்குவிக்கிறது. துணைப்பிரிவுகள் இந்தக் கட்டமைப்பை மீண்டும் பயன்படுத்தலாம் மற்றும் குறிப்பிட்ட படிகளுக்கான செயலாக்கங்களை (implementations) மட்டுமே வழங்க வேண்டும்.

**எளிதான பராமரிப்பு (Easy Maintenance)**

பல துணைப்பிரிவுகளுக்குப் பதிலாக ஒரு இடத்தில் மட்டுமே - சுருக்க வகுப்பில் உள்ள டெம்ப்ளேட் முறை - மாற்றங்கள் செய்யப்பட வேண்டும் என்பதால் அல்காரிதத்தில் மாற்றங்களைச் செய்வது எளிமைப்படுத்தப்பட்டுள்ளது. இது பிழைகளுக்கான வாய்ப்புகளைக் குறைக்கிறது மற்றும் பராமரிப்பை மிகவும் நேராக ஆக்குகிறது.

**நீட்டிப்பு மற்றும் மாறுபாடு (Extension and Variation)**

இந்த முறை அல்காரிதத்தை எளிதாக நீட்டிக்கவும் மாறுபாடு செய்யவும் அனுமதிக்கிறது. தனிப்பயன் செயலாக்கங்களை (custom implementations) வழங்குவதற்கு துணைப்பிரிவுகள் சில படிகளை மேலெழுதலாம் (override), அல்காரிதத்தின் முக்கிய கட்டமைப்பை மாற்றாமல் அதன் நடத்தையை திறம்பட நீட்டிக்கலாம் அல்லது மாற்றலாம்.

**கட்டுப்பாட்டு ஓட்டம் (Control Flow)**

டெம்ப்ளேட் முறை அல்காரிதத்தின் கட்டுப்பாட்டு ஓட்டத்தை (control flow) வரையறுக்கிறது, அல்காரிதத்தில் உள்ள செயல்பாடுகளின் வரிசையை நிர்வகிப்பதையும் புரிந்துகொள்வதையும் எளிதாக்குகிறது.

## 10.3. எடுத்துக்காட்டு 

```javascript 
class Camera {
  // Template method defining the common steps for capturing a photo
  capturePhoto() {
    this.turnOn();
    this.initialize();
    this.setExposure();
    this.capture();
    this.turnOff();
  }

  // Common steps for turning on the camera
  turnOn() {
    console.log('கேமராவை ஆன் செய்தல் (Turning on the camera)');
  }

  // Abstract method for initializing the camera (to be overridden by subclasses)
  initialize() {
    throw new Error('Abstract method: initialize() must be implemented by subclasses');
  }

  // Abstract method for setting exposure (to be overridden by subclasses)
  setExposure() {
    throw new Error('Abstract method: setExposure() must be implemented by subclasses');
  }

  // Common steps for capturing a photo
  capture() {
    console.log('புகைப்படம் எடுத்தல் (Capturing a photo)');
  }

  // Common steps for turning off the camera
  turnOff() {
    console.log('கேமராவை ஆஃப் செய்தல் (Turning off the camera)');
  }
}

class DSLRCamera extends Camera {
  initialize() {
    console.log('DSLR கேமராவைத் துவக்குதல் (Initializing DSLR camera)');
  }

  setExposure() {
    console.log('DSLR கேமராவுக்கு எக்ஸ்போஷரை (exposure) அமைத்தல்');
  }
}

class MirrorlessCamera extends Camera {
  initialize() {
    console.log('மிரர்லெஸ் (mirrorless) கேமராவைத் துவக்குதல்');
  }

  setExposure() {
    console.log('மிரர்லெஸ் கேமராவுக்கு எக்ஸ்போஷரை அமைத்தல்');
  }
}

// Usage
const dslrCamera = new DSLRCamera();
console.log('DSLR கேமரா மூலம் புகைப்படம் எடுத்தல்:');
dslrCamera.capturePhoto();
console.log('');

const mirrorlessCamera = new MirrorlessCamera();
console.log('மிரர்லெஸ் கேமரா மூலம் புகைப்படம் எடுத்தல்:');
mirrorlessCamera.capturePhoto();
```

## 11. பார்வையாளர் (Visitor - விசிட்டர்) 

பார்வையாளர் வடிவமைப்பு முறை (Visitor design pattern) என்பது ஒரு நடத்தை வடிவமைப்பு முறையாகும், இது அல்காரிதம்கள் அல்லது செயல்பாடுகளைச் செயல்படும் பொருளிலிருந்து பிரிக்க உங்களை அனுமதிக்கிறது. 

## 11.1 பார்வையாளரின் கூறுகள் (Components of the Visitor)

*பொருள் கட்டமைப்பு (ObjectStructure)*

கூறுகளின் (Elements) ஒரு தொகுப்பைப் பராமரிக்கிறது, அதைத் திரும்பத் திரும்பச் (iterated) செய்ய முடியும். 

*கூறுகள் (Elements)*

கூறானது பார்வையாளர் (visitor) பொருள்களை ஏற்கும் ஒரு accept முறையைக் கொண்டுள்ளது.

*பார்வையாளர் (Visitor)*

ஒரு visit முறையைச் செயல்படுத்துகிறது, அங்கு முறையின் வாதம் (argument) பார்வையிடப்படும் கூறு (element) ஆகும். இவ்வாறு தான் கூறுக்கு மாற்றங்கள் செய்யப்படுகின்றன. 

## 11.2. பார்வையாளரின் நன்மைகள் 

**திறந்த/மூடப்பட்ட கொள்கை (Open/Closed Principle)**

மென்பொருள் உட்பொருள்கள் (classes, modules, functions) நீட்டிப்புக்குத் (extension) திறந்திருக்க வேண்டும் ஆனால் மாற்றத்திற்கு (modification) மூடப்பட வேண்டும் என்று கூறும் திறந்த/மூடப்பட்ட கொள்கையுடன் (Open/Closed Principle) இந்த முறை ஒத்துப்போகிறது. ஏற்கனவே உள்ள பொருளின் அமைப்பு அல்லது கூறுகளை மாற்றாமல் புதிய செயல்பாடுகளை (புதிய பார்வையாளர்களை) அறிமுகப்படுத்தலாம்.

**நீட்டிக்கும் திறன் (Extensibility)**

ஏற்கனவே உள்ள கூறுகள் அல்லது பொருளின் கட்டமைப்பை மாற்றாமல் புதிய பார்வையாளர் செயலாக்கங்களைச் சேர்ப்பதன் மூலம் புதிய நடத்தைகள் அல்லது செயல்பாடுகளை அறிமுகப்படுத்தலாம். இது அமைப்பை மேலும் நீட்டிக்கக்கூடியதாக ஆக்குகிறது, புதிய அம்சங்கள் அல்லது நடத்தைகளை எளிதாகச் சேர்க்க அனுமதிக்கிறது.

**மையப்படுத்தப்பட்ட நடத்தை (Centralized Behavior)**

பார்வையாளர் முறையானது நடத்தை தொடர்பான குறியீட்டைப் பார்வையாளர் வகுப்புகளுக்குள் மையப்படுத்துகிறது. ஒவ்வொரு பார்வையாளரும் ஒரு குறிப்பிட்ட நடத்தையை உள்ளடக்குகிறார் (encapsulates), இது பல்வேறு கூறுகளில் மீண்டும் பயன்படுத்தப்படலாம், குறியீடு மறுபயன்பாடு (code reuse) மற்றும் மாடுலாரிட்டியை (modularity) ஊக்குவிக்கிறது.

**செயல்பாடுகளில் நிலைத்தன்மை (Consistency in Operations)**

பார்வையாளர் முறையின் மூலம், ஒரு குறிப்பிட்ட செயல்பாடு (visitor method) பல்வேறு கூறுகள் முழுவதும் சீராகச் (consistently) பயன்படுத்தப்படுவதை உறுதிசெய்யலாம், ஏனெனில் ஒவ்வொரு கூறின் accept முறையும் அந்த கூறு வகைக்கான பொருத்தமான பார்வையாளர் முறையை (visitor method) அழைக்கிறது.

## 11.3 எடுத்துக்காட்டு 

```javascript 
class GymMember {
    constructor(name, subscriptionType, fitnessScore) {
        this.name = name;
        this.subscriptionType = subscriptionType;
        this.fitnessScore = fitnessScore;
    }

    accept(visitor) {
        visitor.visit(this);
    }

    getName() {
        return this.name;
    }

    getSubscriptionType() {
        return this.subscriptionType;
    }

    getFitnessScore() {
        return this.fitnessScore;
    }

    setFitnessScore(score) {
        this.fitnessScore = score;
    }
}

class FitnessEvaluation {
    visit(member) {
        member.setFitnessScore(member.getFitnessScore() + 10);
    }
}

class MembershipDiscount {
    visit(member) {
        if (member.getSubscriptionType() === 'Premium') {
            console.log(`${member.getName()}: ஃபிட்னஸ் ஸ்கோர் - ${member.getFitnessScore()}, மெம்பர்ஷிப் வகை - ${member.getSubscriptionType()}, 10% தள்ளுபடிக்கு தகுதியானவர்! (Eligible for a 10% discount!)`);
        } else {
            console.log(`${member.getName()}: ஃபிட்னஸ் ஸ்கோர் - ${member.getFitnessScore()}, மெம்பர்ஷிப் வகை - ${member.getSubscriptionType()}, தள்ளுபடிக்கு தகுதியற்றவர். (Not eligible for a discount.)`);
        }
    }
}

function run() {
    const gymMembers = [
        new GymMember("Alice", "Basic", 80),
        new GymMember("Bob", "Premium", 90),
        new GymMember("Eve", "Basic", 85)
    ];

    const fitnessEvaluation = new FitnessEvaluation();
    const membershipDiscount = new MembershipDiscount();

    for (let i = 0; i < gymMembers.length; i++) {
        const member = gymMembers[i];

        member.accept(fitnessEvaluation);
        member.accept(membershipDiscount);
    }
}

run();
```
 
 ---
