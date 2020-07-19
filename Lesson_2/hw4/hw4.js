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

a = +prompt('Введите первое число: ');
act = prompt('Введите действие: ');
b = +prompt('Введите второе число: ');

if (act == "+") {
    alert(sum(a,b));
} else if (act == "-"){
    alert(sub(a,b));
} else if (act == "*") {
    alert(mul(a, b));
} else if (act == "/") {
    alert(div(a, b));
} else
    alert("Вы ввели неправильный оператор! Выберите из - '+', '-', '*', '/' ");