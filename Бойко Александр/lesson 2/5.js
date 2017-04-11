var a = +prompt('Введите число 1'),
    b = +prompt('Введите число 2'),
    o = prompt('Введите операцию'),
    result;

switch (operation) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    default:
        result = 'не верно';
        break;
}

alert(+result);
