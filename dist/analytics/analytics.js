"use strict";
console.log("watch mode is activated!!");
let container = [1, 2, 3];
let duplicate = [...container];
const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("button clicked!!!");
});
function checkAnalytics(someData) {
    console.log(someData);
}
checkAnalytics("string data");
//# sourceMappingURL=../../src/dist/analytics/analytics.js.map