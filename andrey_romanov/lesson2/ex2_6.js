// exercise 2.6

function plusNum(a,b) {
    return a+b;
} 
function minusNum(a,b) {
    return a-b;
} 
function multipleNum(a,b) {
    return a*b;
} 
function divideNum(a,b) {
    return a/b;
}

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case "+" :
            return plusNum(arg1,arg2);
            break;
        case "-" :
            return minusNum(arg1,arg2);
            break;
        case "*" :
            return multipleNum(arg1,arg2);
            break;
        case "/" :
            return divideNum(arg1,arg2);
            break;
        default:
            return NaN;
    }
}

var num1 = 15,
    num2 = 21;


console.log(num1 + ' + ' + num2 + ' = ' + mathOperation(num1,num2,'+'));
console.log(num1 + ' - ' + num2 + ' = ' + mathOperation(num1,num2,'-'));
console.log(num1 + ' * ' + num2 + ' = ' + mathOperation(num1,num2,'*'));
console.log(num1 + ' / ' + num2 + ' = ' + mathOperation(num1,num2,'/'));