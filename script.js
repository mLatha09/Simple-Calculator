let display = document.getElementById("display");

// Clear all
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Add number
function appendNumber(num) {
  display.value += num;
}

// Add dot (prevent multiple dots in same number)
function appendDot() {
  let parts = display.value.split(/[\+\-\*\/]/);
  let lastPart = parts[parts.length - 1];

  if (!lastPart.includes(".")) {
    display.value += ".";
  }
}

// Add operator (prevent double operators)
function appendOperator(op) {
  if (display.value === "") return;

  let lastChar = display.value.slice(-1);

  if ("+-*/".includes(lastChar)) {
    // Replace operator
    display.value = display.value.slice(0, -1) + op;
  } else {
    display.value += op;
  }
}

// Calculate result
function calculate() {
  try {
    let result = eval(display.value);

    if (result === Infinity || result === -Infinity) {
      display.value = "Error";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "Error";
  }
}
