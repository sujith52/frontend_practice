console.log("The higger functions !");

function main(){
    console.log(`this is the call back function in the javascript !`);
}

function callBackfun(callbackFn){
    console.log(`the call back func`);
    callbackFn()
}

callBackfun(main)

// monad
function identy(value) {
    var monad = Object.create(null);
    monad.bind = function (func, ...args) {
        return func(value, ...args);
    };
    return monad;
}
let add2val = x => identy(x + 2)
let square = x => identy(x * x)

let result = identy(5)
    .bind(add2val)
    .bind(square)
let finals = result.bind(val => val)
console.log(finals)

// PURE FUNNCTION in the js 

let obj = {a : 0}

let pure = (input) => {
    let output = input.a + 1
    return output
}
let b = pure(obj)
console.log(obj)
console.log(b);

// accepting the functions as arguments 

function mains(fn, valsp){
    let res = []
    for(let el of valsp){
        res.push(fn(el))
    }
    return res
}

let results = mains(x => x * 2, [1,2,3,4,5]);
console.log(results);

