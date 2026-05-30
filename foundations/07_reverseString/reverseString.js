const reverseString = function(str) {
    let length = str.length;
    let reverseStr = "";

    for (let i = length - 1; i >= 0; i--) {
        reverseStr += str.at(i); 
    }

    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
