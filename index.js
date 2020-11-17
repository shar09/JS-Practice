// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// * PLURALSIGHT
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------

// * REST PARAMETERS

// function sendCars(day, ...carIds) {
//     console.log(day);
//     console.log(carIds);
//     carIds.forEach(id => {
//         console.log(id);
//     });
// }

// sendCars('Monday', 100, 200, 300);

// -------------------------------------------------------------
// * ARRAY AND OBJECT DESTRUCTURING

// let arr = [100, 200, 300, 'test'];
// let first, second, theRest;

// [first, second, ...theRest] = arr; 
// console.log(first, second, theRest);

// let obj = {car: 5000, style: 'convertible'};
// let car, style;

// ({car, style} = obj);
// console.log(obj.car, obj.style);
// console.log(car, style); 

// ---------------------------------------------------------------
// * SPREAD SYNTAX

// function spreadStr(letter1, letter2, ...theRest) {
//     console.log(letter1, letter2, ...theRest);
// }

// let str = 'hello';
// spreadStr(...str);

// function spreadArr(car1, car2, car3) {
//     console.log(car1, car2, car3);
// }

// let cars = [100, 200, 300];
// spreadArr(...cars);

// ---------------------------------------------------------------
// * TYPE CONVERSION

// var num = 10;
// console.log(typeof(num.toString()));

// console.log(Number.parseFloat('55.677as'));

// --------------------------------------------------------------- 
// * OPERATORS

// let test = true;
// console.log(+test);

// ---------------------------------------------------------------
// * IIFE (Immediately Invoked Function Expression)

// let app= (function() {
//     console.log("something");
// }) ();

// console.log(app);

// ---------------------------------------------------------------
// * CLOSURES

// let app = (function() {
//     let carId = 123;
//     let getId = function() {
//         return carId;
//     };
//     return {
//        getId: getId
//     }; 
// }) ();

// console.log(app.getId());

// ---------------------------------------------------------------
// * THIS 

// let o = {
//     carId: 123,
//     getId: function() {
//         console.log(this);
//         return this.carId;
//     }
// };

// console.log(o.getId());

// ---------------------------------------------------------------
// * CALL AND APPLY

// let o = {
//     carId: 123,
//     getId: function(prefix) {
//         return prefix+this.carId;
//     }
// };

// let newCar = {carId: 456};

// console.log(o.getId.apply(newCar, ['ID: ']));

// ---------------------------------------------------------------
// * BIND

// var pokemon = {
//     firstName: "Pika",
//     lastName: "chu",
//     getPokemon: function() {
//         return this.firstName + this.lastName;
//     }
// };

// let pokemonName = function(phrase, emoticon) {
//     console.log(this.getPokemon() + " I choose you");
//     console.log(this.getPokemon() + " says " +phrase+" "+emoticon);
// }

// pokemonName.call(pokemon, 'Pika Pika', ':P');
// pokemonName.apply(pokemon, ['Pika Piak',':P']);

// let newPokemon = pokemonName.bind(pokemon);

// newPokemon('Pika Pika',':P');
// ---------------------------------------------------------------
// * CONSTRUCTOR FUNCTION 
// function Car(id) {
//     console.log(this);
//     this.carId = id;
//     this.start = function() {
//         console.log('start: ' +this.carId);
//     }
// }

// let vehicle = new Car(123);
// vehicle.start();

// ---------------------------------------------------------------
// * PROTOTYPE


// ---------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// * ELOQUENT JAVASCRIPT
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
//var SCRIPTS = require("./scripts.js");


// *FizzBuzz

// let num = 1;
// while(num < 101) {
//     if(num % 3 == 0 && num % 5 == 0) 
//     console.log("FizzBuzz");
//     else if(num % 3 == 0) 
//         console.log("Fizz");
//     else if(num % 5 == 0) 
//         console.log("Buzz");
//     else
//         console.log(num);
//     num++;    
// }

// ---------------------------------------------------------------
// * Chess Board

// for(let i=1; i<9; i++) {
//     let output = ""; 
//     for(let j=1; j<9; j++) {        
//         if(i % 2 != 0) {
//             if(j % 2!=0)         
//                 output = "o";
//             else   
//                 output = "#";
//         }
//         else {
//             if(j%2 == 0)
//                 output = "o";
//             else
//                 output = "#";
//         }
//         console.log(output);
//     }
//     console.log('\n');
//}

// for(let i=1; i<8; i++) {
//     for(let j=1; j<=i; j++) {
//         console.log("#");
//     }
//     console.log('\n');
// }

// for(let i = "#"; i.length < 8; i += "#") {
//     console.log(i);
// }

// ---------------------------------------------------------------
// * Recursion

// function solution(target) {
//     function find(current, history) {
//         if (current == target) 
//            return history;   
//         else if (current > target) 
//            return null;
//         else {
//             return find(current + 5, `(${history} + 5)`) || 
//                    find(current * 3, `(${history} * 3)`); 
//         }                
//     }
//     return find(1, "1");  
// }

