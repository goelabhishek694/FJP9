// variable declaration 
var a;

// varibale initialisation
a = 10;

//variable reinitialisation
a = 20;

//print
console.log(a);

console.log(typeof a);

a = "hello";
console.log(typeof a);

a = true;
console.log(typeof a);


a = null;
console.log(typeof a);

// data types in javascript

// 1) Number
// 2) Bigint
// 3) Boolean
// 4) String
// 5) null
// 6) undefined
// 7) objects
// 8) symbol

// Strings in js 

// 1) single quotes
var str = 'Hello , to the batch FJP-9';
console.log(str);
// 2) double quotes
var str = "Hello , to the \n batch FJP-9";
console.log(str);
// 3)backticks
// 3.1) varibale 
var user="Abhishek"
var str = `Hello ${user}, how are you ?`
console.log(str);
// 3.2) evaluate expression
var str = `Bring me ${1 + 1} glass of water. `;
console.log(str);

var str = `hello, my name is ${user}

         how are you doing ?`

console.log(str);


// understanding var let const

var a = 10;
console.log(a);
// 1) variables declared with var can be redeclared
var a = 20;
console.log(a);

// to overcome this we use let
let b = 100;
console.log(b);
// let b = 200;
console.log(b);

// since redeclaration is not allowed, reinitialization is allowed
b = 200;
console.log(b);

var num = 10;
for (var i = 0; i < num; i++){
    if (i % 2 == 0) {
        console.log("num is even");
    }
}
console.log(i);
//-> var keyword is function scoped in case of functions else global scoped 

function sum() {
    var x = 10;
    var y = 20;
    console.log(a+b);
}
//console.log(x); //Uncaught ReferenceError: x is not defined


// let keyword is block scoped
{
   //this part is known as block 
}

// let j = 20;
for (var i = 0; i < num; i++){
  let j = 10;
  if (i % 2 == 0) {
    let inIf = "hello";
    console.log(i);
    console.log(inIf);
  }
  //console.log(inIf); Uncaught ReferenceError: inIf is not defined
  console.log(j);
}
//console.log(j); //Uncaught ReferenceError: j is not defined
console.log(`value of i is ${i}`);
//console.log(inIf); Uncaught ReferenceError: inIf is not defined

//always declared and initialized together 
// const v; ->  Missing initializer in const declaration
// v = 20;

const p = 10; 
//cannot be redeclared and reinitialized
// scope-> same as let

