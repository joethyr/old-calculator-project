// let buttonZero = document.getElementsByClassName("button-zero");
// let buttonOne = document.getElementsByClassName("button-one");
// let buttonTwo = document.getElementsByClassName("button-two");
// let buttonThree = document.getElementsByClassName("button-three");
// let buttonFour = document.getElementsByClassName("button-four");
// let buttonFive = document.getElementsByClassName("button-five");
// let buttonSix = document.getElementsByClassName("button-six");
// let buttonSeven = document.getElementsByClassName("button-seven");
// let buttonEight = document.getElementsByClassName("button-eight");
// let buttonNine = document.getElementsByClassName("button-nine");
// let buttonDecimal = document.getElementsByClassName("button-decimal");

let outputNumbers = document.getElementsByClassName("output-numbers");

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
let displayValue;

$(document).ready(function () {
  $("button.button-operand").click(function () {
    displayValue = $(this).val();
    // will probably store the values in as an array/object
    // how to store the values without the previous one being overwritten
  });
});
