//declaring an arr
var cars = [];


//declaring+initializing arr
var cars = ["BMW", "AUDI", "HONDA", 1, 2, 4, true, undefined];
//printing an array
console.log(cars);

//aceesing elements in an array 
console.log(cars[3]);
console.log(cars[0]);

//replacing elements
cars[3] = "Mahindra";
console.log(cars[3]);

//adding elements in arr
cars[8] = "Maruti";
console.log(cars);

cars[23] = "hello";
console.log(cars.length);
console.log(cars);

//Methods
cars.pop();
console.log(cars);
console.log(cars.length);

cars.push("Mustang");

// unshift-> add element at the starting of arr
cars.unshift("TATA");
console.log(cars);
console.log(cars[0]);

// shift-> it removes element from start of an arr

cars.shift();
// console.log(cars);
console.log(cars);

cars.length = 3;
console.log(cars);


const months = ["Jan", "March", "April", "June"];
//index, num of elements to remove strating from index, things to add starting at index

//removing from array 
months.splice(1, 2);
console.log(months);

//adding in array 
months.splice(1, 0, "Feb", "March", "April", "May")
console.log(months);


//removing and adding into array 
months.splice(1, 3, "July", "Aug", "Sept", "Oct");
console.log(months);

