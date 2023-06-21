function addition(a, b) {
    return a + b;
}
function subtraction(a, b){
    return a - b;
}
function multiplication(a, b){
    return a * b;
}
function divition(a, b){
    return a / b;
}
var readlinesync=require('readline-sync');

console.log('1-addition  2-Subtraction 3-multiplication 4-division');

let operator=readlinesync.question('Select operator : ');
operator=parseInt(operator);

if (operator>4 || operator==0){
    console.log('Select a valid option');

}else{

let num1=readlinesync.question('Enter num1 : ');
num1=parseInt(num1);

let num2=readlinesync.question('Enter num2 : ');
num2=parseInt(num2);
let result;

switch(operator){
    case 1:
        result= addition(num1,num2);
        break;
    case 2:
        result=subtraction(num1,num2);
        break;
    case 3:
        result= multiplication(num1,num2);
        break;
    case 4:
        result=divition(num1,num2);
        break;
    default:
        console.log('invalid entry');
}console.log(result);

}
