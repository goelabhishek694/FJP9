// <-------- rules -------->
// 1. the value of 'this' is evaluated during the run-time 
// 2. value of 'this' depends from where it is called, 
// 3. this points to that object from where the function is being called
// 4. arr,obj,fn are all passed by refference 

{//1
    function type1() {
        console.log(this.name);
    }

    var name = "JavaScript";

    type1();  //when function is called globally, this always point to window obj
}

//2

    function type2() {
        console.log(this.lname);
    }

    var lname = "Tiwari";

    var obj = {
      lname: "Singh",
      type2: function() {
        console.log(this.lname);
      },
    };

    obj.type2();


//3
var food = "Pizza";
var obj = {
    food: "Pasta",
    eat: function() {
        console.log("I like to eat "+this.food);
    }
}

var foo = obj.eat;
foo();

//4

var length = 1;
function square() {
    let cb = function () {
        console.log(this.length * this.length);
    };
    setTimeout(cb, 2000);
}

var obj = {
    length: 3,
    square
}

obj.square(); 

//5
function Name(fName, lName) {
  // console.log(this);
  this.firstName = fName;
  this.lastName = lName;
  // console.log(this);
}

var obj = new Name("Sunil", "Gavaskar");
console.log(obj);
//js creates a new object {}. 
//js passes the object's refference to the function 
//this-> {}

// {
//     firstName: "Sunil",
//     lastName:"Gavaskar"
// }


//this in case of arrow functions 

