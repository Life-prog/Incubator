// Create a function with two arguments that will return an array of the first (n) multiples of (x).
function getMultiply(x, n) {
    var newArr = [];
    for (var i = 1; i <= n; i++) {
        newArr.push(x * i);
    }
    return newArr;
}
console.log(getMultiply(3, 8));
