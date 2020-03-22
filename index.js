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
// *Object test

// var obj = {
//     "test": "test",
//     hey: "namaste",
// };

// console.log(obj.test);
// console.log(obj.hey);
// console.log(Object.keys(obj));

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
class Stopwatch {    
    constructor() {
    this.flag = true;
    this.startTime = 0;
    this.stopTime = 0;
    this.timeElapsed = 0;
    console.log(this.time);
    }
    
    reset() {
        this.startTime = 0;
        this.stopTime = 0;
        this.timeElapsed = 0;
        return `${this.startTime} ${this.stopTime} ${this.timeElapsed}`;
    }

    start() {
        if(this.flag) {
        this.startTime = (new Date().getTime())/1000;
        this.flag = false;
        }
        else {
            throw new Error("Start cannot be called");
        }
        return this.startTime;
    }
    
    stop() {
        if(!this.flag) {
        this.stopTime = (new Date().getTime())/1000;
        this.flag = true;
        }
        else {
            throw new Error("Stop cannot be called");
        }
        return this.stopTime;
    }

    duration() {
        this.timeElapsed = this.timeElapsed + (this.stopTime - this.startTime);
        return this.timeElapsed;
    }
}

const sw = new Stopwatch();






     