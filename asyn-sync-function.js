// const personName=[
//     {name:"jackson"},
//     {name:"Ram"}
// ]

// function getPersonName(){
//     setTimeout(()=>{
//        const resultName= personName.map((person)=>{return person.name})
//        console.log(resultName)
//     },1000)
//     //delay for 1000ms = 1sec
// }

// function createPerson(personPayload,callback){
//     setTimeout(()=>{
//         personName.push(personPayload)
//         callback()
//     },4000)//4sec
// }

// createPerson({name:"sita"},getPersonName)









//scallback
// function functionOne(name,callback){
//     callback(name)
// }

// function functionTwo(name){
//     console.log(`my name is:${name}`)
// }
// functionOne("jackson",functionTwo)

// const dataPromise= new Promise((resolve,reject)=>{
//     const error=false
//     if(!error){
//         resolve("data get successfully")
//     }
//     else{
//         reject("data failed")
//     }
// })
// dataPromise.then((res)=>console.log(res)).catch(err=>console.log(err))