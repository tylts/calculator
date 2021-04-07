// DOM variables
const digit = document.getElementsByClassName('digit');
const btn = document.getElementsByTagName('button');
const screen = document.querySelector('.calculator-screen');
const allClear = document.querySelector('.clear');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const times = document.querySelector('#times');
const divide = document.querySelector('#divide');

// other vars
let num1;
let num2;
let readyToReset = false;
let operation = null;

Array.from(digit).forEach((digit) => {
  digit.addEventListener('click', (event) => {
    if (screen.textContent == 0) {
      screen.textContent = '';
    }
    screen.textContent += event.target.textContent;
  });
});

plus.addEventListener('click', addition);

allClear.addEventListener('click', clearScreen);

function clearScreen() {
  screen.textContent = 0;
  num1 = '';
  num2 = '';
  operation = null;
}

function addition() {
  num1 = screen.textContent
  console.log(num1)
}

