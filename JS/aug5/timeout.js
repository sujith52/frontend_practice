console.log(`the setime out function !`);

function main(){
    console.log(`this will execute after every 5 sec`);
    
}

let interval = setInterval(main,5000)
// intreupting the time flow !
setTimeout(()=>{
    clearInterval(interval)
},10000)

// understanding stack ans que stroing

console.log(`one`);
setTimeout(()=>{console.log(`two`)},0)
console.log(`three`);


let onesec = setTimeout(()=>{console.log(`the 1 second runner `)})
clearTimeout(onesec)

localStorage.setItem("name","Sujith")
console.log(localStorage.getItem("name"))

sessionStorage.setItem("age",22)
console.log(sessionStorage.getItem("age"))

sessionStorage.removeItem("name")

// local storage keeps forever
// session storage will be deleted after the tab closes 
localStorage.clear()

let user = {
    name : "sujith", age : 22, gender : "male"
}
localStorage.setItem("user",user)
localStorage.setItem("user",JSON.stringify(user))

let data = JSON.parse(localStorage.getItem("user"))
console.log(data.age)

let video = document.querySelector('video')
try {
    video.volume = localStorage.getItem('volume')
} catch (error) {
    alert(`there was cookies so `)
}



