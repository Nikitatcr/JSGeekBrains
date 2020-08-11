'use strict';
let a,b,dif;

a = +prompt('Введите число А');
b = +prompt('Введите число В');

if (a>=0 && b>=0) {
    dif = a-b;
    alert(`Разница чисел = ${dif}`);
} else if (a<0 && b<0) {
    dif = a*b;
    alert(`Произведение чисел = ${dif}`);
/*} else if ((a>=0 && b<0) || (a<0 && b>=0)) {
    dif = a+b;
    alert(`Сумма чисел = ${dif}`);*/
} else if (a*b < 0) {
    dif = a+b;
    alert(`Сумма чисел = ${dif}`);
}

