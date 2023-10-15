const palindromes = function (string) {
    let arr = string.toLowerCase().replace(/[^a-z0-9]+/g,"");
    return arr.split("").reverse().join("") == arr
}
// Do not edit below this line
module.exports = palindromes;
