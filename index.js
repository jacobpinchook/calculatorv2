// Main operator setup
const firstNum = '';
const operator = '';
const secondNum = '';
function operate(arr) {
    val1 = arr[0];
    op = arr[1];
    val2 = arr[2];
    if (op == '+') return add(val1, val2);
    else if (op == '-') return subtract(val1, val2);
    else if (op == 'x') return multiply(val1, val2);
    else if (op == '/') return divide(val1, val2);
}

// Calculation functions
function add(a, b) {
    const sum = a + b;
    return sum;
}
function subtract(a, b) {
    const subtrahend = a - b;
    return subtrahend;
}
function multiply(a, b) {
    const product = a * b;
    return product;
}
function divide(a, b) {
    const remainder = a / b;
    return remainder;
}

let currentInput = '';

function appendValue(value) {
    currentInput += value; // Concatenate the value to current input
    document.getElementById('calc').innerHTML = currentInput;
}

function eval(val) {
    //split value string into array
    const arr = document.getElementById('calc').innerHTML.split(/([+-/x])/);
    console.log(arr);

    console.log(operate(arr));
}

const container = document.getElementById('container');

container.addEventListener('click', function(event) {
    if (event.target.classList.contains('button')) {
        const value = event.target.textContent;
        console.log('Clicked div value:', value);


        // Add checks for appending a value
        console.log(value);
        if (value == "=") {
            eval(document.getElementById('calc').innerHTML);
        } else {
            appendValue(value);
        }
    }
});