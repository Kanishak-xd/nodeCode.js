let a = 4;
let b = 2;

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function calc(a, b, addCallback, subtractCallback, multiplyCallback, divideCallback) {
    console.log(`${a} + ${b} = ${addCallback(a, b)}`);
    console.log(`${a} - ${b} = ${subtractCallback(a, b)}`);
    console.log(`${a} * ${b} = ${multiplyCallback(a, b)}`);
    console.log(`${a} / ${b} = ${divideCallback(a, b)}`);
}

calc(a, b, add, subtract, multiply, divide);