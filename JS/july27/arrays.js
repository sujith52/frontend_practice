// array like object 

let fakeArray = {
    0: 'apple',
    1: 'orange',
    2: 'srawberry',
    length : 3
}

let val = fakeArray.map(item => item.toUpperCase())    // error
console.log(val);

let realArray = Array.from(fakeArray)
let vals = realArray.map(item => item.toUpperCase())  
console.log(vals);

for(let ele of realArray){
    console.log(ele);
}

 // spread syntax 
let fakeArray = {
    0: 'apple',
    1: 'orange',
    2: 'srawberry',
    length : 3
}
let spArray = Array.from(fakeArray)

function showing(){
    let args = [...arguments]
    console.log(args.reverse());
}

showing(spArray)

// slice - legacy method 

let fakeArray = {
    0: 'apple',
    1: 'orange',
    2: 'srawberry',
    length : 3
}

var real = Array.prototype.slice.call(fakeArray)
console.log(real);


let reduc = [25,25,25,25].reduce(function (a,b){return a + b})
console.log(reduc);

[5].reduce(function(a,b){console.log('a ',a,'b ',b); console.log(a+b)},1)

let Arras = [
    {
        key: 'one',
        value : 1
    },
    {
        key: 'two',
        value : 2
    },
    {
        key: 'theree',
        value : 3
    }
]

let objss = Arras.reduce(function(obj, current ){
    obj[current.key] = current.value
    return obj
})

console.log(objss);

function map(list, fn){
    return list.reduce(function(newList, item){
        return newList.concat(fn(item))
    },[])
}

let outs =  map([1,5,6], function(n){return n * n})
console.log(outs);

var arras = [8,9,4,6,3,2,5,-9,4,5]
let outs1 = arras.reduce(function(a,b){
    return a < b ? a : b
}, Infinity)
console.log(outs1);

var arras4 = [1,2,4,5,3,1,2,4,5]
let outs6 = arras4.reduce(function(prev, num){
    if(prev.indexOf(num) === -1){
        prev.push(num)
    }
    return prev
}, [])
console.log(outs6);
