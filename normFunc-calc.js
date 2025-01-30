let a = 2;
let b = 3;

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

function calc(a, b) {
    console.log(`${a} + ${b} = ${add(a, b)}`);
    console.log(`${a} - ${b} = ${subtract(a, b)}`);
    console.log(`${a} * ${b} = ${multiply(a, b)}`);
    console.log(`${a} / ${b} = ${divide(a, b)}`);
}

calc(a, b);