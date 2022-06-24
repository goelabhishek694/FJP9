// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables to the top of their scope, prior to execution of the code.


console.log(a);
fun();
var a = 10;
function fun() {
  console.log("FJP-9 rocks");
}
console.log(a);

// var a;
// function fun() {
//   console.log("FJP-9 rocks");
// }

// console.log(a);
// fun();
// a = 10;
// console.log(a);

//my definition
// acccesing of variables and functions even before they are declared
