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

$(document).ready(function () {
  $("button.button-operand").click(function () {
    displayValue += $(this).val();
    document.getElementById("output-numbers").innerHTML = displayValue;
  });
});

// function buttonClicked(number) {
//   displayValue = displayValue + number;
//   document.getElementById("output-numbers").innerHTML = displayValue;
// }
