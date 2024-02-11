const peoples=[

    {name:"jackson"},
    {name:"ram bahadur"}
]

function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const result=peoples.map((name,index)=>{return name.name})
            resolve(result)
            console.log(`output:${result}`)
        },2000)
    })
}

function createData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            peoples.push(data)
            resolve()
        },1000)
    })
}
// getData()
createData( {name:"sita"}).then(getData).catch(err=>console.log(err))

//callback function
// function createName(name,callback){
//     callback(name)
// }
// function displayName(name){
//     console.log(`my name is ${name}`)
// }
// createName("jackson",displayName)

