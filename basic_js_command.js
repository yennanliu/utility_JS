// BASIC COMMANDS JS 




//----------------------------
// print sth  

console.log(32442)


//----------------------------
// declare variable 

// 1) Create a Variable: var :  declare a new variable.

var favoriteFood='pizza'
var numOfSlices=8
console.log(favoriteFood)
console.log(numOfSlices)



// 2) Create a Variable let : declare a new variable, will be "undefined", if no give value to variable

let favoriteFood2
let numOfSlices2
console.log(favoriteFood2)
console.log(numOfSlices2)
favoriteFood2='coke'
console.log(favoriteFood2)

// or 

let favoriteFood3 = 'juice'
let numOfSlices3 = '3'
console.log(favoriteFood3)
console.log(numOfSlices3)


// 3) Create a Variable const :

/*

However, a const variable cannot be reassigned because it is constant. If you try to reassign a const variable, you'll get a TypeError.
Constant variables must be assigned a value when declared. If you try to declare a const variable without a value, you'll get a SyntaxError.
If you're trying to decide between which keyword to use, let or const, think about whether you'll need to reassign the variable later on. If you do need to reassign the variable use let, otherwise, use const.

*/


const entree='Enchiladas'
console.log(entree)
//entree = 'Tacos'
const testing;


//----------------------------
// print typeof object 
let newVariable = 'Playing around with typeof.';
console.log(typeof  newVariable)
let newNumber = 7 
console.log(typeof  newNumber)




//----------------------------
// if, else if, else if, else 
let stopLight = 'yellow';

if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}



//----------------------------
// switch example  (different way doing if, else if, else if, else  )

let athleteFinalPosition = 'first place';

switch(athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}





//----------------------------
// import library 

var http = require('http');


//----------------------------
// return current date 

exports.myDateTime = function () {
    return Date();
};


//----------------------------
// run a local node.js server with port 5555

/*
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(5555);
*/

//----------------------------
// URL Module

var url = require('url');
var adr = 'http://localhost:5555/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'

//----------------------------
// read file 

var fs = require('fs');
var rs = fs.createReadStream('df_test.csv');
rs.on('open', function () {
  console.log('The file is open');
});


//----------------------------
// event 

var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');

//----------------------------
// send email 




//----------------------------
// read json 


var fs = require("fs");
console.log("\n *STARTING* \n");
// Get content from file
var contents = fs.readFileSync("test.json");
// Define to JSON type
var jsonContent = JSON.parse(contents);
// Get Value from JSON
console.log("User Name:", jsonContent.username);
console.log("Email:", jsonContent.email);
console.log("Password:", jsonContent.password);
console.log("uid:", jsonContent.uid);
console.log("\n *EXIT* \n");


//----------------------------
// read built-in global JSON  

var exjson = {'key':'...abc...', 'key2':'...xyz...'};
for(var exKey in exjson) {
    console.log("key:"+exKey+", value:"+exjson[exKey]);
}


//----------------------------
// remove space 
console.log('    Remove whitespace   '.trim());


//----------------------------
// current time 
var d = new Date()
d 
d.getHours();
d.getMinutes();
d.getSeconds();



//----------------------------
// list length 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length;

//----------------------------
// dict  length 
// Object.keys(map.data.b.b).length
var x = {'a':1,'b':2}
Object.keys(x).length



//----------------------------










