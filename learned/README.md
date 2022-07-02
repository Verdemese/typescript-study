# 2022-07-22

### compiling multiple files

watch mode 를 activate 할 경우, tsc /index.ts 와 같이 일일이 compile 할 필요가 없다.
만약 여러개의 파일을 동시에 컴파일하여 확인 해야할 경우는?

Typescript project를 진행하는 프로젝트의 command에서

```
tsc --init
```

입력하면
_`tsconfig.json`_ 파일이 생성된다.
이것은 프로젝트 내의 파일을 Typescript가 관리하는 파일이다.

이후 부터는 특정 파일의 경로와 파일명을 입력하지 않아도

```
tsc
```

입력하면 프로젝트 내의 모든 ts 파일이 compile 된다.

```
tsc --watch 또는 tsc -w
```

를 입력하여 프로젝트 내 모든 ts 파일의 변경을 감지, compile 하여 브라우저에 바로 적용할 수 있다.

---

### tsconfig.json

_tsconfig.json_ 은 compile 설정을 할 수 있는 파일
```
{
    "compilerOptions": {
        ...
        "sourceMap": true,
        "mapRoot": "./dist"
        "outDir": "./dist"
        "rootDir": "./src",
        "mapRoot": "./dist",
        "removeComments": true,
        "noEmit": true
    },
    "exclude": [
        "analytics.ts",
        "*basics.ts",
        "*.dev.ts",
        "**/*.dev.ts"
    ]
    "include": [
        "app.ts"
    ]
}
```

* `exclude`: compile 시에 compile 하지 않을 ts 파일을 설정할 수도 있다.
* `include`: compile을 해야하는 파일을 지정할 수 있다.
* `sourceMap`: 브라우저에게 ts 파일을 전달하여 브라우저에서 ts파일을 debug 할 수 있게끔 해주는 속성이다.
* `outDir`: compile 된 js 파일을 어떤 경로로 output 할 것인지를 지정하는 속성이다.
* `rootDir`: compile 할 root directory를 지정하는 속성이다. default는 현재의 프로젝트 root directory로 설정되어 있다.
* `mapRoot`: .map 파일 경로 지정 속성
* `removeComments`: 주석제거
* `noEmit`: 잠재적 오류를 발견할 시 output을 생성하지 않는 속성

    > `*, **` 를 파일명 혹은 경로 접한다면, `*, **`가 접해있는 파일명, 경로를 포함한 모든 파일의 compile을 선택한다는 의미이다.

--- 
```
let bool;

function checkError(someData) {
    console.log(somedata);

    bool = true;

    console.log(bool);
}

checkError("string data");
```
- Parameter 'someData' implicitly has an 'any' type. 에러 발생
- console.log(bool) 는 에러가 발생하지 않음

에러가 발생하는 이유는 checkError("string data")가 호출되기 이전에 함수 checkError의 parameter가 선언되었기 때문에 Typescript가 infer 할 수 없기 때문이다.

