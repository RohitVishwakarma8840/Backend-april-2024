const fs = require('node:fs');

// TO learn writefile appendfile copyfile rename unlink 


fs.writeFile("hey.txt", "hi hello how are you ", function (err){
    if(err) console.log("error");
    else  console.log("done");
})

// next append file which is used to append the code that is likhi hui file mai code add karne ke liye 
fs.appendFile("hey.txt","I am fine how are you ",function(err){
    if(err) console.log("error");
    else console.log("again done ");
})

// For Renaming the file i have used that 

// fs.rename("hey.txt","hello.txt",function(err){
//     if(err) console.log(err);
//     else    console.log("done ");
// })


// copy file 
fs.copyFile("hello.txt",'./copy/copy.txt',function(err){
    if(err) console.log(err);  // or we can do the err.message 
    else    console.log("done");
})

// To delete a file we can use unlink to do that 
fs.unlink("hello.txt",function(err){
    if(err)  console.log(err);
    else     console.log("done");
})