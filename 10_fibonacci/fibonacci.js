const fibonacci = function(num) {
    let array = [1];
    array[1] = 1;
    if (num < 1) {
        return "OOPS";
    }
    for (i = 2; i < num; i++) {
        array[i] = array[i-1]+array[i-2]
    }
    return parseInt(array.slice(-1));
};

// Do not edit below this line
module.exports = fibonacci;
