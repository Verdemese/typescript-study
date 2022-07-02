enum role {
    ADMIN = 'admin',
    READ_ONLY = 'read_only',
    AUTHOR = 'author'
}

const person =
    /* : {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
    complex: {
        num1: number;
        str1: string;
    }[];
}  */
    {
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

const copyHobbies: {
    num1: number;
    str1: string;
}[] = person.complex;

console.log(person.role);
