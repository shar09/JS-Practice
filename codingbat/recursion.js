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

// --------------------------------------------

function count8(n, prev=0, count=0) {
    function helper(n) {
        if(n===0)
            return 0;    
        if (n%10 === 8) {
            if(prev > 0) {
                count = count * 2;
                prev++;
            }
            else {
                count++;
                prev++;
            }
        }
        else {
            prev = 0;
        }
        helper( (parseInt(n/10)), prev);
    }
    helper(n)
    return count;
}

// console.log(count8( 8818 ));
// console.log(count8( 1 ));
// console.log(count8( 8 ));
// console.log(count8( 8088888 ));

// --------------------------------------------

function powerN(base, n) {
    if(n === 1) {
        return base;
    }
    return base * powerN(base, n-1);

}

 
// 2 * powerN(2,1) --> 2 * 2 = 4
// 2  * powerN(2,2) --> 8
// powerN(2, 3) --> 8

// console.log(powerN(2,3));

// --------------------------------------------

function countX(word, i=word.length-1) {
    let count = 0;
    function helper(word, i) {
        if(i<0) 
            return;
        if(word[i] === 'x') {
            count++; 
        }
        return helper(word.substring(0, i), i-1);
    }
    helper(word, i);
    return count;
}

// console.log(countX("xxhixx"));
// console.log(countX("xhixhix"));
// console.log(countX("hi"));

// --------------------------------------------

function countHi(word, i=0) {
    let count = 0;
    function helper(word, i) {

        if(i > word.length-2)
            return;
        if(word.substring(i, i+2) === "hi") {
            count++;
        }
        return helper(word, i+1);
    }
    helper(word, i);
    return count;
}
                   
// console.log(countHi("xxhixx"));
// console.log(countHi("xhixhix"));
// console.log(countHi("hi"));
// console.log(countHi(""));


            

// helper(5) --> return
// helper(4) --> return
// helper(3) .
// helper(2) .
// helper(1) .
// helper(0) .          
// countHi(0) -> return count    

// --------------------------------------------

function changeXY(word, i=0) {
    if(i === word.length) 
        return word;
    if(word[i] === 'x') {    
        word = word.substring(0,i) + "y" + word.substring(i+1);
    }
    return changeXY(word, i+1);
}

// console.log(changeXY("xxhixx"));
// console.log(changeXY("codex"));
// console.log(changeXY("hello"));
                    //   012345  

// --------------------------------------------

function changePi(word, i=0, pi=false) {
    if(i > word.length-2) 
        return word;
    if(word.substring(i, i+2) === 'pi') {
        pi = true;
        word = word.substring(0,i) + "3.14" + word.substring(i+2);
    }    
    return pi ? changePi(word, i+4) : changePi(word, i+1);
}

console.log(changePi("pip"));
console.log(changePi("xpix"));
console.log(changePi("pipi"));

// pi

// 2 --> 4
//  01       2
//  pi       p
//  3.14    
//  0123     4






















