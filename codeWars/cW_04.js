// Sort and concatenate two arrays
function mergeArrays(arr1, arr2) {
  let newArr = (arr1.concat(arr2)).sort (function(a,b){
    return a - b
    
  })
  return [...new Set(newArr)]
}