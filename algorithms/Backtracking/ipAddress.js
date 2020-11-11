function restoreIpAddresses(s) {
    // Write your code here
    if(s.length > 12) {
        return [];
    }
    function isValidIpNumber(t) {
        if(t.length < 0 || t.length > 3) 
            return false;
        if(t.length > 1 && t[0] == 0)
            return false;
        if(parseInt(t) > 255)
            return false;
        return true;        
    }
    function formatIpWithDots() {
        return [s.slice(0, dots[0]), s.slice(dots[0], dots[1]), s.slice(dots[1], dots[2]), 
                s.slice(dots[2])        
            ].join('.')   
    }
    
    let dots = [];
    let res = [];
    function backtracking() {
        console.log("dots: ", dots);
        if(dots.length === 3) {
            if(isValidIpNumber(s.slice(dots[2]))) {
                console.log("res:" ,formatIpWithDots());
                res = res.concat(formatIpWithDots())
            }
        }
        else {
            let start = dots.length > 0 ? dots[dots.length-1] : 0;
            for(let end=start; end<Math.min(start+3, s.length-1); end++) {
                console.log("string ", s.slice(start, end+1), s.slice(start, end+1) < '255')
                if(isValidIpNumber(s.slice(start, end+1))) {
                    dots.push(end+1);
                    backtracking();
                    dots.pop();
                }
            }
        }
    }
    backtracking();
    return res;
}

console.log(restoreIpAddresses("19216801"));