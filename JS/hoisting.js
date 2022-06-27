// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables to the top of their scope, prior to execution of the code.


// console.log(a);
// var ans = fun();
// console.log(ans);
// var a = 10;
// function fun() {
//   // console.log("FJP-9 rocks");
//   return "FJP-9 rocks";
// }
// console.log(greet);
// var greet = function () {
//   console.log("hello");
// }
// console.log(greet);
// console.log(a);

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

//temporal dead zone

// console.log(a); //error
// let a = 10;
// console.log(b); //ud
// var b = 100;
// console.log(x); //error\

//output questions 
 //q1
// {
//   var a = 10;
//   let b = 100;
//   const c = 1000;

//   console.log(a); //10
//   console.log(b); //100
//   console.log(c); //1000
  
// }

// console.log(a); //10
// console.log(b); //error
// console.log(c); //error

//q2
// function fun () {
//   if (true) {
//     let a = 10;
//     var d = 20;
//   }

//   console.log(d); //20
//   console.log(a); //error
  
// }

// fun();

//q3

// var a = 20;
// {
//   var a = 10;
//   let b = 100;
//   const c = 1000;

//   console.log(a); //10
//   console.log(b); //100
//   console.log(c); //1000
  
// }
// var a = 20;

// console.log(a); //10 then 20
// console.log(b); //error
// console.log(c); //error

//q4
// var a = 20;
// function fun()
// {
//   var a = 10;
//   let b = 100;
//   const c = 1000;

//   console.log(a); //10
//   console.log(b); //100
//   console.log(c); //1000
  
// }

// fun();
// console.log(a); //10
// console.log(b); //error
// console.log(c); //error


//q5
var b = 45;
{
  var a = 10;
  let b = 100;
  const c = 1000;

  console.log(a); //10
  console.log(b); //100
  console.log(c); //1000
}

console.log(a); //10
console.log(b); //45
console.log(c); //error













