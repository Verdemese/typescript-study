# 2022-07-07

### interface

```
interface Named {
    // Person interface를 통해 생성된 object는 name property를 readonly 속성으로 변환
    readonly name: string;
    age: number;
}

interface Person extends Named {
    //optional parameter (question mark)
    address ? : string

    greet(phrase: string): void;
}

class PrintPerson implements Person {
    name: string;
    age: number;
    
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    greet():void {
        console.log('my name is ' + this.name);
    }
}

const printPerson: Person = new PrintPerson('verde', 27);

printPerson.greet();
// output: my name is verde
```
- `implements` keyword를 통해 사용
- interface는 concrete value를 가질 수 없다.
- method를 선언할 수 있다.
- readonly modifier를 사용할 수 있다.
- 다른 interface로부터 상속 받을 수 있다.
- multiple inheritance가 가능하다. (`,`를 사용하여 여러 inteface를 입력)
- `?`를 통해 optional parameter, function을 추가하는 것이 가능하다.

#### interface 와 abstract class의 차이점

| interface                                                                                 |                    abstract class |
| :---------------------------------------------------------------------------------------: | :-------------------------------: |
| concrete value를 가질 수 없다.                                                            |    concrete value를 가질 수 있다. |
| compilation에만 존재함.<br />(runtime에는 존재하지 않으므로 Typescript에서만 사용 가능함) |                runtime에서 존재함 |
| `implements` keyword                                                                        |                   `extends` keyword |
| multiple implements가 가능함                                                              | 오직 하나의 부모 class만 상속가능 |
| 모든 object에서 사용(호출) 가능(같은 structure로 구성할 경우) | 상속(`extends`)을 통해서만 사용 가능(instance화 불가능)<br>(override하여 사용) |

 
 :memo: [reference](https://stackoverflow.com/questions/50110844/what-is-the-difference-between-interface-and-abstract-class-in-typescript)
