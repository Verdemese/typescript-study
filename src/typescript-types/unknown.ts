let userInput: unknown;

let userName: string;

userInput = "Hwang jae soon";
if (typeof userInput === "string") {
    userName = userInput;
}

function createError(message: string, code: number): never {
    throw { message, errorCode: code };
}

createError('this is the error', 400);