// console.log(solution(15));

// ---------------------------------------------------------------
// * String length

// function farmCount(cows, goats) {
//     let cowString = String(cows);
//     console.log(cowString.length);
//     while(cowString.length < 3) {
//         cowString = "0" + cowString;
//     }
//     //console.log(`${cowString} cows`);
    
//     let goatString = String(goats);
//     while(goatString.length < 3) {
//         goatString = "0" + goatString;
//     }
//     //console.log(`${goatString} goats`);
//     return `${cowString} cows ${goatString} goats`;
// }

// console.log(farmCount(7,11));
// //farmCount(7,11);

// ---------------------------------------------------------------
// * Min()

// function min(a, b) {
//     if(a>b)
//        return b;
//     else
//        return a;   
// }

// console.log(min(10,5));

// ---------------------------------------------------------------
// * Even

// function solution(target) {
//     function isEven(num) {
//         if(num==0) {
//             return true;
//         }
//         else if(num==1) {
//             return "odd";
//         }
//         else if(num<0) {
//             return isEven(-num);
//         }
//         else {
//             return isEven(num - 2);
//         }      
//     }
//     return isEven(target);
// }

// console.log(solution(24));
// console.log(solution(99));
// console.log(solution(-99));

// ---------------------------------------------------------------
// * Counting 

// function countBs(word) {
//     let count = 0;
//     for(i = 0; i<word.length; i++) {
//         if(word[i] === "B") {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countBs("BBBBB"));

// function charCount(word, letter) {
//     let count = 0;
//     for(var i=0; i<word.length; i++) {
//         if(word[i] == letter) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(charCount("Kalakand", 'k'));

// ---------------------------------------------------------------
// * Sum of a Range

// function range(start, end, step) {
//     let arr = [];
//     let steps = step || 1;
//     if(start < end) {
//         for(let i=start; i<=end; i+=steps) {
//             arr.push(i);
//         }
//     }
//     else {
//         for(let i=start; i>=end; i-=steps) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }

// console.log(range(15, 10, 2));

// function sum(range) {
//     let sum = 0;
//     for(let value of range) {
//         sum += value;
//     }
//     return sum;
// }

// console.log(sum(range(1,10)));

// ---------------------------------------------------------------
// * Reverese an array

// function reverse(array) {
//    let newArr = [];
//    for(let i=array.length-1; i>=0; i--) {
//       newArr.push(array[i]);
//    }
//    return newArr;
// }

// function reverseInPlace(array) {
//     for(let i=0;i<Math.floor(array.length/2);i++) {
//        let old = array[i];
//        array[i] = array[array.length - 1 - i];
//        array[array.length - 1 - i] = old;
//     }
//     return array;
// }

// let arr = [1,2,3,4];
// console.log(reverse(arr));
// console.log(reverseInPlace(arr));

// ---------------------------------------------------------------
// * Lists

//ArraytoList
//ListtoArray
//prepend(n, list)
//nth(list, n)

// function arrayToList(array) {
//    let list = null;
//     for(let i=array.length-1;i>=0;i--) {
//        list = {value: array[i], rest: list};
//     }
//     return list;
// }

// const array = [1, 2, 3, '4'];
// console.log(arrayToList(array));

// function listToArray(list) {
//     let array = [];
//     for(let node = list; node; node=node.rest) {
//         array.push(node.value);
//     }
//     return array;
// }

// console.log(listToArray(arrayToList(array)));

// function prepend(value, list) {
//     return {value, rest: list}
// }

// console.log(prepend(0, arrayToList(array)));

// function nth(list, n) {
//     while(n>=0) {
//         if(n===0) 
//             return list.value;
//         else
//             return nth(list.rest, n-1);
//     }
// }

// function nthTwo(list, n) {
//    for(let node = list;node;node = node.rest) {
//        if(n==0) {
//            return node.value;
//        }
//        else {
//            n = n-1;
//        }
//    }
// }

// console.log(nth(arrayToList(array), 3));
// console.log(nthTwo(arrayToList(array), 3));

// ---------------------------------------------------------------
// * Object Deep Comparision

// function deepEqual(obj1, obj2) {
// //    for(key in obj1) {
// //        //console.log(key, obj1[key]);
// //        if(!(key in obj2)) {
// //            return false;
// //        }
// //        if(obj1[key]!==obj2[key]) {
// //            return false;
// //        }
// //        return true;
// //     }
//    for(key in obj2) {
//        console.log(key, obj2[key]);
//    }
// }

// let obj1 = {here: {is: "an"}, object: 2}
// let obj2 = {value: 1, set: 2}
// console.log(typeof obj1[object]);

// console.log(deepEqual(obj1, {here: {is: "an"}, object: 2}));

// ---------------------------------------------------------------
// * Filter Function
// function filter(array, test) {
//     for(element of array) {
//         // if(element.living) {
//         //     console.log(element);
//         // }
//         if(test(element)) {
//             console.log(element);
//         }
//     }
// }
// filter(SCRIPTS, script => script.living);

