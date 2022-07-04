// function a() {
//     var b = 1;
//     setTimeout(function () {
//         console.log(b);
//     },3000);
//     console.log("Hello");
// };

// a();

//interview ques
// print number from 1 to 5 , with a second gap in each number

// function a() {
//     for (let i = 1; i <= 5; i++) {
//         // setTimeout(function () {
//         //     console.log(i);
//         // }, 1000*i);
//         console.log(i);
//     }
// }
// a(); //1 2 3 4 5

// function a() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, 1000 * i);
//   }
// }
// a(); // 6 6 6 6 6

// function a() {
    
//     for (var i = 1; i <= 5; i++) {
//         function wrapper(b) {
//             setTimeout(function () {
//                 console.log(b);
//             }, 1000 * b);
//         }
//         wrapper(i);
//     }
// }
// a(); //1 2 3 4 5

console.log("before");
setTimeout(function cb (){
    console.log("timer");
}, 5000);
console.log("after");
