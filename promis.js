const peoples = [
    { name: "jackson" },
    { name: "ram bahadur" }
];

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = peoples.map((person) => person.name);
            resolve(result);
            return console.log(result,'result')
        }, 2000);
    });
}

function createData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            peoples.push(data);
            resolve();
        }, 5000);
    });
}

createData({ name: "sita" })
    .then(getData)
    .catch(error => console.error(error));



// function fetchData() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Data fetched successfully");
//       }, 2000);
//     });
//   }
  
//   function processData(data) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Data processed: " + data);
//       }, 2000);
//     });
//   }
  
//   fetchData()
//     .then((result) => {
//       console.log(result);
//       return processData(result);
//     })
//     .then((processedResult) => {
//       console.log(processedResult);
//     });