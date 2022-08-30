let promise = new Promise(function (resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000);
});

console.log(promise);


let songDeliveredPromise = new Promise(function (resolve, reject) {
    let song = {
        name: "Tum hi ho",
        album: "Aashiqui",
        length: "300s",
        singer: "Arijit Singh",
        lyrics: "Tum hi ho Tum hi ho Tum hi ho Tum hi ho",
    };
    //1sec = 1 month
    setTimeout(() => { resolve(song) }, 1000);
});

//audience
// songDeliveredPromise.then(
//     data => console.log(data),
//     err => console.log(err)
// )

songDeliveredPromise.then((data) => {
    console.log(data);
})

songDeliveredPromise.then(alert(data));
songDeliveredPromise.then(alert);



songDeliveredPromise.catch((err) => {
    console.log(err);
})


new Promise((resolve, reject) => {
    setTimeout(() => resolve("value"), 2000);
})
    .finally(() => alert("Promise ready"))
    .then(result => alert(result)) 
    .catch(err => alert(err)); 


//promise.all

1) laptop pe work
2)dm ka rply
3)episode binge 

day was successfull!

Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then((arr) => {
    console.log(arr[0])
    console.log(arr[1])
    console.log(arr[2])
});

// [1,2,3]

Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve,reject) => setTimeout(() => reject(3), 5000)) 
]).then((arr) => {
    console.log(arr[0])
    console.log(arr[1])
    console.log(arr[2])
}).catch((err)=>{
    console.log("promise all rejected")
    alert(err)});



let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// map every url to the promise of the fetch
let requests = urls.map(url => fetch(url));

// requests = [fetch('https://api.github.com/users/iliakan'),
//             fetch('https://api.github.com/users/remy'),
//             ftech('https://api.github.com/users/jeresig')
//         ]

// responses = [{}, {}, {}];
// [response.json()]
// data=["","",""]
// Promise.all waits until all jobs are resolved
Promise.all(requests)
    .then((responses) => {

        return Promise.all(responses.map(response => response.json()))
    })
    .then((data) => {
        console.log(data);
    })
    .catch(err => console.log(err));


Promise.allSettled([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve,reject) => setTimeout(() => reject(3), 5000)) 
]).then((arr) => {
    console.log(arr[0])
    console.log(arr[1])
    console.log(arr[2])
}).catch((err)=>{
    console.log("promise all rejected")
    alert(err)});
    




async function getData() {
    let url = 'https://api.github.com/users/iliakan'
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
}

console.log("i am good");

//sync fn 


let url = 'https://api.github.com/users/iliakan';
let result = fetch(url);  //fetch returns a promise 
result.then(response => {
  return response.text();
})
.then(data => {
  console.log(data)
})

console.log("i am good");

//sync fn 


async function getData() {
    try {
        let url = 'https://no-such-url'
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    }
    catch (err) {
        console.log("error",err.message);
    }
}




// url -> fetch -> res->res.json()->data -> print 
























// function calculator() {
//   try {
//     let res = sum(-10, -12);
//     if (res < 0) {
//       throw new Error("sum is less than zero");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// function sum(a, b) {
//   try {
//     return a + b;
//   } catch (error) {
//     console.log("err", error.message);
//   }
// }
