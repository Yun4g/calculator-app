const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");

let currentValue = '';
let previousValue = '';
let operator = '';

// Function to update the display
function updateDisplay() {
    display.textContent = `${previousValue} ${operator} ${currentValue}`.trim();
}

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        // Check if the button is an operator
        if (['+', '-', '*', '/'].includes(value)) {
            // If an operator is clicked, set the operator and move current to previous
            if (currentValue !== '') {
                previousValue = currentValue;
                currentValue = '';
            }
            operator = value;
        } else {
            // If it's a number, append it to the current value
            currentValue += value;
        }

        // Update the display after each click
        updateDisplay();
    });
});