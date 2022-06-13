//string is a sequence of characters

var str = 'hello pepcoders';
// // H e l l o <space> p e p c o  d  e   r  s        
// // 0,1,2,3,4,   5,   6,7,8,9,10,11,12,13,14 
console.log(str);

console.log(str[4]);

//strings in JS are immutable

str[4] = 'Z';
console.log(str);

console.log(str.length);

//string methods

// 1) slice method
// string_name.slice(start,end) -> starting index is inclusive & end idx is exclusive
// slice performed on the string str is not changed 
var slicedStr = str.slice(3, 7);
console.log(slicedStr);
// slice performed on the string str is not changed
console.log(str);

slicedStr = str.slice(6); //-> prints starting to end
console.log(slicedStr);

// 2) substring method
// string_name.substring(start,end) -> starting index is inclusive & end idx is exclusive
slicedStr=str.substring(0, 5); 
console.log(slicedStr);

// 3) toLowerCase / toUpperCase

var str = 'hello';
console.log(str.toUpperCase());

var str = "BYE";
console.log(str.toLowerCase());

// 4) concatentation method

let firstStr = "Hello";
let secondStr = "World";

console.log(firstStr + secondStr);

let concatenatedStr = firstStr.concat(secondStr, " you only love once");
console.log(concatenatedStr);

// 5) trim method

// removes all the starting whitespaces and ending whitespaces of a String, 

var str = '        Hello             World        ';
console.log(str.length);

console.log(str.trim().length);

//split method
// Split a string into substrings using the specified separator and return them as an array.

var str = 'hello 123 hello 456';

var res = str.split("");
console.log(res);

var res = str.split(" ");
console.log(res);

var res = str.split("2");
console.log(res);





