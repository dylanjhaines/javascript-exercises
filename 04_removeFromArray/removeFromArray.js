
const removeFromArray = function(...theArgs) {
    const array = theArgs[0];
    let removedArray = [];
   
    array.forEach((item) => {
        if (!theArgs.includes(item)) {
            removedArray.push(item);
        }
    });


    return removedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
