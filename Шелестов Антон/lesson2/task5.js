/*
 Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
 */

var a = +prompt('Введите первое число'),
    b = +prompt('Введите второе число'),
    c = prompt('Укажите операцию'),
    result;

switch(c) {
    case '+':
        result = sum(a, b);
        break;
    case '-':
        result = diff(a, b);
        break;
    case '/':
        result = div(a, b);
        break;
    case '*':
        result = mult(a, b);
        break;
    default:
        result = 'Неверная операция';
        break;
}

alert(result);

function sum(a, b) {
    return 'Результат операции: ' + (a + b);
}
function diff(a, b) {
    return 'Результат операции: ' + (a - b);
}
function div(a, b) {
    return 'Результат операции: ' + (a / b);
}
function mult(a, b) {
    return 'Результат операции: ' + (a * b);
}