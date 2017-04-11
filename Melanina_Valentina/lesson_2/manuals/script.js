/**
 * Created by valentinamelanina on 09.04.17.
 */
function show_work() {
    // Создаем переменные
    var a, b;

    // Добавляем значения
    a = 10;
    b = 20;

    // Проверяем условия и выводим результат
    if (a >= 0 && b >= 0) {
        alert(a - b);
    }
    else if (a < 0 && b < 0) {
        alert(a * b);
    }
    else {
        alert(a + b);
    }

}

function show_work_2() {
    // Создаем переменные
    var a = 3;

    // Проверяем условия и выводим результат
    // Проверяем условия и выводим результат
    switch (a) {
        case 0: alert(a++);
        case 1: alert(a++);
        case 2: alert(a++);
        case 3: alert(a++);
        case 4: alert(a++);
        case 5: alert(a++);
        case 6: alert(a++);
        case 7: alert(a++);
        case 8: alert(a++);
        case 9: alert(a++);
        case 10: alert(a++);
        case 11: alert(a++);
        case 12: alert(a++);
        case 13: alert(a++);
        case 14: alert(a++);
        case 15: alert(a);
            break;

        default:
            alert( 'Таких значений нет' );
    }

}