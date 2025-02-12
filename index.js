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

function operate(arr) {
    val1 = arr[0];
    op = arr[1];
    val2 = arr[2];
    if (op == '+') console.log(add(val1, val2));
    // document.getElementById('calc').innerHTML = add(val1, val2);
    else if (op == '-') return subtract(val1, val2);
    else if (op == 'x') return multiply(val1, val2);
    else if (op == '/') return divide(val1, val2);
}

let currentInput = '';

function appendValue(value) {
    currentInput += value; // Concatenate the value to current input
    document.getElementById('calc').innerHTML = currentInput;
}

function evaluate() {
    // Convert string into an array [number1, operator, number2]
    const arr = document.getElementById('calc').innerHTML.split(/([+-/x])/);
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
        } else {  
            appendValue(value);
        }
    }
});