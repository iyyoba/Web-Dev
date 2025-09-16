const numbers = [2, 4, 6, 8, 10]
const cb = (x) => x * 2
const doubled = numbers.map(cb)
const quadruppled = numbers.map((number) => number * 4)

console.log(numbers)
console.log(doubled)
console.log(quadruppled)

const names = ['alice', 'bob', 'carol'];

const capitalizedNames = names.map((name) => name.charAt(0).toUpperCase() + name.slice(1));

console.log('Original Names:', names);
console.log('Capitalized Names:', capitalizedNames);

