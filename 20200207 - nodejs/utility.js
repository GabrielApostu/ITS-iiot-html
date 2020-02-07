"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function check(num) {
    if (num < 0)
        throw "Numero non valido";
}
function add(num1, num2) {
    check(num1);
    check(num2);
    return num1 + num2;
}
exports.add = add;
