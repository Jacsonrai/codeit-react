// we are talking about object literal not object singleton
// example of object singleton
// Object.create
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// now lets talk about object literal
// object have key and value
// const personObject={
//     name:"ram",
//     address:"kathmandu",
//     occupation:"web-developer"
// }
// object access process
// console.log( typeof personObject.name)
// console.log(personObject[address])
// console.log(personObject["address"])

// Object freez concept
// Object.freeze(personObject)
// personObject.address="lalitpur"
// console.log(personObject)

const person={
    name:"jackson",
    "full name":"jackson rai",
    "address":"kathmandu"
}
// console.log(person["full name"])
// console.log(person["name"])
// console.log(person.age)
// console.log(person.address)
const example=[1,2,3,4]
console.log(typeof person)
console.log(Array.isArray(person))




