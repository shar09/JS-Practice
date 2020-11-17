function factorial(n) {
    // base case
    if(n === 1) {
        return 1;
    }
    return n * factorial(n-1);
}

// console.log(factorial(4));

// --------------------------------------------

function bunnyEars(n) {
    // base case 
    if(n <= 0) 
        return 0
    return 2 + bunnyEars(n-1);     
}


// 4 --> 2 + b(3), 2+ b(2), 2 + b(1), b(0)

// console.log(bunnyEars(2));

// --------------------------------------------

function fib(n) {
    if(n <= 1) {
       return 1;
    }
    return fib(n-1) + fib(n-2);
}

// console.log(fib(5));

//         5
//     4          3
//  3     2     2   1       
// 2  1  1  0  1 0 


// 1 1 2 3 5
// 0 1 2 3 4

// --------------------------------------------

function bunnyEars2(n) {
    if(n === 0) {
        return 0;
    }
    if(n === 1) {
        return 2;
    }
    
    return n%2 === 0 ? 3 + bunnyEars2(n-1) : 2 + bunnyEars2(n-1);
}

// console.log(bunnyEars2(4));

// 1, 2, 3, 4, 5 
// 2  3  2  3  2

// 3 + b(1) --> 5
// 2 + b (2) --> 7
// b(3) 

// --------------------------------------------

function triangle(n) {
    if(n === 0) {
        return 0;
    }
    if(n === 1) {
        return 1;
    }
    return n + triangle(n-1);
}

// console.log(triangle(5))

// 1
//   2
//     3
//       4
//         5

// 2 + t(1) --> 3
// 3 + t(2) --> 6
// 4 + t(3) --> 10
// 5 + t(4) --> 15
// t(5)

// --------------------------------------------

// n % 10 returns right most digit
// n / 10 removes right most digit

function sumDigits(n) {
    if(n === 0)
        return 0;
    let sum = n%10;
    function rec_sum(n) {
        if(n === 0)
            return
        sum = sum + (n%10);
        rec_sum(parseInt(n/10));    
    }
    rec_sum(parseInt(n/10));
    return sum;
}

// console.log(sumDigits(142));

// 102  --> 3
// s(0);
// s(1);
// s(10);
// s(102);

// --------------------------------------------

function count7(n) {
    let count = 0;
    function rec_count(n) {
        if(n === 0) {
            return count;
        }
        n%10 === 7 ? count++ : count;
        return rec_count(parseInt(n/10));
    }
    return rec_count(n)

}


// rc(0) --> 2
// rc(7) --> 2
// rc(77) --> 2
// count7(77) --> 2

// console.log(count7(77))
