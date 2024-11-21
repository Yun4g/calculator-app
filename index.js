
document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.button');
    const result = document.querySelector('.result');

    let currentInput = '';
    let previousInput = '';
    let currentOperator = '';

    // Update display
    const updateDisplay = (value) => {
        display.value = value;
    };

    // Handle operator click

    const operatorClicked = (operator) => {
        if (currentInput === '') return; // Prevent setting operator without a number
        if (previousInput !== '') {
            // If there's a previous input, calculate first before setting new operator
            currentInput = calculatedResult(previousInput, currentInput, currentOperator).toString();
        }
        previousInput = currentInput;
        currentOperator = operator;
        currentInput = ''; // Clear current input for next number
        updateDisplay(previousInput + ' ' + currentOperator); // Display previous input and operator
    };

    // Handle equal click
    const equalToClicked = () => {
        if (previousInput && currentInput && currentOperator) {
            const result = calculatedResult(previousInput, currentInput, currentOperator);
            updateDisplay(result);
            currentInput = result;
            previousInput = '';
            currentOperator = '';
        }
    };

    // Calculate result
    const calculatedResult = (num1, num2, operator) => {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        switch (operator) {
            case '+': return num1 + num2;
            case '-': return num1 - num2;
            case '×': return num1 * num2;
            case '÷': return num2 === 0 ? 'Error' : num1 / num2;
            default: return 'Error';
        }
    };

    
    // Handle button clicks
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonValue = button.textContent.trim();

            if (!isNaN(buttonValue)) {
                // Number button
                currentInput += buttonValue;
                updateDisplay(previousInput + (currentOperator ? ' ' + currentOperator + ' ' : '') + currentInput);
            } else if (['+', '-', '×', '÷'].includes(buttonValue)) {
                // Operator button
                operatorClicked(buttonValue);
            } else if (buttonValue === '=') {
                // Equal button
                equalToClicked();
            } else if (buttonValue === 'AC') {
                // Clear button
                currentInput = '';
                previousInput = '';
                currentOperator = '';
                updateDisplay('0');
            } else if (buttonValue === '.') {
                // Decimal button
                if (!currentInput.includes('.')) {
                    currentInput += '.';
                    updateDisplay(previousInput + (currentOperator ? ' ' + currentOperator + ' ' : '') + currentInput);
                }
            } else if (buttonValue === '%') {
                // Percent button
                if (currentInput !== '') {
                    currentInput = (parseFloat(currentInput) / 100).toString();
                    updateDisplay(previousInput + (currentOperator ? ' ' + currentOperator + ' ' : '') + currentInput);
                }
            } else if (buttonValue === '±') {
                // Negation button
                if (currentInput !== '') {
                    currentInput = (parseFloat(currentInput) * -1).toString();
                    updateDisplay(previousInput + (currentOperator ? ' ' + currentOperator + ' ' : '') + currentInput);
                }
            }
        });
    });

    // Initialize display
    updateDisplay('0');
});