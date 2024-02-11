const peoples=[

    {name:"jackson"},
    {name:"ram bahadur"}
]

function getData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = peoples.map((person) => person.name);
            console.log(`output: ${result}`);
            resolve();
        }, 2000);
    });
}

function createData(data){
    return new Promise((resolve) => {
        setTimeout(() => {
            peoples.push(data);
            resolve();
        }, 1000);
    });
}

async function processData() {
    await createData({name: "sita"});
    await getData();
}

processData();