/**
 * Created by Костя on 15.04.2017.
 */
// Задание 5
var a = +prompt('Введите A');
var b = +prompt('Введите B');

function multiplication ( a,b) {
    return(a * b);
}
function division (a ,b ){
    return(a / b);
}
function addition(a,b){
    return(a + b);
}
function substraction(a,b){
    return(a - b);
}

alert('Multiplication ' + multiplication ( a,b));
alert('Division ' + division(a,b));
alert('Addition' + addition(a,b));
alert('Substraction' + substraction(a,b));
