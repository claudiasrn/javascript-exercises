const sumAll = function(a, b) {

    if (typeof(a) !== "number" || typeof(b) !== "number") return "ERROR"
    if (a < 0 || b < 0) return "ERROR"
    if ( !Number.isInteger(a) || !Number.isInteger(b) ) return "ERROR"

    let sum = 0;
    let start = a > b? b : a;
    let finish = a > b? a : b;

    for (i = start; i<=finish; i++ ) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
