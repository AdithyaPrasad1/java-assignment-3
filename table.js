var readlinesync = require('readline-sync');
let num = readlinesync.question('Enter the number : ');
num = parseInt(num);
for (var i=1;i<=10;i++){
    console.log(i," x ",num," = ",i*num);
}