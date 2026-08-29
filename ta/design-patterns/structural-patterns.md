---
layout: editorial
title: ஜாவாஸ்கிரிப்டில் கட்டமைப்பு வடிவமைப்பு முறைகள் (Structural Design Patterns in Javascript)
description: வகுப்புகள் (classes) மற்றும் பொருள்கள் (objects) பெரிய கட்டமைப்புகளை உருவாக்க எவ்வாறு இயற்றப்படுகின்றன (composed) என்பதில் கவனம் செலுத்துகின்றன
chapter: 23
pageNumber: 205
---

# கட்டமைப்பு வடிவமைப்பு முறைகள் (Structural Design Patterns)

வகுப்புகள் மற்றும் பொருள்கள் பெரிய கட்டமைப்புகளை உருவாக்க எவ்வாறு இயற்றப்படுகின்றன என்பதில் கவனம் செலுத்துகின்றன

## 1. அடாப்டர் (Adapter) 

அடாப்டர் (Adapter) என்பது ஒரு கட்டமைப்பு வடிவமைப்பு முறையாகும், இது வெவ்வேறு முறைகளைக் கொண்ட வெவ்வேறு இடைமுகங்களை (interfaces) அவற்றின் குறியீட்டை மாற்றாமல் ஒன்றாகச் செயல்படச் செய்கிறது. அடாப்டரின் நோக்கம் இரண்டு பொருந்தாத (incompatible) இடைமுகங்களைத் தடையின்றி ஒன்றாகச் செயல்படச் செய்வதாகும். 

## 1.1 அடாப்டரின் கூறுகள் 

*இலக்கு இடைமுகம்/வகுப்பு (Target Interface/Class)* 

இது கிளையன்ட் (client) வேலை செய்யும் இடைமுகம் அல்லது வகுப்பாகும். கிளையன்ட் குறியீடு பயன்படுத்தும் அனைத்து முறைகள் மற்றும் பண்புகளை இது கொண்டுள்ளது. 

*அடாப்டீ (Adaptee)*

அடாப்டீ என்பது பழைய இடைமுகம்/வகுப்பாகும், இது புதிய இடைமுகம்/வகுப்புடன் பொருந்தாத பண்புகள் மற்றும் முறைகளைக் கொண்டுள்ளது. 

*அடாப்டர் (Adapter)* 

அடாப்டர் என்பது அடாப்டீ மற்றும் இலக்கு இடைமுகம்/வகுப்பிற்கும் இடையிலான இடைவெளியைக் குறைக்கும் ஒன்றாகும் 


## 1.2. அடாப்டர்களின் நன்மைகள் 

**எளிதான ஒருங்கிணைப்பு (Easy Integration)**

புதிய குறியீடு அல்லது அமைப்புகள் (systems) ஏற்கனவே உள்ளவற்றுடன் தொடர்புகொள்வதற்கான எளிதான வழியை அடாப்டர்கள் உருவாக்குகின்றன. அடாப்டர்களைப் பயன்படுத்துவதன் மூலம், புதிய குறியீட்டை ஒருங்கிணைப்பது மென்மையானது மற்றும் பிழையற்றது. 

**பொருந்தக்கூடிய தன்மை மற்றும் மறுபயன்பாடு (Compatibility and Reusability)**

அடாப்டர்கள் குறியீடு மறுபயன்பாட்டை (code reuse) ஊக்குவிக்கின்றன மற்றும் பழைய குறியீட்டைப் புதிய குறியீட்டுடன் இணக்கமாக்குவதன் மூலம் ஏற்கனவே உள்ள குறியீட்டின் பயன்பாட்டினை நீட்டிக்கின்றன. 

**படிப்படியான அமைப்பு ஒருங்கிணைப்பு (Gradual System Integration)**

ஒரு புதிய அமைப்பு படிப்படியாகச் செயல்படுத்தப்பட வேண்டிய சூழ்நிலைகளில், அடாப்டர்கள் இடைத்தரகர்களாகச் (intermediaries) செயல்படலாம், தற்போதுள்ள அமைப்புடன் பொருந்தக்கூடிய தன்மையைப் பராமரிக்கும் அதே வேளையில் புதிய அம்சங்களை மெதுவாக உள்ளே வர அனுமதிக்கிறது. 

**மேம்படுத்தப்பட்ட சோதிக்கும் திறன் (Improved Testability)**

