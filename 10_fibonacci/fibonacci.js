const fibonacci = function(num) {
    
    if (typeof(num) !== "number") num = num *1;
    if (num < 0) return "OOPS";
    let arr = [1, 1];
    if (num <=2) {
        return 1;
    }
    while (arr.length < num){
        arr.push(arr[arr.length-1] + arr[arr.length-2])
    }
    return arr[arr.length -1]
};

// Do not edit below this line
module.exports = fibonacci;
