// Tip Calculator Logic

const billInput = document.getElementById('bill');
const tipButtons = document.querySelectorAll('.tip-btn');
const customTipInput = document.getElementById('customTip');
const splitInput = document.getElementById('split');
const tipDisplay = document.getElementById('tip');
const totalDisplay = document.getElementById('total');
const eachDisplay = document.getElementById('each');
const resultsDiv = document.getElementById('results');

let selectedTip = 10;

// Event listeners for tip buttons
tipButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tipButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedTip = parseFloat(btn.dataset.tip);
    customTipInput.value = '';
    calculate();
  });
});

// Custom tip input
customTipInput.addEventListener('input', () => {
  tipButtons.forEach(b => b.classList.remove('active'));
  selectedTip = parseFloat(customTipInput.value) || 0;
  calculate();
});

// Bill, split inputs
billInput.addEventListener('input', calculate);
splitInput.addEventListener('input', calculate);

function calculate() {
  const bill = parseFloat(billInput.value);
  const people = Math.max(1, parseInt(splitInput.value, 10) || 1);

  if (isNaN(bill) || bill <= 0 || isNaN(selectedTip) || selectedTip < 0) {
    tipDisplay.textContent = "0.00";
    totalDisplay.textContent = "0.00";
    eachDisplay.textContent = "0.00";
    resultsDiv.style.background = '#fee2e2';
    return;
  }

  const tip = bill * selectedTip / 100;
  const total = bill + tip;
  const each = total / people;

  tipDisplay.textContent = tip.toFixed(2);
  totalDisplay.textContent = total.toFixed(2);
  eachDisplay.textContent = each.toFixed(2);

  resultsDiv.style.background = '#f1f5f9';
}

document.querySelectorAll('pre > code').forEach(codeBlock => {
  const button = document.createElement('button');
  button.className = 'copy-btn';
  button.textContent = 'Copy';

  const pre = codeBlock.parentNode;
  const wrapper = document.createElement('div');
  wrapper.className = 'code-block';
  pre.parentNode.insertBefore(wrapper, pre);
  wrapper.appendChild(pre);
  wrapper.appendChild(button);

  button.addEventListener('click', () => {
    const text = codeBlock.textContent;
    navigator.clipboard.writeText(text).then(() => {
      button.textContent = 'Copied!';
      setTimeout(() => (button.textContent = 'Copy'), 2000);
    });
  });
});

// Initial calculation on load
calculate();