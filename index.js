// Main operator setup
const firstNum = '';
const operator = '';
const secondNum = '';
function operate(a, b, op) {
    if (op == '+') return add(a, b);
    else if (op == '-') return subtract(a, b);
    else if (op == '*') return multiply(a, b);
    else if (op == '/') return divide(a, b);
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
    

    // return result
    operate(a, b, op);
}

const container = document.getElementById('container');

container.addEventListener('click', function(event) {
    if (event.target.classList.contains('button')) {
        const value = event.target.textContent;
        console.log('Clicked div value:', value);


        // Add checks for appending a value
        console.log(value);
        if (document.getElementById('calc').innerHTML.includes("=")) {
            eval(document.getElementById('calc').innerHTML);
        } else {
            appendValue(value);
        }
    }
});