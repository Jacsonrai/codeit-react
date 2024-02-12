
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
        const dough="dough" + "and" +cheese
        resolve(dough)
    })
},2000)
}
function pizzaReady(doughAndCheese){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const pizza="this is your pizza with "+doughAndCheese
            reject(pizza)
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
getCheese().then((cheese)=>{
   return makeDough(cheese)
}).then((dough)=>{
   return pizzaReady(dough)
}).then((pizza)=>{
    console.log(pizza)
    if(pizza){
        console.log("table is clear")
        return payment()
    }
    else{
        console.log("need to order more..")
    }
}).then((money)=>{
    console.log('you bill is:',money)
}).catch(err=>{
    console.log("error occured while making pizza. error occured in this step: ",err)
})