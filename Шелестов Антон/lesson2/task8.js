/*
 С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
 */

var val = +prompt('Введите число'),
    pow = +prompt('Введите степень числа');

alert(power(val, pow));

function power(val, pow) {
    if(pow != 0) {
        return val * power(val, --pow);
    }
    return 1;
}