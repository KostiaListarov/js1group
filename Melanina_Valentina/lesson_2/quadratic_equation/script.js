/**
 * Created by valentinamelanina on 11.04.17.
 */
function quadratic_equation() {
    // Создаем переменные
    var coefficient_1, coefficient_2, coefficient_3, // — коэффициенты квадратного уравнения
        discriminant; // - дискриминант квадратного уравнения;

    // Добавляем значения
    coefficient_1 = prompt("Введите первый коэффициент");
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

