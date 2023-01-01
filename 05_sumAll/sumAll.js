const sumAll = function(min, max) {
  //accept an array as input
  //begin a loop at the first number of the array [0]
  //end the loop at the last number of the array [args.length-1]
  //for each iteration add the index to the return value
  
  if ((min || max) < 0) return "ERROR";
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
return sum;
};

// Do not edit below this line
module.exports = sumAll;
