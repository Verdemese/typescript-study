console.log("watch mode is activated!!");

const button = document.querySelector("button")!;

function checkAnalytics(someData: string) {
    console.log(someData);
}

checkAnalytics("string data");

function clickHandler(message: string) {
    console.log("clicked! " + message);
}

button.addEventListener("click", clickHandler.bind(null, "you're welcome!"));
