
const http = require('http');

const server=http.createServer(function(req,res){
   res.end("hello world");

});

server.listen(3000);

// http and https are the protocols that are created by them who has created internet meaning that 
// these are the rules followed by the internet 
// these rules must be followed , aur ye rules follow toh ye rules
// laptop ke operating system mai pre installed aate hai 

// http - it is a protocol for transfering anything over the internet 
// anything you transfer over the internet or you download anything  is done by http 