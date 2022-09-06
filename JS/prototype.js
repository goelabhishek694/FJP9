let user={name:"abc", age:23}

// {
//     age: 23
//     name: "abc"
//     [[Prototype]]: Object
// }

let admin = { dbAccess: true, dpPassword: "password" };

admin.__proto__ = user;

{
    dbAccess: true
dpPassword: "password"
[[Prototype]]: Object
age: 23
name: "Abhi"
[[Prototype]]: Object
}

function abc() {
    console.log("hello")
}

abc.__proto__.__proto__