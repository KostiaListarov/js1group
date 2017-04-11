<script type="text/javascript">
//Присвоить переменной а значение в промежутке [0..15]
var a=randNum(0, 15);
//С помощью оператора switch организовать вывод чисел от a до 15
switch (a) {
 	case 0:  
    ++a;
    alert(a);
  case 1:  
    ++a;
    alert(a);
  case 2:
    ++a;
    alert(a);
  case 3:
    ++a;
    alert(a);
  case 4:
    ++a;
    alert(a);
  case 5:
    ++a;
  	alert(a);
  case 6:
    ++a;
    alert(a);
  case 7:
    ++a;
    alert(a);
  case 8:
    ++a;
    alert(a);
  case 9:
    ++a;
    alert(a);
  case 10:
    ++a;
    alert(a);
  case 11:
    ++a;
    alert(a);
  case 12:
    ++a;
    alert(a);
  case 13:
    ++a;
    alert(a);
  case 14:
    ++a;
    alert(a);
  break;
}

function randNum(min, max) {
	    var rand = min - 0.5 + Math.random() * (max - min + 1)
	    rand = Math.round(rand);
	    return rand;
};
</script>