'use strict';

let inputNumber = prompt('Введите число: ');

/**
 * Функция преобразует вводимое число в объект
 * @param number Число от 0 до 999.
 * @returns Объект с единицами, десятками и сотнями, либо пустой объект
 */
function getNumber(number) {
    if(Number.isInteger(number) || number < 0 || number > 999) { //условие неправильного ввода
        console.log('Вы ввели неправильное значение! Введите от 0 до 999!');
        return {}; //возвращение пустого объекта в случае невыполнения условия
    }

    return {
        units: number % 10,
        hundreds: Math.floor(number/100),
        deciles: Math.floor(number/10)%10,
    }
}

console.log(getNumber(inputNumber));