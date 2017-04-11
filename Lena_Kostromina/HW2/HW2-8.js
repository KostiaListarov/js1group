<script type="text/javascript">
//— помощью рекурсии организовать функцию возведени€ числа в степень. ‘ормат: function power(val, pow), где val Ц заданное число, pow Ц степень.

function power(val, pow) {
  if (pow != 1) { 
    return val * power(val, --pow); // если степень не равна 1, то power(val, --pow)
  } else {
    return val;
  }
}
alert( power(2, 5) ); // 32
</script>