const leapYears = function(year) {
//Leap years are years divisible by four (like 1984 and 2004).
// However, years divisible by 100 are not leap years (such as 1800 and 1900) 
//unless they are divisible by 400 like 1600 and 2000, which were in fact leap years). 

//take input year and return ture or false based on above conditions
//final else will be modulus 4 only
//else/elif will be most to least specific

if (year % 400 === 0) {
    return true;
} else if (year % 100 === 0) {
    return false;
} else if (year % 4 === 0) {
    return true;
} else return false;

return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
