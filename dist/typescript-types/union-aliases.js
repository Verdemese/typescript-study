"use strict";
function combine(input1, input2) {
    let added;
    if (typeof input1 === "number" && typeof input2 === "number") {
        added = input1 + input2;
    }
    else {
        added = input1.toString() + input2.toString();
    }
    return added;
}
const combineAges = combine(30, 26);
console.log(combineAges);
const combineNames = combine("Verde", "Mese");
console.log(combineNames);
document.querySelector('.asd').addEventListener('click', function (event) {
    console.log(1);
});
//# sourceMappingURL=../../src/dist/typescript-types/union-aliases.js.map