// class Person{
//     constructor() {
//         //invoked as soon as new keyword is used 
//         this.name="Abhi"
//     }

//     printMyName() {
//         console.log(this.name);
//     }
// }

// const person = new Person();
// console.log(person);
//class components ko resemble krta h 
class Human{
    constructor(){
        this.eats = true;
    }
    printHabbit(){
        console.log(this.eats);
    }
}

class Person extends Human {
  constructor() {
    //invoked as soon as new keyword is used
    super();
    this.name = "Abhi";
    this.eats=false;
  }

  printMyName() {
    console.log(this.name);
  }

//   printHabbit() {
//     console.log(this.eats);
//   }
}

 const person = new Person();
console.log(person);
person.printMyName()
person.printHabbit()

//functional component ko resemble krta h 
class Human {
  
    eats = true;
  printHabbit=()=>{
    console.log(this);
  }
}

class Person extends Human {
 
    //invoked as soon as new keyword is used
    name = "Abhi";
  

  printMyName=()=>{
    console.log(this);
  }
}

const person = new Person();
console.log(person);
person.printMyName();
person.printHabbit();

