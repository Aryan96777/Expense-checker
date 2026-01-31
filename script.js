// 🔒 Login protection
if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "login.html";
}

const form = document.getElementById("expense-form");
const nameInput = document.getElementById("expense-name");
const amountInput = document.getElementById("expense-amount");
const categoryInput = document.getElementById("expense-category");
const expenseList = document.getElementById("expense-list");
const totalDisplay = document.getElementById("total-amount");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];



const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

function updateUI() {
  expenseList.innerHTML = "";
  let total = 0;

  if (expenses.length === 0) {
    expenseList.innerHTML = "<p style='text-align:center;color:gray;'>No expenses recorded.</p>";
  }

  expenses.forEach(expense => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <strong>${expense.name}</strong><br>
        <small>${expense.category} • ${expense.date}</small>
      </div>
      <div>
        ${formatter.format(expense.amount)}
        <span class="delete-btn" onclick="deleteExpense(${expense.id})"> ✕</span>
      </div>
    `;
    expenseList.appendChild(li);
    total += expense.amount;
  });

  totalDisplay.textContent = formatter.format(total);
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

form.addEventListener("submit", e => {
  e.preventDefault();

  if (amountInput.value <= 0) {
    alert("Enter valid amount");
    return;
  }

  expenses.push({
    id: Date.now(),
    name: nameInput.value,
    amount: +amountInput.value,
    category: categoryInput.value,
    date: new Date().toLocaleDateString("en-IN"),
  });

  updateUI();
  form.reset();
});

function deleteExpense(id) {
  expenses = expenses.filter(e => e.id !== id);
  updateUI();
}

function filterExpenses() {
  const term = document.getElementById("search-input").value.toLowerCase();
  document.querySelectorAll("li").forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(term) ? "flex" : "none";
  });
}

function clearAll() {
  if (confirm("Delete all expenses?")) {
    expenses = [];
    updateUI();
  }
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";

}


updateUI();
