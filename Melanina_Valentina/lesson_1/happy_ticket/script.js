/**
 * Created by valentinamelanina on 06.04.17.
 */

document.getElementById("iframe").onload = function() {  // После того, как загрузится iframe

    /* -----------------------------------------------------------------------------------------------------------------
        ЗАДАНИЕ
     ----------------------------------------------------------------------------------------------------------------- */
    /* Написать программу, определяющую, является ли число билетика счастливым или нет. Для решения можно применять
     только операторов и стандартные методы взаимодействия пользователя с браузерами (alert, prompt и confirm).
     У пользователя есть 2 попытки правильно указать номер билета. */


    /* -----------------------------------------------------------------------------------------------------------------
        РЕШЕНИЕ
     ----------------------------------------------------------------------------------------------------------------- */
    var ticket; // Номер билета, который указал пользователь
    var ticket_length = 6; // Количество цифр в билете
    var n1, n2, n3, n4, n5, n6; // Каждая цифра в билете
    var happy_ticket; // Счастливый билетик

    var number_ticket_error; // Номер билета после проверки
    var ticket_new; // Повторный запрос номера билета
    var number_ticket_new; // Номер билета после повторной проверки
    var number_ticket; // Номер билета, в случае, если число указано верно


    // 1. Просим пользователя указать число
    ticket = prompt("Пожалуйста, введите любые 6 цифр", '');



    /* 2. Проверяем полученное значение, если пользователь:
       - ничего не ввел;
       - нажал "Отменить";
       - ввел не число;
       - указал большее/меньшее количество символов (здесь не смогла обойтись без свойства length), чем
        заданное, максимальное количество цифр в билете */

        number_ticket_error = (+ticket == false || +ticket !== +ticket || ticket_length !== ticket.length) ?
                // Просим повторно ввести число, проверям значение, при повторной ошибке, завершаем лотерею
                (ticket_new = prompt("Будьте внимательнее, введите любые 6 цифр"),
                    (number_ticket_new = (+ticket_new == false ||
                                          +ticket_new !== +ticket_new ||
                                          ticket_new.length !== ticket_length) ?
                                          happy_ticket = false :
                                          number_ticket = ticket_new)) :
            (number_ticket = ticket);




    // 3. Разбиваем число на отдельные числа, высчитываем сумму левой и правой части и узнаем,
    // счастливый ли билетик (сравнивая полученные значения)

    n1 = number_ticket % 10;
    n2 = (number_ticket % 100 - n1) / 10;
    n3 = (number_ticket % 1000 - n2 * 10 - n1) / 100;
    n4 = (number_ticket % 10000 - n3 * 100 - n2 * 10 - n1) / 1000;
    n5 = (number_ticket % 100000 - n4 * 1000 - n3 * 100 - n2 * 10 - n1) / 10000;
    n6 = (number_ticket % 1000000 - n5 * 10000 - n4 * 1000 - n3 * 100 - n2 * 10 - n1) / 100000;


    var ticket_left = n1 + n2 + n3;
    var ticket_right = n4 + n5 + n6;
    happy_ticket = ticket_right == ticket_left ? "Поздравляем! У вас счастливый билетик." :
                                                 "Увы, сегодня не ваш день :(";

    alert(happy_ticket);




};