கிளையன்ட் குறியீட்டைச் சோதிக்கும் போது அடாப்டீயை மாக்கிங் (mocking) அல்லது ஸ்டப்பிங் (stubbing) செய்ய அனுமதிப்பதன் மூலம் அடாப்டர்கள் எளிதாகச் சோதனை செய்ய உதவுகின்றன. இது கிளையன்ட் குறியீட்டின் சோதிக்கும் திறனை மேம்படுத்துகிறது மற்றும் புரிந்துகொள்ளக்கூடிய அலகு சோதனைகளை (unit tests) எழுதுவதற்கு உதவுகிறது. 


## 1.3. எடுத்துக்காட்டு 

```javascript 
// Adaptee: EU charging brick
class EUChargingBrick {
  chargeWithEUPlug() {
    console.log('Charging with EU plug');
  }
}

// Adaptee: US charging brick
class USChargingBrick {
  chargeWithUSPlug() {
    console.log('Charging with US plug');
  }
}

// Target: Common charging interface expected by the client
class ChargingInterface {
  charge() {
    console.log('Charging...');
  }
}

// Adapter for EU charging brick
class EUChargingAdapter extends ChargingInterface {
  constructor(euChargingBrick) {
    super();
    this.euChargingBrick = euChargingBrick;
  }

  charge() {
    this.euChargingBrick.chargeWithEUPlug();
  }
}

// Adapter for US charging brick
class USChargingAdapter extends ChargingInterface {
  constructor(usChargingBrick) {
    super();
    this.usChargingBrick = usChargingBrick;
  }

  charge() {
    this.usChargingBrick.chargeWithUSPlug();
  }
}

// Client
function chargeDevice(chargingInterface) {
  chargingInterface.charge();
}

// Usage
const euChargingBrick = new EUChargingBrick();
const euAdapter = new EUChargingAdapter(euChargingBrick);

const usChargingBrick = new USChargingBrick();
const usAdapter = new USChargingAdapter(usChargingBrick);

console.log('Charging with EU charging brick:');
chargeDevice(euAdapter);

console.log('Charging with US charging brick:');
chargeDevice(usAdapter);
```

## 2. பாலம் (Bridge) 

பிரிட்ஜ் (Bridge - பாலம்) என்பது ஒரு கட்டமைப்பு வடிவமைப்பு முறையாகும், இது மிகப் பெரிய வகுப்பை (class) இரண்டு தனித்தனி படிநிலைகளாகப் (hierarchies) பிரிக்க வடிவமைக்கப்பட்டுள்ளது, அவை சுயாதீனமாக (independendently) உருவாக்கப்படலாம். இரண்டு படிநிலைகள் சுருக்க நிலை (Abstraction level) மற்றும் செயலாக்க நிலை (Implementation level) என்று குறிப்பிடப்படுகின்றன. அடிப்படையில், உங்களிடம் சில செயல்பாடுகளின் பல மாறுபாடுகளைக் கொண்ட ஒரு வகுப்பு இருந்தால், வகுப்பைப் பிரித்து இரண்டு புரிந்துகொள்ளக்கூடிய படிநிலைகளாக ஒழுங்கமைக்க நீங்கள் பிரிட்ஜ் முறையைப் பயன்படுத்தலாம். 

## 2.1. பாலத்தின் கூறுகள் (Components of the Bridge) 

*சுருக்கம் (Abstraction)* 

இது உயர்மட்ட இடைமுகம் (high-level interface) அல்லது சுருக்கம் ஆகும். கிளையன்ட்கள் பயன்படுத்தும் சுருக்கச் செயல்பாட்டை இது வரையறுக்கிறது. 

*சுத்திகரிக்கப்பட்ட சுருக்கம் (Refined Abstraction)* 

இவை சுருக்க அடுக்கின் துணைப்பிரிவுகள் (subclasses) அல்லது நீட்டிப்புகள் ஆகும். இவை கூடுதல் அம்சங்களை அல்லது மேம்பாடுகளை வழங்குகின்றன. இது சுருக்கத்தால் வரையறுக்கப்பட்ட செயல்பாட்டை நீட்டிக்கிறது. 

*செயல்படுத்துபவர் (Implementor)* 

இது செயலாக்க முறைகளை வரையறுக்கும் இடைமுகமாகும், இது பொதுவாகச் சுருக்க இடைமுகத்தை (abstraction interface) பிரதிபலிக்காது, ஆனால் இது சுருக்கம் நம்பியிருக்கும் கீழ்-நிலை இடைமுகமாகும் (lower-level interface). 

*கான்கிரீட் செயல்படுத்துபவர் (Concrete Implementor)* 

செயல்படுத்துபவர் இடைமுகத்தை செயல்படுத்தும் கான்கிரீட் வகுப்புகள். இந்த வகுப்புகள் செயல்படுத்துபவர் இடைமுகத்தால் வரையறுக்கப்பட்ட முறைகளின் குறிப்பிட்ட செயலாக்கங்களை வழங்குகின்றன. 

