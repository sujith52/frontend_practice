console.log(`objects things`);

let objss = {
    foo : 'faah',
    num : [1,5,6,4],
    names : {
        foo : 'fahhhhh'
    }
}

console.log(objss);
Object.freeze(objss)
objss.foo = "sujithhhh"
console.log(objss);

let existing = {a:1, b:{c:2}}
console.log(existing, `type of ${typeof(existing)}`);
let copy = JSON.stringify(existing)
console.log(copy, `type of ${typeof(copy)}`);


for (let props in objss){
    Object.keys(props).map((key) => {console.log(key);
    })
}

let user = {
    firstName : "Sujith Kumar"
}

Object.assign(user,{lastName : "Gavathakatla", age : 22})
console.log(user);


var obj = {}
Object.defineProperty(obj, 'fooo',{value: 'faaahh'})
console.log(obj);

// using getters and setters in the object functions bro 

let per = {name : "sujith", sur : "gavath"}
Object.defineProperty(per, 'fullsname',{
    get: function(){return this.name + " hola  "+this.sur},
    set: function (value) {[this.name, this.sur] = value.split(" ")}
})

console.log(per.name);
console.log(per.sur);

per.name = "sreejaaaaaa"
console.log(per);

let anArra = ['sujith', 'kumar']
let anObj = {0: 'sujith', 1:'kumar'}
console.log(anArra[1]);
console.log(anObj[0]);


// object acessing properties ~

let grand = {inherit : "i mainherited kay"}

let child = Object.create(grand)

child.visible = "I am visible key ra babu"

Object.defineProperty(child,"hiddenkey",{
    value : "I am hidden secret key mava",
    enumerable : false
})

console.log("---------------");
for (let keys in child){ 
    console.log(keys);
}
console.log("---------------");

console.log(Object.keys(child));
console.log(Object.getOwnPropertyNames(child));
