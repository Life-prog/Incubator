// You get an array of numbers, return the sum of all of the positives ones.
function positiveSum(arr) {
    var positiveArr = 0
    for (var i = 0; i < arr.length; i++){
      if (arr[i]>0){
        positiveArr += arr[i];
      }
    }
    return positiveArr
  }