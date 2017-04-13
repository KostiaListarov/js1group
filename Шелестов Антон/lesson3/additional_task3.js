// online версия https://jsfiddle.net/deller21/abg5zgL5/1/

var mass = [],
    result_mass = [],
    result_str;
    random_length = Math.round(Math.random() * 50 + 5),
    center = Math.ceil(random_length / 2);

// генерируем массив
for(var i = 0; i < random_length; i++) {
  mass.push(Math.round(Math.random() * 100 + 1) + '');
}

// проходим массив с обоих концов
for(var i = 0; i < center; i++) {
  // если центральный элемент 1 то записываем только его, не дублируя с ним же
  if(i == random_length - 1 - i) {
    result_mass.push(mass[i]);
  } else {
    result_mass.push(mass[i] + mass[random_length - 1 - i]);
  }
}

// объединяем массив в строку
result_str = result_mass.join('-');

// выводим результат
console.log(mass);
console.log(result_str);