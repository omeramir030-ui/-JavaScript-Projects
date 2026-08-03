let currentInput = '0';
let previousInput = '';
let operator = '';

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = currentInput;
}

function appendNumber(num) {
  if (currentInput === '0') {
    currentInput = num;
  } else {
    currentInput += num;
  }
  updateDisplay();
}

function chooseOperator(op) {
  if (currentInput === '') return;

  previousInput = currentInput;
  currentInput = '';
  operator = op;
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '×':
      result = prev * current;
      break;
    case '÷':
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = '';
  previousInput = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  previousInput = '';
  operator = '';
  updateDisplay();
}

//updateDisplay() — pushes currentInput to the screen
// appendNumber(num) — adds a digit to currentInput
// chooseOperator(op) — stores previousInput, sets operator, resets currentInput
// calculate() — does the actual math based on operator, using previousInput and currentInput
// clear() — resets everything back to defaults