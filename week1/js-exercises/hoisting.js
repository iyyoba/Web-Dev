// 1

const cube = function (x) {
    return x * x * x;
};
console.log(cube(3));
// 2

const fullName = function (first, last) {
    return `${first} ${last}`;
};

console.log(fullName("Alice", "Adams"));

//3

const power = function (base, exp) {
    if (exp === 0) {
        return 1;
    }
    return base * power(base, exp - 1);
};

console.log(power(2, 3));

// 4

const sumCubes = function (numbers) {
    let total = 0;
    for (i = 0; i < numbers.length; i++) {
        total = total + cube(numbers[i]);
    }
    return total;

};

console.log(sumCubes([1, 3, 4, 5]));

/*  STEP 2. Mechanics of Hoisting
1. It shows undefined because, var declarations are hoisted so are
 read before the call(consol.log) but by the time it was read there 
 is no assignment to it. so it doesnt show error but shows undefined.
 
 2. let is also hoisted but not the same way as var. It will not be 
 initialzed as undefined. It is placed in TDZ:

 3. The showMessage const is hoisted but not initialized like var.
     It will be in the TDZ. At first no function is assigned to it.
     then JS tried to access it, because it is in the TDZ it cant 
     access it so it will show ReferenceError. The functions assignement 
     will not achieved becasue the code excution is terminated already.

 4. This is function declaration, so the whole body of the function is hoisted.
     JS reads the code as if the funtion is declared first when it is called with consol.log.


 STEP 3. Code Restructuring
*/

// 1.

let values = [10, 20, 30];

for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
};

// 2.

let lastLogin = '1/1/1970';

console.log(welcome('Charlie', 'Munger'));

function welcome(first, last) {
    return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
};



