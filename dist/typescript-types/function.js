"use strict";
function functionAdd(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
printResult(functionAdd(1, 2));
let combineValues;
combineValues = functionAdd;
console.log(combineValues(8, 8));
function addAndHandle(n1, n2, callback) {
    const result = n1 + n2;
    console.log("result: " + result);
    const callbackResult = callback(result);
    console.log("callbackResult: " + callbackResult);
}
addAndHandle(10, 20, (result) => {
    console.log(result + "is transformed by CALLBACK FUNCTION");
    return result;
});
//# sourceMappingURL=../../src/dist/typescript-types/function.js.map