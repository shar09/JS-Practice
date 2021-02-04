// Constructor

function Developer(name) {
    this.name = name;
    this.type = "Developer";
}

function Tester(name) {
    this.name = name;
    this.type = "Tester";
}

function Employee() {
    this.create = (name, type) => {
        switch(type) {
            case 1: 
                return new Developer(name);
            case 2:
                return new Tester(name);
        }
    }
}

const employee = new Employee();

const employeesC = [];

employeesC.push(employee.create("Sharath", 1));
employeesC.push(employee.create("Telu", 2));

console.log(employeesC);

// Factory
function developer(name) {
    let newDev = { }

    newDev.name = name;
    newDev.type = "Developer";

    return newDev;
}

function tester(name) {
    let newTester = { }

    newTester.name = name;
    newTester.type = "Tester";

    return newTester;
}

function employee() {
    const create = (name, type) => {
        switch(type) {
            case 1: 
                return developer(name);
            case 2:
                return tester(name);
        }
    }

    const say = (obj) => {
        console.log(" Hi I am " +obj.name+ "and I am " +obj.type);
    }
    return {
        create, say
    };
}

const emp = employee();
const employees = [];

employees.push(emp.create("Patrick", 1));
employees.push(emp.create("John", 2));

employees.forEach( (obj) => {
    emp.say(obj)
});