// ---------------------------------------------------------------
// * Flattening array of arrays

// let array = [[1,2,3], [4,5], [6]];

// function flatten(array) {
//   array.map(([item]) => console.log(item));
//   let newArr = [];
//   //Using loop
//   for(let item of array) {
//     newArr = newArr.concat(item);
//     console.log(newArr);
//   }
//   //Using reduce
//   let reducedArr = array.reduce((flat, current) => flat.concat(current), []);
//   console.log(reducedArr);
// }

// flatten(array);

// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// * DATASTRUCTURES AND ALGORITHMS COURSE
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------

// * Anagram Challenge

// function anagram(string1, string2) {
//     if(string1.length !== string2.length) {
//         return false;
//     }
//         let obj1 = {};
//         let obj2 = {};    
//         for(let val of string1) {
//             obj1[val] = (obj1[val] || 0) + 1;   
//         }
//         for(let val of string2) {
//             obj2[val] = (obj2[val] || 0) + 1;
//         }
//         console.log(obj1);
//         console.log(obj2); 
//         for(key in obj1) {
//             if(!(key in obj2)) {
//                 return false;
//             }
//             if(obj1[key] !== obj2[key]) {
//                 return false;
//             }
//         }
//      return true;
// }

// console.log(anagram('sharr', 'dfhar'));

// ---------------------------------------------------------------
// * Multiple Pointers Pattern
// * First sum = 0 occurence

// console.log(sumZero([-3,-2,-1,0,1,2,3]));
// console.log(sumZero([-2,0,1,3]));
// console.log(sumZero([1,2,3]));

// function sumZero(array) {
//   for(let i=0; i<array.length; i++) {
//     for(j=i+1; j<array.length; j++) {
//       if(array[i]+array[j] === 0) 
//         return `[${array[i]} , ${array[j]}]`;      
//     }
//   }
// }

// function sumZero(array) {
//   left = 0;
//   right = array.length - 1;

//   while(left < right) {
//     if(array[left] + array[right] === 0) {
//       return [array[left], array[right]]
//     }
//     else if(array[left] + array[right] > 0) {
//       right--;
//     }
//     else {
//       left++;
//     }
//   }
// }

// ---------------------------------------------------------------
// * Counting Unique Values

// console.log(countUniqueValues([1,1,1,1,1,2]));
// console.log(countUniqueValues([1,2,3,4,4,5,5,5,6,7,8,10]));
// console.log(countUniqueValues([]));
// console.log(countUniqueValues([1]));
// console.log(countUniqueValues([-2,-1,-1,0,1]));

// Naive solution

// function countUniqueValues(array) {
//   let count = 0;
//   for(let i=0; i<array.length; i++) {
//     let check = array[i] === array[i+1];
//       if(check) {
//         console.log(array[i], array[i+1], check);
//         continue;
//       }
//       else {
//         console.log(array[i], array[i+1], check);
//         count++;
//       }
//   }
//   return count;
// }

// Using Multiple Pointers

// function countUniqueValues(array) {
//   let i=0;
//   if(array.length == 0) {
//     return `Unique values are 0`
//   }
//   for(let j=1; j<array.length; j++) {
//     if(array[i] === array[j]) {
//       continue;
//     }
//     else {
//       let old = array[i+1];
//       array[i+1] = array[j];
//       array[j] = old;
//       i++;
//     }
//   }
//   return `Unique values are ${i+1}`;
// }

// ---------------------------------------------------------------
// * Max Sub-Array Sum

// console.log(maxSubArraySum([1,2,5,2,8,1,5], 2));
// console.log(maxSubArraySum([1,2,5,2,8,1,5], 4));
// console.log(maxSubArraySum([4,2,1,6], 1));
// console.log(maxSubArraySum([4,2,1,6,2], 4))
// console.log(maxSubArraySum([], 2));

// Naive solution

// function maxSubArraySum(array, n) {
//   let max = -Infinity;
//   for(let i=0; i<=array.length-n; i++) {
//     let sum = 0;
//     for(let j=i;j<n+i; j++) {
//       sum = sum + array[j];
//     }
//     if(sum > max) {
//       max = sum;
//     }
//   } 
//   return max;
// }

// Sliding Window Pattern

// function maxSubArraySum(array, n) {
//   let sum = 0;
//   let max = -Infinity;
//   if(array.length == 0) return 0;
//   for(let i=0; i<n; i++) {
//     sum = sum + array[i];
//     max = sum;
//   }
//   for(i = n; i<array.length; i++) {
//     sum = sum - array[i - n] + array[i];
//     max = Math.max(max, sum);
//   }
//   return max;
// }

// ---------------------------------------------------------------
// * Frequency counter

