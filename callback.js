
function getCheese(callback)
{
    setTimeout(()=>{
        const cheese="cheese"
        // return cheese
       return callback(cheese)
    },2000)
   
}
function makeDough(callback){
    setTimeout(()=>{
    const dough="dough"
    return callback(dough)
},2000)
}
function pizzaReady(cheese,dough,callback){
    setTimeout(()=>{
        const pizza="this is your pizza with " +" " +cheese+" "+dough
        return callback(pizza)
    },2000)
    
}
function payment(callback){
    setTimeout(()=>{
        const money="rs 500"
        return callback(money)
    },2000)
    
}
getCheese((cheese)=>{
    console.log('i bought a',cheese)
    makeDough((dough)=>{
        console.log('i have now:',cheese +" and "+ dough)
        pizzaReady(cheese,dough,(pizza)=>{
            console.log('your pizza is ready',pizza)
            payment((money)=>{
                console.log("you have to pay:",money)
            })
        })
    })
})
