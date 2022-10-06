// var obj = {}; //empty object
// console.log(obj);

// var person = {
//     name: "Abhishek", //-> "name":"Abhishek"
//     age: 23,
//     phone: 999999999, //-> "phone":999999999
//     isMale: true,
//     height: "170cm",
//     "school name": "Delhi Public School",
    
// }
// console.log(person);

// //dot notation
// console.log(person.name);
// console.log(person.isMale);

// //square bracket notation
// console.log(person["phone"]);
// console.log(person["school name"]);

// //nesting of objects
// var captainAmerica = {
//     firstName: "Steve",
//     lastName: "Rogers",
//     friends: ["Bucky", "Tony Stark", "Bruce Banner"],
//     age: 122,
//     isAvenger: true,
//     address: {
//         state: "Manhattan",
//         city: "New York",
//         country: "USA"
//     },
//     sayHi: function () {
//         console.log(this);
//         console.log(`Hello my name is ${this.firstName}`);
//     }
// };

// console.log(captainAmerica.friends);
// console.log(captainAmerica.friends[1]);
// console.log(captainAmerica["friends"][0]);

// console.log(captainAmerica.sayHi);
// captainAmerica.sayHi();

// //nested objects accessing
// console.log(captainAmerica.address["city"]);

// //looping over objects 
// //for in loop -> gives key 
// for (let key in captainAmerica) {
//     console.log(key);
//     console.log(captainAmerica[key]);
// }

// //deleting a key from an obj
// delete captainAmerica.age;
// console.log(captainAmerica);

// //adding a key in obj
// captainAmerica.height = "180cm";
// console.log(captainAmerica);

// var users = {
//     name: "John",
//     age:30
// }

// let abc = "age";
// console.log(users.name);
// console.log(users.abc); //-> undefined
// console.log(users[abc]); 

// // let fruit = prompt("Which fruit to buy?");
// //value substitute
// // let bag = {
// //     [fruit]: 5, // the name of the property is taken from the variable fruit
// // };

// // alert(bag[fruit]); //5

// let fruitName = "apple";
// //expression evaluate
// let items = {
//     [fruitName + "computers"]: 4
// };

// //property value shorthand
// var computerBrand= "apple";
// var processor = "M2 sillicon";
// var ram = "16GB"

// // var specification = {
// //     computerBrand: computerBrand, //-> computerBrand:"apple"
// //     processor: processor,
// //     ram:ram
// // }

// //if you want to keep the name of key in object same as variable then we can use shorthand property
// var specification = {
//   computerBrand,
//   processor,
//     ram,
//     ssd: "512GB",
//   abc:undefined
// };

// console.log(specification);


// console.log("ram" in specification); //true
// if (specification["ram"]){
//     console.log(true);
// }; // 16GB

// console.log("abc" in specification);
// if (specification.abc) {
//     //do something
//     console.log(true);
// }
// else {
//     console.log(false);
// }




var obj = {
    name: "John",
    age:32
}
let clone = {};
//jike andar copy hona h , //jo copy hona h 
Object.assign(clone, obj, { isMale: true }, { favFood: "Pizza" });
console.log(clone);
obj.name = "Abhishek";
console.log(obj);
console.log(clone);


//nested object cloning

let user = {
  name: "Pete",
  sizes: {
    height: 182,
    width: 50,
  },
};

Object.assign(clone, user);
user.sizes.height = 100;
console.log(clone);
console.log(user);



//q1
let arr = [1, 4, 2, 3, 2, 4, 1, 5, 6, 1, 1];
// //output {1: 4, 2: 2, 3: 1, 4: 2, 5: 1, 6: 1}

//conventional method
var obj = {};
for (let i = 0; i < arr.length; i++){
  if (obj[arr[i]]) {
    obj[arr[i]] = obj[arr[i]] + 1;
  }
  else {
    obj[arr[i]] = 1;
  }
}
console.log(obj);

//using hof

function getCount(obj, count) {
  if (obj[count]) {
    obj[count] = obj[count] + 1;
  }
  else obj[count] = 1;

  return obj;
}

var ans = arr.reduce(getCount, {});
console.log(ans);


// deep clone 

let user = {
  name: "Abhishek",
  age: 23,
  residence: {
    city: "New Delhi",
    country:"India"
  },
  education:["cse","12th"],
  hobby:"music"
}

const deepClone = (obj) => {
  //object.assign -> shallow copy 
  let clonedObj = Object.assign({}, obj);
  Object.keys(clonedObj).forEach((key) => {
    let type = typeof clonedObj[key];
    // if (type == 'object' && clonedObj[key].length > 0) {
    //   //it is an arr

    // }
    if (type == 'object') {
      clonedObj[key] = deepClone(obj[key]);
    }
    else {
      clonedObj[key] = obj[key];
    }
  })
  return clonedObj;
}

let newObj = deepClone(user);










