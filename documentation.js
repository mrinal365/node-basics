// In browser before execution of the code 
// window object gets created and it consists of many different mentohds
// ex. window.document.querySelector


// In Browser JS the JS engine automatically prepends the window object
// ex. document.querySelector === window.document.querySelector


// in node we dont have window object 

// in node we have modules .. i.e. any variable or object created inside a file will live only iinside it

// Whenever we craete a file it is wrapped inside a function
(function(exports, require, module, __filename, __dirname){
    //Module code actually lives inside here

})

// in this we get Acess to few things like 
// 1. exports
// 2. require
// 3. module
// 4. __filename
// 5. __dirname



// We will make different files and then export it and use it in a single place called index.js or app.js or whatever you wanted to name it


// Importing and exporting a file

// 1. Exporting a file
const sayName=()=>{
    console.log('Hello there Ed');
};

module.exports=sayName;
// module.export="here this can be anything a function a variable etc"


// 2. Importing a file
const sayName=require('./sayname');

// now use the function
sayName();

-------------------------------------------------------------------------------


// exporting multiple things

const sayName=()=>{
    console.log('Hello there Ed');
};

const sayAdress=()=>{
    console.log('Jhonson Street');
};


module.exports.sayName=sayName;
module.exports.sayAdress=sayAdress;


// Note: when you exports multiple things the import of that will come as a object in which 
// both of the functions will be present

//ex:
const getUserInfo=require('./say/Name');

console.log(getUserInfo)

// output:
{
    sayName:[function:sayName],
    sayAdress:[function:sayAdress]
}




-------------------------------------------------------


// You can use the properties in the module wrapper function
console.log(__dirname);
// o/p : C:\Users\Ed\Desktop...............

console.log(__filename);



// ----------------------------------------------------
// Prebuild Modules
// 1. path.js
//  

// import path module

const path = require('path');

const fileLocation=path.join(__dirname,'app.js');
console.log(fileLocation)

// o/p : C:\Users\Ed\Desktop...............


const fileName= path.basename(fileLocation);

console.log(fileName);

// o/p: app.js

//getitng extension name
const extension=path.extname(fileName)
// op .js




// Prebuild Modules
// 1. url.js

// used when we work on url of a website

// s1: import the module
const url = require('url');

const address='https://www.youtube.com/watch?v=zQRrXTSkvfw';

// we can get the path/port/anythoing from the url ocnce we parse it

//parsing a url
const parsedUrl=url.parse(adress,true);

 
console.log(parsedUrl.host);
// op: localhost:8080

console.log(parsedUrl.pathname);
// op: /default.html

console.log(parsedUrl.query);
//op: {year:'2017', month:'feburary'}












// Prebuild Modules
// 1. fs.js

// used to work with files
// s1: import the module
const fs=require('fs');

// 3 args- path,data/value,callback function we can get error at callback
fs.writeFile('message.txt','hello there node',(error)=>{
    if(error){
        throw error;
    }
    console.log('the file has been written')
});

// This writeFile is an async call 

fs.readFile('./message.txt', 'utf', (err,data) => {
    if(err) throw err;
    console.log(data);
})




// Prebuild Modules
// 1. http.js

// used create server and send request and response 
// s1: import the module
const http=require('http');

const server=http.createServer((req,res)=>{
    res.write('hello there user');
})


// at the end you have to close the response using res.end()
const server=http.createServer((req,res)=>{
    res.write('hello there user');
    res.end();
}) 


// starting server at a port
server.listen(3000,()=>{
    console.log('Server is up and running');
});


// here we get two things
// 1. request - req
// 2. response - res

// what is happening is the server is lisening to an event and 'event can be an action which can fire'
// ex. of event: opening of a file, opening of url
// request object 



// Serving request based on endpoints
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Welcome to the Homepage');
        res.end();
    }
    if(req.url==='/user'){
        res.write('Welcome user ');
        res.end();
    }
})

// in a request we can also add information about the head here..  head is  metadata of the request
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        //here is how to write in head of a reques  t
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('Welcome to the Homepage');
        res.end();
    }
    if(req.url==='/user'){
        res.write('Welcome user ');
        res.end();
    }
})


// how to render a html file in node 
// 1. import path
// 2. import fs module
// 3. import http

// 4 use fs.readfile


const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        fs.readFile(path.join(__dirname,'index.html'),(err,data)=>{
            //here is how to write in head of a reques  t
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('Welcome to the Homepage');
            res.end();
        })
    }
    if(req.url==='/user'){
        res.write('Welcome user ');
        res.end();
    }
})



// but this is very much if and all so now we will use a frameowrk and not bare node to work with


/// Package.json
{
    "name": "basics",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC"
  }
  

  // package.json keeps track of all of our libraries and packages and frameowrks that we install with npm
  