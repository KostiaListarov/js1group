/**
 * Created by valentinamelanina on 13.04.17.
 */

// Добавляем действие по клику
document.getElementById("show_array").addEventListener("click", array_function, false);

function array_function(e) {
    e.preventDefault();

    // Создаем массив с 10 разными числами:
    var array = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
    var new_array = [], k,
    array_result_block = document.getElementsByClassName('array-result');


    // Вычисляем новое значение для массива new_array
    for (var i = 0; i < array.length; i++) { // Перебираем весь массив
        k = Math.pow(array[i],2); // Каждое значение возводим в квадрат
        new_array[i] = k; // Добавляем результат в новый массив
    }

    // Выводим значения
    alert("Новый массив: " + new_array.join(", "));

}

