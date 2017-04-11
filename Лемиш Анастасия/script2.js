
//№1
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 -префиксная форма сначала прибавляет к числу единичу
d = b++; alert(d);          // 1 - Постфиксная форма i++ отличается от префиксной ++i тем, что возвращает старое значение, бывшее до увеличения.
c = (2+ ++a); alert(c);  // 5 -   ????
d = (2+ b++); alert(d); // 4 -   2+2+1
alert(a);                        // 3
alert(b);                        // 3




//№2

var a = 2;
var x = 1 + (a *= 2); //5  1+(2*2)



// №3

var a=5,
	b=7;
if (a>=0 && b>=0){
	alert(a-b);
}
else if (a<0 && b<0) {
	alert(a*b);
}
else alert(a+b);


//№4

var a = 2,
	string = "";
  
switch (a){
	case 1:
  string = ("1 ");
  a++;
  case 2:
  string += ("2 ");
  a++;
  case 3:
  string += ("3 ");
  a++;
  case 4:
  string += ("4 ");
  a++;
  case 5:
  string += ("5 ");
  a++;
  case 6:
  string += ("6 ");
  a++;
  case 7:
  string += ("7 ");
  a++;
  case 8:
  string += ("8 ");
  a++;
  case 9:
  string += ("9 ");
  a++;
  case 10:
  string += ("10 ");
  a++;
  case 11:
  string += ("11 ");
  a++;
  case 12:
  string += ("12 ");
  a++;
  case 13:
  string += ("13 ");
  a++;
  case 14:
  string += ("14 ");
  a++;
  case 15:
  string += ("15 ");
  a++;
  alert(string);
  break;
  
}


//№5

var = res (20,5);
function res (a, b){
	if (a>b) {
		var sum = a+b; 
		return sum;
		alert(sum);
	}
	else if (a<b){
		var sum = a-b;
		return sum;
		alert(sum);
	}
	else{
		var sum = a*b;
		return sum;
		alert(sum);
	}
}


