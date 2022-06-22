var obj = {}; //empty object
console.log(obj);

var person = {
    name: "Abhishek", //-> "name":"Abhishek"
    age: 23,
    phone: 999999999, //-> "phone":999999999
    isMale: true,
    height: "170cm",
    "school name": "Delhi Public School",
    
}
console.log(person);

//dot notation
console.log(person.name);
console.log(person.isMale);

//square bracket notation
console.log(person["phone"]);
console.log(person["school name"]);

//nesting of objects
var captainAmerica = {
    firstName: "Steve",
    lastName: "Rogers",
    friends: ["Bucky", "Tony Stark", "Bruce Banner"],
    age: 122,
    isAvenger: true,
    address: {
        state: "Manhattan",
        city: "New York",
        country: "USA"
    },
    sayHi: function () {
        console.log(`Hello my name is ${captainAmerica.firstName}`);
    }
};

console.log(captainAmerica.friends);
console.log(captainAmerica.friends[1]);
console.log(captainAmerica["friends"][0]);

console.log(captainAmerica.sayHi);
captainAmerica.sayHi();

//nested objects accessing
console.log(captainAmerica.address["city"]);

//looping over objects 
//for in loop -> gives key 
for (let key in captainAmerica) {
    console.log(key);
    console.log(captainAmerica[key]);
}

//deleting a key from an obj
delete captainAmerica.age;
console.log(captainAmerica);

//adding a key in obj
captainAmerica.height = "180cm";
console.log(captainAmerica);

var users = {
    name: "John",
    age:30
}

let abc = "age";
console.log(users.name);
console.log(users.abc); //-> undefined
console.log(users[abc]); 

// let fruit = prompt("Which fruit to buy?");
//value substitute
// let bag = {
//     [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert(bag[fruit]); //5

let fruitName = "apple";
//expression evaluate
let items = {
    [fruitName + "computers"]: 4
};

//property value shorthand
var computerBrand= "apple";
var processor = "M2 sillicon";
var ram = "16GB"

// var specification = {
//     computerBrand: computerBrand, //-> computerBrand:"apple"
//     processor: processor,
//     ram:ram
// }

//if you want to keep the name of key in object same as variable then we can use shorthand property
var specification = {
  computerBrand,
  processor,
    ram,
    ssd: "512GB",
  abc:undefined
};

console.log(specification);


console.log("ram" in specification); //true
if (specification["ram"]){
    console.log(true);
}; // 16GB

console.log("abc" in specification);
if (specification.abc) {
    //do something
    console.log(true);
}
else {
    console.log(false);
}





