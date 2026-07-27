console.log(typeof "Sujith");

num = 9;

console.log(typeof(num));

class Dog {}

class Cat extends Dog{}

const mypet = new Dog()
console.log(mypet instanceof Dog);
console.log(mypet instanceof Cat);


function sum(...args){
    if(args.length === 1){
        const [firstarg] = args
        if(firstarg instanceof Array){
            return sum(...firstarg)
        }
    }
    return args.reduce((a,b)=> a + b)
}

console.log(sum(1,5,6));
console.log(sum([1,2,3]));
console.log(sum(4));


console.log(Object.prototype.toString.call("String"));
console.log(Object.prototype.toString.call(true));
console.log(Object.prototype.toString.call(56));
console.log(Object.prototype.toString.call(896.36));
console.log(Object.prototype.toString.call([1,23,5]));
console.log(Object.prototype.toString.call({name : 56}));
console.log(Object.prototype.toString.call(function(){}));
console.log(Object.prototype.toString.call(new Date(2563,12,56)));
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call(undefined));
console.log(Object.prototype.toString.call(Error));
console.log(Object.prototype.toString.call(console));
