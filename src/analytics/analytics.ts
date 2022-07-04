console.log("watch mode is activated!!");

let container = [1, 2, 3];
let duplicate = [...container];

const button = document.querySelector("button")!;


function checkAnalytics(someData: string) {
    console.log(someData);
}

checkAnalytics("string data");

function clickHandler(message: string) {
    console.log('clicked! ' + message);
}

button.addEventListener("click", clickHandler.bind(null, 'through the function'));
