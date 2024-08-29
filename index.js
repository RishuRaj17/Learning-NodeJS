// const math = require("./math"); // imports the math module.

const {add,sub} = require("./math"); // object destructuring.

// console.log(math); // gives empty object {} if the module is not exported, else [Function: add], and if given alias name: {addFn :[Function: add], subFn[Function: sub]}.

// console.log(math(4,6)); // adds two numbers.

// after passing as object
// console.log(math.add(4,6)); 
// console.log(math.sub(4,6));

// when we give a alias
// console.log(math.addFn(4,6));
// console.log(math.subFn(4,6));

// when Destructured object 
console.log(add(4,6));
console.log(sub(4,6));



console.log("Hello World!"); // prints Hello World! on console.