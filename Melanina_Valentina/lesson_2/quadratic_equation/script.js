/**
 * Created by valentinamelanina on 11.04.17.
 */

// Добавляем событие "click" на кнопку
document.getElementById("button").addEventListener("click", quadratic_equation, false);

// Создаем функцию расчета квадратного уравнения
function quadratic_equation(e) {
    e.preventDefault();

    // Получаем значения коэффициентов из input
    var coefficient_1 = document.getElementById("coefficient_1").value;
    var coefficient_2 = document.getElementById("coefficient_2").value;
    var coefficient_3 = document.getElementById("coefficient_3").value;

    // Вычисляем дискриминант
    var discriminant = coefficient_2 * coefficient_2 - 4 * coefficient_1 * coefficient_3;

    // Проверяем знак дискриминант
    if (discriminant > 0) { // Если дискриминант положительный, вычисление действительных корней и вывод их на экран
        var x1 = (-coefficient_2 + Math.sqrt(discriminant)) / (2 * coefficient_1);
        var x2 = (-coefficient_2 - Math.sqrt(discriminant)) / (2 * coefficient_1);

        // Выводим значения
        alert(coefficient_1 + "x^2 + " + coefficient_2 + "x + " + coefficient_3 + " = 0" + '\n'
                    + "Корни уравнения: " + '\n' + "x1 = " + x1 + '\t' + "x2 = " + x2);
    }

    else if (discriminant == 0) { // Если равен нулю
        //Вычисление комплексных корней
        x1 = -coefficient_2 / (2 * coefficient_1);

        // Выводим значения
        alert("Уравнение имеет единственный корень: " + x1);
    }

    else { // Если отрицательный
        alert("Уравнение корней не имеет");
    }

}