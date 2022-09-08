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

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
      this.students.forEach(
          (student) => {
              alert(this.title + ": " + student)
          }
      );
    },
};
//in arrow fn does not have its own 'this' , it points to 'this' outside itself.
group.showList(); //our group:john , our group:pete  our group:alice

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
      this.students.forEach(
          function (student) {
              alert(this.title + ": " + student) //this here is undefined , error -> cannot access title of undefined 
          }
      );
    },
};

group.showList(); //our group:john , our group:pete  our group:alice

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// use the same function in two objects
user.f = sayHi;
// {
//     name: "John",
//         f:function sayHi() {
//   alert( this.name );
// }
// };
admin.f = sayHi;
// {
//     name: "Admin",
//         f:function sayHi() {
//   alert( this.name );
// }

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};
user.sayHi(); // Ilya


let user = {
  firstName: "Ilya",
  sayHi() {
      function arrow() {
          console.log("hello",this);
          alert(this.firstName) //this points to window 
      };
    arrow();
  }
};
user.sayHi(); // undefined



let firstName = "Ilya";
  function sayHi() {
      function arrow() {
          alert(firstName)
      };
    arrow();
  }
sayHi(); // Ilya



