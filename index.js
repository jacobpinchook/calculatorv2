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

let currentInput = '';

function appendValue(value) {
    currentInput += value; // Concatenate the value to current input
    document.getElementById('calc').innerHTML = currentInput;
}

function evaluate() {
    // Convert string into an array [number1, operator, number2]
    const arr = document.getElementById('calc').innerHTML.split(/([+\-÷x])/);
    console.log(arr);

    operate(arr);

    // TODO: Finish limiting input to a certain digit count
    // document.getElementById('calc').innerHTML = Math.floor(document.getElementById('calc').innerHTML / 1e0) % 1e10;
    // currentInput = Math.floor(currentInput / 1e0) % 1e10;
}

const container = document.getElementById('container');

container.addEventListener('click', function(event) {
    if (event.target.classList.contains('button')) {
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
        } else { 
            appendValue(value);
        }
    }
});