//Naive approach
function bubbleSort(array) {
  for(let i=0; i<array.length; i++) {
    for(let j=0; j<array.length-1-i; j++) {
      if(array[j] > array[j+1]) {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
}
    
//More Optimized
function swap(arr, idx1, idx2) {
  return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
  
function bubbleSort(array) {
  let noSwaps;
  for(let i=array.length; i>0; i--) {
    noSwaps = true;
    for(let j=0; j<i-1; j++) {
      if(array[j] > array[j+1]) {
        swap(array, j, j+1);
        noSwaps = false;
      }
    }
    if(noSwaps){
      break;
    }
  }
  return array;
}
  
console.log(bubbleSort([4,6,8,2,3,3,19,13,12,8,7]));