// INPUTS
const itemName = document.getElementById("name");
const itemAmount = document.getElementById("amount");

// DISPLAY
const showBill = document.getElementById("showBill");
const total = document.getElementById("total");

// BUTTONS
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");

let expenseData = JSON.parse(localStorage.getItem('expenseData')) || [];

// FUNCTION TO SHOW THE NAME AND AMOUNT OF ITEM
function display() {
    showBill.value = expenseData.map(item => `${item.name}: ${item.amount}`).join('\n');
    total.value = expenseData.reduce((sum, item) => sum + parseFloat(item.amount), 0).toFixed(2);
}

// FUNCTION TO SAVE THE DATA
function saveData() {
    localStorage.setItem('expenseData', JSON.stringify(expenseData));
}

// EVENT FOR ADD BUTTON
addBtn.addEventListener("click", () => {
    if (itemName.value !== "" && itemAmount.value !== "") {
        expenseData.push({ name: itemName.value, amount: parseFloat(itemAmount.value) });
        display();
        saveData();
        itemName.value = "";
        itemAmount.value = "";
    }
});

// EVENT FOR CLEAR BUTTON
clearBtn.addEventListener("click", () => {
    expenseData = [];
    display();
    saveData();
});

// Initial display
display();
