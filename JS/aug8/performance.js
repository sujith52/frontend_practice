console.log(Date.now())

console.log(performance.now())

let start = Date.now()
for(let i = 1; i<= 100000;i++){}
let end = Date.now()
console.log('the time is ',(end - start))

let star1 = performance.now()
for(let i =2;i<500000;i++){}
let end1 = performance.now()
console.log(`the performance is `, (end1 - star1))

console.log(Date.now())
console.log(Math.floor(Date.now() / 1000))

let curr = performance.now()

for(let i =1; i<1000000;i++){}
let end = performance.now()
console.log(`the time is ${(end - curr)}`)


