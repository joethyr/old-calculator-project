// function that adds

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

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      if (b === 0) return null;
      return divide(a, b);
      break;
    default:
      return null;
  }
}
let displayValue = "";

function operandClick(number) {
  if (displayValue.length > 8) {
    alert("the value is too high!");
    return;
  }
  if (number >= 1 && number <= 9) {
    displayValue = displayValue + number;
    document.getElementById("output-numbers").innerHTML = displayValue;
  } else if (number === 0 && displayValue.length > 0) {
    displayValue = displayValue + number;
    document.getElementById("output-numbers").innerHTML = displayValue;
  }
}
buttonDecimal = ".";
function decimalClicked() {
  displayValue = displayValue + buttonDecimal;
  document.getElementById("output-numbers").innerHTML = displayValue;
  document.getElementById("button-decimal").onclick = null;
}
