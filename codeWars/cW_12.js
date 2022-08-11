// implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
function arrayDiff(a, b) {
const filteredArray = a.filter(function(x) { 
  return b.indexOf(x) < 0;});
  return filteredArray
}