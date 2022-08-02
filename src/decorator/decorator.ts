function Logger(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
}

@Logger
class Person {
    name = 'Max';

    constructor() {
        console.log('Created Person instance');
    }    
}

const decoPerson = new Person();

console.log(decoPerson);