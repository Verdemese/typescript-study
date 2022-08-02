const names: Array<string> = ['verde', 'jaesoon'];

async function promiseTest() {
    const promise: Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is done');
        }, 4000);
    });

    const result = await promise.then((response: string) =>
        console.log(response)
    );
}

promiseTest();

function merge<T extends object, U extends object>(a: T, b: U) {
    return { ...a, ...b };
}

console.log(merge({ name: 'verde' }, { age: 27 }));

const mergedObj = merge({ name: 'verde' }, { age: 27 });
const mergedObj2 = merge({ name: 'verde' }, { age: 27 });

console.log(mergedObj.age);
console.log(mergedObj2);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';

    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }

    return [element, descriptionText];
}

console.log(countAndDescribe('asd'));

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return obj[key];
}

console.log(extractAndConvert({ name: 'verde', age: 27 }, 'age'));

interface StorageItemObject {
    [prop: string]: string | number;
}

type ItemType = string | number | StorageItemObject;

class DataStorage<T extends ItemType> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getData() {
        return [...this.data];
    }
}

const storage = new DataStorage<ItemType>();

storage.addItem('verde');
storage.addItem(27);
storage.addItem({ name: 'verde', age: 27 });
console.log(storage.getData());
storage.removeItem('verde');
console.log(storage.getData());

const objStorage = new DataStorage<ItemType>();

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    completeUntil: Date
): CourseGoal {
    let courseGoal:Partial<CourseGoal> = {};

    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;

    return courseGoal as CourseGoal;
}

console.log(createCourseGoal('Typescript', 'Typescript is fun to learn', new Date()));

const personInfo: Readonly<string[]> = ['verde', 'games'];

// personInfo.push('coding');
