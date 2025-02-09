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

const container = document.getElementById('container');

container.addEventListener('click', function(event) {
    if (event.target.classList.contains('button')) {
        const value = event.target.textContent;
        console.log('Clicked div value:', value);
    }
});