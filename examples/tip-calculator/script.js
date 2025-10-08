// Get DOM elements
const billAmountInput = document.getElementById('bill-amount');
const tipButtons = document.querySelectorAll('.tip-btn');
const customTipInput = document.getElementById('custom-tip');
const numPeopleInput = document.getElementById('num-people');
const calculateBtn = document.getElementById('calculate-btn');
const tipAmountSpan = document.getElementById('tip-amount');
const totalAmountSpan = document.getElementById('total-amount');
const perPersonDiv = document.getElementById('per-person');
const amountPerPersonSpan = document.getElementById('amount-per-person');

// Variables to store current values
let billAmount = 0;
let tipPercentage = 20; // Default to 20%
let numPeople = 1;

// Function to validate numeric input
function validateNumericInput(input, min = 0) {
    const value = parseFloat(input.value);
    if (isNaN(value) || value < min) {
        input.style.borderColor = '#e74c3c';
        return false;
    } else {
        input.style.borderColor = '#ddd';
        return true;
    }
}

// Function to update tip percentage from buttons
function updateTipPercentage(percentage) {
    tipPercentage = percentage;
    customTipInput.value = '';
    
    // Update active button
    tipButtons.forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.tip) === percentage) {
            btn.classList.add('active');
        }
    });
}

// Function to calculate tip and total
function calculateTip() {
    if (!validateNumericInput(billAmountInput, 0)) {
        alert('Please enter a valid bill amount.');
        return;
    }
    
    billAmount = parseFloat(billAmountInput.value);
    
    // Check if custom tip is entered
    if (customTipInput.value !== '') {
        if (!validateNumericInput(customTipInput, 0)) {
            alert('Please enter a valid tip percentage.');
            return;
        }
        tipPercentage = parseFloat(customTipInput.value);
        tipButtons.forEach(btn => btn.classList.remove('active'));
    }
    
    numPeople = parseInt(numPeopleInput.value) || 1;
    
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;
    
    // Animate result updates
    animateResult(tipAmountSpan, tipAmount.toFixed(2));
    animateResult(totalAmountSpan, totalAmount.toFixed(2));
    
    // Handle split bill
    if (numPeople > 1) {
        const amountPerPerson = totalAmount / numPeople;
        perPersonDiv.style.display = 'block';
        animateResult(amountPerPersonSpan, amountPerPerson.toFixed(2));
    } else {
        perPersonDiv.style.display = 'none';
    }
}

// Function to animate result updates
function animateResult(element, newValue) {
    element.textContent = '$' + newValue;
    element.parentElement.classList.add('updated');
    setTimeout(() => {
        element.parentElement.classList.remove('updated');
    }, 500);
}

// Event listeners for tip buttons
tipButtons.forEach(button => {
    button.addEventListener('click', () => {
        updateTipPercentage(parseInt(button.dataset.tip));
    });
});

// Event listener for custom tip input
customTipInput.addEventListener('input', () => {
    if (customTipInput.value !== '') {
        tipButtons.forEach(btn => btn.classList.remove('active'));
        tipPercentage = parseFloat(customTipInput.value) || 0;
    }
});

// Event listener for calculate button
calculateBtn.addEventListener('click', calculateTip);

// Event listeners for real-time validation
billAmountInput.addEventListener('input', () => validateNumericInput(billAmountInput, 0));
customTipInput.addEventListener('input', () => validateNumericInput(customTipInput, 0));
numPeopleInput.addEventListener('input', () => validateNumericInput(numPeopleInput, 1));

// Initialize with default values
updateTipPercentage(20);
