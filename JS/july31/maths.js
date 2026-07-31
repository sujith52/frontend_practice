console.log("math in javascript ");

console.log(42 % 10);

console.log(Math.round(4.25635));
console.log(Math.ceil(2.336)); // celi is used to increment
console.log(Math.ceil(-1.23));

console.log(Math.floor(2.36)); // floor is used to make things decresed 

// tignonmetry in the javascript 
let radi = (deg) => deg * (Math.PI / 180);
let deg = (rad) => rad * (180 / Math.PI)

let r = 90
console.log('the rasins '+Math.sin(radi(90)));

let n = 2 , a = 5.4
let result = (a<<n) === Math.floor(a) * Math.pow(2,n)
console.log(result);

let a6 = Math.round(Math.random() * (10 - 40 + 1)) + 40
console.log(a6);

var array = [1,2,3,4,5,6,7,8,9,10,11,48,1,9,52,0.12]
max = Math.max.apply(Math, array)
min = Math.min.apply(Math,array)

console.log(`the max is :  ${max} and the min is ${min}`);

minspread = Math.min(...array)
console.log(minspread);

console.log('ceil is '+ Math.ceil(5.126));
console.log('ceil is '+ Math.floor(5.126));

console.log(Math.sqrt(16056));
console.log(Math.cbrt(2));

var randum = ((Math.random() + Math.random()) / 2)
console.log(randum);

