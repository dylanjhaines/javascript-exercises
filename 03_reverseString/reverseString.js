let input1 = [];
const reverseString = function(input1) {
//receive input

//create loop and have initiator start at end of input
//as initiator counts down through input, assign [] as output
//return output
//let input1 = "hello"
let output1 = '';
for (let i = input1.length - 1; i >= 0; i--){
    let letter = input1[i];
    output1 += letter;
    console.log(output1);
}

return output1
};

// Do not edit below this line
module.exports = reverseString;
