const fs  =  require("fs");

const os = require("os");

// console.log(1);

// sync read.. - blocking
// const result = fs.readFileSync("./File System/test.txt","utf-8");
// console.log(result);

// async read.. - non blocking
// fs.readFile("./File System/test.txt","utf-8",(err,result)=>{
    // console.log(result);
// });

// console.log(2);

// console.log(os.cpus().length); // shows the number of cores i have.


// Default Thread Pool Size: 4
// Max it can be extended? - no. of cores you have in your cpu.