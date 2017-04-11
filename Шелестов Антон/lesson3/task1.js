// https://jsfiddle.net/44j28adj/

var value = 2,
  easy = false;

while(value <= 100) {
  easy = true;
  var max = Math.floor(Math.sqrt(value));
  for (var i = 2; i <= max; i++) {
    if (value % i == 0) {
      easy = false;
    }
  }
  if(easy) {
    console.log(value);
  }
  value++;
}
