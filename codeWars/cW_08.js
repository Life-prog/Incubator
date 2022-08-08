// Create an array with (n) times repeating (s)
function repeatStr (n, s) {
  var newArr = []
  for (i = 0; i <= n - 1; i++) {
    newArr.push(s)
  }
  return newArr.join('')
}