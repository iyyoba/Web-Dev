

// 1

const sayHello = () => "Hello World!"


// 2


const double = x => x * 2;

// 3

const add = (x, y) => x + y;

// 4

const person = {
    name: "Alice",
    sayHi: () => `Hi, ${this.name}!`
};

// 5

const numbers = [1, 2, 3, 4, 5];
const doubled = [];

numbers.forEach(num => doubled.push(num * 2));


console.log(sayHello());
console.log(double(3));
console.log(add(2, 6));
console.log(person.sayHi());
console.log(numbers);
console.log(doubled);
