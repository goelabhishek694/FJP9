//set data
localStorage.setItem("name", "Sanket");
localStorage.setItem("lastName", "Wakekar");
localStorage.setItem("Education", "B.Tech");
localStorage.setItem("Lives", "Delhi");

//get Data
let name1 = localStorage.getItem("name");
console.log(name1);
// let name2 = localStorage.name;
// console.log(name2);

//delete 
// let deletedData = localStorage.removeItem("name");
// console.log(deletedData);
// delete localStorage.name

//get key by index
let a = localStorage.key(1);
console.log(a);

//if key is by the same name , data is overrided
localStorage.setItem("name", "Aman");

let user1 = {
  name: "Sanket",
  lastName: "Wakekar",
  Education: "B.Tech",
  Lives: "Delhi",
};

let user2 = {
  name: "Aman",
  lastName: "Shukla",
  Education: "BCA",
  Lives: "Lucknow",
};

let profiles = []; //array of objects
profiles.push(user1)
profiles.push(user2)

localStorage.setItem("users", JSON.stringify(profiles));

let allUsers = JSON.parse(localStorage.getItem("users"));
console.log(typeof allUsers);
console.log(allUsers);

