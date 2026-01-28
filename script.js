const form = document.getElementById('expense-form');
const nameInput = document.getElementById('expense-name');
const amountInput = document.getElementById('expense-amount');
const categoryInput = document.getElementById('expense-category');
const expenseList = document.getElementById('expense-list');
const totalDisplay = document.getElementById('total-amount');

// Load from LocalStorage or start with empty array
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Indian Currency Formatter (Lakhs/Crores)
const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
});

function updateUI() {
    expenseList.innerHTML = '';
    let total = 0;

    if (expenses.length === 0) {
        expenseList.innerHTML = '<p style="text-align:center; color:gray;">No expenses recorded.</p>';
    }

    expenses.forEach((expense) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="item-info">
                <strong>${expense.name}</strong>
                <small>${expense.category} • ${expense.date}</small>
            </div>
            <div>
                <span>${formatter.format(expense.amount)}</span>
                <span class="delete-btn" onclick="deleteExpense(${expense.id})">✕</span>
            </div>
        `;
        expenseList.appendChild(li);
        total += expense.amount;
    });

    totalDisplay.innerText = formatter.format(total);
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Basic Validation
    if(amountInput.value <= 0) {
        alert("Please enter a valid amount");
        return;
    }

    const newExpense = {
        id: Date.now(),
        name: nameInput.value,
        amount: parseFloat(amountInput.value),
        category: categoryInput.value,
        date: new Date().toLocaleDateString('en-IN')
    };

    expenses.push(newExpense);
    updateUI();
    form.reset();
});

function deleteExpense(id) {
    expenses = expenses.filter(exp => exp.id !== id);
    updateUI();
}

function filterExpenses() {
    const term = document.getElementById('search-input').value.toLowerCase();
    const items = expenseList.getElementsByTagName('li');

    Array.from(items).forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(term) ? 'flex' : 'none';
    });
}

function clearAll() {
    if(confirm("Delete all your records?")) {
        expenses = [];
        updateUI();
    }
}

// Start the app
updateUI();