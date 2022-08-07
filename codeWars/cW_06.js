// Move array to k positions right  
var a = [1, 2, 3, 45, 8, 9, 7, 10];
var k = 3;

a = a.concat(a.splice(0, a.length - k));
console.log(a);