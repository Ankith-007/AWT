function* myGen(){
    yield 1;
    yield 2;
    yield 3;
}
console.log(myGen().next());
const genObj=myGen();
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());

function* sampleGen(){
    yield 'Apples';
    yield 'Banana';
    console.log('Heyy after banana');
    yield 'Mango';
}
function* getNextId(){
    let id=0;
    while(id<3)
    yield id++;
}
let createUser = getNextId();
console.log(createUser.next().value);
console.log(createUser.next().value);
console.log('printing the next');
console.log(createUser.next().value);
console.log(createUser.next().value);
