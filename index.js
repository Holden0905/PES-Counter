let saveEl = document.getElementById("save-el");
let countInput = document.getElementById("count-input");
let totalEl = document.getElementById("total-el");
let drawingCountEl = document.getElementById("drawing-count-el"); // New element for drawing count

let total = 0; // Stores the total sum of entries
let drawingCount = 0; // Tracks how many times the save button is pressed

// Function to save the count when the Save button is clicked
function save() {
    let count = parseInt(countInput.value); // Get the number from input field

    if (!isNaN(count) && count >= 0) { // Ensure it's a valid number
        let countStr = count + " - ";
        saveEl.textContent += countStr;
        
        // Add to total
        total += count;
        totalEl.textContent = total;

        // Increment drawing count
        drawingCount++;
        drawingCountEl.textContent = drawingCount; // Update drawing count display

        // Clear input field
        countInput.value = "";
    } else {
        alert("Please enter a valid number!"); // Error handling for invalid input
    }
}

// Event listener to trigger "save" when Enter key is pressed
countInput.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) { // 13 is the Enter key
        save(); // Trigger save function
    }
});

