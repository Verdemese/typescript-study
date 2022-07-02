console.log("first typescript meeting, lite-server testing asdasd");

function basicAdd(num1: number, num2: number, printResult?: boolean) {

    const added = num1 + num2;

    if (printResult) {
        return 'result:' + added;
    }

    return 'print result did not put on function';
}

const number1 = 5;
const number2 = 2.8;
const basicPrintResult = true;

const result = basicAdd(number1, number2, basicPrintResult);
console.log(result);