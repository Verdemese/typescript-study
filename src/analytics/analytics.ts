// console.log("watch mode is activated!!");

const button = document.querySelector('button')!;

function checkAnalytics(someData: string) {
    // console.log(someData);
}

checkAnalytics('string data');

function clickHandler(message: string) {
    // console.log("clicked! " + message);
}

button.addEventListener('click', clickHandler.bind(null, "you're welcome!"));

button.addEventListener(
    'click',
    clickHandler.bind(null, 'clicked with the binded function')
);

class StaticClass {
    private name: string;
    private static staticNumber: number = 1;

    constructor() {
        this.name = 'test';
    }

    addStaticNumber(): void {
        StaticClass.staticNumber = StaticClass.staticNumber + 1;
    }

    getStaticNumber(): number {
        return StaticClass.staticNumber;
    }

    getName(): string {
        return this.name;
    }

    getPrivateStaticNumber(): number {
        return StaticClass.staticNumber;
    }

    static getPrivateStaticNumberWithStaticfunction(): number {
        return StaticClass.staticNumber;
    }
}

const class1 = new StaticClass();
const class2 = new StaticClass();
const class3 = new StaticClass();

class1.addStaticNumber();
class2.addStaticNumber();
class3.addStaticNumber();

// console.log(class3.getPrivateStaticNumber());

// console.log(StaticClass.getPrivateStaticNumberWithStaticfunction());

class ShortHand {
    protected employees: string[] = ['verde', 'jaesoon'];

    constructor(protected readonly id: number, public name: string) {}

    getId(): number {
        return this.id;
    }

    setName(name: string): void {
        this.name = name;
    }

    setEmployees(name: string): void {
        this.employees.push(name);
    }
}

const short = new ShortHand(1, 'verde');

short.setName('jaesoon');

// console.log(short.getId());
// console.log(short.name);

class ITDepartment extends ShortHand {
    private lastReport: string =
        'The climate has been changed a lot by human beings';

    constructor(id: number, name: string, private admins: string[]) {
        super(id, name);
    }

    static createEmployee(name: string) {
        return { name };
    }

    setName(): void {
        this.name = 'verde';
    }

    printAdmins(): void {
        // console.log(this.admins);
    }

    printEmployees() {
        // console.log(this);
    }

    get recentReport() {
        if (!!this.lastReport) {
            return this.lastReport;
        }

        throw new Error('There is no recent report');
    }

    set recentReport(value: string) {
        if (!value) throw new Error('Please pass valid value');

        this.lastReport = value;
    }
}

const department = new ITDepartment(1, 'verde', ['verde', 'boosee']);

department.printAdmins();
department.setName();
department.printEmployees();

department.recentReport = 'valid value';
// console.log(department.recentReport);

// console.log();
// console.log(ITDepartment.createEmployee("verdemese"));

abstract class Department {
    protected abstract employee: string[];

    abstract describe(this: Department): void;
}

class AccountingDepartment extends Department {
    protected employee: string[] = ['verde', 'mese'];

    constructor(id: number, name: string) {
        super();
    }

    // override from Department
    describe(): void {
        console.log('override method from Department');
    }

    get employeeContainer() {
        return this.employee;
    }
}

const account = new AccountingDepartment(1, 'verde');

account.describe();
console.log(account.employeeContainer);

type named = {
    name: string;
    age: number;
    address: string;
};

interface Named {
    name: string;
    age: number;
    address?: string;
}

interface Person extends Named {
    greet(phrase: string): void;
}

let user1: Person = {
    name: 'verde',
    age: 27,
    greet(phrase: string): void {
        console.log(phrase + ' ' + this.name);
    },
};

user1.greet('Nice to meet you');

class PrintPerson implements Person {
    name: string;
    age: number;
    address:string = '대전';

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log('my name is ' + this.name);
    }
}

const printPerson = new PrintPerson('verde', 27);

printPerson.greet();
