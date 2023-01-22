const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0)
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current, 1)
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(num1) {
	let num2 = 1
    while (num1 > 0) {
      num2 *= num1;
      num1--;
    }
  return num2;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
