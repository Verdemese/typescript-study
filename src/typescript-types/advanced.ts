type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
    name: 'Verde',
    privileges: ['create-server'],
    startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function typeGuard(animal: Animal): void;
function typeGuard(animal: Animal) {
    if (animal.type === 'bird') {
        return console.log(`bird's flying speed is ` + animal.flyingSpeed);
    }
}

const bird: Animal = {
    type: 'bird',
    flyingSpeed: 600,
};

typeGuard(bird);

const userInputElement = <HTMLInputElement>document.querySelector('#user-input')!;
// const userInputElement = document.querySelector('#user')! as HTMLInputElement;

userInputElement.value = 'typescript is fun to learn';

interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character'
};


const fetchedUserData = {
    id: 1,
    name: 'Max',
    // job: { title: 'CEO', description: 'My own company'}
}

console.log(fetchedUserData.job?.title);

const nullData = null;

const storedData = nullData ?? 'DEFAULT';

console.log(storedData);