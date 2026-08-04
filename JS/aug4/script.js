console.log(`1 open BMS`);
console.log(`2 select movie `);
console.log(`3 select the timings`);
console.log(`4 select seats`);
console.log(`5 make the payment `);

// javascript async program !
console.log(`-----------------`);

setTimeout(()=>{
    console.log(`1 open BMS`);
},12000)
setTimeout(()=>{
    console.log(`2 select movie `);
},3000)
setTimeout(()=>{
    console.log(`3 select the timings`);
},5000)
setTimeout(()=>{
    console.log(`4 select seats`);
},8000)
setTimeout(()=>{
    console.log(`5 make the payment `);
},2000)

// callback function in the js !
setTimeout(()=>{
    console.log(`-----------------`);
    console.log(`1 open BMS`);
    setTimeout(()=>{
        console.log(`2 select movie `);
        setTimeout(()=>{
            console.log(`3 select the timings`);
            setTimeout(()=>{
                console.log(`4 select seats`);
                setTimeout(()=>{
                    console.log(`5 make the payment `);
                },2000)
            },8000)
        },5000)
    },3000)
},12000)