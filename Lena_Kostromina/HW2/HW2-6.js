<script type="text/javascript">
//–еализовать функцию с трем€ параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 Ц значени€ аргументов, operation Ц строка с названием операции
var result=mathOperation();
alert(result); //568

function mathOperation(arg1, arg2, operation) {
arg1=243; //задаем значение аргумента 1
arg2=325; //задаем значение аргумента 2
operation=arg1+arg2; //выполн€ем операцию сложени€
return operation;
}
</script>