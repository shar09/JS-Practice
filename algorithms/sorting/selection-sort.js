function selectionSort(array) {
  let min=0;
  for(let i=0; i<array.length-1; i++) {
    min = array[i];
    for(let j=i+1; j<array.length; j++) {
      if(min > array[j]) {
        min = array[j];
      }
    }
    //console.log("iteration:"+i, min);
    if(array[i] != min) {
      let minIndex = array.lastIndexOf(min);
      //console.log(array);
      //console.log("minIndex: "+minIndex);
      let temp = array[i];
      array[i] = min;
      array[minIndex] = temp;
    }
  }
  return array;
}
  
//--------------------
// Es6 version
  
function selectionSort(array) {
  const swap = (array, idx1, idx2) => [array[idx1],array[idx2]] = [array[idx2], array[idx1]];
  for(let i=0; i<array.length; i++) {
    let min = i;
    for(let j=i+1; j<array.length; j++) {
      if(array[min] > array[j]) {
        min = j;
      }
    }
    if(array[i] != array[min]) {
      swap(array,i,min);
    }
  } 
  return array;
}
  
console.log(selectionSort([4,6,8,2,3,3,19,13,12,8,7]));