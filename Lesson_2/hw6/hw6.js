'use strict';
let inputSum = prompt('Введите сумму, которую вы хотите положить на счёт: '); //ввод числа


inputSum = String(inputSum); //приведение вводимого числа к строке
let lastSymbol = inputSum.slice(-1); //возврат последнего символа из строки
let beforeLastSymbol = inputSum.charAt(inputSum.length-2); //возврат предпоследнего символа из строки

/*Условие проверки на последний и предпоследний символ*/
if (lastSymbol==1 && beforeLastSymbol!=1) { //если последний символ 1 и предпоследний символ не 1, то:
    alert (`Вам зачислено на счёт ${inputSum} рубль`); //рубль
} else if (lastSymbol>1 && lastSymbol<=4 && beforeLastSymbol!=1) { //если посл. симв. больше 1, меньше или равен 4, то:
    alert (`Вам зачислено на счёт ${inputSum} рубля`); //рубля
} else if (lastSymbol==0 || beforeLastSymbol==1){ //если последний символ равен 0 или предпоследний равен 1, то:
    alert (`Вам зачислено на счёт ${inputSum} рублей`); //рублей
} else if (lastSymbol>=5 || beforeLastSymbol==1){ //если последний символ больше или равен 5 и предпосл равен , то:
    alert (`Вам зачислено на счёт ${inputSum} рублей`); //рублей
}
