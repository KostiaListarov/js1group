<script type="text/javascript">
//Объявить две целочисленные переменные a и b и задать им произвольные начальные значения
var a=+prompt('Введите целое число'),
	b=+prompt('Введите целое число');
 //Если a и b положительные, вывести их разность
if (a&b>0) {
  a -= b;
  alert(a);
};   
//Если а и b отрицательные, вывести их произведение
if (a&b<0) {
  a *= b;
  alert(a);
};
//Если а и b разных знаков, вывести их сумму
if (a<0 && b>0 || a>0 && b<0) {
  a += b;
  alert(a);
};
</script>