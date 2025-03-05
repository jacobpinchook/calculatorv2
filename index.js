// Calculation functions
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

// Variables
const operators = ["+", "-", "÷", "x"];
let currentInput = '';

// Calculates result
function operate(arr) {
    val1 = Number(arr[0]);
    op = arr[1];
    val2 = Number(arr[2]);
    if (op == '+') {
        let answer = add(val1, val2);
        if (answer % 1 != 0 && answer.length > 8) {
            answer = answer.toFixed(2);
        }  
        document.getElementById('calc').innerHTML = answer;
        currentInput = answer;
    } else if (op == '-') {
        let answer = subtract(val1, val2);
        if (answer % 1 != 0 && answer.length > 8) {
            answer = answer.toFixed(2);
        }  
        document.getElementById('calc').innerHTML = answer;
        currentInput = answer;
    } else if (op == 'x') {
        let answer = multiply(val1, val2);
        if (answer % 1 != 0 && answer.length > 8) {
            answer = answer.toFixed(2);
        }  
        document.getElementById('calc').innerHTML = answer;
        currentInput = answer;
    } else if (op == '÷') {
        let answer = divide(val1, val2);
        if (answer % 1 != 0 && answer.length > 8) {
            answer = answer.toFixed(2);
        }  
        document.getElementById('calc').innerHTML = answer;
        currentInput = answer;
    }    
}

// Adds the value of the button to a currentInput variable and the HTML
function appendValue(value) {
    currentInput += value; // Concatenate the value to current input
    document.getElementById('calc').innerHTML = currentInput;
}

// Splits the current input string into an array and calls the operate function
function evaluate() {
    // Convert string into an array [number1, operator, number2]
    const arr = document.getElementById('calc').innerHTML.split(/([+\-÷x])/);
    console.log(arr);

    operate(arr);
}

// Event listener for the container that holds the calculator
const container = document.getElementById('container');

container.addEventListener('click', function(event) {
    // Listens for a click of a button
    if (event.target.classList.contains('button')) {
        // Stores the value of the clicked button
        const value = event.target.textContent;
        console.log('Clicked div value:', value);

        // Add checks for appending a value
        console.log(value);
        if (value == "=") {
            evaluate();
        } else if (value == "CLEAR") {
            document.getElementById('calc').innerHTML = 0;
            currentInput = '';
        } else if (value == "DEL") {
            if (currentInput.length == 1) {
                currentInput = '';
                document.getElementById('calc').innerHTML = '0'
            }  else {
                currentInput = currentInput.slice(0, -1);
                document.getElementById('calc').innerHTML = currentInput;
            }
        } else if (value == "+" || value == "-" || value == "x" || value == "÷") {
            if (operators.some(operator => document.getElementById('calc').innerHTML.includes(operator))) {
                return;
            } else {
                appendValue(value);
            }
        } else if (value == ".") {
            if (document.getElementById('calc').innerHTML.includes(".")) {
                return;
            } else {
                appendValue(value);
            }
        } else { 
            appendValue(value);
        }
    }
});