// online версия https://jsfiddle.net/deller21/6afetsnj/1/

var mass = [],
  find = 3,
  count = 0;

// генерируем массив
for(var i = 0; i < 50; i++) {
  mass.push(Math.round(Math.random() * 100 + 1) + '');
}

for(var i = 0; i < 50; i++) {
  var pos = 0;

  //проверяем каждый символ в строке
  while (true) {
    var current_pos = mass[i].indexOf(find, pos);
    if (current_pos == -1) {
      break;
    }

    // увеличиваем счетчик
    count++;

    // ищем следующее совпадение символа начиная с прошлой позиции + 1
    pos = ++current_pos;
  }
}


// выводим результат
console.log(mass);
console.log(count);