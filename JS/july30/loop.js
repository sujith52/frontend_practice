console.log("java script loops concept ");

const colors = ['red','blue','green','black']
for(const colo of colors){
    console.log(colo);
}

let num = [10,8,6,4,8,6,1]
num.every(function(val, index, arr ){
    console.log(val);
    return val % 2 == 0    
})

let nums = [1,5,6,3,4].filter(value => value > 2)
console.log(nums);

let sreArray = "StackOverflowingIntoAI".split("")
console.log(sreArray);
