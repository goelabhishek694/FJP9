// // a function in which we can pass another function as an argument, That function is know as hof 

// var arr = [2, 5, 7, 12];

// //ques1 calculate the area of a squares where side is arr 
// //expected o/p ->[4,25,49,144] 
// function areaOfSquare(arr) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++){
//         res.push(arr[i] * arr[i]);
//     }
//     return res;
// }

// var ans = areaOfSquare(arr);
// console.log(ans);

// //ques2 calculate the perimter of a squares where side is arr
// //expected o/p ->[8,20,28,48] 

// function perimeterOfSquare(arr) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//       res.push(arr[i] * 4);
//     }
//     return res;
// }

// var ans = perimeterOfSquare(arr);
// console.log(ans);

// //ques3 calculate the diagonal of a squares where side is arr
// //expected o/p ->[2.88, 7.199999999999999, 10.08, 17.28] 

// function diagonalOfSquare(arr) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//       res.push(Math.sqrt(2) * arr[i]);
//     }
//     return res;
// }

// var ans = diagonalOfSquare(arr);
// console.log(ans);

// //functional programming 

// //better way
// // var arr = [2, 5, 7, 12]; 
// let area = function (side) {
//   return side * side;
// }

// let perimeter = function (side) {
//   return side * 4;
// }

// let diagonal = function (side) {
//   return Math.sqrt(2) * side;
// };

// let calculate = function (arr, logic) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++){
//     res.push(logic(arr[i]));
//   }
//   return res;
// }

// console.log(calculate(arr, area));
// console.log(calculate(arr, perimeter));
// console.log(calculate(arr, diagonal));


// //map 
// // syntax-> arr.map(function(ele){
// // return {logic}
// // })
// //result arr         //hof     //cb function
// var areaOfSquareArr=arr.map((num) => {
//   return num * num;
// })
// // var areaOfSquareArr = arr.map(function(num){
// //   return num * num;
// // });
// // 1) each element of arr is traversed, it is available in cb function's parameter . 
// // 2) we peform some action on that element 
// // 3) on writing return res is pushed inside an array 
// console.log(areaOfSquareArr);

// //implementation map 

// var areaOfSquareArr = arr.map(area);
// // calculate(arr, logic); //-> convert this into map 
// // arr.map(area);

// //this is what we require
// // arr.calculate(logic);

// Array.prototype.calculate = function (logic) {
//   let res = [];
//   for (let i = 0; i < this.length; i++){
//     res.push(logic(this[i]));
//   }
//   return res;
// }

// let narr = [2, 5, 7, 12];
// var ans = narr.calculate(area); //this-> narr
// console.log(ans);

// Array.prototype.myMap = function (logic) {
//   let res = [];
//   for (let i = 0; i < this.length; i++) {
//     res.push(logic(this[i]));
//   }
//   return res;
// };
// var ans = narr.myMap(area); //this-> narr
// console.log(ans);
// //implementing own push method in  arrays
// Array.prototype.myPush = function (num) {
//   let length = this.length; //4
//   this[length] = num;
//   return this;
// }
// narr.myPush(45);
// console.log(narr);



// //filter
// var arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
// function greaterThan4(num) {
//   // if (num > 4) return num;
//   return num < 4;
// }
// var ans = arr.filter(greaterThan4);
// console.log(ans);


//reduce

// var arr = [2, 5, 7, 12];

// function sumOfArr(acc, cur) {
//   console.log("Before");
//   console.log(acc); //2 
//   console.log(cur); //5 
//   acc = acc + cur;
//   console.log("After");
//   console.log(acc); //7 
//   return acc;
// }

// let ans = arr.reduce(sumOfArr);
// console.log(ans);


// var arr = [10, -5, 566, 28, 56, 12,456];

// function largestValue(acc, cur) {
//   console.log("Before");
//   console.log(acc);
//   console.log(cur);
  
//   if (cur > acc) {
//     acc = cur;
//   }

//   console.log("After");
//   console.log(acc);
//   return acc;
// }
//                           //cb , initial value of acc, so that cur starts with 0th index  
// let ans = arr.reduce(largestValue, -Infinity);

// console.log(ans);

const worldCapitals = [
  {
    country: "India",
    capital: "Delhi",
    population: "2cr",
  },
  {
    country: "America",
    capital: "Washington DC",
    population: "6cr",
  },
  {
    country: "France",
    capital: "Paris",
    population: "2cr",
  },

  {
    country: "England",
    capital: "London",
    population: "4cr",
  },
  {
    country: "Germany",
    capital: "Berlin",
    population: "2cr",
  },
];

//Q1 print country name and their capital  
// [ India->Delhi, America->WashingtonDC, France->Paris , England->London, Germany->Berlin] 

function getCountryCapital(obj) {
  return obj.country + "->" + obj.capital;
}

var res = worldCapitals.map(getCountryCapital);
console.log(res);

//Q2-> Return the number of countries with a particular population 
//{ 2cr: 3, 4cr: 1, 6cr: 1 }

function getCountryPopulation(obj, cur) {
  //obj["2cr"]
  if (obj[cur.population]) {
    obj[cur.population] = obj[cur.population] + 1;
  } else {
    obj[cur.population] = 1; //{ "2cr":2,"6cr":1}
  }
  return obj;
}

var res = worldCapitals.reduce(getCountryCapital,{});
console.log(res);

//Q3 get country name with population less than 5cr
//[India, France,England,Germany]

function getPopulationLessThan5cr(obj) {
  if (obj.population < "5cr") {
    return true;
  }
}
function getCountry(obj) {
  return obj.country;
}
var res = worldCapitals.filter(getPopulationLessThan5cr).map(getCountry);
console.log(res);

//using reduce 

function getPopulationLessThan5cr(arr, obj) {
  if (obj.population < "5cr") {
    arr.push(obj.country);
  }
  return arr;
}

var ans = worldCapitals.reduce(getPopulationLessThan5cr,[]);
console.log(ans);

