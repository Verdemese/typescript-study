function functionAdd(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log("Result: " + num);
}

printResult(functionAdd(1, 2));

let combineValues: (a: number, b: number) => number;

combineValues = functionAdd;

console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
    const result = n1 + n2;
    console.log("result: " + result);
    const callbackResult = callback(result);
    console.log("callbackResult: " + callbackResult);
}

addAndHandle(10, 20, (result) => {
    console.log(result + "is transformed by CALLBACK FUNCTION");
    return result;
});
