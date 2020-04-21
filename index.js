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

function deepEqual(obj1, obj2) {
//    for(key in obj1) {
//        //console.log(key, obj1[key]);
//        if(!(key in obj2)) {
//            return false;
//        }
//        if(obj1[key]!==obj2[key]) {
//            return false;
//        }
//        return true;
//     }
   for(key in obj2) {
       console.log(key, obj2[key]);
   }
}

let obj1 = {here: {is: "an"}, object: 2}
let obj2 = {value: 1, set: 2}
console.log(typeof obj1[object]);

console.log(deepEqual(obj1, {here: {is: "an"}, object: 2}));

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




     