//in case of addition , js tries to convert both the operands into String data type
var ans = "5" + 1;
//"5"+"1"  number,string. + -> concatenate
console.log(ans);

var ans = 5 + "1";
console.log(ans);

console.log(undefined + 8); //undefined+"8"-> NaN
console.log(true + "3"); //"true"+"3" -> true3
console.log(false + "3"); //"false"+"3" -> false3

//in case of multiplication , js tries to convert both the operands into Number data type
console.log(undefined * 6); //Nan-> not a number
console.log(undefined * "6"); //Nan-> not a number

console.log("ten" * 3); //Nan
console.log("10" * 3); //30

console.log(null * 5); //null get implicitly converted to 0 -> 0
console.log(null * "5"); //0*5->0

console.log("ten" * "3"); //"ten"*3-> NaN

console.log(true * "3"); // 1*3 -> 3
console.log(false * "3"); //0*3->0
console.log(false * "three"); //0*"three"-> Nan


//In case of subtraction it tries to convert operands into numbers
var ans = 5 - "1";
console.log(ans); //4

console.log(undefined-9); //nan
console.log(null - 9); // 0-9 -> -9
console.log(true-9); //1-9 -> -8
console.log(false - '9'); //0 - 9 -> -9
console.log([4] * 2); 
console.log({ a: 3 } * 2);