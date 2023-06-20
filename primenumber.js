var readlinesync=require("readline-sync");
let num=readlinesync.question("enter the number : ");
num=parseInt(num);
let count = 0
for ( let i = 1; i <=num; i++) {
    if (num % i === 0) {
        count++
    }
}
if(count<=2){
    console.log(num,"is a prime");
}
else
console.log(num,"not a prime number");