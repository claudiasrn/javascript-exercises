const fibonacci = function(num) {


    function helper(n) {
        if (n === 0 || n === 1) return 1;
        return helper(n - 1) + helper(n - 2);
    }

    if (typeof(num) !== "number") num = parseInt(num);

    if (num < 0) return "OOPS";

    if (num === 0 ) return 0;

    return helper(num - 1);
};

// Do not edit below this line
module.exports = fibonacci;
