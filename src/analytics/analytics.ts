console.log("watch mode is activated!!");

let container = [1, 2, 3];
let duplicate = [...container];

const button = document.querySelector("button")!;

function checkAnalytics(someData: string) {
    console.log(someData);
}

checkAnalytics("string data");

function clickHandler(message: string) {
    console.log("clicked! " + message);
}

button.addEventListener(
    "click",
    clickHandler.bind(null, "clicked with the binded function")
);

class StaticClass {
    private name: string;
    private static staticNumber: number = 1;

    constructor() {
        this.name = "test";
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

console.log(class3.getPrivateStaticNumber());

console.log(StaticClass.getPrivateStaticNumberWithStaticfunction());

class ShortHand {
    constructor(private readonly id: number, public name: string) {}

    getId() {
        return this.id;
    }

    setId(): void {
        // this.id = 2;
    }
}

const short = new ShortHand(1, "verde");

console.log(short.getId());
console.log(short.name);

class ITDepartment extends ShortHand {
    constructor(id: number, name: string, private admins: string[]) {
        super(id, name);
    }

    printAdmins() {
        console.log(this.admins);
    }
}

const department = new ITDepartment(1, "verde", ["verde", "boosee"]);

department.printAdmins();
