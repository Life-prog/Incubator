// Bubble sort without changing the input array
function bubblesortOnce(a) {
let newA = a.slice()
for(let i = 0; i < newA.length - 1; i++){
       if(newA[i] > newA[i + 1]){
         [newA[i], newA[i + 1]] = [newA[i + 1], newA[i]];
     }
   }
  return newA
}