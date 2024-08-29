const fs = require("fs");

// write file sync..
// fs.writeFileSync("./File System/test.txt","Hello World!");

// write file async..
// fs.writeFile("./File System/test.txt","Hello World! 0101 Love!" , (err) => {} );

// Read File Sync..
// const result = fs.readFileSync("./File System/test.txt","utf-8");
// console.log(result);

// Read File async..
// fs.readFile("./File System/test.txt","utf-8",(err,result)=>{
    // if(err){
        // console.log("Error: "+err);
    // }
    // else{
        // console.log(result);
    // }
// })

// async always expect a call back function for error.


// file append sync..
// fs.appendFileSync("./File System/test.txt","\nHello World!");

// copy
// fs.copyFileSync("./File System/test.txt","./File System/copy.txt");

// delete
// fs.unlinkSync("./File System/copy.txt");

// status
// console.log(fs.statSync("./File System/test.txt"));

// check is file?
// console.log(fs.statSync("./File System/test.txt").isFile());

// directory
// fs.mkdirSync("my-docs");
// fs.mkdirSync("my-docs/a/b",{recursive: true});



