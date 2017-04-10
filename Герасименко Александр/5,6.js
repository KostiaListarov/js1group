/*Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, 
operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций 
(использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
*/

var num1, num2, operation, result;

num1 = +prompt("Введите первое число");
num2 = +prompt("Введите второе число");
operation = prompt("Введите операцию (+ - * /)");
mathOperation(/*num1, num2, */operation);


function addition(num1, num2) {
  result = num1 + num2;
  return result;
}

function subtraction(num1, num2) {
  result = num1 - num2;
  return result;
}

function multiplication(num1, num2) {
  result = num1 * num2;
  return result;
}

function division(num1, num2) {
  result = num1 / num2;
  return result;
}

function mathOperation(/*num1, num2, */operation) {
  switch (operation){
    case '+':
      addition(num1, num2);
      alert(result);
      break;
    case "-":
      subtraction(num1, num2);
      alert(result);
      break;
    case "*":
      multiplication(num1, num2);
      alert(result);
      break;
    case "/":
      division(num1, num2);
      alert(result);
      break;
    default: 
      alert("Неверная операция");
  }
}