## 2.2. பிரிட்ஜ் முறையின் நன்மைகள்

**சுருக்கத்தை செயலாக்கத்திலிருந்து பிரிக்கிறது (Decouples Abstraction from Implementation)**

பிரிட்ஜ் முறையின் முதன்மை நன்மை என்னவென்றால், அது செயலாக்க அடுக்கிலிருந்து சுருக்க அடுக்கைப் பிரிக்கிறது. இது இரண்டு பிரிவுகளையும் சுயாதீனமாக உருவாக்க அனுமதிக்கிறது, குறியீட்டுத் தளத்தை (code base) மாற்றுவதை எளிதாக்குகிறது. 

**பராமரிப்பை மேம்படுத்துகிறது (Improves Maintainability)** 

குறியீட்டுத் தளம் இரண்டு பிரிவுகளாகப் பிரிக்கப்பட்டுள்ளதால், கணினியின் ஒரு பகுதியில் மாற்றங்களைச் செய்வது மற்ற பகுதியை பாதிக்க வாய்ப்பில்லை. இது குறியீட்டுத் தளத்தைப் பராமரிப்பதை எளிதாக்குகிறது மற்றும் திறமையானதாக ஆக்குகிறது

**சோதனையை மேம்படுத்துகிறது (Improves Testing)**

உங்கள் குறியீட்டுத் தளத்தில் பிரிட்ஜ் முறை இருக்கும்போது சோதிப்பது மிகவும் எளிதானது, ஏனெனில் செயலாக்க அடுக்கைச் சோதிப்பதில் இருந்து தனித்தனியாகச் சுருக்க அடுக்கைச் சோதிப்பதில் நீங்கள் கவனம் செலுத்தலாம். இது எளிதான மற்றும் இலக்கு சோதனையை (targeted testing) அனுமதிக்கிறது. 

**வாசிப்புத்திறனை மேம்படுத்துகிறது (Improves Readability)**

பிரிட்ஜ் முறை குறியீட்டுத் தளத்தில் தெளிவான படிநிலையை உருவாக்குகிறது. குறியீட்டுத் தளத்தை இந்த வழியில் அமைப்பது கணினியின் வெவ்வேறு பகுதிகளுக்கு இடையிலான உறவுகளைப் புரிந்துகொள்ள உதவுகிறது. 

## 2.3. எடுத்துக்காட்டு 

```javascript 
// Abstraction
class Shape {
  constructor(color) {
    this.color = color;
  }

  draw() {
    console.log(`Drawing a shape with color ${this.color}`);
  }
}

// Implementations
class RedColor {
  applyColor() {
    console.log('Applying red color');
  }
}

class BlueColor {
  applyColor() {
    console.log('Applying blue color');
  }
}

// Bridge
class ShapeWithColor extends Shape {
  constructor(color, colorImplementation) {
    super(color);
    this.colorImplementation = colorImplementation;
  }

  draw() {
    super.draw();
    this.colorImplementation.applyColor();
  }
}

// Usage
const redShape = new ShapeWithColor('red', new RedColor());
const blueShape = new ShapeWithColor('blue', new BlueColor());

redShape.draw();  // Output: Drawing a shape with color red, Applying red color
blueShape.draw(); // Output: Drawing a shape with color blue, Applying blue color
```
## 3. கலவை (Composite) 

கலவை வடிவமைப்பு முறை (Composite design pattern) பழமையான (primitive) உருப்படிகள் அல்லது பொருள்களின் தொகுப்பு கொண்ட பண்புகளை உடைய பொருள்களை உருவாக்க அனுமதிக்கிறது. ஒற்றைப் பொருள்கள் (இலை முனைகள் - leaf nodes) அல்லது பொருள்களின் குழுக்கள் (கிளைகள் - branches) உள்ள ஒரு மரம் போன்ற கட்டமைப்பைக் கற்பனை செய்து பாருங்கள். கலவை வடிவமைப்பு முறை இது போன்ற ஒரு கட்டமைப்பை உருவாக்கவும், ஒவ்வொரு மட்டத்திலும் ஒரு நிலையான முறையில் செயல்பாடுகளைச் செய்யவும் உங்களை அனுமதிக்கிறது. 

## 3.1 கலவையின் கூறுகள் (Components of the Composite) 

*கூறு (Component)*

இது இலை முனைகள் (தனிப்பட்ட கூறுகள்) மற்றும் கலவை முனைகள் (கூறுகளின் தொகுப்பு) இரண்டையும் குறிக்கும் இடைமுகம்/வகுப்பாகும். கூறு இரண்டு வகையான முனைகளுக்கும் பயன்படுத்தக்கூடிய செயல்பாடுகளை வரையறுக்கிறது. 