// function sameFrequency(num1, num2) {
//   let obj1 = {}, obj2 = {};
//   let nOne = num1.toString();
//   let nTwo = num2.toString();
//   if(nOne.length !== nTwo.length) {
//     return false;
//   }
//   for(let value of nOne) {
//     obj1[value] = (obj1[value] || 0) + 1;
//   }
//   for(let value of nTwo) {
//     obj2[value] = (obj2[value] || 0) + 1;
//   }
//   for(let key in obj1) {
//     if(!(key in obj2)) {
//       return false;
//     }
//     if(obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(sameFrequency(192, 291));
// console.log(sameFrequency(193, 241));
// console.log(sameFrequency(192456, 291654));

// ---------------------------------------------------------------
// * Check for duplicates

// Freuqency Counter Pattern
// function checkForDuplicates(...params) {
//   console.log(params);
//   let obj = {};
//   for(let item of params) {
//     obj[item] = (obj[item] || 0) + 1;
//   }
//   console.log(obj);
//   for(let key in obj) {
//     if(obj[key] > 1) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(checkForDuplicates(1, 2, 3));
// console.log(checkForDuplicates(1, 1, 2));
// console.log(checkForDuplicates('a', 'b', 'd', 'a'));
// console.log(checkForDuplicates(1, 2, 2, 'a'));

// ---------------------------------------------------------------
// * Average Pair

// function averagePair(array, target) {
//   let i=0;
//   let j=array.length-1;
//   while(j>i) {
//     if((array[i] + array[j])/2 === target) 
//       return true;
//     else if((array[i] + array[j])/2 > target) 
//       j--;
//     else 
//       i++;  
//   }
//   return false;
// }

// console.log(averagePair([2,3,5,7,8,14,17,21],10))
// console.log(averagePair([2,3,4], 20));
// console.log(averagePair([], 1));
// console.log(averagePair([2,3,4], 0));
// console.log(averagePair([1,2,3,], 2.5));

// ---------------------------------------------------------------
// * Sub Sequence

// function isSubSequence(strOne, strTwo) {
//   let i=0;
//   let count = 0;
//   for(let j=0; j<strTwo.length; j++) {
//       if(strTwo[j]===strOne[i]) {
//         i++;
//         count++;
//       }
//       else
//        continue; 
//   }
//   if(strOne.length === count) {
//     return true;
//   }
//   return false;
// }

// console.log(isSubSequence('hello', 'hello world'));
// console.log(isSubSequence('sing', 'sting'));
// console.log(isSubSequence('abc', 'abracadabra'));
// console.log(isSubSequence('abc','bca'));

// ---------------------------------------------------------------
// * Collecting Odd Values form Array

// Naive approach

// function collectOddValues(array) {
//   let newArr = [];
//   for(let i=0; i<array.length; i++) {
//     if(array[i] % 2 !== 0) 
//         newArr.push(array[i]);
//   }
//   return newArr;
// }


// -----------------
//Recursion using helper method

// function collectOddValues(array) {
//   let newArr = [];
//   function helper(array) {
//     if(array.length === 0) {
//       return newArr;
//     }
//     if(array[0]%2 !== 0) {
//       newArr.push(array[0]);
//     }
//     return helper(array.slice(1));
//   }
//   helper(array);
//   return newArr;
// }

// -----------------
//Recursion

// function collectOddValues(array) {
//   let newArr = [];
//   if(array.length === 0) {
//     return newArr;  
//   }
//   if(array[0]%2 !== 0 ) {
//     newArr.push(array[0]);
//   }
//   return newArr.concat(collectOddValues(array.slice(1)));
// }


// console.log(collectOddValues([1,2,3,4,5]));

// ---------------------------------------------------------------
// * Recursion Problem set 1

// -----------------
//Power

// function power(base = 2, exponent = 3) {
//   if(exponent === 0) {
//     return 1;
//   }
//   return base * power(base, exponent-1);
// }

// console.log(power(2,3));

// -----------------
//Factorial

// function factorial(num) {
//   if(num === 0) {
//     return 1;
//   }
//   if(num === 1) {
//     return 1;
//   }
//   return num * factorial(num-1);
// }

// console.log(factorial(1));

// -----------------
//Product of Array

// function productOfArray(array) {
//   if(array.length === 0) {
//     return 1;
//   }
//   return array[0] * productOfArray(array.slice(1));

// }

// console.log(productOfArray([1,2,3,4,5]));

// -----------------
//Recursive Range

// function recursiveRange(range) {
//   if(range === 1) {
//     return 1;
//   }
//   return range + recursiveRange(range-1);
// }

// console.log(recursiveRange(6));

// -----------------
//Fibonacci

// function fib(num) {
//   let num1=0, num2=1;
//   for(let i=0;i<num;i++) {
//     sum=num1+num2;
//     num1=num2;
//     num2=sum;
//   }
//   return num1;
// }

// console.log(fib(10));

// function fib(num) {
//   if(num<=2) {
//     return 1;
//   }
//   return fib(10);
// }

// ---------------------------------------------------------------
// * String Sequence

// function stringSearch(str, subStr) {
//   let count=0, i=0;
//   while(i<str.length) {
//     console.log("-------", i);
//     let match = 0;
//     for(let j=0;j<subStr.length;j++) {
//       if(str[i+j]===subStr[j]) {
//         match++;
//         console.log("match: "+match);
//       }
//       else
//         break;
//     }
//     if(match === subStr.length) {
//       count++;
//     }
//     i++;
//   }
//   return count;
// }

