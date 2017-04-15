/**
 * Created by Костя on 15.04.2017.
 */
// Задание 4

var a = +prompt('Enter number from 0 to 15')
switch (a) {
    default:
        alert('you are wrong, pal');
        break;
    case 0:
        alert( '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15' );
        break;
    case 1:
        alert( '2,3,4,5,6,7,8,9,10,11,12,13,14,15' );
        break;
    case 2:
        alert( '3,4,5,6,7,8,9,10,11,12,13,14,15' );
        break;
    case 3:
        alert( '4,5,6,7,8,9,10,11,12,13,14,15' );
        break;
    case 4:
        alert( '5,6,7,8,9,10,11,12,13,14,15' );
        break;
    case 5:
        alert( '6,7,8,9,10,11,12,13,14,15' );
        break;
    case 6:
        alert( '7,8,9,10,11,12,13,14,15' );
        break;
    case 7:
        alert( '8,9,10,11,12,13,14,15' );
        break;
    case 8:
        alert( '9,10,11,12,13,14,15' );
        break;
    case 9:
        alert( '10,11,12,13,14,15' );
        break;
    case 10:
        alert( '11,12,13,14,15' );
        break;
    case 11:
        alert( '12,13,14,15' );
        break;
    case 12:
        alert( '13,14,15' );
        break;
    case 13:
        alert( '14,15' );
    case 14:
        alert( '15' );
        break;
    case 15:
        alert( 'max' );
        break;
}