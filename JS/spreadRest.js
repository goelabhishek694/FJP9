//spread operator
// it is used to spread arr elemnts or object properties 
//arr
let nums = [1, 2, 3, 4];
let newNums = [...nums,5,6,7,8];
console.log(newNums);
//obj
const user = {
    name: "Hardik",
    age: 20,
    residence: {
        state: "Delhi",
        city:"New Delhi"
    }
}
//override, new key:value pair 
const newUser = { ...user, age:23,hobbies: "music" }; 
console.log(newUser);
user.residence.state = "Maharashtra";
console.log(user);
console.log(newUser);
//rest operator
//it is used to merge all of the function arguments into an array 
function foo(...args) {
    console.log(args);
    args.forEach(arg=>console.log(arg))
    
}
foo("hello", "how", "are", 1, 2, 3, 4);



