// import * as React from "react";
// import * as ReactDOM from "react-dom";

// import { Hello } from "./components/Hello";

// ReactDOM.render(
//     <Hello compiler="TypeScript" framework="React" />,
//     document.getElementById("example")
// );
// import _$ = require('jquery');
// const $ = (_$ as any).default || _$;

const _ = require('lodash');
const $ = require('jquery');
console.log(_)
_.map([3, 2, 3, 4], (num: number) => {
    console.log(num);
})

let myName: string = 'Xcat Liu';
let myAge: number = 25;

let sentence: string = `Hello, my name is ${myName}. I'll be ${myAge + 1} years old next month.`;

console.log(sentence);

function alertName(): void {
    alert('My name is wyw');
}
alertName();


//冲突检测

enum WEEK {
    SUN,
    SAT,
    FRE,
    TUS
}

var w: any;

switch (w) {
    case WEEK.SUN:
        break;
    case WEEK.SAT:
        break;
    case WEEK.FRE:
        break;
    case WEEK.TUS:
        break;
}

let a: number | string;

a = 123;
a = 'abc';

function typeApm(a: any, b: any) {
    return a + b;
}

console.log(typeApm(12, 13));
$('#example').html('34fdfd');

//接口

interface labelledValue {
    label: string
}


function printLabel1(labelledObj: labelledValue) {
    console.log(labelledObj.label, '接口');
}
let myObj1 = { size: 10, bb: false, label: "Size 10 Object" };
printLabel1(myObj1)


//可选属性
interface SquareConfig {
    color?: string
}


function printLabel(labelledObj: SquareConfig) {
    console.log(labelledObj.color, '可选属性接口');
}
let myObj = { size: 10, bb: false, label: "Size 10 Object", color: 'red' };
printLabel(myObj)

//只读属性(只能读取，不能赋值);
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = {
    x: 10, y: 20
}

console.log(p1.x);

//数组只读
let b: number[]|string[] = [1, 2, 3, 4];
let ro: ReadonlyArray<string> = ['444'];
b = ro as string[];
console.log(b);