// console.log("count: ", stringSearch('omgxcsvgghdomg', 'omg'));

// ---------------------------------------------------------------
// * Check subString in String
// function isSubSequence(strOne, strTwo) {
//     let i = 0;
//     let j = 0;
//     let count = 0;
//     while(j < strTwo.length) {
//         if(strTwo[j] === strOne[i]) {
//             count++;
//             i++;
//             j++;
//         }
//         else {
//             j++;
//         }
//     }
//     if(count === strOne.length) {
//         return true;
//     }
//     return false;
// }

// console.log(isSubSequence('hello', 'hello world'));
// console.log(isSubSequence('sing', 'sting'));
// console.log(isSubSequence('abc', 'cabc'));
// console.log(isSubSequence('abc', 'abracadabra'));

// ---------------------------------------------------------------
// * String Reverse (Recursive)

// function stringReverse(string) {
//     let reverse = "";
//     function helper(string) {
//         if(string.length === 0) {
//             return;
//         }
//         reverse = reverse.concat(string[string.length - 1]);
//         helper(string.slice(0, string.length - 1));
//     }

//     helper(string);
//     return reverse;

// }

// console.log(stringReverse('abcde')); 

// ---------------------------------------------------------------
// * Array flatten

// function arrayFlatten(array) {
//   let flatArray = [];
//   for(let i=0; i<array.length; i++) {
//     if(Array.isArray(array[i])) {
//         console.log(i, array[i], flatArray);
//         flatArray = flatArray.concat(arrayFlatten(array[i]));
//     }  
//     else {
//         flatArray.push(array[i]);
//     }
//   }
//   return flatArray;
// }

// console.log(arrayFlatten([[[1,2,3]],[],[[4]]])); 

// ---------------------------------------------------------------
// * Capitalize all words in an array

// function capatilizeWords(array) {
//   let capArray = [];
//   let capString = "";
//   for(let word of array) {
//     capString = word.toUpperCase();
//     capArray.push(capString);
//   }
//   return capArray;
// }

// console.log(capatilizeWords(['shar', 'bhar', 'fhar']));

// ---------------------------------------------------------------
// * Capitalize First letter

// function capitalizeFirst (array) {
//     // add whatever parameters you deem necessary - good luck!
//     let newArr = [];
//      for(let i=0; i<array.length; i++) {
//              let word = array[i]
//              let letter = array[i].charCodeAt(0) - 32;
//              let capital = String.fromCharCode(letter)
//           //   console.log(word, letter, capital);
//           //   console.log(capital.concat(word.slice(1)));
//              newArr.push(capital.concat(word.slice(1)))
//      }
//      return newArr;
//   }


// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// * MISC
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------
// *Object test

// var obj = {
//     test: "test",
//     hey: "namaste",
//     ['zapak'] : 2,
//     num: 0
// };

// obj['hello'] = 1;
// console.log(Object.keys(obj));
// console.log(obj['hey']);
// console.log(typeof(obj['num']));

// console.log(obj);
// console.log("test" +obj);
// console.log("test", obj);

// let {name, age} = {name: 'shar', age: 18};
// console.log(name, age);
// let string = JSON.stringify(obj);
// console.log(string["test"]);

// ---------------------------------------------------------------

// function Test(test) {
//     console.log(test);
//     console.log(this);
//     console.log(this.test);
// }

// const t = new Test("hello");
// console.log(t.test);

// ---------------------------------------------------------------
// * Stopwatch
// class Stopwatch {    
//     constructor() {
//     this.flag = true;
//     this.startTime = 0;
//     this.stopTime = 0;
//     this.timeElapsed = 0;
//     console.log(this.time);
//     }
    
//     reset() {
//         this.startTime = 0;
//         this.stopTime = 0;
//         this.timeElapsed = 0;
//         return `${this.startTime} ${this.stopTime} ${this.timeElapsed}`;
//     }

//     start() {
//         if(this.flag) {
//         this.startTime = (new Date().getTime())/1000;
//         this.flag = false;
//         }
//         else {
//             throw new Error("Start cannot be called");
//         }
//         return this.startTime;
//     }
    
//     stop() {
//         if(!this.flag) {
//         this.stopTime = (new Date().getTime())/1000;
//         this.flag = true;
//         }
//         else {
//             throw new Error("Stop cannot be called");
//         }
//         return this.stopTime;
//     }

//     duration() {
//         this.timeElapsed = this.timeElapsed + (this.stopTime - this.startTime);
//         return this.timeElapsed;
//     }
// }

// const sw = new Stopwatch();

// ---------------------------------------------------------------
// * Nested functions test

// class App {
//     constructor() {
//         this.greet = "hello";     
//     }

//     test() {
//         let nested = function() {
//             console.log("hello");
//         }
//         nested();
//     }
// }

