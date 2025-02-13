// Calculation functions

// TODO: fix add function
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
            currentInput.slice(0, -1);
            document.getElementById('calc').innerHTML = currentInput;
        } else { 
            appendValue(value);
        }
    }
});