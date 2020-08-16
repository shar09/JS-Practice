function merge(arr1, arr2) {
    let mergedArray = [];
    let i=0, j=0;
    while(i<arr1.length && j<arr2.length) {
        if(arr1[i] > arr2[j]) {
           mergedArray.push(arr2[j]);
           j++;
        }
        else {
            mergedArray.push(arr1[i]);
            i++;
        }
    }
    while(i<arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while(j<arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
}

function mergeSort(array) {
    if(array.length <= 1) {
        return array;
    }
    let mid = Math.floor(array.length/2);
    let left = mergeSort(array.slice(0,mid));
    let right = mergeSort(array.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([44,21,1,8,2,3,4,8,10]));