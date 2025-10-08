# Tip Calculator App

A simple tip calculator web application that demonstrates basic math operations, DOM manipulation, event handling, and input validation in JavaScript.

## Features

- **Bill Amount Input**: Enter the total bill amount
- **Tip Percentage Selection**: Choose from preset percentages (10%, 15%, 20%, 25%) or enter a custom percentage
- **Split Bill**: Divide the total among multiple people
- **Real-time Calculations**: Automatically calculates tip amount and total
- **Input Validation**: Ensures numeric inputs are valid
- **Animations**: Smooth transitions when updating results

## How It Works

### HTML Structure (`index.html`)
- Input field for bill amount
- Buttons for common tip percentages
- Custom tip percentage input
- Number of people input for bill splitting
- Display areas for tip amount, total amount, and per-person cost

### CSS Styling (`style.css`)
- Modern, responsive design with gradient backgrounds
- Smooth animations and transitions
- Visual feedback for active buttons and input validation

### JavaScript Functionality (`script.js`)

#### Variable Management
```javascript
let billAmount = 0;
let tipPercentage = 20; // Default to 20%
let numPeople = 1;
```

#### Input Validation
The `validateNumericInput()` function checks if inputs are valid numbers within acceptable ranges:
- Bill amount must be >= 0
- Custom tip percentage must be >= 0
- Number of people must be >= 1

#### Tip Selection
- Preset buttons update the `tipPercentage` variable and highlight the active button
- Custom tip input overrides preset selection when entered

#### Calculation Logic
The `calculateTip()` function performs the core math:
1. Validates bill amount input
2. Calculates tip amount: `tipAmount = (billAmount * tipPercentage) / 100`
3. Calculates total: `totalAmount = billAmount + tipAmount`
4. If splitting, calculates per-person cost: `amountPerPerson = totalAmount / numPeople`

#### DOM Manipulation
- Results are updated with `animateResult()` function for smooth visual feedback
- Split bill section shows/hides based on number of people

#### Event Handling
- Tip buttons: Update tip percentage and visual state
- Custom tip input: Override button selection
- Calculate button: Trigger calculations
- Input fields: Real-time validation

## Usage

1. Open `index.html` in a web browser
2. Enter the bill amount
3. Select a tip percentage or enter a custom one
4. Optionally, enter number of people to split the bill
5. Click "Calculate" to see results

## Concepts Demonstrated

- **Basic Math Operations**: Multiplication and division for tip calculations
- **DOM Manipulation**: Updating text content and element visibility
- **Event Listeners**: Handling user interactions (clicks, input changes)
- **Input Validation**: Ensuring user inputs are valid before calculations
- **CSS Animations**: Smooth transitions and visual feedback
- **Responsive Design**: Works on different screen sizes

## Browser Compatibility

Works in all modern browsers that support ES6 features.
