// https://jsfiddle.net/h77fzruL/

var i = 0;

do {
  if(!i) {
    console.log(i + ' - это ноль');
  } else {
    console.log(i + ' - ' + (i % 2 == 0 ? 'четное' : 'нечетное') + ' число');
  }
  i++;
} while(i <= 10);