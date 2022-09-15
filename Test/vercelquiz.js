class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" }); //this,freddie->{newColor:"purple"}
console.log(freddie.colorChange("orange")); //type error

//undiscussed q127
const spookyItems = ["👻", "🎃", "🕸️"];
({ item: spookyItems[3] } = { item: "💀" });

console.log(spookyItems);

////undiscussed
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

//undiscussed
(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();

let person = { name: "Rasel" };
const members = [person];
person = null;

console.log(members);

[1, 2, 3].map((num) => {
  if (typeof num === "number") return;
  return num * 2;
});


const numbers = [1, 2, 3, 4, 5];
const [y,z,a] = [1, 2, 3, 4, 5];

console.log(y,z,a);


let user = {
  name: "Abhishek",
  age: 23,
  sayHi() {
    console.log(this.name);
    console.log(user.name);
  }
}

let admin = user;
user = null;
admin.sayHi();

console.log('foo' && 'bar' && "cat"); //cat
console.log('foo' || 'bar'); //foo
console.log(+"5"); // 5
console.log(+123124); // 123124
console.log(+undefined); //nan

const settings = {
  username: "RaselKazi",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);

let config = {
  alert: setInterval(() => {
    console.log("Alert!");
  }, 1000),
};

config = null;

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function () {
  console.log(`Woof I am ${this.name}`);
};

const pet = new Dog("Mara");

pet.bark();

delete Dog.prototype.bark;

pet.bark();

let a = [1, 2, 3].push(4);
console.log(a.push(5));

