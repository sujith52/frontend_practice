console.log("the loops will be here");

for (let i =0 ; i<= 5;i++){
    console.log(i)
}

let arra = [1,2,3,4,5,6,7,8,9,10]
// for(let i =0;i<= arra.length; i++){
//     console.log(i);
// }
for(let i =0;i >= arra.length; i--){
    console.log(i);
}

for(let x of arra){
    console.log(x);
}
console.log(`-----------`);

// the maping in the javascript 

let map = new Map().set('abc',1).set('def',2)

for(const x of map){
    console.log(x);
}

for(const [key, val] of map){
    console.log(`the key is ${key} and the value is ${val}`);
}

let objs = {"a": "sujith", "b":"kumar","c":"gavtha"}
Object.defineProperty(objs,'a',{enumerable : true})

for(let key in objs){
    console.log('object '+ key + " "+objs[key]);
}

var i = 5
while (i< 10){
    console.log(i);
    i++
}