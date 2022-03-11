// Callback function and pass different functions

function welcomeMassage(name,geetHandler){
    geetHandler(name);
}
// const name = ['tom', 'lala', 'mama'];
// const obj = {name: 'tom', age: 11};

function greet(name){
    console.log('morning', name);
}

welcomeMassage('tom', greet);