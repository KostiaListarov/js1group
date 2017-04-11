/*С помощью рекурсии организовать функцию возведения числа в степень. 
Формат: function power(val, pow), где val – заданное число, pow – степень.*/

var val = 2,
    pow = 5;
  
function power(val, pow) {
  var current = val;
  if (pow > 1) {
    current = power(val, pow - 1, current) * val;
  }
  return current;
}

alert(power(val, pow));