// query selectors variables
const digits = document.querySelectorAll('.digit');
const screen = document.querySelector('.calculator-screen');
const allClear = document.querySelector('.clear');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const decimal = document.querySelector('.decimal');

// other vars
let num1;
let num2;
let readyToReset = false;
let operation = null;

// event listeners
digits.forEach((button) =>
    button.addEventListener('click', () =>
        updateScreenNumber(button.textContent)
    )
);

operators.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent))
);

allClear.addEventListener('click', clearScreen);
equal.addEventListener('click', evaluate);
decimal.addEventListener('click', decimalCheck);

// maths!
function clearScreen() {
    screen.textContent = 0;
    num1 = '';
    num2 = '';
    operation = null;
    screen.classList.remove('div-by-zero');
}

function updateScreenNumber(number) {
    if (screen.textContent === '0' || readyToReset) resetScreen();
    screen.textContent += number;
}

function decimalCheck() {
    if (readyToReset) resetScreen();
    if (screen.textContent === '') screen.textContent = '0';
    if (screen.textContent.includes('.')) return;
    screen.textContent += '.';
}

function resetScreen() {
    screen.textContent = '';
    screen.classList.remove('div-by-zero');
    readyToReset = false;
}

function setOperation(operator) {
    if (operation !== null) evaluate();
    num1 = screen.textContent;
    operation = operator;
    readyToReset = true;
}

function evaluate() {
    if (operation === null || readyToReset) return;
    if (operation == '÷' && screen.textContent === '0') {
        screen.textContent = 'ERROR Cannot divide by 0!';
        screen.classList.add('div-by-zero');
        readyToReset = true;
        num1 = '';
        num2 = '';
        operation = null;
        return;
    }
    num2 = screen.textContent;
    screen.textContent = roundOutput(operate(operation, num1, num2));
    operation = null;
    readyToReset = true;
}

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return addition(a, b);
        case '-':
            return subtraction(a, b);
        case '×':
            return multiplication(a, b);
        case '÷':
            return division(a, b);
        default:
            return null;
    }
}

function roundOutput(number) {
    return Math.round(number * 1000) / 1000;
}
