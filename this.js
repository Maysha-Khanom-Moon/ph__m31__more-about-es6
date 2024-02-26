// this keyword --> just mean the current object's properties

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sleep() {
        console.log(`sleeping now ${this.name}`);
    }
}

const kodom = new Person('kodom', 21);
kodom.sleep();


/**
 * --------- object property -----------
 * 1. dot notation: used with property
 * 2. [] notation: used with property name or variable
 */

const currency = {
    name: 'tk',
    country: 'bd'
}

const nam = 'name';

// dot notation
console.log(currency.name);

// [] notation
console.log(currency[nam]);
console.log(currency['name']);