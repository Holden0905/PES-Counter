let saveEl = document.getElementById("save-el");
let countInput = document.getElementById("count-input");
let totalEl = document.getElementById("total-el");

let total = 0; // Stores the total sum of entries

function save() {
    let count = parseInt(countInput.value); // Get the number from input field

    if (!isNaN(count) && count >= 0) { // Ensure it's a valid number
        let countStr = count + " - ";
        saveEl.textContent += countStr;
        
        // Add to total
        total += count;
        totalEl.textContent = total;

        // Clear input field
        countInput.value = "";
    } else {
        alert("Please enter a valid number!"); // Error handling for invalid input
    }
}

