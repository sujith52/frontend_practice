console.log(`Javascript playground`);

var user = {}
Object.defineProperty(user,"fooo",{value: 'show', enumerable: true})
Object.defineProperty(user,"faah",{value:'hidden', enumerable: false})
for (var prop in user){
    console.log(user[prop]);
}

let simpleObj = {hello : "worlds"}
let out = Object.getOwnPropertyDescriptor(simpleObj,'hello')
console.log(out);

console.log(Object.getOwnPropertyDescriptor(user,'fooo'));

console.log(Object.keys(user));

let obj3 = {
    a:'sujith',
    b : 'sreeez',
    c : 'lathass'
}

console.log(Object.entries(obj3));
for (let [key, value] of Object.entries(obj3)){
    console.log(`the key is ${key} and the value is ${value}.`);
}