*இலை (Leaf)*

மரத்தின் எந்தக் குழந்தைகளும் இல்லாத தனிப்பட்ட பொருள்களை இது குறிக்கிறது. கூறு இடைமுகத்தில் வரையறுக்கப்பட்ட செயல்பாடுகளை அவை செயல்படுத்துகின்றன. 

*கலவை (Composite)*

இது இலை முனைகளின் தொகுப்பு அல்லது பிற கலவை முனைகளை வைத்திருக்கக்கூடிய கலவைகள் அல்லது கொள்கலன்களைக் (containers) குறிக்கிறது. 


## 3.2. கலவைகளின் நன்மைகள் 

**சீரானது மற்றும் நிலைத்தன்மை (Uniformly and Consistency)** 

கலவை வடிவமைப்பு முறை தனிப்பட்ட பொருள்கள் மற்றும் பொருள்களின் கலவைகள் இரண்டையும் கையாள ஒரு சீரான வழியை வழங்குகிறது. இந்தப் பொருள்களில் செயல்படுவதற்குப் பயன்படுத்த கிளையன்ட்கள் ஒரு பொதுவான இடைமுகத்தைக் கொண்டுள்ளனர், இது குறியீட்டுத் தளம் மற்றும் பொருள் தொடர்புகளை எளிதாக்குகிறது. 

**நெகிழ்வுத்தன்மை (Flexibility)** 

இந்த வடிவமைப்பு முறை புதிய வகையான கூறுகளைச் சேர்ப்பதில் நெகிழ்வுத்தன்மையை அனுமதிக்கிறது அல்லது கிளையன்ட் குறியீட்டைப் பாதிக்காமல் ஏற்கனவே உள்ளவற்றை மாற்றியமைக்கிறது. நீங்கள் புதிய வகையான இலை அல்லது கலவைப் பொருள்களை எளிதாக அறிமுகப்படுத்தலாம். 


**எளிமைப்படுத்தப்பட்ட கிளையன்ட் குறியீடு (Simplified Client Code)**

கிளையன்ட் குறியீடு தனிப்பட்ட மற்றும் கலவை கூறுகளுக்கு இடையில் வேறுபடுத்தத் தேவையில்லை, இது கட்டமைப்புடன் வேலை செய்வதை எளிமையாகவும் உள்ளுணர்வுடனும் (intuitive) ஆக்குகிறது.


## 3.3. எடுத்துக்காட்டு 

```javascript 
class SingleBlock {
  constructor(name) {
    this.name = name;
  }

  display() {
    console.log('Block:', this.name);
  }
}

class BlockCollection {
  constructor(name) {
    this.name = name;
    this.blocks = [];
  }

  add(block) {
    this.blocks.push(block);
  }

  remove(block) {
    this.blocks = this.blocks.filter(b => b !== block);
  }

  display() {
    console.log('Block Collection:', this.name);

    for (const block of this.blocks) {
      block.display();
    }
  }
}

// Usage
const block1 = new SingleBlock('Block 1');
const block2 = new SingleBlock('Block 2');
const block3 = new SingleBlock('Block 3');

const blockGroup1 = new BlockCollection('Block Group 1');
blockGroup1.add(block1);
blockGroup1.add(block2);

const blockGroup2 = new BlockCollection('Block Group 2');
blockGroup2.add(block3);

const megaStructure = new BlockCollection('Mega Structure');
megaStructure.add(blockGroup1);
megaStructure.add(blockGroup2);

megaStructure.display();
```

## 4. அலங்கரிப்பவர் (Decorator) 

டெக்கரேட்டர் வடிவமைப்பு முறை (Decorator design pattern), ஒரே வகுப்பிலிருந்து மற்ற பொருள்களின் நடத்தையைப் பாதிக்காமல் நிலையானதாகவோ (statically) அல்லது மாறும் வகையிலோ (dynamically) பொருள்களின் நடத்தையை மாற்றப் பயன்படுத்தப்படலாம். நெகிழ்வான மற்றும் மீண்டும் பயன்படுத்தக்கூடிய முறையில் ஒரு பொருளுக்கு அம்சங்களைச் சேர்க்க விரும்பும்போது டெக்கரேட்டர்கள் மிகவும் பயனுள்ளதாக இருக்கும். 

## 4.1. ஒரு டெக்கரேட்டரின் கூறுகள் 

*கூறு இடைமுகம் (Component Interface)*

பொறுப்புகளை மாறும் வகையில் சேர்க்கக்கூடிய பொருள்களுக்கான தர்க்கத்தை இது வரையறுக்கிறது. 

