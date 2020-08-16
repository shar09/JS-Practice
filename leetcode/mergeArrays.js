var merge = function(nums1, m, nums2, n) {
    if(m===0) {
        for(let j=0;j<n;j++) {
            nums1[j] = nums2[j];
        }
        return nums1;
    }
    let first = m-1;
    let second = n-1;
    for(let i=m+n-1;i>=0;i--) {
        if(second<0) {
            break;
        }
        if(first<0) {
            nums1[i] = nums2[second];
            second--;
        }
        if(nums1[first] < nums2[second]) {
            nums1[i] = nums2[second];
            second--;
        }
        else if(nums1[first] >= nums2[second])  {
            nums1[i] = nums1[first];
            first--;
        }
    }
    return nums1;
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));