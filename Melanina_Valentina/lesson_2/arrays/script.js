/**
 * Created by valentinamelanina on 13.04.17.
 */

// Глобальный массив для всех заданий
var array = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

//----------------------------------------------------------------------------------------------------------------------
//ЗАДАНИЕ 1

// Добавляем действие по клику
document.getElementById("show_array").addEventListener("click", array_function, false);

function array_function(e) {
    e.preventDefault();

    // Создаем доп.массивы:
    var new_array = [], k;

    // Вычисляем новое значение для массива new_array
    for (var i = 0; i < array.length; i++) { // Перебираем весь массив
        k = Math.pow(array[i],2); // Каждое значение возводим в квадрат
        new_array[i] = k; // Добавляем результат в новый массив
    }

    // Выводим значения
    alert("Новый массив: " + new_array.join(", "));

}

//----------------------------------------------------------------------------------------------------------------------
//ЗАДАНИЕ 2

// Добавляем действие по клику
document.getElementById("how_three_array").addEventListener("click", how_three_array, false);

function how_three_array(e) {
    e.preventDefault();

    // Создаем переменную для результата
    var count = 0;
    // Формируем массив
    var array_three = array.join(' ');

    // Вычисляем новое значение для массива new_array
    for (var i = 0; i < array_three.length; i++) { // Перебираем весь массив
        if (array_three[i] == 3){
            count++;
        }
    }

    // Выводим значения
    alert("Массив: " + array_three + '\n' +"содержит цифр \"3\": " + count + "шт.");

}

//----------------------------------------------------------------------------------------------------------------------
//ЗАДАНИЕ 3

// Добавляем действие по клику
document.getElementById("string_array").addEventListener("click", string_array, false);

function string_array(e) {
    e.preventDefault();

    // Создаем новый массив для того, чтобы старый не перезаписать
    var old_array = [];
    Array.prototype.push.apply(old_array, array); // Добавлем в новый массив все значения глобального

    // Добавим еще значений для разнообразия :)
    var text_array = old_array.push("one"); // добавим в конец нового массива текст
    var string_array_new = old_array.join('-'); // сделаем из него строку вида '16-25-34'


    // Выводим значения
    alert("Исходный массив: " + array + '\n' + "Обновленный массив: " + string_array_new);

}