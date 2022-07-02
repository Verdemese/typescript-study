"use strict";
let userInput;
let userName;
userInput = "Hwang jae soon";
if (typeof userInput === "string") {
    userName = userInput;
}
function createError(message, code) {
    throw { message, errorCode: code };
}
createError('this is the error', 400);
//# sourceMappingURL=../../src/dist/typescript-types/unknown.js.map