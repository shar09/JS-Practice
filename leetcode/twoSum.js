function binarySearch(array, firstNum, target) {
    let left = 0, right = array.length - 1, mid = Math.floor((left+right)/2);
    let secondNum = target - firstNum;
    while(left<=right) {
        if(secondNum === array[mid]) {
            return array[mid];
        }
        if(secondNum > array[mid]) {
            left = mid + 1;
        }
        else {
            right = mid - 1; 
        }
        mid = Math.floor((left+right)/2);
    }
}

var twoSum = function(nums, target) {
    let firstNum, secondNum;
    let sortedArray = nums.slice(0);
    sortedArray.sort(function(a, b) {
        return a - b;
    });   
    for(let i=0; i<sortedArray.length; i++) {
        firstNum = sortedArray[i];
        secondNum = binarySearch(sortedArray.slice(i+1), firstNum, target);
        if(typeof secondNum === "number") 
            break;
    }
    if(typeof secondNum === "number") {
        let firstNumIndex = nums.indexOf(firstNum);
        let secondNumIndex = nums.lastIndexOf(secondNum);
        return [firstNumIndex, secondNumIndex]
    }
};

console.log(twoSum([0,4,3,0], 0));