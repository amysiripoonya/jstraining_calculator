const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('==========================')
console.log('Enter the operator: ');
const op = readline.prompt();
console.log('Enter the first number: ');
const n1 = parseInt(readline.prompt());
console.log('Enter the second number: ');
const n2 = parseInt(readline.prompt());

let ans;

switch (op) {
    case "+":
        ans = n1 + n2;
        break;
    case "-":
        ans = n1 - n2; 
        break;
    case "*":
        ans = n1 * n2;
        break;
    case "/":
        ans = n1 / n2;
        break;
}

console.log(ans);