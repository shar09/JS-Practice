function permutations(nums) {
    let res = [];
    function backtracking(perm) {
        console.log(perm)
        if(perm.length === nums.length) {
            res = res.concat([perm]);
        }
        for(let num of nums) {
            console.log("num: " +num);
            if(!perm.includes(num)) {
                backtracking(perm.concat(num));
            }
        }
    }
    backtracking([]);
    return res;
}

console.log(permutations([1,2,3]));