
//array
let arr = [10, 20, 30];

const [x, y, z] = arr;
const [, a] = arr;

const [q] = arr; //10
const [p, w] = arr; //10,20

let num1 = 1;
let num2 = 2;

[num2, num1] = [num1, num2];
console.log(num1);
console.log(num2);

// default values
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name);    // Julius (from array)
alert(surname); // Anonymous (default used)


// const [f, ...s] = arr;
//object
let obj = {
    name: "abhi",
    age: 23,
    city: "New Delhi",
    occupation: "sde",
}

// let userName = obj.name;
// let occupation = obj.occupation;
// let placeofliving = obj.city;

let { age, city, occupation:job } = obj;

console.log(age);
console.log(city);
console.log(job);

let options = {
  title: "Menu"
};

let {width = 100, height = 200, title} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200

let options = {
  title: "Menu",
};

let { width: w = 100, height: h = 200, title } = options;

alert(title); // Menu
alert(w); // 100
alert(h);   