// function multi(factor) {
//    function test(base) {
//        return factor * base;
//    }
//    return test;
// }

// const show = multi(5);
// console.log(show(2));

// ---------------------------------------------------------------

// function repeat(n, action) {
//     for(let i=1; i<=n; i++) {
//         action(i);
//     }
// }

// let labels = [];
// repeat(5, i => labels.push(i));
// console.log(labels);

// function add(i) {
//     labels.push(i);
// }

// // repeat(5, add);
// // console.log(labels);

// function unless(check, then) {
//     if(!check) then();
// }

// function even(n) {
//     if(n%2 == 0) {
//         return true
//     }
//     else
//         return false
// }

// repeat(5, n => { 
//     if(even(n)) 
//     console.log(n+ " is even")
//     // unless(n%2==0, () => console.log(n+ " is even"));
// });

// function countBy(items, groupName) {
//     let counts = [];
//     for(let item of items) {
//         let name = groupName(item);
//         let known = counts.findIndex(c => c.name == name);
//         console.log(known);
//         if(known == -1) {
//             counts.push({name, count: 1});
//         } else {
//             counts[known].count++;
//         }
//     }
//     return counts;
// }

// console.log(countBy([1, 2, 3, 4, 5], n => n > 2));

//-------------------------------------------------------
//// Takes code and returns script
// function characterScript(code) {
//     for (let script of SCRIPTS) {
//       if (script.ranges.some(([from, to]) => {
//         return code >= from && code < to;
//       })) {
//         return script;
//       }
//     }
//     return null;
//   }

// // Takes input(array/string) and rerurns an array of {script: name, count: n}  
//   function countBy(items, groupName) {
//     let counts = [];
//     for (let item of items) {
//       let name = groupName(item);
//       let known = counts.findIndex(c => c.name == name);
//       if (known == -1) {
//         counts.push({name, count: 1});
//       } else {
//         counts[known].count++;
//       }
//     }
//     return counts;
//   }

// // takes text, stores script name    
//   function textScripts(text) {
//     let scripts = countBy(text, char => {
//       let script = characterScript(char.codePointAt(0));
//       script? console.log(script.name) : console.log("none");
//       return script ? script.name : "none";
//     })
//     .filter(({name}) => name != "none");
//     console.log(scripts);
  
//     let total = scripts.reduce((n, {count}) => n + count, 0);
//     if (total == 0) return "No scripts found";
  
//     return scripts.map(({name, count}) => {
//       return `${Math.round(count * 100 / total)}% ${name}`;
//     }).join(", ");
//   }


//   console.log(textScripts("h '象' 😃"));


// function deepEqual(a, b) {
//     if (a === b) return true;
    
//     if (a == null || typeof a != "object" ||
//         b == null || typeof b != "object") return false;
  
//     let keysA = Object.keys(a), keysB = Object.keys(b);
  
//     if (keysA.length != keysB.length) return false;
  
//     for (let key of keysA) {
//       if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
//     }
  
//     return true;
//   }

//   console.log(deepEqual(5, 5));

// const array = [[1], [2], [3], [4]];

// const newArr = array.map((s) => s);

// console.log(newArr);

// for(let [element] of array) {
//     console.log(element);
// }

// function normalize() {
//   console.log(this.coords.map(n => n/this.length));
// }

//-------------------------------------------------------
//* The secret life of Objects!

// let newObj = {};
// newObj.speak = function(line) {
//   console.log(`The rabbit says ${line}` );
// }

// newObj.speak("hello");

// function speak(line) {
//   console.log(`The ${this.type} rabbit says ${line}`);
// }

// let whiteRabbit = {type: 'white', speak};
// whiteRabbit.speak("carrot is good");
// let blackRabbit = {type: 'black', speak};
// speak.call(blackRabbit, "I'm hungry");

// function arrow() {
//   console.log(this.arr.map(n => n/this.length));
// }

// arrow.call({arr: [10, 20, 30], length: 3});

// console.log(Object.getPrototypeOf(whiteRabbit));
// console.log(Object.prototype);
// let arrObj = { arr: [1,2,3] }
// console.log(Object.getPrototypeOf(arrObj.arr));
// console.log(Array.prototype);
// console.log(Object.getPrototypeOf(speak));

// let methodObj = {
//   speak(line) {
//     console.log(`The ${this.type} rabbit says ${line}`);
//   }
// }

// let pinkRabbit = Object.create(methodObj);
// pinkRabbit.type = 'pink';
// pinkRabbit.speak("I love this method");
// console.log(Object.getPrototypeOf(pinkRabbit));

// function Rabbit(type) {
//   this.type = type;
// }

// Rabbit.prototype.speak  = function(line) {
//   console.log(`The ${this.type} rabbit says ${line}`);
// }

// let brownRabbit = new Rabbit('brown');
// brownRabbit.speak("constructor?");

// console.log(Object.getPrototypeOf(brownRabbit));

// Rabbit.prototype.variable = 10;
// console.log(brownRabbit.variable);

