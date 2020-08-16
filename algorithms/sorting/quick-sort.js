function pivotHelper(array, start, end) {
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

function quickSort(array, left=0, right=array.length-1) {
    console.log("left: "+left, "right: "+right);
    if(left<right) {
    let pivot = pivotHelper(array, left, right);
    console.log(pivot);
        quickSort(array, left, pivot-1);
        quickSort(array, pivot + 1, right);
    }
    console.log(array);
    return array;
}

console.log(quickSort([28,41,4,55,66,1,2,2]));