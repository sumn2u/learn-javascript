// Select elements
const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const listEl = document.getElementById("transaction-list");
const form = document.getElementById("transaction-form");
const textInput = document.getElementById("text");
const amountInput = document.getElementById("amount");

// Load transactions from localStorage
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// Add transaction
function addTransaction(e) {
  e.preventDefault();

  const text = textInput.value.trim();
  const amount = +amountInput.value;

  if (text === "" || amount === 0 || isNaN(amount)) {
    alert("Please enter valid description and amount.");
    return;
  }

  const transaction = {
    id: Date.now(),
    text,
    amount,
  };

  transactions.push(transaction);
  updateLocalStorage();
  renderTransactions();

  textInput.value = "";
  amountInput.value = "";
}

// Delete transaction
function deleteTransaction(id) {
  transactions = transactions.filter((t) => t.id !== id);
  updateLocalStorage();
  renderTransactions();
}

// Edit transaction
function editTransaction(id) {
  const t = transactions.find((t) => t.id === id);
  if (!t) return;

  const newText = prompt("Edit description:", t.text);
  const newAmount = parseFloat(prompt("Edit amount:", t.amount));

  if (newText && !isNaN(newAmount)) {
    t.text = newText;
    t.amount = newAmount;
    updateLocalStorage();
    renderTransactions();
  }
}

// Update totals
function updateSummary() {
  const amounts = transactions.map((t) => t.amount);
  const total = amounts.reduce((a, b) => a + b, 0).toFixed(2);
  const income = amounts
    .filter((a) => a > 0)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);
  const expense = (
    amounts.filter((a) => a < 0).reduce((a, b) => a + b, 0) * -1
  ).toFixed(2);

  balanceEl.textContent = `₹${total}`;
  incomeEl.textContent = `₹${income}`;
  expenseEl.textContent = `₹${expense}`;
}

// Render transactions
function renderTransactions() {
  listEl.innerHTML = "";

  transactions.forEach((t) => {
    const li = document.createElement("li");
    li.classList.add(t.amount < 0 ? "expense" : "income");

    li.innerHTML = `
      ${t.text} <span>₹${t.amount}</span>
      <div>
        <button onclick="editTransaction(${t.id})">✏️</button>
        <button onclick="deleteTransaction(${t.id})">❌</button>
      </div>
    `;

    listEl.appendChild(li);
  });

  updateSummary();
}

// Save to localStorage
function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Initialize
renderTransactions();
form.addEventListener("submit", addTransaction);

// Expose functions globally (for inline onclick)
window.editTransaction = editTransaction;
window.deleteTransaction = deleteTransaction;
