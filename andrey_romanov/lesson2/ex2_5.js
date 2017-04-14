// exercise 2.5

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

var num1 = 15,
    num2 = 21;

console.log(mathOperation(num1,num2,'+'));
console.log(mathOperation(num1,num2,'-'));
console.log(mathOperation(num1,num2,'*'));
console.log(mathOperation(num1,num2,'/'));