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
        document.getElementById('calc').innerHTML = add(val1, val2);
        currentInput = add(val1, val2);
    } else if (op == '-') {
        document.getElementById('calc').innerHTML = subtract(val1, val2);
        currentInput = subtract(val1, val2);
    } else if (op == 'x') {
        document.getElementById('calc').innerHTML = multiply(val1, val2);
        currentInput = multiply(val1, val2);
    } else if (op == '÷') {
        document.getElementById('calc').innerHTML = divide(val1, val2);
        currentInput = divide(val1, val2);
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

    // TODO: Finish limiting input to a certain digit count
    // document.getElementById('calc').innerHTML = Math.floor(document.getElementById('calc').innerHTML / 1e0) % 1e10;
    // currentInput = Math.floor(currentInput / 1e0) % 1e10;
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
        } else if (value == "AC") {
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
            // TODO: fix button click after an operator is added to the calculation
        } else if (value == "+/-") {
            if (operators.some(operator => document.getElementById('calc').innerHTML.includes(operator))) {
                console.log("true");
            }
            currentInput = currentInput * -1;
            document.getElementById('calc').innerHTML = currentInput;
            // TODO: resolve conflict between +/- and operator logic 
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