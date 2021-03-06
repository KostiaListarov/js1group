// Ссылка на Repl.it: https://repl.it/HFF0/latest

/*Задание №1: Почему код даёт именно такие результаты?*/

var a = 1, b = 1, c, d;

c = ++a; alert(c);           // 2 -- префиксная форма декремента, возвращает значение после прибавления 1
d = b++; alert(d);          // 1 -- постфиксная форма, возвращает старое значение, затем прибавляет 1
c = (2+ ++a); alert(c);  // 5 -- (2+ (2+1))
d = (2+ b++); alert(d); // 4 -- (2+ 2) затем прибавляет к b ещё 1
alert(a);                        // 3
alert(b);                        // 3 -- текущие значения переменных


/*№2: Чему будет равен x в примере ниже?*/

var a = 2;
var x = 1 + (a *= 2);

/*В соответствии с расстановкой приоритета операций,
сначала выполнится действие в скобках: (a *= 2) = 4;
затем сложение, затем операция присвоения.
Ответ: х == 5*/