// class Car {
//   constructor(type) {
//     this.type = type;
//   } 
//   accelerate(speed) {
//     console.log(`${this.type} clocking ${speed} mph`)
//   }
// }

// let favCar = new Car('sedan');
// favCar.accelerate(120);
// favCar.test = function() {
//   console.log(`${this.type} used in child class`);
// }
// favCar.test();

// Car.prototype.brake = function(speed) {
//   console.log(`${this.type} slowed down to ${speed} mph`)
// }

// favCar.accelerate = function(speed) {
//   console.log(`${this.type} clocking ${speed} mph`)
// }

// Car.prototype.accelerate = function(speed) {
//   console.log(`overriding? ${speed} mph`);
// }

// Car.prototype.variable = 0;
// console.log(favCar.variable);
// favCar.brake(60);
// favCar.accelerate(80);


// let expressionTest = new class { speak() { console.log("hello")}};
// expressionTest.speak();


// let BLUE = 'blue';
// let cat = 'blue';

// function getThreatLevel(color) {
//   switch(color) {
//     case BLUE: return "low";
//     default: return "I do not know that color";
//   }
// }

// console.log(getThreatLevel(cat));

// let array = [[1,2],[2,4],[]]
// console.log([].concat(...array));

// const obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }

// function collectStrings(obj) {
//     let collectionOfStrings = [];
//     function helper(obj) {
//         for(let key in obj) {
//             if(typeof obj[key] === 'object') {
//                 helper(obj[key]);
//             }
//             else if(typeof obj[key] === 'string') {
//                 collectionOfStrings.push(obj[key]);
//             }
//         }
//         return;
//     }
//     helper(obj);
//     return collectionOfStrings;
// }

// console.log(collectStrings(obj));
var moarKittyData = [
    { name: 'LilBulb', age: 7 },
    { name: 'Garfield', age: 40 }, 
    { name: 'Heathcliff', age: 45 },
    { name: 'Blue', age: 1 }, 
    { name: 'Grumpy', age: 6 }
]


function comp(a, b) {
    if(a < b) return -1;
    else if(a > b) return 1;
    return 0;
}

function oldestToYoungest(a, b) {
    return b.age - a.age;
}

// console.log(mergeSort( ['LilBulb', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'], comp));

// console.log(mergeSort( moarKittyData, oldestToYoungest));




// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor() {
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }
//     enqueue(data) {
//         var node = new Node(data);

//         if (!this.first) {
//             this.first = node;
//             this.last = node;
//         } else {
//             this.last.next = node;
//             this.last = node;
//         }

//         return ++this.size;
//     }

//     dequeue() {
//         if (!this.first) return null;

//         var temp = this.first;
//         if (this.first == this.last) {
//             this.last = null;
//         }
//         this.first = this.first.next;
//         this.size--;
//         return temp;
//     }
// }

// class Stack {
//     constructor() {
//         this.primaryQueue = new Queue();
//         this.secondaryQueue = new Queue();
//     }
//     push(val) {
//         this.primaryQueue.enqueue(val);
//         return this;
//     }
//     pop() {
//         let temp;
//         if(this.primaryQueue.size === 0) {
//             return null;
//         }

//         while(this.primaryQueue.first.next) {
//             temp = this.primaryQueue.dequeue();
//             this.secondaryQueue.enqueue(temp.value);
//         }
//         let popped = this.primaryQueue.dequeue();
//         while(this.secondaryQueue.first) {
//             temp = this.secondaryQueue.dequeue();
//             this.primaryQueue.enqueue(temp.value);
//         }
//         return popped.value;
//     }
// }

// let s = new Stack();
// s.push(10).push(20).push(30);
// console.log(s.pop());
// console.log(s.pop());
// console.log(s.pop());
// console.log(s.pop());
// s.push(30).push(40).push(50);
// console.log(s.pop());
// console.log(s.push(60));
// console.log(s.pop());

// function coinChange(coins, amount) {
//     // add whatever parameters you deem necessary - good luck!
//     let rows = coins.length+1;
//     let columns = amount + 1;
//     let a = [];
//     for(let m=0; m<rows; m++) {
//         a[m] = [];
//         for(let n=0; n<columns; n++) {
//             if(m === 0 && n!== 0) {
//                 a[m][n] = 0;
//             }
//             else if(n === 0 ) {
//                a[m][n] = 1;
//             }
//             else {
//                 a[m][n] = null;
//             }
//         }
//     }
//     for(let i=1; i<rows; i++) {
//         for(let j=1; j<columns; j++) {
//            a[i][j] = a[i-1][j] + ( a[i][j-coins[i-1]] || 0 );
//         }
//     }
//     //console.log(a);
//     return a[a.length-1][amount];
// }

// const denoms = [1,2,5];
// console.log(coinChange(denoms, 5));



// 2sum
// brute force
// 2 pointers
// binary search

// function twoSum(array, target) {
//     for(let i=0; i<array.length-1; i++) {
//         for(j=i+1; j<array.length; j++) {
//             if(array[i] + array[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     return [-1, -1];
// }

