



function getCheese()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cheese="cheese"
            // return callback(cheese)
           resolve(cheese)
        },2000)
    })
   
}
function makeDough(cheese){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        const dough="dough" + " and " +cheese
        resolve(dough)
    })
},2000)
}
function pizzaReady(doughAndCheese){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const pizza="this is your pizza with "+doughAndCheese
            resolve(pizza)
        },2000)
    })
  
    
}
function payment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const money="rs 500"
            resolve(money)
        },2000)
    })
    
    
}
async function bakedPizza(){
    const cheese=await getCheese()
    console.log("your cheese is ready")
    const dough=await makeDough(cheese)
    console.log('your cheese and dough is ready')
    const pizza =await pizzaReady(dough)
    if(pizza){
        console.log('pizza is consumed')
        const money=await payment()
        console.log('your bill is:',money)
    }
    // console.log(pizza)
}
bakedPizza()