const palindromes = function (str) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890"

    const cleanedStr = str
        .toLowerCase()
        .split("")
        .filter(symbol => alphanumerical.includes(symbol))
        .join("");

    const reverse = cleanedStr
        .split("")
        .reverse()
        .join("");

    return cleanedStr === reverse;
};

// Do not edit below this line
module.exports = palindromes;
