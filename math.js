// function add(a,b){
    // return a+b;
// }

// function sub(a,b){
    // return a-b;
// }

// module.exports = add; // stmt 1 exports the math module add function. 
// module.exports = sub; // stmt 2 this will over write the stmt 1.

// module.exports = { // this is th right way to export multiple funtions by creating object.
    // add,
    // sub
// }

// module.exports = { // giving alias name
    // addFn: add,
    // subFn: sub
// }


// second method of export but it gives => [Funtion: (anonymous)]
exports.add = (a,b) => a+b;
exports.sub = (a,b) => a-b;