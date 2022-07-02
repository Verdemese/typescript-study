"use strict";
var role;
(function (role) {
    role["ADMIN"] = "admin";
    role["READ_ONLY"] = "read_only";
    role["AUTHOR"] = "author";
})(role || (role = {}));
const person = {
    name: "Verdemese",
    age: 30,
    hobbies: ["Coding", "Cooking"],
    role: role.ADMIN,
    complex: [
        {
            num1: 1,
            str1: "str",
        },
        {
            num1: 1,
            str1: "str",
        },
        {
            num1: 1,
            str1: "str",
        },
        {
            num1: 1,
            str1: "str",
        },
    ],
};
const copyHobbies = person.complex;
console.log(person.role);
//# sourceMappingURL=../../src/dist/typescript-types/person_obj.js.map