*கான்கிரீட் கூறுகள் (Concrete Components)*

இது ஆரம்பப் பொருளாகும், இதில் கூடுதல் செயல்பாடுகளைச் சேர்க்கலாம். 

*டெக்கரேட்டர் (Decorator)* 

இது கான்கிரீட் கூறுகளின் செயல்பாட்டை நீட்டிக்கும் ஒரு இடைமுகமாகும். இது ஒரு கூறு நிகழ்விற்கான குறிப்பைக் கொண்டுள்ளது மற்றும் கூறு இடைமுகத்தை செயல்படுத்துகிறது. 

*கான்கிரீட் டெக்கரேட்டர்கள் (Concrete Decorators)*

இவை டெக்கரேட்டர் வகுப்பின் கான்கிரீட் செயலாக்கங்களாகும், டெக்கரேட்டர் வகுப்பை நீட்டிப்பதன் மூலம் விரும்பிய கூறுக்கு அவை குறிப்பிட்ட நடத்தையைச் சேர்க்கின்றன. 


## 4.2. டெக்கரேட்டர்களின் நன்மைகள் 

**நீட்டிக்கும் திறன் மற்றும் நெகிழ்வுத்தன்மை (Extensibility and Flexibility)** 

டெக்கரேட்டர்கள் இயக்க நேரத்தில் (runtime) பொருள்களுக்கு புதிய செயல்பாடுகள் அல்லது நடத்தைகளை மாறும் வகையில் சேர்க்க உங்களை அனுமதிக்கின்றன. தற்போதுள்ள குறியீட்டுத் தளத்தை (codebase) மாற்றாமல் நீட்டிக்கும் திறனை இது ஊக்குவிக்கிறது மற்றும் இந்த கூடுதல் செயல்பாடுகளை எவ்வாறு உருவாக்கலாம் மற்றும் பயன்படுத்தலாம் என்பதில் நெகிழ்வுத்தன்மையை வழங்குகிறது.

**மாடுலாரிட்டி (Modularity)**

செயல்பாட்டைச் சிறிய, நிர்வகிக்கக்கூடிய அலகுகளாகப் பிரிப்பதன் மூலம் குறியீட்டிற்கு மிகவும் மட்டுப்படுத்தப்பட்ட (modular) அணுகுமுறையை டெக்கரேட்டர்கள் செயல்படுத்துகின்றன. இந்த அலகுகளை பல்வேறு வழிகளில் ஒருங்கிணைத்து மீண்டும் பயன்படுத்தலாம். 

**இயக்க நேர உள்ளமைவு (Runtime Configuration)**

டெக்கரேட்டர்கள் இயக்க நேரத்தில் ஒரு பொருளை மாறும் வகையில் உள்ளமைக்க உங்களை அனுமதிக்கின்றன. முக்கிய கூறுகளைப் பாதிக்காமலோ அல்லது குறியீட்டை மீண்டும் தொகுக்காமலோ (recompile) செயல்பாடுகளைச் சேர்க்க அல்லது அகற்ற இது உங்களை அனுமதிக்கிறது. 

**துணைப்பிரிவுகளைக் குறைத்தல் (Reduce Subclassing)**

டெக்கரேட்டர்கள் இல்லாமல், செயல்பாடுகளை நீட்டிப்பது பெரும்பாலும் ஒவ்வொரு நடத்தை சேர்க்கைகளுக்கும் ஏராளமான துணைப்பிரிவுகளை (subclasses) உருவாக்குவதை உள்ளடக்கியது. டெக்கரேட்டர்கள் துணைப்பிரிவுகளின் தேவையைக் குறைக்கின்றன, இதன் விளைவாகக் குறியீட்டுத் தளம் தூய்மையாகவும் புரிந்துகொள்ள எளிதாகவும் இருக்கும். 

## 4.3. எடுத்துக்காட்டு 

```javascript 
class Coffee {
  cost() {
    return 5;
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 2;
  }
}

class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 1;
  }
}

// Usage
let coffee = new Coffee();
console.log('Cost of plain coffee:', coffee.cost());

let milkCoffee = new MilkDecorator(coffee);
console.log('Cost of milk coffee:', milkCoffee.cost());

let sugarMilkCoffee = new SugarDecorator(milkCoffee);
console.log('Cost of sugar milk coffee:', sugarMilkCoffee.cost());
```

## 5. முகப்பு (Facade) 

