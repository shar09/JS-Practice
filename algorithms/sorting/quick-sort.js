function pivotHelper(array, start=0, end=array.length-1) {
    let pivot = array[start], pivotIndex = start;
    for(let i=start+1; i<=end; i++) {
        if(pivot > array[i]) {
           pivotIndex++;
           let temp = array[pivotIndex];
           array[pivotIndex] = array[i];
           array[i] = temp;
        }
    }
    let temp = array[pivotIndex];
    array[pivotIndex] = pivot;
    array[start] = temp;
    return pivotIndex;
}

function quickSort(array, start=0, end=array.length-1) {
    if(start<end) {    
    let pivotIndex = pivotHelper(array, start, end);
        quickSort(array, start, pivotIndex-1);
        quickSort(array, pivotIndex+1, end);
    }
    return array;
}

console.log(quickSort([28,41,4,55,66,1,2,2]));