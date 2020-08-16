function binarySearch(array, value) {
  let left=0, right=array.length-1, pivot = Math.floor((left+right)/2);
  // console.log(left, right, pivot);
  while(left<=right) {
    if(array[pivot] === value) {
      return array.indexOf(value);
    }
    if(array[pivot]>value) {
      right=pivot-1;
    }
    if(array[pivot]<value) {
      left=pivot+1;
    }
    pivot = Math.floor((left+right)/2);
  }
  return -1;
}
  
console.log(binarySearch([2,4,6,7,10,13,15,19,21,25,76,100,190], 21));
console.log(binarySearch(['a','b','c','def','ezz'], 'ezz'));