// function twoSum(array, target) {
//     let i=0;
//     let j=array.length-1;
//     while(i < j) {
//         if(array[i] + array[j] === target) {
//             return [i, j];
//         }
//         if(array[i] + array[j] > target) {
//             j--;
//         }
//         else {
//             i++;
//         }
//     }
//     return [-1, -1];
// }


// console.log(twoSum([2,3,4,5,5,6,7,8,8,9], 15));
// console.log(twoSum([1,2], 9));

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) { 
        let node  = new Node(value);
        if(!this.root) {
            this.root = node;
            return;
        }
        let queue = [];
        queue.push(this.root);
        let current;
        while(queue.length > 0) {
            current = queue.shift();
            if(!current.left) {
               current.left = node;
            }
            else if(!current.right) {
                current.right = node;
            }
            else {
                queue.push(current.left);
                queue.push(current.right);
            }
        }
    }
}

let bst = new BinarySearchTree();
bst.insert(1);
bst.insert(1);
bst.insert(1);
// console.log(bst);


function solution(root) {
    //write your solution here
    let singleNodes = 0;
    let left, right;
    function dfs(root) {
        let current = root;
        if(current.left) {
            left = dfs(current.left);
            console.log("l: " +left);
        }
        else {
            console.log("no left");
            left = null;
        }
        if(current.right) {
            right = dfs(current.right);
            console.log("r: "+ right);
        }
        else {
            console.log("no right");
            right = null;
        }
        console.log(left, right);
        if(!((left && right) || (!left && !right))) {
            singleNodes++;
        }
        console.log("S:" +singleNodes);
        return 1;
    }
    dfs(root); 
    return singleNodes;  
}

// console.log(solution(bst.root));


// function SnapshotArray(length){
//     this.array = new Array(length).fill(0);
//     this.snapHistory = []; 
// }

// SnapshotArray.prototype.set = function(index, val) {
//     if(index < this.array.length) {
//         this.array[index] = val;
//         return true;
//     }
//     return false; 
// }

// SnapshotArray.prototype.snap = function() {
//     this.snapHistory.push(this.array);
//     return this.snapHistory.length - 1;
// }

// SnapshotArray.prototype.get = function(index, snap_id) {
//     return this.snapHistory[snap_id][index];
// } 
 
// let snapshot = new SnapshotArray(10);
// snapshot.set(0,1);
// snapshot.set(1,2);
// snapshot.set(2,3);
// snapshot.set(3,4);
// snapshot.set(4,5);
// snapshot.set(5,6);
// console.log(snapshot);
// console.log(snapshot.snap());
// console.log(snapshot.get(0,0));
// snapshot.set(10,6);
// snapshot.set(9,10);
// snapshot.set(4,6);
// console.log(snapshot.snap());
// console.log(snapshot.get(10,0));
// console.log(snapshot.get(9,1));
// console.log(snapshot.get(4,1));

// function searchRange(nums, target) {
//     // Write your code here
//     let range = [];
//     let left = 0, right = nums.length-1;
//     let mid;
//     while(left+1 < right) {
//         mid = Math.floor((left+right)/2);
//         if(target <= nums[mid]) 
//             right = mid
//         else 
//             left = mid    
//     } 
//     // Post processing
//     if(nums[left] === target) 
//         range.push(left);
//     else if(nums[right] === target) 
//         range.push(right);
//     else 
//         range.push(-1);
    
    
//     left = 0, right = nums.length-1;    
//     while(left+1 < right) {
//         mid = Math.floor((left+right)/2);
//         if(target < nums[mid]) 
//             right = mid
//         else 
//             left = mid    
//     }
//     // Post processing
//         if(nums[right] === target) 
//             range.push(right);
//         else if(nums[left] === target) 
//             range.push(left);
//         else 
//             range.push(-1);
//         return range;
// }

// console.log(searchRange([5,7,7,8,8,10], 8));

function fixedPoint(arr) {
    let left = 0, right = arr.length-1;
    let mid;
    while(left + 1 < right) {
        mid = Math.floor((left+right)/2);
        if(arr[mid] === mid) 
            return mid;
        else if(arr[mid] > mid)  {
            right = mid;
        }
        else
            left = mid;        
    }
    
    console.log("left", left, "right", right)
    // Post Processing
        if(arr[left] === left)
            return left;
        if(arr[right] === right)
            return right;
        return -1;
}

// console.log(fixedPoint([0,2,5,8,17]));


// function solution(root) {
//     //write your solution here
//     // var minLeafDepth = Infinity;
//     // function maxDepth(root) {
//         if(root === null)
//             return 0;
//         let left = solution(root.left);
//         let right = solution(root.right);
//         // console.log(left);
//         // console.log(Math.max(left, right) + 1);
//         // minLeafDepth = Math.min(minLeafDepth, Math.max(left, right) + 1);
//         // console.log(minLeafDepth)
//         return Math.max(left, right) + 1;
//     //}
//     // maxDepth(root);
//     // return minLeafDepth;   
// }

























