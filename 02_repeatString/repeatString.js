//let str = prompt("enter text to be repeated", "hey");
//let num = prompt("enter number of times to repeat", "10");
let word;
let num;
const repeatString = function(word, num) {
    let string = '';
    
    if (num < 0) return 'ERROR';
    
    for (i=0; i < num; i++) {
      string += word;
    }
    
return string;
};

// Do not edit below this line
module.exports = repeatString;
