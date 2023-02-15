const { capitalizeWords, makeMoney } = require('./utils');
const Person = require('./Person');

console.log(capitalizeWords('hello world'));
console.log(makeMoney(100));

const person1 = new Person('John', 30);
person1.greet(); 
