import '../styles/index.scss';

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


