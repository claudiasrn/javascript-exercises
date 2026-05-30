const removeFromArray = function(arr, ...args ) {
    
    function checkEquality(item) {
        for (let arg of args) {
            if (item === arg) return false;
        }
        return true;
    }
    
    return arr.filter(checkEquality);
};

// Do not edit below this line
module.exports = removeFromArray;
