// Ссылка на Repl.it: https://repl.it/HF5R/latest

/*
  С помощью цикла while вывести все простые числа в промежутке от 0 до 100
*/

var num = 1,
    string = "";

while (num <= 100) { // считаем от 1 до 100
  isprime(num); // вызываем функцию проверки числа на натуральное
  if (isprime(num) === true) {
    string += num + " "; // если число натуральное, добавляем его к строке
  }
  num++; // увеличиваем счетчик на 1
}

function isprime(num) {
  if (num == 1) { // 1 - не простое число
    return false;
  }
  // перебираем возможные делители от 2 до sqrt(num)
  var i = 2;
  while (i*i <= num) { 
    // если разделилось нацело, то составное
    if (num%i === 0) { 
      return false;
    }
    i++;
  }
  // если нет нетривиальных делителей, то простое
  return true;
}
  
alert(string);
