console.log("watch mode is activated!!");

const button = document.querySelector("button")!;

function checkAnalytics(someData: string) {
    console.log(someData);
}

checkAnalytics("string data");

function clickHandler(message: string) {
    console.log("clicked! " + message);
<<<<<<< HEAD
}

button.addEventListener("click", clickHandler.bind(null, "you're welcome!"));
=======
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
    constructor (private readonly id:number, public name:string) {

    }

    getId() {
        return this.id;
    }

    setId(): void {
        // this.id = 2;
    }

}

const short = new ShortHand(1, 'verde');

console.log(short.getId());
console.log(short.name);

>>>>>>> 0dbc11c21bac0de1f1cfaabc633a93ea01a12930