முகப்பு வடிவமைப்பு முறை (Facade design pattern) என்பது குறியீட்டுத் தளத்தில் மறைந்திருக்கும் பிற குறைந்த நிலைச் (low level) செயல்பாடுகளைப் பயன்படுத்த கிளையன்ட் தொடர்புகொள்ளக்கூடிய எளிமைப்படுத்தப்பட்ட இடைமுகமாகும். பல அடுக்குக் கட்டமைப்பைச் (multi-layer architecture) சுற்றி கட்டமைக்கப்பட்ட கணினிகளில் இந்த வடிவமைப்பு முறை பெரும்பாலும் பயன்படுத்தப்படுகிறது. கணினியின் அடிப்படை சிக்கலான தன்மையைப் புரிந்துகொள்ளாமலேயே சில பணிகளைச் செய்ய முகப்புகள் (Facades) கிளையன்ட்டை அனுமதிக்கின்றன. 


## 5.1. முகப்பின் கூறுகள் (Components of the Facade) 

*முகப்பு (Facade)*

முகப்பு என்பது கிளையன்ட் தொடர்புகொள்ளும் இடைமுகமாகும். கிளையன்ட் கோரிக்கைகளை துணை அமைப்பிற்குள் (subsystem) உள்ள பொருத்தமான பொருள்களுக்கு வழங்கும் எளிய மற்றும் ஒருங்கிணைந்த (unified) இடைமுகத்தை இது வழங்குகிறது

*துணை அமைப்பு (Subsystem)*

துணை அமைப்பானது முகப்பு சுற்றியுள்ள அனைத்து பல்வேறு கூறுகள் மற்றும் செயல்பாடுகளைக் கொண்டுள்ளது. துணை அமைப்பும் முகப்பும் ஒன்றுக்கொன்று தொடர்புகொள்கின்றன, ஆனால் சுதந்திரமாகச் செயல்படுகின்றன. 


## 5.2. முகப்பின் நன்மைகள் 

**எளிமைப்படுத்தப்பட்ட இடைமுகம் (Simplified Interface)**

முகப்பு எளிமையான மற்றும் புரிந்துகொள்ள எளிதான இடைமுகத்தை வழங்குகிறது 

**குறியீட்டு அமைப்பு (Code Organization)**

முகப்பு துணை அமைப்பின் செயல்பாட்டைக் காப்ஸ்யூல் (encapsulate) செய்வதன் மூலமும், கவலைகளைத் தெளிவாகப் பிரிப்பதன் மூலமும் குறியீட்டை ஒழுங்கமைக்க உதவுகிறது. 

**எளிதான பராமரிப்பு (Easier Maintenance)**

துணை அமைப்பிற்கான மாற்றங்கள் முகப்பிற்குள் தனிமைப்படுத்தப்படலாம் (isolated), கிளையன்ட் குறியீட்டின் தாக்கத்தைக் குறைக்கலாம். 


## 5.3. எடுத்துக்காட்டு 

```javascript 
// Plumbing subsystem
class PlumbingSubsystem {
  constructor() {}

  turnOnWater() {
    console.log('Plumbing: Water turned on');
  }

  turnOffWater() {
    console.log('Plumbing: Water turned off');
  }
}

// Electrical subsystem
class ElectricalSubsystem {
  constructor() {}

  turnOnElectricity() {
    console.log('Electrical: Electricity turned on');
  }

  turnOffElectricity() {
    console.log('Electrical: Electricity turned off');
  }
}

// House facade
class HouseFacade {
  constructor() {
    this.plumbingSubsystem = new PlumbingSubsystem();
    this.electricalSubsystem = new ElectricalSubsystem();
  }

  enterHouse() {
    this.plumbingSubsystem.turnOnWater();
    this.electricalSubsystem.turnOnElectricity();
    console.log('You have entered the house.');
  }

  leaveHouse() {
    this.plumbingSubsystem.turnOffWater();
    this.electricalSubsystem.turnOffElectricity();
    console.log('You have left the house.');
  }
}

// Client
const client = () => {
  const house = new HouseFacade();

  // Enter the house
  house.enterHouse();

  // Leave the house
  house.leaveHouse();
};

// Run the client
client();
```

## 6. ஃபிளைவெயிட் (Flyweight) 

ஃபிளைவெயிட் வடிவமைப்பு முறை (Flyweight design pattern) என்பது ஒரு பயன்பாட்டில் உள்ள ஒத்த பொருளின் உள்ளார்ந்த (intrinsic) மதிப்புகளை (ஒத்த பண்புகள்) சேமிப்பதன் மூலம் நினைவகப் பயன்பாடு அல்லது கணக்கீட்டுச் செலவுகளை (computaional expenses) குறைப்பதை நோக்கமாகக் கொண்டுள்ளது, இது நகல் குறியீட்டின் அளவைக் குறைக்கிறது. ஒரு பயன்பாட்டில் அதிக எண்ணிக்கையிலான ஒத்த பொருள்களைக் கையாளும் போது இது மிகவும் பயனுள்ளதாக இருக்கும். 

