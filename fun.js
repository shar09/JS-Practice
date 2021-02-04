// console.log(this);

let a = 10;


// (function() {
//     console.log(this);
// })();

function test() {
    console.log(this);
}
// test();
// console.log(module);
// console.log(module.exports === this);


let obj = {
    a: 10,
    func1: function() {
        return this.func2();
    },
    func2: () => {
        console.log(this);
        return a;
    }
}


// console.log(obj.func1());

// let arr = () => {
//     console.log(this);
// }

// arr();

// function reg() {
//     let regar = () => {
//         console.log(this);
//     }
//     regar();
// }

// reg();

// module.exports.a = a;
// exports['test'] = test;
// console.log(this.test());



let cbj = {
    a: 10,
    whatisthis: function() {
        console.log("parent ", this);
        (function() {
            console.log("nested " ,this);
        })();
    },
    whatisarrow: () => {
        console.log(this);
    }
}

cbj.whatisthis();
cbj.whatisarrow();

function wtf() {
    console.log(this);
}

window.wtf();

let parentobj = {
    childobj: {
        whattheheck: function() {
            console.log(this)
        },

        heck: () => {
            console.log(this);
        }
    }
}
console.log(parentobj.childobj);
parentobj.childobj.whattheheck();
parentobj.childobj.heck();


function BigComputer(answer) {
    this.the_answer = answer;
    this.the_question = 8;
    this.the_sol = this.the_answer + this.the_question;
    this.ask_question = function () {
        return this.the_answer;
    }
}
var deep_thought = new BigComputer(42);

console.log(deep_thought);

let bigC = {
    answer: "hello",
    question: "sir",
    check: this.answer + this.question,
    ask_question: function() {
        return this.answer
    },
    ask_answer: function() {
        return this.answer +  this.question
    }
}

function PrototypicalGreeting(greeting = "Hello", name = "World") {
    this.greeting = greeting
    this.name = name

    this.free = () => {

    }
}

PrototypicalGreeting.sweet = function() {
    console.log("call");
}
  
PrototypicalGreeting.prototype.greet = function() {
    return `${this.greeting}, ${this.name}!`
}
  
const greetProto = new PrototypicalGreeting("Hey", "folks")
//   console.log(greetProto.greet())

class ClassicalGreeting {
    constructor(greeting = "Hello", name = "World") {
      this.greeting = greeting
      this.name = name
    }
    
    sweet = () => {
        console.log("call");
    }

    greet() {
      return `${this.greeting}, ${this.name}!`
    }
}
  
const classyGreeting = new ClassicalGreeting("Hey", "folks")
  
//   console.log(classyGreeting.greet())

ExampleClass = function(){};
ExampleClass.method = function(customString){
             console.log((customString !== undefined)? 
                          customString : 
                          "called from func def.");}
ExampleClass.method();


function Person(name, age) {
    this.firstname = name;
    this.age = age;
}

Person.prototype.lastname = "smith";

Person.prototype.printname = function() {
    return this.firstname + this.lastname;
}

let john = new Person("John", 18);






