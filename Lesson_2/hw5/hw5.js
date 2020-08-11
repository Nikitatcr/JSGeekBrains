'use strict';

let a,b,act;

/**
 * Функция складывает переданные параметры
 * @param {number} arg1
 * @param {number} arg2
 * @return {number}
 */
function sum(arg1,arg2) {
    return arg1+arg2;;
}

/**
 * Функция вычитает переданные параметры
 * @param {number} arg1
 * @param {number} arg2
 * @return {number}
 */
function sub(arg1,arg2) {
    return arg1-arg2;
}

/**
 * Функция умножает переданные параметры
 * @param {number} arg1
 * @param {number} arg2
 * @return {number}
 */
function mul(arg1,arg2) {
    return arg1*arg2;
}

/**
 * Функция делит переданные параметры
 * @param {number} arg1
 * @param {number} arg2
 * @return {number}
 */
function div(arg1,arg2) {
    return arg1/arg2;
}

/**
 *
 * @param {number} arg1
 * @param {number} arg2
 * @param {string} operation [Варианты: "+", "-", "/", "*"]
 * @return {number}
 */
function mathOperation(arg1,arg2,operation){
    switch(operation) {
        case "+":
            return sum(arg1,arg2);
        case "-":
            return sub(arg1,arg2);
        case "*":
            return mul(arg1,arg2);
        case "/":
            return div(arg1,arg2);
        default:
            alert(`Данная функция (${operation}) не используется. Используйте '+', '-', '*', '/'`);

    }
}

a = +prompt('Введите первое число: ');
b = +prompt('Введите второе число: ');
act = prompt('Введите действие: ');

alert(`Результат ${a} ${act} ${b} = ${mathOperation(a,b,act)}`);