## 6.1. ஃபிளைவெயிட்டின் கூறுகள் 

*ஃபிளைவெயிட் தொழிற்சாலை (FlyweightFactory)*

ஃபிளைவெயிட் தொழிற்சாலை ஃபிளைவெயிட் பொருள்களை உருவாக்குகிறது. ஏற்கனவே ஒரு ஃபிளைவெயிட் இல்லை என்றால் அதை உருவாக்கும் ஒரு செயல்பாட்டை இது கொண்டுள்ளது மற்றும் எதிர்காலக் கோரிக்கைக்காக புதிதாக உருவாக்கப்பட்ட ஃபிளைவெயிட்டுகளை இது சேமிக்கிறது. 

*ஃபிளைவெயிட் (Flyweight)*

ஃபிளைவெயிட் பயன்பாடு முழுவதும் பகிரப்படும் உள்ளார்ந்த (intrinsic) தரவைக் கொண்டுள்ளது 


## 6.2. ஃபிளைவெயிட்டுகளின் நன்மைகள் 

**நினைவகத் திறன் (Memory Efficiency)**

பல்வேறு பொருள்களுக்கு இடையே உள்ளார்ந்த தரவைப் பகிர்வதன் மூலம், ஃபிளைவெயிட் முறை நினைவகப் பயன்பாட்டைக் கணிசமாகக் குறைக்கிறது, குறிப்பாக அதிக எண்ணிக்கையிலான நிகழ்வுகளைக் (instances) கையாளும் போது. 

**செயல்திறன் மேம்பாடுகள் (Performance Improvements)** 

குறைக்கப்பட்ட நினைவகப் பயன்பாடு காரணமாக, பயன்பாட்டின் ஒட்டுமொத்த செயல்திறன் மேம்படுகிறது. குறைந்த நினைவகப் பயன்பாடு பொதுவாக வேகமான செயலாக்க நேரங்களுக்கும் (execution times) மென்மையான பயன்பாட்டுச் செயல்திறனுக்கும் வழிவகுக்கிறது. 

**நிலை மேலாண்மையை எளிதாக்குகிறது (Simplifies State Management)**

உள்ளார்ந்த தரவு (பகிரப்பட்ட மதிப்புகள்) மற்றும் வெளிப்புற தரவு (தனித்துவமான மதிப்புகள்) ஆகியவற்றைப் பிரிப்பதன் மூலம், ஃபிளைவெயிட்டுகள் இந்த நிலைகளின் (states) நிர்வாகத்தை எளிதாக்குகின்றன. கவலைகளைத் தூய்மையாகப் பிரிப்பதற்கும், நிலையைக் கையாள்வதற்கு மிகவும் ஒழுங்கமைக்கப்பட்ட அணுகுமுறைக்கும் இது அனுமதிக்கிறது. 

## 6.3. எடுத்துக்காட்டு 

```javascript 
// Flyweight object for Camera
function Camera(make, model, resolution) {
    this.make = make;
    this.model = model;
    this.resolution = resolution;
}

// Flyweight factory for Camera
var FlyWeightCameraFactory = (function () {
    var flyweights = {};

    return {
        get: function (make, model, resolution) {
            if (!flyweights[make + model]) {
                flyweights[make + model] = new Camera(make, model, resolution);
            }
            return flyweights[make + model];
        },

        getCount: function () {
            var count = 0;
            for (var f in flyweights) count++;
            return count;
        }
    };
})();

// Camera collection
function CameraCollection() {
    var cameras = {};
    var count = 0;

    return {
        add: function (make, model, resolution, serial) {
            cameras[serial] = {
                flyweight: FlyWeightCameraFactory.get(make, model, resolution),
                serial: serial
            };
            count++;
        },

        get: function (serial) {
            return cameras[serial];
        },

        getCount: function () {
            return count;
        }
    };
}

// Run the example
function run() {
    var cameras = new CameraCollection();

    cameras.add("Canon", "EOS R5", "45MP", "A1234");
    cameras.add("Nikon", "D850", "45.7MP", "B5678");
    cameras.add("Sony", "A7R III", "42.4MP", "C9101");
    cameras.add("Canon", "EOS R5", "45MP", "D1212"); // Reusing existing flyweight

    console.log("Cameras: " + cameras.getCount());
    console.log("Flyweights: " + FlyWeightCameraFactory.getCount());
}

// Run the example
run();
``` 

## 7. ப்ராக்ஸி (Proxy) 

