 function sqr_2() {
            var a = document.form.a.value;
            var b = document.form.b.value;
            var c = document.form.c.value;
            var discriminant = b * b - 4 * a * c;
            var root_1 = (-b + Math.sqrt(discriminant)) / (2 * a)
            var root_2 = (-b - Math.sqrt(discriminant)) / (2 * a)
            var root_3 = (-b / (2 * a))
            var x1 = (document.form.x1.value)
            var x2 = (document.form.x2.value)
           
            if(discriminant<0){
                x1='Решения нет';
                x2='Решения нет';
            }
            else {
                x1 = (root_1);
                x2 = (root_2);
            }
                 if (root_1==root_2){
            x2 = 'всего один корень'
        }
            document.form.x1.value = x1;
            document.form.x2.value = x2;
       }

        // Проверка на счастье
        function happy(){
 var happy= confirm('Ты счастлив?')
 if(happy==true){
 alert('Поздравляю тебя)')
 }
 if (happy==false){
 alert('Заведи больше кошек')
 }
 }
 // Последовательность Фибоначи
 function fibinacci_function(){

 function fibonacci(n, prev1, prev2){
    var current = prev1 + prev2;
    var fibonacci_string = current + " ";
    if(n > 1)
        fibonacci_string += fibonacci(n - 1, current, prev1);
      return fibonacci_string;
}
alert(fibonacci(15, 1, 0));}
// Методичка к 3ему уроку
// №1
function cisco(){
    var n=100;
    var i=0;
    while (i<=n)
        console.log(i++);
}
// №2
function cisco_2(){
var n = 10; 
var i = 0; 
do{ 
    if (i == 0) {
        console.log(i + '-это ноль')
        i++
    }
     else if(i&1){
        console.log(i + '-это нечетное число')
        i++
    }
    else{
        console.log(i + '-это четное число')
        i++
    }

} while (i <= n);
}
// №3
function cisco_3(){
    for (var count = 0; count<=9; count++) {
        console.log(count);
    }
}
// №4
function cisco_4(){
for(var i = 1; i <= 20; i++) {
  var x = '';
  for(var j = 0; j < i; j++) {
    x += 'x';
  }
  console.log(x);
}
}

// Дополнительные задания
//  создать массив из 10 разных чисел. Создать переменную, в которой будет находиться массив с квадратом этих чисел
function array(){
    var number_array=[12,6,4,36,5,9,10,42,49,2];
    var number_array_quadro=[];
    for(var i =0; i<number_array.length;i++){
        if(number_array[i]){
            number_array_quadro.push(number_array[i]*number_array[i])
        }
    }
    console.log(number_array_quadro);
}
// дан массив с числами. Подсчитайте количество цифр 3 в данном массиве. Пример: [13, 35, 3, 443] - в массиве 4 цифры 3.
function array_2(){
    var array_task=[26,86,259,156];

    console.log(array_task.length);
}
//  дан массив ['1', '2', '3', '4', '5', '6']. Сделайте из него строку '16-25-34'. Массив может быть любым.
function array_3(){
    var array_task_3 = ['1','2','3','4','5','6'];
    alert(array_task_3[0] + array_task_3[5] + '-' + array_task_3[1] + array_task_3[4] + '-' + array_task_3[2] + array_task_3[3]);
}
// 