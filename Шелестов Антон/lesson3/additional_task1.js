// online версия https://jsfiddle.net/7ztp3f50/1/

var mass_a = [],
    mass_b = [];

// генерируем массив
for(var i = 0; i < 10; i++) {
  mass_a.push(Math.round(Math.random() * 100 + 1));
}

// возводим каждое число в квадрат и записываем в новый массив
for(var i = 0; i < 10; i++) {
  mass_b.push(Math.pow(mass_a[i], 2));
}

// выводим результат
console.log(mass_a);
console.log(mass_b);