// a function in which we can pass another function as an argument, That function is know as hof 

var arr = [2, 5, 7, 12];

//ques1 calculate the area of a squares where side is arr 
//expected o/p ->[4,25,49,144] 
function areaOfSquare(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++){
        res.push(arr[i] * arr[i]);
    }
    return res;
}

var ans = areaOfSquare(arr);
console.log(ans);

//ques2 calculate the perimter of a squares where side is arr
//expected o/p ->[8,20,28,48] 

function perimeterOfSquare(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      res.push(arr[i] * 4);
    }
    return res;
}

var ans = perimeterOfSquare(arr);
console.log(ans);

//ques3 calculate the diagonal of a squares where side is arr
//expected o/p ->[2.88, 7.199999999999999, 10.08, 17.28] 

function diagonalOfSquare(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      res.push(1.44*arr[i]);
    }
    return res;
}

var ans = diagonalOfSquare(arr);
console.log(ans);

//functional programming 

