/**
 * Created by Костя on 23.08.2016.
 */
"use strict";
// Задание 6
var a = +prompt('Введите A');
var b = +prompt('Введите B');
var operation = prompt('Введите необходимую операцию "+", "-", "*", "/"');

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
function mathOperation(a,b,operation){
    switch (operation){
        case ( "*"):
            return  multiplication ( a,b);
        break;
        case ( "/"):
            return division(a,b);
        break;
        case ("+"):
            return addition(a,b);
        break;
        case ("-"):
            return substraction(a,b);
        break;
    }
}
alert ('A='+ a+ '\n B='+b+'\n Operation='+operation+ '\n result='+ mathOperation(a,b,operation));