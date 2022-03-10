// double equal == vs triple equal ===

// == double equal
const first = 2;
const second = '2';
if(first == second){
    console.log('true');
}
else{
    console.log('false');
}

// === triple equal (strictly check type of)

const third = 2;
const fourth = '2';
if(third === fourth){
    console.log('true');
}
else{
    console.log('false');
}