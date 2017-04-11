<script type="text/javascript">
//Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return;
var sumResult=sum(2, 3), 
		subResult=sub(10, 4);
		multResult=mult(6, 6);
    divResult=div(8, 2);
alert(sumResult); //5
alert(subResult); //6
alert(multResult); //36
alert(divResult); //4

function sum(a, b) {
  return a + b;
};
function sub(a, b) {
	return a - b;
};
function mult(a, b) {
	return a * b;
};
function div(a, b) {
	return a / b;
};
</script>