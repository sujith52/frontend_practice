console.log(`the java script promises !`)

let promise = new Promise((resolve,reject)=>{
    let sucess = false 
    if(sucess){
        resolve(`the promise was sucessfull bro !`)
    } else {
        reject(`the promise was rejected by the god sujith bro !`)
    }
})

promise
    .then((res)=>{console.log(res)})
    .catch((ress)=>{console.log(ress)})

let prm2 = new Promise((resolve,reject)=>{
    resolve(`hello bro`)
})
prm2.then((res)=>{console.log(res)})

Promise.resolve(10)
    .then((val)=>{
        console.log(val)
        return val * 2
    })
    .then((val)=>{
        console.log(val)
        return val * 3 + ' hello sujjith ' + [2,3,45,6] + {name : "sujith"}
    })
    .then((val)=>{
        console.log(val)
    })
    .catch((err)=>{console.log(err)})

Promise.resolve(5)
    .then(x => x + 10)
    .then(x => x * 2)
    .then(x => console.log(x));

let p1 =  Promise.resolve("User")
let p2 =  Promise.resolve("products")
let p3 =  Promise.resolve("orders")

Promise.all([p1,p2,p3])
    .then(res=>{
        console.log(res)
    })

let p1 =  Promise.resolve("User")
let p2 =  Promise.reject("products")
let p3 =  Promise.resolve("orders")

Promise.all([p1,p2,p3])
    .then(res=>{
        console.log(res)
    })
    .catch(err =>{console.log(err)})

    const a = Promise.resolve(10);
const b = Promise.resolve(20);
const c = Promise.resolve(30);

Promise.all([a, b, c])
    .then(result => {
        console.log(result);
    });


let numbers = [1,2,3,4,5,6,7]
let numbers = ['a','b','sujith','sreejas','latahs']

numbers.reduce((promise,num)=>{
    return promise.then(()=>{
        console.log(num)
    })
},Promise.resolve())

console.log(`the racing of the promises `);

let r1 = new Promise(resolve =>{
    setTimeout(()=> resolve("Server A - sujith "),8000)
})
let r2 = new Promise(resolve =>{
    setTimeout(()=> resolve("Server B - sreejas "),5000)
})
let r3 = new Promise(resolve =>{
    setTimeout(()=> resolve("Server C - lathas "),6000)
})

Promise.race([r1,r2,r3])
    .then(race =>{
        console.log(`the winner in the race of promise is ${race}`)
    })


function DisposeBody(callback){
    console.log(`check for the hear beat sujith`)
    callback()
}
function BurnBody(){
    console.log(`burning the body `)
}

DisposeBody(BurnBody)

function GetData (callback) {
    setTimeout(()=> {callback(`the data was hacked `)},2000)
}
GetData((data)=>{console.log(data)})


function getDataPromise() {
    return new Promise ((resolve, reject)=>{
        GetData((res)=>{
            resolve(res)
        })
    })
}

getDataPromise()
    .then((res)=>{
        console.log(res)
    })


Promise.reject("Database hacked by mr. robot error")
    .catch((err)=>{console.log(err)})

Promise.resolve("hello sujith")
    .then((val)=>{
        throw new Error('sujith was broken')
    })
    .catch((err)=>{
        console.log(err)
    })
    .then(console.log(`the skipped part in the promise !`))

Promise.resolve("hello sujith")
    .then((err)=>{
        throw new Error(`the new error bro !`)
    })

Promise.resolve("hello sujith")
    .then((err)=>{
        return Promise.reject(`the new error bro !`)
    })

function delay(ms){
    return new Promise(resolve =>{
        setTimeout(resolve,ms)
    })
}

delay(2000).then(()=>{
    console.log(`2 seconds has passed bro !`)
})

async function main() {
    console.log(`wait for almost 2 secs bros `)
    await delay(2000)
    console.log(`maybe it was time `)
}

main()

console.log(`async and await form the javascript !`);

async function hello() {
    return `bye sujith !`
}

let main = hello()
console.log(typeof(main))
hello().then((val)=>{console.log(val+` well happy birthday bro `)})


function setData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`data has recieved sucessfully !`)
        },2000)
    })
}

async function mains() {
    console.log(`well this si the starting !`)
    let data = await setData()
    console.log(data)
    console.log(`well the data has ended !`)
}
mains()

async function fetchData(){
    return `hello world !`
}

fetchData()
    .then((val)=>{console.log(val)})
    .then(console.log(`well this will be the begining !`))
    .catch((err)=>{console.log(err)})
    .finally(()=>{console.log(`the finally block in the material world !`)})

console.log(`fetching the data from api`);

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        console.log(data)
    })


async function getUsers(){
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await res.json()
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}
getUsers()