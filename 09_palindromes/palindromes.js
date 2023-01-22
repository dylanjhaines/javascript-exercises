const palindromes = function(string) {
let lowerString = string.toLowerCase();
let processedString = lowerString.replace(/[^a-zA-Z]/g,"");
let reversedString = processedString
    .split("")
    .reverse()
    .join("")
return reversedString == processedString;
};

// Do not edit below this line
module.exports = palindromes;
