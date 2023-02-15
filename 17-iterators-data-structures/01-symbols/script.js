const sym1 = Symbol('sym1');
const sym2 = Symbol('sym2');

console.log(sym1, sym2);

// Get read-only description
console.log(Symbol('sym1').description);

// Symbols are unique
console.log(Symbol('sym1') === Symbol('sym1')); // false
console.log(Symbol().description); // undefined

// Ensure our id is unique and can not be overwritten
const user = {
  [Symbol('id')]: 1,
  name: 'John',
  email: 'john@gmail.com',
};

user.id = '123';

console.log(user);

// This will not work either
console.log(user[Symbol('id')]); // undefined

// Symbols are not enumerable
console.log(Object.keys(user));
console.log(Object.values(user));

for (let key in user) {
  console.log(key);
}

// getOwnPropertySymbols() - returns an array of symbols
console.log(Object.getOwnPropertySymbols(user));

// Using Symbol.for() for global symbols
const sym3 = Symbol.for('foo');
const sym4 = Symbol.for('foo');

console.log(sym3 === sym4); // true

// Symbol.keyFor() - returns a name of a global symbol
console.log(Symbol.keyFor(sym3)); // foo
// It will be undefined for any Symbol that is not global and not created with Symbol.for()
console.log(Symbol.keyFor(sym1)); // undefined

// toString() - returns a string representation of a symbol

console.log(sym1.toString()); // Symbol(sym1)
console.log(sym3.toString()); // Symbol(foo)

// valueOf - returns a primitive value of a symbol
console.log(sym1.valueOf()); // Symbol(sym1)
console.log(sym3.valueOf()); // Symbol(foo)
