function insertionSort(array) {
  for(let i=1; i<array.length;i++) {
    // console.log("i: "+i);
    let currentVal = array[i];
    for(var j=i-1;j>=0 && array[j]>currentVal;j--) {
      array[j+1] = array[j]; 
      // console.log(j, array);
    }
    // console.log("j: "+j);
    array[j+1] = currentVal;
  }
  return array;
}

console.log("array: ", insertionSort([4,6,8,3,0]));