ப்ராக்ஸி வடிவமைப்பு முறை (Proxy design pattern) என்பது ஒரு கட்டமைப்பு வடிவமைப்பு முறையாகும், இது மற்றொரு பொருளுக்கு மாற்றீட்டை அல்லது இடப்பிடிப்பானை (placeholder) வழங்க உங்களை அனுமதிக்கிறது. இந்த ப்ராக்ஸி பொருள் அசல் பொருளுக்கான அணுகலைக் கட்டுப்படுத்த முடியும். ஜாவாஸ்கிரிப்டில், `proxy` பொருள் மொழியிலேயே கட்டமைக்கப்பட்டுள்ளது மற்றும் ப்ராக்ஸி வடிவமைப்பு முறையைச் செயல்படுத்துவதற்கு உதவுகிறது. 

## 7.1. ப்ராக்ஸியின் கூறுகள் 

*ப்ராக்ஸி (Proxy)*

ப்ராக்ஸி உண்மையான பொருளைப் போன்ற ஒரு இடைமுகத்தைக் கொண்டுள்ளது, உண்மையான பொருளை அணுக ப்ராக்ஸியை அனுமதிக்கும் ஒரு குறிப்பை (reference) இது பராமரிக்கிறது மற்றும் இது கோரிக்கைகளைக் கையாளுகிறது மற்றும் அவற்றை உண்மையான பொருளுக்கு அனுப்புகிறது (forwards). 

*உண்மையான பொருள் (RealSubject)*

ப்ராக்ஸி மாற்றாகச் செயல்படும் உண்மையான பொருள் இதுவாகும். 

## 7.2. ப்ராக்ஸிகளின் நன்மைகள்

**கட்டுப்படுத்தப்பட்ட அணுகல் (Controlled Access)** 

ப்ராக்ஸிகள் அசல் பொருளுக்கான அணுகலைக் கட்டுப்படுத்த உங்களை அனுமதிக்கின்றன, அடிப்படைப் பொருளை அணுக அனுமதிப்பதற்கு முன்பு அனுமதிகள் (permissions), கட்டுப்பாடுகள் (restrictions) அல்லது சரிபார்ப்புகள் (validations) போன்ற அணுகல் கட்டுப்பாட்டு தர்க்கங்களைச் (access control logic) செயல்படுத்த உங்களை அனுமதிக்கிறது. 

**நடத்தை அதிகரிப்பு (Behavior Augmentation)**

அசல் பொருளின் பண்புகளுக்கான அணுகல் அல்லது முறைகளின் அழைப்பிற்கு முன்னரோ அல்லது பின்னரோ ப்ராக்ஸிகள் கூடுதல் நடத்தை அல்லது செயல்பாட்டைச் சேர்க்கலாம். லாகிங் (logging), கேச்சிங் (caching) அல்லது பிழை கையாளுதல் (error handling) போன்ற குறுக்குவெட்டுக் கவலைகளைச் (cross-cutting concerns) செயல்படுத்த இது பயனுள்ளதாக இருக்கும்.

**கேச்சிங் (Caching)**

விலையுயர்ந்த செயல்பாடுகளின் முடிவுகளைச் சேமிக்க ப்ராக்ஸிகள் கேச்சிங் வழிமுறையைச் செயல்படுத்தலாம், செயல்திறன் மற்றும் திறனை மேம்படுத்துகின்றன. 


**சோம்பேறி துவக்கம் (Lazy Initialization)** 

ப்ராக்ஸிகள் சோம்பேறி துவக்கத்தை (lazy initialization) செயல்படுத்துகின்றன, அதாவது உண்மையான பொருளை அதன் தேவை ஏற்படும் வரை உருவாக்குவதைத் தாமதப்படுத்தலாம். முன்கூட்டிய வளப் பயன்பாட்டைக் குறைப்பதன் மூலம் இது செயல்திறனை மேம்படுத்தும். 

## 7.3. எடுத்துக்காட்டு 

```javascript
// Original object representing a bank account
const bankAccount = {
  balance: 1000,

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  },

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
    } else {
      console.log('Insufficient funds.');
    }
  }
};

// Create a proxy for the bank account
const bankAccountProxy = new Proxy(bankAccount, {
  // Intercept property access
  get(target, property) {
    if (property === 'balance') {
      // Add some custom behavior before accessing 'balance'
      console.log('Balance accessed.');
    }
    return target[property];
  },

  // Intercept method invocation
  apply(target, thisArg, args) {
    // Add some custom behavior before invoking a method
    console.log(`Method "${args[0]}" called.`);
    return target.apply(thisArg, args);
  }
});

// Accessing the proxy
console.log(bankAccountProxy.balance); // This will trigger the custom behavior

bankAccountProxy.deposit(500); // This will trigger the custom behavior for method invocation
```
---