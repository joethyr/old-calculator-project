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
let displayValue = 0;

$(document).ready(function () {
  $("button.button-operand").click(function () {
    displayValue = $(this).val();
    // will probably store the values in as an array/object
    // how to store the values without the previous one being overwritten
    document.getElementById("output-numbers").innerHTML = displayValue;
  });
});

function Testm() {}
